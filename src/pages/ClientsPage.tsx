import { CLIENTS_META, VALUED_CLIENTS } from '../data/clients.ts';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';
import { TestimonialsSection } from '../components/TestimonialsSection.tsx';

export function ClientsPage() {
  return (
    <>
      <PageBanner
        title={CLIENTS_META.pageTitle}
        crumbs={[
          { label: 'Our Firm', to: '/about-us/' },
          { label: CLIENTS_META.pageTitle },
        ]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="border-b border-[var(--color-border)] pb-8">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              {CLIENTS_META.heading}
            </h2>
            <p className="mt-3 max-w-[65ch] text-lg leading-relaxed text-[var(--color-foreground)]">
              {CLIENTS_META.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <AppLink
                to="/about-us/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                About Us
              </AppLink>
              <AppLink
                to="/practice-areas/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                Practice Areas
              </AppLink>
              <AppLink
                to="/reported-cases/"
                className="tx-transition inline-flex min-h-[44px] items-center rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
              >
                Reported Cases
              </AppLink>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {VALUED_CLIENTS.map((client, idx) => (
              <figure
                key={client.name}
                className="flex flex-col items-center justify-between rounded-lg border border-[var(--color-border)] bg-white p-6 text-center"
              >
                <div className="flex h-24 w-full items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    fetchPriority={idx === 0 ? 'high' : undefined}
                    className="max-h-20 w-auto max-w-full object-contain"
                  />
                </div>
                <figcaption className="mt-4 border-t border-[var(--color-border-subtle)] pt-3 text-sm font-bold text-[var(--color-foreground)]">
                  {client.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
