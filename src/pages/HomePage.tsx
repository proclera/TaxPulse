import { useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Check,
  FileText,
  Layers,
  Mail,
  Phone,
  PhoneCall,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { FIRM_INFO, HOME_CONTENT } from '../data/firm.ts';
import type { GalleryImage } from '../data/gallery.ts';
import { OFFICES } from '../data/offices.ts';
import { PRACTICE_AREAS } from '../data/practiceAreas.ts';
import { GalleryLightbox } from '../components/GalleryLightbox.tsx';
import { AppLink } from '../components/RouterContext.tsx';
import { TestimonialsSection } from '../components/TestimonialsSection.tsx';

import { MATTER_TRACK_OPTIONS, type MatterTrackId, type OfficeCityId } from '../utils/validation.ts';

const SERVICE_ICONS = {
  litigation: Scale,
  compliance: FileText,
  advisory: BookOpen,
  retainer: Building2,
};

export function HomePage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [selectedMatter, setSelectedMatter] = useState<MatterTrackId>('litigation');
  const [selectedCity, setSelectedCity] = useState<OfficeCityId>('karachi');
  const triggerRef = useRef<HTMLElement | null>(null);

  const galleryLightboxImages: GalleryImage[] = HOME_CONTENT.galleryPreviewImages.map((im) => ({
    src: im.src,
    thumbnail: im.src,
    originalUrl: im.src,
    alt: im.alt,
  }));

  const selectedOffice = OFFICES.find((o) => o.id === selectedCity) || OFFICES[0];
  const assessmentHref = `/contact-us/?matter=${selectedMatter}&city=${selectedCity}`;

  return (
    <>
      {/* Consultation-Priority Editorial Hero */}
      <section className="relative border-b border-[var(--color-border)] bg-[var(--color-navy-deep)] text-[var(--color-on-primary)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HOME_CONTENT.hero.backgroundImage})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(11, 23, 57, 0.95) 0%, rgba(30, 58, 138, 0.88) 55%, rgba(15, 36, 94, 0.96) 100%)',
          }}
        />

        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
          <div className="hero-enter lg:col-span-7">
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-on-primary)] sm:text-5xl lg:text-[3.5rem]">
              {HOME_CONTENT.hero.headline}
            </h1>
            <p className="mt-3 text-base font-semibold text-[var(--color-accent-light)]">
              {FIRM_INFO.fullTitle}
            </p>

            <blockquote className="mt-6 max-w-[60ch] border-y border-white/20 py-5">
              <p className="font-display text-xl italic leading-relaxed text-[var(--color-on-dark)] sm:text-2xl">
                {HOME_CONTENT.hero.quote}
              </p>
              <footer className="mt-2.5 text-sm font-bold text-[var(--color-accent-light)]">
                {HOME_CONTENT.hero.quoteAuthor}
              </footer>
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <AppLink
                to={assessmentHref}
                className="tx-transition inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-base font-bold text-[var(--color-on-accent)] hover:bg-[var(--color-accent-hover)] focus-visible:outline-white"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                <span>{HOME_CONTENT.hero.primaryCtaLabel}</span>
              </AppLink>

              <AppLink
                to="/our-team/"
                className="tx-transition inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/50 bg-white/10 px-5 py-3 text-base font-bold text-[var(--color-on-primary)] hover:bg-white/20 focus-visible:outline-white"
              >
                <span>{HOME_CONTENT.hero.secondaryTeamLabel}</span>
              </AppLink>

              <AppLink
                to="/reported-cases/"
                className="tx-transition inline-flex min-h-[48px] items-center justify-center gap-1.5 px-3 py-3 text-base font-bold text-[var(--color-accent-light)] underline-offset-4 hover:text-[var(--color-on-primary)] hover:underline focus-visible:outline-white"
              >
                <span>Reported Cases</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
            </div>
          </div>

          {/* Interactive Case Triage & Paid Assessment Card */}
          <aside
            aria-label={HOME_CONTENT.freeAdviceCta.heading}
            className="hero-enter hero-enter-delayed rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-[var(--color-foreground)] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-7 lg:col-span-5"
          >
            <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
              {HOME_CONTENT.freeAdviceCta.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {HOME_CONTENT.freeAdviceCta.body}
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="hero-matter-select"
                  className="mb-1 block text-xs font-bold text-[var(--color-foreground)]"
                >
                  Select Mandate / Issue Type
                </label>
                <select
                  id="hero-matter-select"
                  value={selectedMatter}
                  onChange={(e) => setSelectedMatter(e.target.value as MatterTrackId)}
                  className="min-h-[42px] w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-foreground)] focus:border-[var(--color-primary)]"
                >
                  {MATTER_TRACK_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="mb-1.5 block text-xs font-bold text-[var(--color-foreground)]">
                  Preferred Chambers
                </span>
                <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Preferred Chambers">
                  {OFFICES.map((office) => {
                    const active = office.id === selectedCity;
                    return (
                      <button
                        key={office.id}
                        type="button"
                        onClick={() => setSelectedCity(office.id)}
                        aria-pressed={active}
                        className={`tx-transition min-h-[38px] cursor-pointer rounded border px-2 py-1.5 text-xs font-bold ${
                          active
                            ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]'
                            : 'border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                        }`}
                      >
                        {office.city}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AppLink
                to={assessmentHref}
                className="tx-transition flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-3 text-base font-bold text-[var(--color-on-primary)] hover:bg-[var(--color-secondary)]"
              >
                <span>{HOME_CONTENT.freeAdviceCta.buttonLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
            </div>

            <div className="mt-5 space-y-2 border-t border-[var(--color-border-subtle)] pt-4 text-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-[var(--color-foreground)]">
                  {selectedOffice.footerHeading}
                </span>
                {selectedOffice.phones[0] ? (
                  <a
                    href={selectedOffice.phones[0].href}
                    className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{selectedOffice.phones[0].display}</span>
                  </a>
                ) : null}
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Chambers Email</span>
                <a
                  href={`mailto:${selectedOffice.email}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-primary)] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{selectedOffice.email}</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs font-bold text-[var(--color-secondary)]">
                <AppLink to="/practice-areas/" className="hover:underline">
                  Practice Areas
                </AppLink>
                <AppLink to="/reported-cases/" className="hover:underline">
                  Reported Cases
                </AppLink>
                <AppLink to="/articles/" className="hover:underline">
                  Articles
                </AppLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section aria-labelledby="home-services-heading" className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[var(--color-border)] pb-6 md:flex-row md:items-end">
            <h2
              id="home-services-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl"
            >
              Our Services Get You Results
            </h2>
            <AppLink
              to="/practice-areas/"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[var(--color-primary)] underline-offset-4 hover:text-[var(--color-accent-hover)] hover:underline"
            >
              <span>Explore full Practice Areas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PRACTICE_AREAS.map((area) => {
              const Icon = SERVICE_ICONS[area.id];
              return (
                <article
                  key={area.id}
                  className="service-card tx-transition flex flex-col justify-between rounded-lg border border-[var(--color-border)] bg-white p-6 hover:border-[var(--color-primary)] sm:p-8"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                      <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                        {area.title}
                      </h3>
                      <Icon className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                    </div>
                    <p className="max-w-[65ch] text-base leading-relaxed text-[var(--color-foreground)]">
                      {area.homeSummary}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-4">
                    <AppLink
                      to={`/practice-areas/#${area.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-accent-hover)] hover:underline"
                    >
                      <span>View {area.title} details</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </AppLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        aria-labelledby="why-choose-heading"
        className="border-t border-[var(--color-border)] bg-[var(--color-surface-warm)]"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 border-b border-[var(--color-border)] pb-6">
            <h2
              id="why-choose-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl"
            >
              {HOME_CONTENT.whyChooseUsHeading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {HOME_CONTENT.whyChooseUs.map((pillar, idx) => {
              const icons = [ShieldCheck, Layers, Award];
              const PillarIcon = icons[idx] || Check;
              return (
                <article
                  key={pillar.title}
                  className="flex flex-col rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-7"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-muted)] text-[var(--color-primary)]">
                      <PillarIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-[var(--color-foreground)]">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Gallery Preview */}
      <section
        aria-labelledby="home-gallery-heading"
        className="border-t border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[var(--color-border)] pb-6 sm:flex-row sm:items-end">
            <h2
              id="home-gallery-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl"
            >
              {HOME_CONTENT.galleryHeading}
            </h2>

            <AppLink
              to="/gallery/"
              className="tx-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-[var(--color-primary)] px-5 py-2.5 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
            >
              <span>{HOME_CONTENT.galleryCtaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {HOME_CONTENT.galleryPreviewImages.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setLightboxIdx(idx);
                }}
                className="gallery-tile tx-transition relative aspect-[6/5] cursor-pointer overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-muted)] text-left hover:border-[var(--color-primary)] hover:shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="sr-only">Open {img.alt} in lightbox</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Verbatim Testimonials */}
      <TestimonialsSection useHomeVariants />

      <GalleryLightbox
        albumTitle={HOME_CONTENT.galleryHeading}
        images={galleryLightboxImages}
        activeIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onSelectIndex={setLightboxIdx}
        returnFocusTo={triggerRef.current}
      />
    </>
  );
}
