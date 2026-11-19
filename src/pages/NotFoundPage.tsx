import { ArrowLeft } from 'lucide-react';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';

export function NotFoundPage() {
  return (
    <>
      <PageBanner title="Page Not Found" crumbs={[{ label: 'Not Found' }]} />
      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[60ch] rounded-lg border border-[var(--color-border)] bg-white p-8">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">
              The requested page could not be found.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-muted-foreground)]">
              Please navigate using one of the Tax Pulse sections below or return to the homepage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AppLink
                to="/"
                className="tx-transition inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-secondary)]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Back to Home</span>
              </AppLink>
              <AppLink
                to="/practice-areas/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                Practice Areas
              </AppLink>
              <AppLink
                to="/articles/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                Articles
              </AppLink>
              <AppLink
                to="/contact-us/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-accent-hover)]"
              >
                Contact Us
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
