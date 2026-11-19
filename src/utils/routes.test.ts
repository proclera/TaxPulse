import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getRouteSeoMeta, isOurFirmActive, matchRoute, normalizeRoutePath } from './routes.ts';

describe('routes utility', () => {
  it('normalizes trailing slashes and legacy home/redirect aliases', () => {
    assert.equal(normalizeRoutePath('/'), '/');
    assert.equal(normalizeRoutePath('/home/'), '/');
    assert.equal(normalizeRoutePath('/icma-event/'), '/');
    assert.equal(normalizeRoutePath('/about-us'), '/about-us/');
    assert.equal(normalizeRoutePath('/our-team/?utm=1#top'), '/our-team/');
  });

  it('matches all core firm, practice, gallery, category, and article routes', () => {
    assert.equal(matchRoute('/').kind, 'home');
    assert.equal(matchRoute('/about-us/').kind, 'about');
    assert.equal(matchRoute('/our-team/').kind, 'team');
    assert.equal(matchRoute('/lahore-office-of-taxpulse/').kind, 'lahore-team');
    assert.equal(matchRoute('/amjad-javed-hashmi-tax-consultant/').kind, 'amjad-profile');
    assert.equal(matchRoute('/our-clients/').kind, 'clients');
    assert.equal(matchRoute('/reported-cases/').kind, 'cases');
    assert.equal(matchRoute('/practice-areas/').kind, 'practice-areas');
    assert.equal(matchRoute('/gallery/').kind, 'gallery');
    assert.equal(matchRoute('/contact-us/').kind, 'contact');

    const paginated = matchRoute('/articles/page/3/');
    assert.equal(paginated.kind, 'articles');
    if (paginated.kind === 'articles') {
      assert.equal(paginated.page, 3);
    }

    const intl = matchRoute('/international-taxation/');
    assert.equal(intl.kind, 'category');

    const album = matchRoute('/lecture-fbr-multan-2025/');
    assert.equal(album.kind, 'gallery-album');

    const article = matchRoute('/finance-act-2023-analysis-in-legal-perspective/');
    assert.equal(article.kind, 'article');
  });

  it('excludes compromised / unrelated live WP posts from public routes', () => {
    assert.equal(matchRoute('/coronavirus-disease-2019/').kind, 'not-found');
    assert.equal(
      matchRoute('/test-post-99693b1c-9e6e-4447-a471-57277fcf5d3f-b608e826e6e39907/').kind,
      'not-found',
    );
  });

  it('identifies Our Firm dropdown active routes and provides SEO metadata', () => {
    assert.equal(isOurFirmActive(matchRoute('/our-team/')), true);
    assert.equal(isOurFirmActive(matchRoute('/reported-cases/')), true);
    assert.equal(isOurFirmActive(matchRoute('/practice-areas/')), false);
    const seo = getRouteSeoMeta(matchRoute('/'));
    assert.match(seo.title, /Leading Tax Consultants in Pakistan/i);
  });
});
