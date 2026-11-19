import React, { useMemo } from 'react';
import { ArrowLeft, Calendar, FolderOpen, Tag, User } from 'lucide-react';
import { ARTICLES, type TaxArticle } from '../data/articles.ts';
import { getRelatedArticles } from '../utils/articles.ts';
import { FreeAdviceCtaBand } from '../components/FreeAdviceCtaBand.tsx';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink, useRouter } from '../components/RouterContext.tsx';

interface ArticleDetailPageProps {
  article: TaxArticle;
}

export function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const { navigate } = useRouter();
  const related = useMemo(() => getRelatedArticles(ARTICLES, article, 3), [article]);
  const primaryCategory = article.categories[0];

  const handleProseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (href.startsWith('/') && !href.startsWith('/taxpulse-assets/')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <>
      <PageBanner
        title={article.title}
        crumbs={[
          { label: 'Articles', to: '/articles/' },
          ...(primaryCategory
            ? [{ label: primaryCategory.name, to: `/${primaryCategory.slug}/` }]
            : []),
          { label: article.title },
        ]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <article className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-10 lg:col-span-8">
              <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[var(--color-border-subtle)] pb-4 text-xs font-semibold text-[var(--color-muted-foreground)]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{article.displayDate}</span>
                </span>
                <AppLink
                  to="/amjad-javed-hashmi-tax-consultant/"
                  className="inline-flex items-center gap-1.5 text-[var(--color-primary)] hover:underline"
                >
                  <User className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{article.authorDisplay} ({article.author})</span>
                </AppLink>
                <span className="inline-flex flex-wrap items-center gap-1.5">
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

              {article.featuredImage ? (
                <div className="mb-8 overflow-hidden rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-muted)]">
                  <img
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    className="max-h-[400px] w-full object-contain bg-white"
                  />
                </div>
              ) : null}

              <div
                onClick={handleProseClick}
                className="article-prose"
                dangerouslySetInnerHTML={{
                  __html: article.contentHtml
                    .replace(/<strong>Get Free Tax Advice<\/strong>/g, '<strong>Book a Formal Case Assessment</strong>')
                    .replace(/>Get Free Advice!<\/a>/g, '>Request Case Assessment</a>'),
                }}
              />

              {article.tags.length > 0 ? (
                <div className="mt-10 border-t border-[var(--color-border-subtle)] pt-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                    <Tag className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                    <span className="font-bold">Topics:</span>
                    <span className="text-[var(--color-foreground)]">
                      {article.tags.join(', ')}
                    </span>
                  </div>
                </div>
              ) : null}

              <div className="mt-8 border-t border-[var(--color-border-subtle)] pt-6">
                <AppLink
                  to="/articles/"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-hover)] hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Back to all Articles</span>
                </AppLink>
              </div>
            </article>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <h2 className="border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)]">
                  Related Articles
                </h2>
                <ul className="mt-4 divide-y divide-[var(--color-border-subtle)]">
                  {related.map((relPost) => (
                    <li key={relPost.id} className="py-3.5 first:pt-0 last:pb-0">
                      <AppLink
                        to={`/${relPost.slug}/`}
                        className="block font-display text-lg font-semibold leading-snug text-[var(--color-primary)] hover:underline"
                      >
                        {relPost.title}
                      </AppLink>
                      <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                        {relPost.displayDate}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FreeAdviceCtaBand />
    </>
  );
}
