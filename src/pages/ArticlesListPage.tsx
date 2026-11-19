import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Calendar, ExternalLink, FolderOpen, Search, User } from 'lucide-react';
import { ARTICLES, ARTICLE_CATEGORIES } from '../data/articles.ts';
import { INTERNATIONAL_TAXATION_PAGE_CONTENT } from '../data/firm.ts';
import { filterArticles, getArticleArchives, paginateArticles } from '../utils/articles.ts';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink, useRouter } from '../components/RouterContext.tsx';

interface ArticlesListPageProps {
  categorySlug?: 'income-tax' | 'sales-tax' | 'international-taxation';
  pageNumber?: number;
}

export function ArticlesListPage({ categorySlug, pageNumber = 1 }: ArticlesListPageProps) {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const [archiveKey, setArchiveKey] = useState('');

  useEffect(() => {
    setArchiveKey('');
  }, [categorySlug]);

  const activeCategory = categorySlug
    ? ARTICLE_CATEGORIES.find((c) => c.slug === categorySlug)
    : undefined;

  const isInternational = categorySlug === 'international-taxation';
  const archives = useMemo(() => getArticleArchives(ARTICLES), []);

  const filtered = useMemo(
    () =>
      filterArticles(ARTICLES, {
        categorySlug: categorySlug || 'all',
        archiveKey,
        query,
      }),
    [categorySlug, archiveKey, query],
  );

  const isFiltering = Boolean(query.trim() || archiveKey);
  const paginated = useMemo(
    () => paginateArticles(filtered, isFiltering ? 1 : pageNumber, 10),
    [filtered, isFiltering, pageNumber],
  );

  const baseRoute = categorySlug ? `/${categorySlug}/` : '/articles/';
  const recentPosts = useMemo(() => ARTICLES.slice(0, 5), []);

  const pageTitle = activeCategory ? activeCategory.name : 'Articles';
  const bannerSubtitle = isInternational
    ? INTERNATIONAL_TAXATION_PAGE_CONTENT.archiveIntro
    : activeCategory
      ? `Articles in Category '${activeCategory.name}'`
      : 'Insightful articles on Income Tax, Sales Tax, Customs Duties, Excise Tax and International Taxation by Mr. Amjad Javed Hashmi.';

  return (
    <>
      <PageBanner
        title={pageTitle}
        subtitle={bannerSubtitle}
        crumbs={
          activeCategory
            ? [
                { label: 'Articles', to: '/articles/' },
                { label: `Category '${activeCategory.name}'` },
              ]
            : [{ label: 'Articles' }]
        }
      />

      {/* Recover verbatim WP Page 55 International Taxation Context above International Taxation articles */}
      {isInternational ? (
        <section
          aria-labelledby="intl-overview-heading"
          className="border-b border-[var(--color-border)] bg-[var(--color-surface-warm)]"
        >
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-14">
            <div className="space-y-4 lg:col-span-8">
              <h2
                id="intl-overview-heading"
                className="font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl"
              >
                Cross-Border &amp; International Tax Practice
              </h2>
              <p className="max-w-[68ch] text-base leading-relaxed text-[var(--color-foreground)]">
                {INTERNATIONAL_TAXATION_PAGE_CONTENT.leadSentence}
              </p>

              <blockquote className="max-w-[65ch] rounded-md border border-[var(--color-border)] bg-white p-5">
                <p className="text-xs font-bold text-[var(--color-muted-foreground)]">
                  {INTERNATIONAL_TAXATION_PAGE_CONTENT.primerAttribution}
                </p>
                <p className="mt-2 font-display text-lg italic leading-relaxed text-[var(--color-foreground)]">
                  {INTERNATIONAL_TAXATION_PAGE_CONTENT.primerQuote}
                </p>
                <footer className="mt-3 flex flex-wrap gap-4 text-xs font-bold">
                  <a
                    href={INTERNATIONAL_TAXATION_PAGE_CONTENT.primerBookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--color-secondary)] underline"
                  >
                    <span>International Tax Primer</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href={INTERNATIONAL_TAXATION_PAGE_CONTENT.wikipediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--color-secondary)] underline"
                  >
                    <span>International taxation reference</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </footer>
              </blockquote>

              <div className="max-w-[68ch] space-y-3 text-base leading-relaxed text-[var(--color-foreground)]">
                {INTERNATIONAL_TAXATION_PAGE_CONTENT.wpPageParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-white">
                <img
                  src={INTERNATIONAL_TAXATION_PAGE_CONTENT.heroImage}
                  alt="International Taxation advisory and CPEC cross-border counsel"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <AppLink
                    to="/contact-us/"
                    className="tx-transition flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-md bg-[var(--color-accent)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-accent-hover)]"
                  >
                    <span>Request Case Assessment</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Category Links & Search Bar */}
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[var(--color-border)] pb-6 lg:flex-row lg:items-center">
            <nav aria-label="Article categories" className="flex flex-wrap gap-2">
              <AppLink
                to="/articles/"
                aria-current={!categorySlug ? 'page' : undefined}
                className={`tx-transition inline-flex min-h-[44px] items-center rounded-md border px-4 py-2 text-sm font-bold ${
                  !categorySlug
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                }`}
              >
                All Articles ({ARTICLES.length})
              </AppLink>
              {ARTICLE_CATEGORIES.map((cat) => (
                <AppLink
                  key={cat.slug}
                  to={`/${cat.slug}/`}
                  aria-current={categorySlug === cat.slug ? 'page' : undefined}
                  className={`tx-transition inline-flex min-h-[44px] items-center rounded-md border px-4 py-2 text-sm font-bold ${
                    categorySlug === cat.slug
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                      : 'border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                  }`}
                >
                  {cat.name}
                </AppLink>
              ))}
            </nav>

            <div className="relative w-full lg:w-80">
              <label htmlFor="articles-search" className="sr-only">
                Search articles
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted-foreground)]"
                aria-hidden="true"
              />
              <input
                id="articles-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tax articles, sections, citations..."
                className="min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white py-2 pl-10 pr-3 text-sm text-[var(--color-foreground)] placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            {/* Article Cards Column */}
            <div className="space-y-6 lg:col-span-8">
              {archiveKey ? (
                <div className="flex items-center justify-between rounded-md border border-[var(--color-border)] bg-[var(--color-surface-warm)] px-4 py-3 text-sm">
                  <span>
                    Filtering by archive:{' '}
                    <strong>{archives.find((a) => a.key === archiveKey)?.label || archiveKey}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setArchiveKey('')}
                    className="cursor-pointer font-bold text-[var(--color-primary)] underline"
                  >
                    Clear filter
                  </button>
                </div>
              ) : null}

              {paginated.items.length === 0 ? (
                <div className="rounded-lg border border-[var(--color-border)] bg-white p-8 text-center">
                  <p className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                    No matching articles found
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                    Try adjusting your search keywords or clearing active filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setArchiveKey('');
                    }}
                    className="mt-4 inline-flex min-h-[44px] cursor-pointer items-center rounded-md bg-[var(--color-primary)] px-5 py-2 text-sm font-bold text-white"
                  >
                    Show all articles
                  </button>
                </div>
              ) : (
                paginated.items.map((article) => (
                  <article
                    key={article.id}
                    className="tx-transition rounded-lg border border-[var(--color-border)] bg-white p-6 hover:border-[var(--color-primary)] sm:p-7"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      {article.featuredImage ? (
                        <AppLink
                          to={`/${article.slug}/`}
                          className="block h-36 w-full shrink-0 overflow-hidden rounded border border-[var(--color-border-subtle)] bg-[var(--color-muted)] sm:h-36 sm:w-36"
                        >
                          <img
                            src={article.featuredImage}
                            alt={article.featuredImageAlt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </AppLink>
                      ) : null}

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-[var(--color-muted-foreground)]">
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                              <span>{article.displayDate}</span>
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <User className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                              <span>{article.author}</span>
                            </span>
                            <span className="inline-flex flex-wrap items-center gap-2">
                              <FolderOpen className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                              {article.categories.map((cat, idx) => (
                                <span key={cat.slug}>
                                  <AppLink
                                    to={`/${cat.slug}/`}
                                    className="text-[var(--color-secondary)] hover:underline"
                                  >
                                    {cat.name}
                                  </AppLink>
                                  {idx < article.categories.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </span>
                          </div>

                          <h3 className="font-display text-2xl font-semibold leading-snug text-[var(--color-primary)]">
                            <AppLink to={`/${article.slug}/`} className="hover:underline">
                              {article.title}
                            </AppLink>
                          </h3>

                          <p className="mt-2.5 max-w-[65ch] text-base leading-relaxed text-[var(--color-foreground)]">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="mt-4">
                          <AppLink
                            to={`/${article.slug}/`}
                            className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] underline-offset-4 hover:text-[var(--color-accent-hover)] hover:underline"
                          >
                            <span>Continue reading</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </AppLink>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}

              {/* Pagination */}
              {!isFiltering && paginated.totalPages > 1 ? (
                <nav
                  aria-label="Articles pagination"
                  className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6"
                >
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Page {paginated.page} of {paginated.totalPages} ({paginated.totalItems} genuine articles)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: paginated.totalPages }, (_, i) => i + 1).map((pg) => {
                      const target = pg === 1 ? baseRoute : `${baseRoute}page/${pg}/`;
                      return (
                        <button
                          key={pg}
                          type="button"
                          onClick={() => navigate(target)}
                          aria-current={pg === paginated.page ? 'page' : undefined}
                          className={`tx-transition min-h-[44px] min-w-[44px] cursor-pointer rounded border px-3.5 text-sm font-bold ${
                            pg === paginated.page
                              ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                              : 'border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                          }`}
                        >
                          {pg}
                        </button>
                      );
                    })}
                  </div>
                </nav>
              ) : null}
            </div>

            {/* Editorial Sidebar: Recent Posts, Archives, Categories */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <h2 className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)]">
                  <BookOpen className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Recent Posts</span>
                </h2>
                <ul className="mt-4 divide-y divide-[var(--color-border-subtle)]">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="py-3 first:pt-0 last:pb-0">
                      <AppLink
                        to={`/${post.slug}/`}
                        className="block text-sm font-bold leading-snug text-[var(--color-primary)] hover:text-[var(--color-accent-hover)] hover:underline"
                      >
                        {post.title}
                      </AppLink>
                      <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                        {post.displayDate}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <h2 className="border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)]">
                  Archives
                </h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {archives.map((bucket) => (
                    <li key={bucket.key}>
                      <button
                        type="button"
                        onClick={() =>
                          setArchiveKey((prev) => (prev === bucket.key ? '' : bucket.key))
                        }
                        className={`flex w-full cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-left ${
                          archiveKey === bucket.key
                            ? 'bg-[var(--color-primary)] font-bold text-white'
                            : 'text-[var(--color-foreground)] hover:bg-[var(--color-muted)]'
                        }`}
                      >
                        <span>{bucket.label}</span>
                        <span>({bucket.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <h2 className="border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)]">
                  Categories
                </h2>
                <ul className="mt-4 space-y-2 text-sm font-bold">
                  {ARTICLE_CATEGORIES.map((cat) => (
                    <li key={cat.slug}>
                      <AppLink
                        to={`/${cat.slug}/`}
                        className="block rounded px-2.5 py-1.5 text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                      >
                        {cat.name}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
