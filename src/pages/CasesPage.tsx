import { ArrowRight, Calendar, FileText } from 'lucide-react';
import { REPORTED_CASES, REPORTED_CASES_META } from '../data/cases.ts';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';

export function CasesPage() {
  return (
    <>
      <PageBanner
        title={REPORTED_CASES_META.pageTitle}
        crumbs={[
          { label: 'Our Firm', to: '/about-us/' },
          { label: REPORTED_CASES_META.pageTitle },
        ]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="border-b border-[var(--color-border)] pb-8">
            <p className="max-w-[68ch] text-lg leading-relaxed text-[var(--color-foreground)]">
              {REPORTED_CASES_META.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <AppLink
                to="/our-team/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                Our Team
              </AppLink>
              <AppLink
                to="/our-clients/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                Our Clients
              </AppLink>
              <AppLink
                to="/about-us/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                About Us
              </AppLink>
              <AppLink
                to="/contact-us/"
                className="tx-transition inline-flex min-h-[44px] items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-5 py-2 text-sm font-bold text-white hover:bg-[var(--color-accent-hover)]"
              >
                <span>Request Case Assessment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
            </div>
          </div>

          <h2 className="mt-10 font-display text-3xl font-semibold text-[var(--color-primary)]">
            {REPORTED_CASES_META.sectionHeading}
          </h2>

          <div className="mt-6 space-y-5">
            {REPORTED_CASES.map((item, idx) => (
              <article
                key={item.id}
                className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-7"
              >
                <div className="flex flex-col justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--color-muted-foreground)]">
                      Reported Case {idx + 1} of {REPORTED_CASES.length}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 font-bold text-[var(--color-foreground)]">
                      <FileText className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                      <span>{item.citation}</span>
                    </span>
                    {item.date ? (
                      <span className="inline-flex items-center gap-1.5 text-[var(--color-muted-foreground)]">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{item.date}</span>
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <p className="max-w-[68ch] text-base leading-relaxed text-[var(--color-foreground)]">
                    {item.summary}
                  </p>
                  {item.outcome ? (
                    <p
                      className={`shrink-0 text-sm font-bold ${
                        item.outcome === 'Decided for the FBR'
                          ? 'text-[var(--color-primary)]'
                          : 'text-[var(--color-accent-hover)]'
                      }`}
                    >
                      {item.outcome}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
