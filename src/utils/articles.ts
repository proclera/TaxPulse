import type { TaxArticle } from '../data/articles.ts';

export interface ArticleFilterOptions {
  categorySlug?: 'all' | 'income-tax' | 'international-taxation' | 'sales-tax';
  archiveKey?: string;
  query?: string;
}

export interface ArticleArchiveBucket {
  key: string;
  label: string;
  count: number;
}

export function filterArticles(articles: TaxArticle[], options: ArticleFilterOptions): TaxArticle[] {
  const category = options.categorySlug || 'all';
  const archive = (options.archiveKey || '').trim();
  const q = (options.query || '').trim().toLowerCase();

  return articles.filter((article) => {
    if (category !== 'all') {
      const hasCat = article.categories.some((c) => c.slug === category);
      if (!hasCat) return false;
    }
    if (archive && article.archiveKey !== archive) {
      return false;
    }
    if (q) {
      const haystack = `${article.title} ${article.excerpt} ${article.tags.join(' ')} ${article.categories.map((c) => c.name).join(' ')}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export function paginateArticles<T>(
  items: T[],
  requestedPage: number,
  perPage = 10,
): {
  items: T[];
  page: number;
  totalPages: number;
  totalItems: number;
} {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const safePage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: safePage,
    totalPages,
    totalItems,
  };
}

export function getArticleArchives(articles: TaxArticle[]): ArticleArchiveBucket[] {
  const counts = new Map<string, { label: string; count: number }>();
  for (const article of articles) {
    const existing = counts.get(article.archiveKey);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(article.archiveKey, { label: article.archiveLabel, count: 1 });
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, val]) => ({ key, label: val.label, count: val.count }));
}

export function getRelatedArticles(
  articles: TaxArticle[],
  current: TaxArticle,
  limit = 3,
): TaxArticle[] {
  const catSlugs = new Set(current.categories.map((c) => c.slug));
  return articles
    .filter((a) => a.slug !== current.slug)
    .sort((a, b) => {
      const aScore = a.categories.filter((c) => catSlugs.has(c.slug)).length;
      const bScore = b.categories.filter((c) => catSlugs.has(c.slug)).length;
      if (bScore !== aScore) return bScore - aScore;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}
