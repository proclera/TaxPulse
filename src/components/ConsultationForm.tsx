import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy, Info, Mail, Phone, Send, ShieldAlert } from 'lucide-react';
import { CONTACT_PAGE_CONTENT } from '../data/firm.ts';
import { OFFICES } from '../data/offices.ts';
import {
  classifyCaseAssessment,
  ENTITY_TYPE_OPTIONS,
  FORUM_OPTIONS,
  isValidCity,
  isValidMatterTrack,
  MATTER_TRACK_OPTIONS,
  URGENCY_OPTIONS,
  validateConsultationForm,
  type CaseAssessmentClassification,
  type ConsultationFieldErrors,
  type ConsultationFormValues,
  type EntityTypeId,
  type ForumId,
  type MatterTrackId,
  type OfficeCityId,
  type UrgencyId,
} from '../utils/validation.ts';
import { useRouter } from './RouterContext.tsx';

interface ConsultationFormProps {
  idPrefix?: string;
}

function buildInitialValues(search: string): ConsultationFormValues {
  const params = new URLSearchParams(search || '');
  const matterParam = params.get('matter');
  const cityParam = params.get('city');
  return {
    name: '',
    company: '',
    ntnOrRef: '',
    email: '',
    phone: '',
    matterTrack: isValidMatterTrack(matterParam) ? matterParam : 'litigation',
    entityType: 'company',
    forum: matterParam === 'fia-nab' ? 'fia-nab-regulatory' : 'fbr-ir',
    urgency: matterParam === 'retainer' ? 'planning-retainer' : 'active-30d',
    preferredCity: isValidCity(cityParam) ? cityParam : 'karachi',
    message: '',
    acknowledgeFormalEngagement: false,
  };
}

export function ConsultationForm({ idPrefix = 'consultation' }: ConsultationFormProps) {
  const { search } = useRouter();
  const [values, setValues] = useState<ConsultationFormValues>(() => buildInitialValues(search));
  const [errors, setErrors] = useState<ConsultationFieldErrors>({});
  const [assessment, setAssessment] = useState<CaseAssessmentClassification | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(search || '');
    const matterParam = params.get('matter');
    const cityParam = params.get('city');
    if (isValidMatterTrack(matterParam) || isValidCity(cityParam)) {
      setValues((prev) => ({
        ...prev,
        matterTrack: isValidMatterTrack(matterParam) ? matterParam : prev.matterTrack,
        preferredCity: isValidCity(cityParam) ? cityParam : prev.preferredCity,
      }));
    }
  }, [search]);

  const handleFieldChange =
    <K extends keyof ConsultationFormValues>(field: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue =
        e.target.type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setValues((prev) => ({ ...prev, [field]: nextValue as ConsultationFormValues[K] }));
      if (errors[field]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        });
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validateConsultationForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      setAssessment(null);
      return;
    }
    setErrors({});
    setCopied(false);
    setAssessment(classifyCaseAssessment(values));
    setValues(buildInitialValues(search));
  };

  const handleCopyBrief = async () => {
    if (!assessment) return;
    try {
      await navigator.clipboard.writeText(assessment.formattedBrief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="consultation-form rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 border-b border-[var(--color-border-subtle)] pb-4">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
          Book a Formal Case Assessment
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          Pre-screened legal intake for corporate engagements, Show Cause Notices, Tribunal/High Court appeals, and Retainer-ship mandates.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate aria-label="TaxPulse structured case assessment form">
        {/* Step 1: Matter & Forum Triage */}
        <fieldset className="mb-6 rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-surface-warm)] p-4 sm:p-5">
          <legend className="px-1 font-display text-lg font-semibold text-[var(--color-primary)]">
            1. Matter Classification &amp; Chamber Routing
          </legend>

          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor={`${idPrefix}-matter`}
                className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
              >
                Engagement Track <span className="text-[var(--color-destructive)]">*</span>
              </label>
              <select
                id={`${idPrefix}-matter`}
                name="matter-track"
                value={values.matterTrack}
                onChange={handleFieldChange('matterTrack')}
                className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-foreground)] focus:border-[var(--color-primary)]"
              >
                {MATTER_TRACK_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id as MatterTrackId}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-entity`}
                className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
              >
                Taxpayer / Client Category <span className="text-[var(--color-destructive)]">*</span>
              </label>
              <select
                id={`${idPrefix}-entity`}
                name="entity-type"
                value={values.entityType}
                onChange={handleFieldChange('entityType')}
                className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] focus:border-[var(--color-primary)]"
              >
                {ENTITY_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id as EntityTypeId}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-forum`}
                className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
              >
                Authority / Forum <span className="text-[var(--color-destructive)]">*</span>
              </label>
              <select
                id={`${idPrefix}-forum`}
                name="forum"
                value={values.forum}
                onChange={handleFieldChange('forum')}
                className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] focus:border-[var(--color-primary)]"
              >
                {FORUM_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id as ForumId}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-urgency`}
                className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
              >
                Timeline / Urgency <span className="text-[var(--color-destructive)]">*</span>
              </label>
              <select
                id={`${idPrefix}-urgency`}
                name="urgency"
                value={values.urgency}
                onChange={handleFieldChange('urgency')}
                className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] focus:border-[var(--color-primary)]"
              >
                {URGENCY_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id as UrgencyId}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-city`}
                className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
              >
                Preferred Regional Chamber <span className="text-[var(--color-destructive)]">*</span>
              </label>
              <select
                id={`${idPrefix}-city`}
                name="preferred-city"
                value={values.preferredCity}
                onChange={handleFieldChange('preferredCity')}
                className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] focus:border-[var(--color-primary)]"
              >
                {OFFICES.map((office) => (
                  <option key={office.id} value={office.id as OfficeCityId}>
                    {office.footerHeading}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* Step 2: Client Credentials & Case Brief */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
            >
              Your Name <span className="text-[var(--color-destructive)]">*</span>
            </label>
            <input
              id={`${idPrefix}-name`}
              name="your-name"
              type="text"
              required
              autoComplete="name"
              maxLength={400}
              value={values.name}
              onChange={handleFieldChange('name')}
              placeholder={CONTACT_PAGE_CONTENT.formFields.namePlaceholder}
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
              className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]"
            />
            {errors.name ? (
              <p
                id={`${idPrefix}-name-error`}
                role="alert"
                className="mt-1.5 text-sm font-semibold text-[var(--color-destructive)]"
              >
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-company`}
              className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
            >
              Company / Firm Name{' '}
              {values.entityType !== 'individual' ? (
                <span className="text-[var(--color-destructive)]">*</span>
              ) : (
                <span className="font-normal text-[var(--color-muted-foreground)]">(Optional)</span>
              )}
            </label>
            <input
              id={`${idPrefix}-company`}
              name="your-company"
              type="text"
              autoComplete="organization"
              maxLength={400}
              value={values.company}
              onChange={handleFieldChange('company')}
              placeholder={CONTACT_PAGE_CONTENT.formFields.companyPlaceholder}
              aria-required={values.entityType !== 'individual'}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? `${idPrefix}-company-error` : undefined}
              className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]"
            />
            {errors.company ? (
              <p
                id={`${idPrefix}-company-error`}
                role="alert"
                className="mt-1.5 text-sm font-semibold text-[var(--color-destructive)]"
              >
                {errors.company}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
            >
              Business Email Address <span className="text-[var(--color-destructive)]">*</span>
            </label>
            <input
              id={`${idPrefix}-email`}
              name="your-email"
              type="email"
              required
              autoComplete="email"
              maxLength={400}
              value={values.email}
              onChange={handleFieldChange('email')}
              placeholder={CONTACT_PAGE_CONTENT.formFields.emailPlaceholder}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
              className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]"
            />
            {errors.email ? (
              <p
                id={`${idPrefix}-email-error`}
                role="alert"
                className="mt-1.5 text-sm font-semibold text-[var(--color-destructive)]"
              >
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-tel`}
              className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
            >
              Direct Contact Number <span className="text-[var(--color-destructive)]">*</span>
            </label>
            <input
              id={`${idPrefix}-tel`}
              name="tel"
              type="tel"
              required
              autoComplete="tel"
              maxLength={400}
              value={values.phone}
              onChange={handleFieldChange('phone')}
              placeholder={CONTACT_PAGE_CONTENT.formFields.phonePlaceholder}
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${idPrefix}-tel-error` : undefined}
              className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]"
            />
            {errors.phone ? (
              <p
                id={`${idPrefix}-tel-error`}
                role="alert"
                className="mt-1.5 text-sm font-semibold text-[var(--color-destructive)]"
              >
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={`${idPrefix}-ntn`}
              className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
            >
              NTN / Show Cause Notice Reference{' '}
              <span className="font-normal text-[var(--color-muted-foreground)]">(Optional, speeds up conflict &amp; record check)</span>
            </label>
            <input
              id={`${idPrefix}-ntn`}
              name="ntn-ref"
              type="text"
              maxLength={200}
              value={values.ntnOrRef}
              onChange={handleFieldChange('ntnOrRef')}
              placeholder={CONTACT_PAGE_CONTENT.formFields.ntnPlaceholder}
              className="tx-transition min-h-[44px] w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={`${idPrefix}-message`}
              className="mb-1.5 block text-sm font-bold text-[var(--color-foreground)]"
            >
              Case Brief &amp; Specific Relief Sought <span className="text-[var(--color-destructive)]">*</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              name="your-message"
              required
              rows={5}
              maxLength={2000}
              value={values.message}
              onChange={handleFieldChange('message')}
              placeholder={CONTACT_PAGE_CONTENT.formFields.messagePlaceholder}
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
              className="tx-transition w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]"
            />
            {errors.message ? (
              <p
                id={`${idPrefix}-message-error`}
                role="alert"
                className="mt-1.5 text-sm font-semibold text-[var(--color-destructive)]"
              >
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>

        {/* Step 3: Anti-Time-Waster Formal Engagement Filter */}
        <div className="mt-5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-4">
          <div className="flex items-start gap-3">
            <input
              id={`${idPrefix}-acknowledge`}
              name="acknowledge-formal"
              type="checkbox"
              checked={values.acknowledgeFormalEngagement}
              onChange={handleFieldChange('acknowledgeFormalEngagement')}
              aria-invalid={Boolean(errors.acknowledgeFormalEngagement)}
              aria-describedby={
                errors.acknowledgeFormalEngagement ? `${idPrefix}-ack-error` : undefined
              }
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
            />
            <label
              htmlFor={`${idPrefix}-acknowledge`}
              className="cursor-pointer text-sm leading-relaxed text-[var(--color-foreground)]"
            >
              <strong>Formal Consultation Confirmation:</strong> I understand this submission is for a formal case assessment or legal retainer engagement (not free verbal tax advice), and consultation fee terms apply once Tax Pulse screens the brief.
            </label>
          </div>
          {errors.acknowledgeFormalEngagement ? (
            <p
              id={`${idPrefix}-ack-error`}
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-destructive)]"
            >
              <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{errors.acknowledgeFormalEngagement}</span>
            </p>
          ) : null}
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-md border border-[var(--color-border-subtle)] bg-white p-3.5 text-xs leading-relaxed text-[var(--color-muted-foreground)]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
          <span>
            Preview Mode: Screening &amp; brief routing run locally in your browser without transmitting data to live{' '}
            <span className="font-semibold text-[var(--color-foreground)]">taxpulse.com</span>. Upon submission, a ready-to-send email brief is prepared for your chosen chamber.
          </span>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="tx-transition inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-7 py-3 text-base font-bold text-[var(--color-on-accent)] hover:bg-[var(--color-accent-hover)]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>{CONTACT_PAGE_CONTENT.formFields.submitLabel}</span>
          </button>
        </div>

        {assessment ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 rounded-md border border-[var(--color-success-border)] bg-[var(--color-success-bg)] p-5 text-sm text-[var(--color-success-ink)]"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-success-ink)]" aria-hidden="true" />
              <div className="flex-1 space-y-3">
                <div>
                  <p className="font-display text-xl font-semibold">
                    Qualified Case Brief Prepared: {assessment.priorityTier}
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Routed to <strong>{assessment.deskName}</strong> ({assessment.office.footerHeading}). Because this is preview mode, no network request was transmitted automatically; use the direct chamber actions below to transmit your structured brief.
                  </p>
                </div>

                <div className="rounded border border-[var(--color-success-border)] bg-white p-3.5 text-xs leading-relaxed text-[var(--color-foreground)]">
                  <pre className="whitespace-pre-wrap font-sans">{assessment.formattedBrief}</pre>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={assessment.mailtoHref}
                    className="tx-transition inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-[var(--color-on-primary)] hover:bg-[var(--color-secondary)]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Send Brief to {assessment.office.city} Desk</span>
                  </a>

                  {assessment.office.phones[0] ? (
                    <a
                      href={assessment.office.phones[0].href}
                      className="tx-transition inline-flex min-h-[42px] items-center gap-2 rounded-md border border-[var(--color-primary)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>Call {assessment.office.phones[0].display}</span>
                    </a>
                  ) : null}

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="tx-transition inline-flex min-h-[42px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-md border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-[var(--color-success-ink)]" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span>{copied ? 'Brief Copied' : 'Copy Case Brief'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
