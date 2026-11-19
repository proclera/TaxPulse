import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

test('all locally referenced images exist', () => {
  const walk = (dir: string): string[] => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
  const missing = new Set<string>();
  for (const file of walk('src')) {
    if (!/\.(ts|tsx|css)$/.test(file)) continue;
    const contents = readFileSync(file, 'utf8');
    for (const match of contents.matchAll(/\/taxpulse-assets\/[^'"`\s)]+\.(?:png|jpe?g|webp|svg)/gi)) {
      if (!existsSync(join('public', match[0]))) missing.add(match[0]);
    }
  }
  assert.deepEqual([...missing], []);
});
