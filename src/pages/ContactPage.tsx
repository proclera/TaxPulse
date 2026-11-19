import { useEffect, useState } from 'react';
import { ExternalLink, Mail, MapPin, Phone, User } from 'lucide-react';
import { CONTACT_PAGE_CONTENT } from '../data/firm.ts';
import { OFFICES } from '../data/offices.ts';
import { isValidCity, type OfficeCityId } from '../utils/validation.ts';
import { ConsultationForm } from '../components/ConsultationForm.tsx';
import { PageBanner } from '../components/PageBanner.tsx';
import { useRouter } from '../components/RouterContext.tsx';

export function ContactPage() {
  const { search } = useRouter();
  const [selectedCityId, setSelectedCityId] = useState<OfficeCityId>(() => {
    const c = new URLSearchParams(search || '').get('city');
    return isValidCity(c) ? c : 'karachi';
  });

  useEffect(() => {
    const c = new URLSearchParams(search || '').get('city');
    if (isValidCity(c)) setSelectedCityId(c);
  }, [search]);

  const selectedOffice = OFFICES.find((o) => o.id === selectedCityId) || OFFICES[0];

  return (
    <>
      <PageBanner
        title={CONTACT_PAGE_CONTENT.pageTitle}
        crumbs={[{ label: CONTACT_PAGE_CONTENT.pageTitle }]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Intro + Interactive Regional Office Tabs */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
                  {CONTACT_PAGE_CONTENT.heading}
                </h2>
                <div className="mt-4 max-w-[65ch] space-y-4 text-base leading-relaxed text-[var(--color-foreground)]">
                  {CONTACT_PAGE_CONTENT.introParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                <div
                  role="tablist"
                  aria-label="TaxPulse Regional Offices"
                  className="grid grid-cols-2 gap-2 border-b border-[var(--color-border-subtle)] pb-4 sm:grid-cols-4"
                >
                  {OFFICES.map((office) => {
                    const active = office.id === selectedCityId;
                    return (
                      <button
                        key={office.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setSelectedCityId(office.id)}
                        className={`tx-transition min-h-[44px] cursor-pointer rounded border px-3 py-2 text-sm font-bold ${
                          active
                            ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                            : 'border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                        }`}
                      >
                        {office.city}
                      </button>
                    );
                  })}
                </div>

                <div role="tabpanel" className="mt-5 space-y-3 text-sm">
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                    {selectedOffice.city}
                  </h3>

                  <div>
                    <p className="text-xs font-bold text-[var(--color-muted-foreground)]">
                      Office Address :
                    </p>
                    {selectedOffice.mapUrl ? (
                      <a
                        href={selectedOffice.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-start gap-2 font-semibold text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:underline"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                        <span>
                          {selectedOffice.address}{' '}
                          <ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </a>
                    ) : (
                      <p className="mt-1 inline-flex items-start gap-2 font-semibold text-[var(--color-foreground)]">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                        <span>{selectedOffice.address}</span>
                      </p>
                    )}
                  </div>

                  {selectedOffice.branchHead ? (
                    <p className="flex items-center gap-2">
                      <User className="h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                      <span>
                        <strong>Name :</strong> {selectedOffice.branchHead}
                      </span>
                    </p>
                  ) : null}

                  <div className="space-y-1.5">
                    {selectedOffice.phones.map((phone) => (
                      <p key={phone.href} className="flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                        <span>
                          <strong>Phone :</strong>{' '}
                          <a
                            href={phone.href}
                            className="font-bold text-[var(--color-primary)] underline-offset-4 hover:underline"
                          >
                            {phone.contactPageDisplay || phone.display}
                          </a>
                        </span>
                      </p>
                    ))}
                  </div>

                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                    <span>
                      <strong>Email :</strong>{' '}
                      <a
                        href={`mailto:${selectedOffice.email}`}
                        className="font-bold text-[var(--color-primary)] underline-offset-4 hover:underline"
                      >
                        {selectedOffice.email}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Verbatim Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm idPrefix="contact" />
            </div>
          </div>

          {/* Complete 4-Office Directory Cards */}
          <div className="mt-14 border-t border-[var(--color-border)] pt-12">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">
              All Regional Chambers
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {OFFICES.map((office) => (
                <article
                  key={office.id}
                  className="flex flex-col justify-between rounded-lg border border-[var(--color-border)] bg-white p-6"
                >
                  <div className="space-y-3 text-sm">
                    <h3 className="border-b border-[var(--color-border-subtle)] pb-2 font-display text-2xl font-semibold text-[var(--color-primary)]">
                      {office.city}
                    </h3>
                    <p className="text-[var(--color-foreground)]">
                      <strong className="block text-xs text-[var(--color-muted-foreground)]">
                        Office Address :
                      </strong>
                      {office.mapUrl ? (
                        <a
                          href={office.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block hover:text-[var(--color-primary)] hover:underline"
                        >
                          {office.address}
                        </a>
                      ) : (
                        <span className="mt-1 block">{office.address}</span>
                      )}
                    </p>
                    {office.branchHead ? (
                      <p>
                        <strong>Name :</strong> {office.branchHead}
                      </p>
                    ) : null}
                    {office.phones.map((phone) => (
                      <p key={phone.href}>
                        <strong>Phone :</strong>{' '}
                        <a
                          href={phone.href}
                          className="font-semibold text-[var(--color-primary)] hover:underline"
                        >
                          {phone.contactPageDisplay || phone.display}
                        </a>
                      </p>
                    ))}
                    <p>
                      <strong>Email :</strong>{' '}
                      <a
                        href={`mailto:${office.email}`}
                        className="font-semibold text-[var(--color-primary)] hover:underline"
                      >
                        {office.email}
                      </a>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Embedded Map preserved from live /contact-us/ */}
          <div className="mt-12 overflow-hidden rounded-lg border border-[var(--color-border)] bg-white">
            <iframe
              title="Tax Pulse Lahore Office Map — Badar Centre, Lahore"
              src={CONTACT_PAGE_CONTENT.lahoreMapEmbedUrl}
              className="h-[340px] w-full border-0 sm:h-[400px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
