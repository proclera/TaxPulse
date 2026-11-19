import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { siFacebook, siInstagram, siWhatsapp, siX } from 'simple-icons';
import { FIRM_INFO } from '../data/firm.ts';
import { OFFICES } from '../data/offices.ts';
import { isOurFirmActive } from '../utils/routes.ts';
import { AppLink, useRouter } from './RouterContext.tsx';

const SOCIAL_ICONS: Record<string, { path: string }> = {
  facebook: siFacebook,
  linkedin: { path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z' },
  x: siX,
  whatsapp: siWhatsapp,
  instagram: siInstagram,
};

const OUR_FIRM_ITEMS = [
  { label: 'About Us', to: '/about-us/' },
  { label: 'Our Team', to: '/our-team/' },
  { label: 'Amjad Javed Hashmi', to: '/amjad-javed-hashmi-tax-consultant/' },
  { label: 'Lahore office of Taxpulse', to: '/lahore-office-of-taxpulse/' },
  { label: 'Our Clients', to: '/our-clients/' },
  { label: 'Reported Cases', to: '/reported-cases/' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { route, pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileFirmOpen, setMobileFirmOpen] = useState(true);
  const [desktopFirmOpen, setDesktopFirmOpen] = useState(false);
  const firmMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopFirmOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (firmMenuRef.current && !firmMenuRef.current.contains(e.target as Node)) {
        setDesktopFirmOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopFirmOpen(false);
        if (mobileOpen) {
          setMobileOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('#main-content > section:not(:first-child)');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -35px 0px' });
    sections.forEach((section) => { section.classList.add('reveal-section'); observer.observe(section); });
    return () => { observer.disconnect(); sections.forEach((section) => section.classList.remove('reveal-section', 'is-visible')); };
  }, [pathname]);

  const firmActive = isOurFirmActive(route);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-primary)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>

      {/* Primary Sticky Navigation */}
      <header className={`sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/98 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_30px_rgba(11,23,57,0.10)]' : ''}`}>
        <div className="mx-auto flex min-h-[74px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <AppLink
            to="/"
            aria-label="Tax Pulse Home"
            className="inline-flex shrink-0 items-center py-1"
          >
            <img
              src={FIRM_INFO.logo.src}
              alt={FIRM_INFO.logo.alt}
              className="h-10 w-auto sm:h-11"
            />
          </AppLink>

          <nav aria-label="Primary Navigation" className="hidden items-center gap-1 lg:flex">
            <AppLink
              to="/"
              aria-current={route.kind === 'home' ? 'page' : undefined}
              className={`tx-transition rounded px-3 py-2 text-sm font-bold ${
                route.kind === 'home'
                  ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                  : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
              }`}
            >
              Home
            </AppLink>

            <div className="relative" ref={firmMenuRef}>
              <button
                type="button"
                aria-expanded={desktopFirmOpen}
                aria-haspopup="true"
                onClick={() => setDesktopFirmOpen((o) => !o)}
                className={`tx-transition inline-flex cursor-pointer items-center gap-1 rounded px-3 py-2 text-sm font-bold ${
                  firmActive
                    ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                    : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
                }`}
              >
                <span>Our Firm</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-150 ${
                    desktopFirmOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopFirmOpen ? (
                <div
                  role="menu"
                  aria-label="Our Firm submenu"
                  className="menu-enter absolute left-0 top-full mt-1.5 w-64 rounded-md border border-[var(--color-border)] bg-white py-2 shadow-lg"
                >
                  {OUR_FIRM_ITEMS.map((item) => (
                    <AppLink
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      aria-current={route.canonicalPath === item.to ? 'page' : undefined}
                      className={`block px-4 py-2.5 text-sm font-semibold ${
                        route.canonicalPath === item.to
                          ? 'bg-[var(--color-muted)] text-[var(--color-primary)]'
                          : 'text-[var(--color-foreground)] hover:bg-[var(--color-surface-warm)] hover:text-[var(--color-primary)]'
                      }`}
                    >
                      {item.label}
                    </AppLink>
                  ))}
                </div>
              ) : null}
            </div>

            <AppLink
              to="/practice-areas/"
              aria-current={route.kind === 'practice-areas' ? 'page' : undefined}
              className={`tx-transition rounded px-3 py-2 text-sm font-bold ${
                route.kind === 'practice-areas'
                  ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                  : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
              }`}
            >
              Practice Areas
            </AppLink>

            <AppLink
              to="/articles/"
              aria-current={
                route.kind === 'articles' ||
                route.kind === 'article' ||
                (route.kind === 'category' && route.categorySlug !== 'international-taxation')
                  ? 'page'
                  : undefined
              }
              className={`tx-transition rounded px-3 py-2 text-sm font-bold ${
                route.kind === 'articles' ||
                route.kind === 'article' ||
                (route.kind === 'category' && route.categorySlug !== 'international-taxation')
                  ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                  : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
              }`}
            >
              Articles
            </AppLink>

            <AppLink
              to="/international-taxation/"
              aria-current={
                route.kind === 'category' && route.categorySlug === 'international-taxation'
                  ? 'page'
                  : undefined
              }
              className={`tx-transition rounded px-3 py-2 text-sm font-bold ${
                route.kind === 'category' && route.categorySlug === 'international-taxation'
                  ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                  : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
              }`}
            >
              International Taxation
            </AppLink>

            <AppLink
              to="/gallery/"
              aria-current={
                route.kind === 'gallery' || route.kind === 'gallery-album' ? 'page' : undefined
              }
              className={`tx-transition rounded px-3 py-2 text-sm font-bold ${
                route.kind === 'gallery' || route.kind === 'gallery-album'
                  ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                  : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
              }`}
            >
              Gallery
            </AppLink>

            <AppLink
              to="/contact-us/"
              aria-current={route.kind === 'contact' ? 'page' : undefined}
              className={`tx-transition rounded px-3 py-2 text-sm font-bold ${
                route.kind === 'contact'
                  ? 'text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8'
                  : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
              }`}
            >
              Contact Us
            </AppLink>
          </nav>

          <div className="flex items-center gap-2">
            <AppLink
              to="/contact-us/"
              className="tx-transition hidden min-h-[44px] items-center justify-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-[var(--color-on-primary)] hover:bg-[var(--color-secondary)] sm:inline-flex"
            >
              Request Case Assessment
            </AppLink>

            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="tx-transition inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-muted)] lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileOpen ? (
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="menu-enter border-t border-[var(--color-border)] bg-white px-4 py-4 lg:hidden"
          >
            <div className="flex flex-col space-y-1">
              <AppLink
                to="/"
                aria-current={route.kind === 'home' ? 'page' : undefined}
                className="flex min-h-[44px] items-center rounded px-3 text-base font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
              >
                Home
              </AppLink>

              <div className="rounded border border-[var(--color-border-subtle)] bg-[var(--color-background)]">
                <button
                  type="button"
                  aria-expanded={mobileFirmOpen}
                  onClick={() => setMobileFirmOpen((prev) => !prev)}
                  className="flex min-h-[44px] w-full cursor-pointer items-center justify-between px-3 text-base font-bold text-[var(--color-primary)]"
                >
                  <span>Our Firm</span>
                  <ChevronDown
                    className={`h-4 w-4 ${mobileFirmOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {mobileFirmOpen ? (
                  <div className="flex flex-col border-t border-[var(--color-border-subtle)] py-1">
                    {OUR_FIRM_ITEMS.map((item) => (
                      <AppLink
                        key={item.to}
                        to={item.to}
                        aria-current={route.canonicalPath === item.to ? 'page' : undefined}
                        className="flex min-h-[44px] items-center px-5 text-sm font-semibold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                      >
                        {item.label}
                      </AppLink>
                    ))}
                  </div>
                ) : null}
              </div>

              <AppLink
                to="/practice-areas/"
                aria-current={route.kind === 'practice-areas' ? 'page' : undefined}
                className="flex min-h-[44px] items-center rounded px-3 text-base font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
              >
                Practice Areas
              </AppLink>
              <AppLink
                to="/articles/"
                aria-current={route.kind === 'articles' ? 'page' : undefined}
                className="flex min-h-[44px] items-center rounded px-3 text-base font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
              >
                Articles
              </AppLink>
              <AppLink
                to="/international-taxation/"
                aria-current={
                  route.kind === 'category' && route.categorySlug === 'international-taxation'
                    ? 'page'
                    : undefined
                }
                className="flex min-h-[44px] items-center rounded px-3 text-base font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
              >
                International Taxation
              </AppLink>
              <AppLink
                to="/gallery/"
                aria-current={route.kind === 'gallery' ? 'page' : undefined}
                className="flex min-h-[44px] items-center rounded px-3 text-base font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
              >
                Gallery
              </AppLink>
              <AppLink
                to="/contact-us/"
                aria-current={route.kind === 'contact' ? 'page' : undefined}
                className="flex min-h-[44px] items-center rounded px-3 text-base font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
              >
                Contact Us
              </AppLink>

              <div className="pt-2">
                <AppLink
                  to="/contact-us/"
                  className="flex min-h-[46px] w-full items-center justify-center rounded-md bg-[var(--color-accent)] px-4 py-2.5 text-base font-bold text-white"
                >
                  Request Case Assessment
                </AppLink>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Four-Office Directory Footer */}
      <footer className="border-t border-[var(--color-navy-border)] bg-[var(--color-navy-ink)] text-[var(--color-on-dark)]">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[var(--color-navy-border)] pb-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-on-primary)] sm:text-3xl">
                Offices Across Pakistan
              </h2>
              <p className="mt-1 text-sm font-semibold text-[var(--color-accent-light)]">
                Get In Touch Today
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <AppLink
                to="/about-us/"
                className="text-sm font-semibold text-[var(--color-on-dark)] underline-offset-4 hover:text-[var(--color-accent-light)] hover:underline"
              >
                About Us
              </AppLink>
              <AppLink
                to="/our-team/"
                className="text-sm font-semibold text-[var(--color-on-dark)] underline-offset-4 hover:text-[var(--color-accent-light)] hover:underline"
              >
                Our Team
              </AppLink>
              <AppLink
                to="/our-clients/"
                className="text-sm font-semibold text-[var(--color-on-dark)] underline-offset-4 hover:text-[var(--color-accent-light)] hover:underline"
              >
                Our Clients
              </AppLink>
              <AppLink
                to="/reported-cases/"
                className="text-sm font-semibold text-[var(--color-on-dark)] underline-offset-4 hover:text-[var(--color-accent-light)] hover:underline"
              >
                Reported Cases
              </AppLink>
              <AppLink
                to="/practice-areas/"
                className="text-sm font-semibold text-[var(--color-on-dark)] underline-offset-4 hover:text-[var(--color-accent-light)] hover:underline"
              >
                Practice Areas
              </AppLink>
              <AppLink
                to="/articles/"
                className="text-sm font-semibold text-[var(--color-on-dark)] underline-offset-4 hover:text-[var(--color-accent-light)] hover:underline"
              >
                Articles
              </AppLink>
              <AppLink
                to="/contact-us/"
                className="text-sm font-semibold text-[var(--color-accent-light)] underline-offset-4 hover:text-[var(--color-on-primary)] hover:underline"
              >
                Contact Us
              </AppLink>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((office) => (
              <div key={office.id} className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-[var(--color-on-primary)]">
                  {office.footerHeading}
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {office.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="inline-flex items-start gap-2 text-[var(--color-on-dark)] hover:text-[var(--color-accent-light)]"
                      >
                        <Phone className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-accent-light)]" aria-hidden="true" />
                        <span>{phone.display}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${office.email}`}
                      className="inline-flex items-start gap-2 text-[var(--color-on-dark)] hover:text-[var(--color-accent-light)]"
                    >
                      <Mail className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-accent-light)]" aria-hidden="true" />
                      <span>{office.email}</span>
                    </a>
                  </li>
                  <li>
                    {office.mapUrl ? (
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 text-[var(--color-on-dark)] hover:text-[var(--color-accent-light)]"
                      >
                        <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-accent-light)]" aria-hidden="true" />
                        <span>
                          {office.address}{' '}
                          <ExternalLink className="inline h-3 w-3 align-baseline" aria-hidden="true" />
                        </span>
                      </a>
                    ) : (
                      <div className="inline-flex items-start gap-2 text-[var(--color-on-dark-muted)]">
                        <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-accent-light)]" aria-hidden="true" />
                        <span>{office.address}</span>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-navy-border)] pt-6 text-sm text-[var(--color-on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href={`mailto:${FIRM_INFO.primaryEmail}`} className="inline-flex min-h-11 items-center gap-2 hover:text-[var(--color-accent-light)]">
                <Mail className="h-4 w-4 text-[var(--color-accent-light)]" aria-hidden="true" />
                <span>{FIRM_INFO.primaryEmail}</span>
              </a>
              <a href={FIRM_INFO.primaryPhoneHref} className="inline-flex min-h-11 items-center gap-2 hover:text-[var(--color-accent-light)]">
                <Phone className="h-4 w-4 text-[var(--color-accent-light)]" aria-hidden="true" />
                <span>{FIRM_INFO.primaryPhoneDisplay}</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-1" aria-label="Social media">
              {FIRM_INFO.socialLinks.map((social) => {
                const icon = SOCIAL_ICONS[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-on-dark)] transition-colors hover:bg-white/10 hover:text-[var(--color-accent-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-light)]"
                  >
                    {icon ? <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d={icon.path} /></svg> : <span className="text-xs">{social.label}</span>}
                  </a>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-xs text-[var(--color-on-dark-muted)]">{FIRM_INFO.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
