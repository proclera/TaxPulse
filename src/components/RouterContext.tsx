import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getRouteSeoMeta, matchRoute, type MatchedRoute } from '../utils/routes.ts';

interface RouterContextValue {
  pathname: string;
  search: string;
  route: MatchedRoute;
  navigate: (to: string) => void;
}

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const stripBase = (path: string) => basePath && (path === basePath || path.startsWith(basePath + '/')) ? path.slice(basePath.length) || '/' : path;
const RouterContext = createContext<RouterContextValue | null>(null);

function updateMetaTag(selector: string, content: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? stripBase(window.location.pathname) : '/',
  );
  const [search, setSearch] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.search : '',
  );

  const route = useMemo(() => matchRoute(pathname), [pathname]);

  const navigate = useCallback((to: string) => {
    if (!to) return;
    if (/^(https?:|mailto:|tel:)/i.test(to)) {
      window.location.href = to;
      return;
    }
    const [withoutHash, hashPart] = to.split('#');
    const [rawPath, queryPart] = withoutHash.split('?');
    const targetPath = rawPath
      ? rawPath.startsWith('/')
        ? rawPath
        : `/${rawPath}`
      : stripBase(window.location.pathname);
    const nextSearch = queryPart ? `?${queryPart}` : '';
    const nextUrl = `${basePath}${targetPath}${nextSearch}${hashPart ? `#${hashPart}` : ''}`;

    if (
      targetPath !== stripBase(window.location.pathname) ||
      nextSearch !== window.location.search ||
      hashPart
    ) {
      window.history.pushState({}, '', nextUrl);
      setPathname(targetPath);
      setSearch(nextSearch);
    }

    if (hashPart) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(hashPart);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setPathname(stripBase(window.location.pathname));
      setSearch(window.location.search);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const seo = getRouteSeoMeta(route);
    document.title = seo.title;
    updateMetaTag('meta[name="description"]', seo.description);
    updateMetaTag('meta[property="og:title"]', seo.title);
    updateMetaTag('meta[property="og:description"]', seo.description);
    updateMetaTag('meta[name="twitter:title"]', seo.title);
    updateMetaTag('meta[name="twitter:description"]', seo.description);
  }, [route]);

  const value = useMemo(
    () => ({ pathname, search, route, navigate }),
    [pathname, search, route, navigate],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used inside RouterProvider');
  return ctx;
}

export interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function AppLink({ to, onClick, children, ...rest }: AppLinkProps) {
  const { navigate } = useRouter();
  return (
    <a
      href={/^(https?:|mailto:|tel:|#)/i.test(to) ? to : `${basePath}${to.startsWith('/') ? to : `/${to}`}`}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === '_blank') return;
        if (/^(https?:|mailto:|tel:)/i.test(to)) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
