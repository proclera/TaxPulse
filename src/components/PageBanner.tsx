import { ChevronRight } from 'lucide-react';
import { AppLink } from './RouterContext.tsx';

export interface BreadcrumbCrumb {
  label: string;
  to?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  crumbs: BreadcrumbCrumb[];
}

export function PageBanner({ title, subtitle, crumbs }: PageBannerProps) {
  return (
    <section
      className="border-b border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-200">
            <li>
              <AppLink
                to="/"
                className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-white"
              >
                Home
              </AppLink>
            </li>
            {crumbs.map((crumb, idx) => (
              <li key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                {crumb.to ? (
                  <AppLink
                    to={crumb.to}
                    className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-white"
                  >
                    {crumb.label}
                  </AppLink>
                ) : (
                  <span aria-current="page" className="font-semibold text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1
          id="page-heading"
          className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-slate-100 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
