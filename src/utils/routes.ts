import { ARTICLES, ARTICLE_CATEGORIES, type TaxArticle } from '../data/articles.ts';
import { CLIENTS_META } from '../data/clients.ts';
import { REPORTED_CASES_META } from '../data/cases.ts';
import {
  ABOUT_US_CONTENT,
  CONTACT_PAGE_CONTENT,
  HOME_CONTENT,
  INTERNATIONAL_TAXATION_PAGE_CONTENT,
} from '../data/firm.ts';
import { GALLERY_ALBUMS, GALLERY_META, type GalleryAlbum } from '../data/gallery.ts';
import { PRACTICE_AREAS_META } from '../data/practiceAreas.ts';
import { AMJAD_PROFILE, TEAM_META } from '../data/team.ts';

export type MatchedRoute =
  | { kind: 'home'; canonicalPath: '/' }
  | { kind: 'about'; canonicalPath: '/about-us/' }
  | { kind: 'team'; canonicalPath: '/our-team/' }
  | { kind: 'lahore-team'; canonicalPath: '/lahore-office-of-taxpulse/' }
  | { kind: 'amjad-profile'; canonicalPath: '/amjad-javed-hashmi-tax-consultant/' }
  | { kind: 'clients'; canonicalPath: '/our-clients/' }
  | { kind: 'cases'; canonicalPath: '/reported-cases/' }
  | { kind: 'practice-areas'; canonicalPath: '/practice-areas/' }
  | { kind: 'articles'; canonicalPath: string; page: number }
  | {
      kind: 'category';
      canonicalPath: string;
      categorySlug: 'income-tax' | 'sales-tax' | 'international-taxation';
      page: number;
    }
  | { kind: 'article'; canonicalPath: string; article: TaxArticle }
  | { kind: 'gallery'; canonicalPath: '/gallery/' }
  | { kind: 'gallery-album'; canonicalPath: string; album: GalleryAlbum }
  | { kind: 'contact'; canonicalPath: '/contact-us/' }
  | { kind: 'not-found'; canonicalPath: string };

export function normalizeRoutePath(rawPathname: string): string {
  const withoutHash = rawPathname.split('#')[0] || '/';
  const withoutQuery = withoutHash.split('?')[0] || '/';
  const collapsed = withoutQuery.replace(/\/+/g, '/');
  if (collapsed === '' || collapsed === '/' || collapsed === '/home' || collapsed === '/home/' || collapsed === '/icma-event' || collapsed === '/icma-event/') {
    return '/';
  }
  const withLeading = collapsed.startsWith('/') ? collapsed : `/${collapsed}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export function matchRoute(rawPathname: string): MatchedRoute {
  const path = normalizeRoutePath(rawPathname);

  if (path === '/') return { kind: 'home', canonicalPath: '/' };
  if (path === '/about-us/') return { kind: 'about', canonicalPath: '/about-us/' };
  if (path === '/our-team/') return { kind: 'team', canonicalPath: '/our-team/' };
  if (path === '/lahore-office-of-taxpulse/') {
    return { kind: 'lahore-team', canonicalPath: '/lahore-office-of-taxpulse/' };
  }
  if (path === '/amjad-javed-hashmi-tax-consultant/') {
    return { kind: 'amjad-profile', canonicalPath: '/amjad-javed-hashmi-tax-consultant/' };
  }
  if (path === '/our-clients/') return { kind: 'clients', canonicalPath: '/our-clients/' };
  if (path === '/reported-cases/') return { kind: 'cases', canonicalPath: '/reported-cases/' };
  if (path === '/practice-areas/') return { kind: 'practice-areas', canonicalPath: '/practice-areas/' };
  if (path === '/gallery/') return { kind: 'gallery', canonicalPath: '/gallery/' };
  if (path === '/contact-us/') return { kind: 'contact', canonicalPath: '/contact-us/' };

  if (path === '/articles/') {
    return { kind: 'articles', canonicalPath: '/articles/', page: 1 };
  }
  const articlesPageMatch = /^\/articles\/page\/(\d+)\/$/.exec(path);
  if (articlesPageMatch) {
    const page = Math.max(1, Number(articlesPageMatch[1]));
    return {
      kind: 'articles',
      canonicalPath: page === 1 ? '/articles/' : `/articles/page/${page}/`,
      page,
    };
  }

  for (const cat of ARTICLE_CATEGORIES) {
    if (path === `/${cat.slug}/`) {
      return {
        kind: 'category',
        canonicalPath: `/${cat.slug}/`,
        categorySlug: cat.slug,
        page: 1,
      };
    }
    const catPageMatch = new RegExp(`^/${cat.slug}/page/(\\d+)/$`).exec(path);
    if (catPageMatch) {
      const page = Math.max(1, Number(catPageMatch[1]));
      return {
        kind: 'category',
        canonicalPath: page === 1 ? `/${cat.slug}/` : `/${cat.slug}/page/${page}/`,
        categorySlug: cat.slug,
        page,
      };
    }
  }

  const slug = path.slice(1, -1);

  const album = GALLERY_ALBUMS.find((a) => a.slug === slug);
  if (album) {
    return { kind: 'gallery-album', canonicalPath: `/${album.slug}/`, album };
  }

  const article = ARTICLES.find((a) => a.slug === slug);
  if (article) {
    return { kind: 'article', canonicalPath: `/${article.slug}/`, article };
  }

  return { kind: 'not-found', canonicalPath: path };
}

export interface RouteSeoMeta {
  title: string;
  description: string;
}

export function getRouteSeoMeta(route: MatchedRoute): RouteSeoMeta {
  switch (route.kind) {
    case 'home':
      return { title: HOME_CONTENT.seoTitle, description: HOME_CONTENT.seoDescription };
    case 'about':
      return { title: ABOUT_US_CONTENT.seoTitle, description: ABOUT_US_CONTENT.seoDescription };
    case 'team':
    case 'lahore-team':
      return { title: TEAM_META.seoTitle, description: TEAM_META.seoDescription };
    case 'amjad-profile':
      return { title: AMJAD_PROFILE.seoTitle, description: AMJAD_PROFILE.seoDescription };
    case 'clients':
      return { title: CLIENTS_META.seoTitle, description: CLIENTS_META.seoDescription };
    case 'cases':
      return { title: REPORTED_CASES_META.seoTitle, description: REPORTED_CASES_META.seoDescription };
    case 'practice-areas':
      return { title: PRACTICE_AREAS_META.seoTitle, description: PRACTICE_AREAS_META.seoDescription };
    case 'articles':
      return {
        title: 'Articles on Incomes Tax, Sales Tax, etc. by Amjad Javed Hashmi',
        description:
          'Insightful articles on Income Tax, Sales Tax, Customs Duties, Excise Tax and International Taxation by Mr. Amjad Javed Hashmi.',
      };
    case 'category': {
      if (route.categorySlug === 'international-taxation') {
        return {
          title: INTERNATIONAL_TAXATION_PAGE_CONTENT.seoTitle,
          description: INTERNATIONAL_TAXATION_PAGE_CONTENT.seoDescription,
        };
      }
      const cat = ARTICLE_CATEGORIES.find((c) => c.slug === route.categorySlug);
      return {
        title: cat?.seoTitle || 'Articles – Tax Pulse',
        description: cat?.seoDescription || HOME_CONTENT.seoDescription,
      };
    }
    case 'article':
      return {
        title: `${route.article.title} – Tax Pulse`,
        description: route.article.excerpt.slice(0, 160),
      };
    case 'gallery':
      return { title: GALLERY_META.seoTitle, description: GALLERY_META.seoDescription };
    case 'gallery-album':
      if (route.album.slug === 'lecture-fbr-multan-2025') {
        return {
          title: 'Lecture FBR Multan 2025',
          description: route.album.description.slice(0, 160),
        };
      }
      return { title: GALLERY_META.seoTitle, description: GALLERY_META.seoDescription };
    case 'contact':
      return { title: CONTACT_PAGE_CONTENT.seoTitle, description: CONTACT_PAGE_CONTENT.seoDescription };
    case 'not-found':
      return {
        title: 'Page Not Found – Tax Pulse',
        description: HOME_CONTENT.seoDescription,
      };
  }
}

export function isOurFirmActive(route: MatchedRoute): boolean {
  return (
    route.kind === 'about' ||
    route.kind === 'team' ||
    route.kind === 'lahore-team' ||
    route.kind === 'amjad-profile' ||
    route.kind === 'clients' ||
    route.kind === 'cases'
  );
}
