import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { ARTICLES } from '../data/articles.ts';
import { filterArticles, getArticleArchives, getRelatedArticles, paginateArticles } from './articles.ts';

describe('articles utility', () => {
  it('contains 29 genuine tax articles and excludes compromised posts', () => {
    assert.equal(ARTICLES.length, 29);
    const slugs = new Set(ARTICLES.map((a) => a.slug));
    assert.equal(slugs.has('coronavirus-disease-2019'), false);
    assert.equal(
      slugs.has('test-post-99693b1c-9e6e-4447-a471-57277fcf5d3f-b608e826e6e39907'),
      false,
    );
  });

  it('has zero raw Visual Composer shortcodes inside any cleaned article body', () => {
    for (const article of ARTICLES) {
      assert.equal(/\[\/?vc_/i.test(article.contentHtml), false, `Raw vc shortcode in ${article.slug}`);
    }
  });

  it('filters by category, archive month, and search query', () => {
    const intl = filterArticles(ARTICLES, { categorySlug: 'international-taxation' });
    assert.equal(intl.length, 6);

    const sales = filterArticles(ARTICLES, { categorySlug: 'sales-tax' });
    assert.equal(sales.length, 7);

    const dec2023 = filterArticles(ARTICLES, { archiveKey: '2023-12' });
    assert.equal(dec2023.length, 1);

    const searched = filterArticles(ARTICLES, { query: 'Haji Razzaq' });
    assert.ok(searched.length >= 1);
  });

  it('paginates cleanly and builds descending monthly archive buckets', () => {
    const p1 = paginateArticles(ARTICLES, 1, 10);
    assert.equal(p1.totalPages, 3);
    assert.equal(p1.items.length, 10);

    const p3 = paginateArticles(ARTICLES, 3, 10);
    assert.equal(p3.items.length, 9);

    const archives = getArticleArchives(ARTICLES);
    assert.equal(archives[0]?.key, '2023-12');
    assert.equal(archives[archives.length - 1]?.key, '2023-07');

    const related = getRelatedArticles(ARTICLES, ARTICLES[0], 3);
    assert.equal(related.length, 3);
    assert.ok(related.every((r) => r.slug !== ARTICLES[0].slug));
  });
});
