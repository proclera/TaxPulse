import { Award, Download, GraduationCap, Mail, Users } from 'lucide-react';
import { AMJAD_PROFILE } from '../data/team.ts';
import { FreeAdviceCtaBand } from '../components/FreeAdviceCtaBand.tsx';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';

export function AmjadProfilePage() {
  return (
    <>
      <PageBanner
        title={AMJAD_PROFILE.name}
        subtitle={AMJAD_PROFILE.subtitle}
        crumbs={[
          { label: 'Our Team', to: '/our-team/' },
          { label: AMJAD_PROFILE.name },
        ]}
      />

      <FreeAdviceCtaBand />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Sidebar Portrait, PDF & Quick Links */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <div className="mx-auto aspect-[4/5] max-w-[260px] overflow-hidden rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-muted)]">
                  <img
                    src={AMJAD_PROFILE.portrait}
                    alt={AMJAD_PROFILE.portraitAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h2 className="mt-4 text-center font-display text-2xl font-semibold text-[var(--color-primary)]">
                  {AMJAD_PROFILE.name}
                </h2>
                <p className="text-center text-sm font-bold text-[var(--color-accent-hover)]">
                  {AMJAD_PROFILE.subtitle}
                </p>

                <div className="mt-5 space-y-3 border-t border-[var(--color-border-subtle)] pt-5">
                  <a
                    href={AMJAD_PROFILE.profilePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tx-transition flex min-h-[46px] w-full items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-secondary)]"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    <span>For a Download Profile Click Here!</span>
                  </a>

                  <a
                    href="mailto:ajhashmi@taxpulse.com"
                    className="tx-transition flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>ajhashmi@taxpulse.com</span>
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-primary)]">
                  <GraduationCap className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Education</span>
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.education.map((edu) => (
                    <li key={edu}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-primary)]">
                  <Award className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Awards</span>
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.awards.map((award, idx) => (
                    <p key={idx}>{award}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-primary)]">
                  <Users className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Community Service</span>
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.communityService.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Biography, Video, Honors, Experience */}
            <div className="space-y-10 lg:col-span-8">
              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-8">
                <p className="max-w-[68ch] text-lg leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.intro}
                </p>

                <div className="mt-6 aspect-video overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-dark-surface)]">
                  <iframe
                    src={AMJAD_PROFILE.videoEmbedUrl}
                    title={AMJAD_PROFILE.videoTitle}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <article className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-8">
                <h2 className="border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                  Profile
                </h2>
                <ul className="mt-5 max-w-[68ch] list-disc space-y-2.5 pl-5 text-base leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.profilePoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-8">
                <h2 className="border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                  Honors
                </h2>
                <ul className="mt-5 max-w-[68ch] list-disc space-y-2.5 pl-5 text-base leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.honors.map((honor, idx) => (
                    <li key={idx}>{honor}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-8">
                <h2 className="border-b border-[var(--color-border-subtle)] pb-3 font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                  Experience
                </h2>
                <p className="mt-5 max-w-[68ch] text-base font-bold leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.experienceLead}
                </p>
                <ul className="mt-3 max-w-[68ch] list-disc space-y-2.5 pl-5 text-base leading-relaxed text-[var(--color-foreground)]">
                  {AMJAD_PROFILE.experiencePost2003.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="mt-8 space-y-8 border-t border-[var(--color-border)] pt-8">
                  {AMJAD_PROFILE.careerStages.map((stage) => (
                    <section key={stage.period} className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                        {stage.period}
                      </h3>
                      <p className="max-w-[68ch] text-base leading-relaxed text-[var(--color-foreground)]">
                        {stage.summary}
                      </p>
                      <ul className="max-w-[68ch] list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--color-foreground)]">
                        {stage.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>

              <div className="flex flex-wrap gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <FreeAdviceCtaBand />
    </>
  );
}
