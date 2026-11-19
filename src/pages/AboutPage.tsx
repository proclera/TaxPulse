import { ArrowRight } from 'lucide-react';
import { ABOUT_US_CONTENT, FIRM_INFO } from '../data/firm.ts';
import { FreeAdviceCtaBand } from '../components/FreeAdviceCtaBand.tsx';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';

export function AboutPage() {
  return (
    <>
      <PageBanner
        title={ABOUT_US_CONTENT.pageTitle}
        crumbs={[{ label: ABOUT_US_CONTENT.pageTitle }]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
                {ABOUT_US_CONTENT.leadHeading}
              </h2>
              <p className="mt-4 max-w-[68ch] text-lg leading-relaxed text-[var(--color-foreground)]">
                {ABOUT_US_CONTENT.leadParagraph}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <AppLink
                  to="/our-team/"
                  className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                >
                  Our Team
                </AppLink>
                <AppLink
                  to="/our-clients/"
                  className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                >
                  Our Clients
                </AppLink>
                <AppLink
                  to="/reported-cases/"
                  className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                >
                  Reported Cases
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

            <aside className="rounded-lg border border-[var(--color-border)] bg-white p-6 lg:col-span-4">
              <img
                src={FIRM_INFO.logo.src}
                alt={ABOUT_US_CONTENT.markAlt}
                className="h-12 w-auto"
              />
              <dl className="mt-5 space-y-3 border-t border-[var(--color-border-subtle)] pt-4 text-sm">
                <div>
                  <dt className="text-xs font-bold text-[var(--color-muted-foreground)]">
                    Established
                  </dt>
                  <dd className="font-semibold text-[var(--color-foreground)]">
                    {FIRM_INFO.established}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-[var(--color-muted-foreground)]">
                    Registration
                  </dt>
                  <dd className="font-semibold text-[var(--color-foreground)]">
                    {FIRM_INFO.barRegistration}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mt-12 grid gap-10 border-t border-[var(--color-border)] pt-10 lg:grid-cols-12">
            <div className="max-w-[68ch] space-y-5 text-base leading-relaxed text-[var(--color-foreground)] lg:col-span-7">
              {ABOUT_US_CONTENT.overviewParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="space-y-8 lg:col-span-5">
              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6 sm:p-7">
                <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                  {ABOUT_US_CONTENT.missionHeading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-foreground)]">
                  {ABOUT_US_CONTENT.missionParagraph}
                </p>
              </article>

              <article className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-7">
                <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                  {ABOUT_US_CONTENT.clientCareHeading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-relaxed text-[var(--color-foreground)]">
                  {ABOUT_US_CONTENT.clientCareParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <FreeAdviceCtaBand />
    </>
  );
}
