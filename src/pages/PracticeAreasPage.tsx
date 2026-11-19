import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS, PRACTICE_AREAS_META } from '../data/practiceAreas.ts';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';
import { TestimonialsSection } from '../components/TestimonialsSection.tsx';

export function PracticeAreasPage() {
  return (
    <>
      <PageBanner
        title={PRACTICE_AREAS_META.pageTitle}
        crumbs={[{ label: PRACTICE_AREAS_META.pageTitle }]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="border-b border-[var(--color-border)] pb-8">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              {PRACTICE_AREAS_META.leadHeadingLine1} {PRACTICE_AREAS_META.leadHeadingLine2}
            </h2>
            <p className="mt-4 max-w-[68ch] text-lg leading-relaxed text-[var(--color-foreground)]">
              {PRACTICE_AREAS_META.intro}
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
                to="/reported-cases/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
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

          <div className="mt-10">
            <div className="flex flex-col justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5 md:flex-row md:items-end">
              <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">
                {PRACTICE_AREAS_META.servicesHeading}
              </h2>
              <nav aria-label="Jump to practice area" className="flex flex-wrap gap-2">
                {PRACTICE_AREAS.map((area) => (
                  <a
                    key={area.id}
                    href={`#${area.id}`}
                    className="tx-transition inline-flex min-h-[40px] items-center rounded border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-sm font-bold text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                  >
                    {area.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-8 space-y-8">
              {PRACTICE_AREAS.map((area, idx) => (
                <article
                  key={area.id}
                  id={area.id}
                  className="scroll-mt-24 rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                    <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                      {area.title}
                    </h3>
                    <span className="text-sm font-semibold text-[var(--color-accent-hover)]">
                      Practice Pillar {idx + 1} of {PRACTICE_AREAS.length}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-8 lg:grid-cols-12">
                    <div className="max-w-[68ch] space-y-4 text-base leading-relaxed text-[var(--color-foreground)] lg:col-span-7">
                      {area.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {area.items ? (
                      <div className="rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-surface-warm)] p-5 lg:col-span-5">
                        {area.listLead ? (
                          <p className="mb-3 text-sm font-bold text-[var(--color-primary)]">
                            {area.listLead}
                          </p>
                        ) : null}
                        <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--color-foreground)]">
                          {area.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
