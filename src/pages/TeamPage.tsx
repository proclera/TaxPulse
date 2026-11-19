import { ArrowRight, Mail } from 'lucide-react';
import { CORE_TEAM, LAHORE_TEAM, TEAM_META } from '../data/team.ts';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';

interface TeamPageProps {
  focusOffice?: 'core' | 'lahore';
}

export function TeamPage({ focusOffice = 'core' }: TeamPageProps) {
  const isLahore = focusOffice === 'lahore';

  return (
    <>
      <PageBanner
        title={isLahore ? TEAM_META.lahorePageTitle : TEAM_META.pageTitle}
        crumbs={[
          { label: 'Our Firm', to: '/about-us/' },
          { label: isLahore ? TEAM_META.lahorePageTitle : TEAM_META.pageTitle },
        ]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="border-b border-[var(--color-border)] pb-8">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              {TEAM_META.leadHeading}
            </h2>
            <p className="mt-3 max-w-[68ch] text-lg leading-relaxed text-[var(--color-foreground)]">
              {TEAM_META.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <AppLink
                to="/our-team/"
                aria-current={!isLahore ? 'page' : undefined}
                className={`tx-transition inline-flex min-h-[44px] items-center rounded-md border px-4 py-2 text-sm font-bold ${
                  !isLahore
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                }`}
              >
                Our Team
              </AppLink>
              <AppLink
                to="/lahore-office-of-taxpulse/"
                aria-current={isLahore ? 'page' : undefined}
                className={`tx-transition inline-flex min-h-[44px] items-center rounded-md border px-4 py-2 text-sm font-bold ${
                  isLahore
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                }`}
              >
                Lahore office of Taxpulse
              </AppLink>
              <AppLink
                to="/about-us/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                About Us
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

          <div className="flex flex-col">
            {/* Primary / Core Practice Team */}
            <div className={isLahore ? 'order-2 mt-14 border-t border-[var(--color-border)] pt-12' : 'order-1 mt-10'}>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                Principal Counsel &amp; Partners
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {CORE_TEAM.map((member) => (
                  <article
                    key={member.id}
                    className="flex flex-col gap-5 rounded-lg border border-[var(--color-border)] bg-white p-6 sm:flex-row sm:items-start"
                  >
                    <div className="aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-muted)] sm:w-36">
                      <img
                        src={member.image}
                        alt={member.imageAlt}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h4 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                        {member.displayName}
                      </h4>
                      <p className="mt-0.5 text-sm font-semibold text-[var(--color-accent-hover)]">
                        {member.role}
                      </p>

                      {member.profileRoute ? (
                        <div className="mt-4 flex flex-col gap-3">
                          <AppLink
                            to={member.profileRoute}
                            className="tx-transition inline-flex min-h-[44px] w-fit items-center gap-1.5 rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--color-secondary)]"
                          >
                            <span>{member.bio}</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </AppLink>
                          {member.email ? (
                            <a
                              href={`mailto:${member.email}`}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-secondary)] hover:underline"
                            >
                              <Mail className="h-4 w-4" aria-hidden="true" />
                              <span>{member.email}</span>
                            </a>
                          ) : null}
                        </div>
                      ) : (
                        <p className="mt-3 text-base leading-relaxed text-[var(--color-foreground)]">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Lahore Office Team */}
            <div className={isLahore ? 'order-1 mt-10' : 'order-2 mt-14 border-t border-[var(--color-border)] pt-12'}>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                {TEAM_META.lahorePageTitle}
              </h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {LAHORE_TEAM.map((member) => (
                  <article
                    key={member.id}
                    className="flex flex-col rounded-lg border border-[var(--color-border)] bg-white p-6"
                  >
                    <div className="flex items-start gap-4 border-b border-[var(--color-border-subtle)] pb-4">
                      <div className="aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-muted)]">
                        <img
                          src={member.image}
                          alt={member.imageAlt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-semibold text-[var(--color-primary)]">
                          {member.displayName}
                        </h4>
                        <p className="mt-0.5 text-xs font-semibold text-[var(--color-accent-hover)]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-foreground)]">
                      {member.bio.split('\n\n').map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
