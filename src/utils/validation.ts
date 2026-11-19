import { OFFICES, type OfficeLocation } from '../data/offices.ts';

export type MatterTrackId =
  | 'litigation'
  | 'retainer'
  | 'international'
  | 'compliance'
  | 'fia-nab';

export type EntityTypeId = 'company' | 'mnc' | 'aop' | 'individual';

export type ForumId =
  | 'fbr-ir'
  | 'srb-pra'
  | 'customs'
  | 'atir-tribunal'
  | 'high-supreme-court'
  | 'fia-nab-regulatory';

export type UrgencyId = 'urgent-7d' | 'active-30d' | 'planning-retainer';

export type OfficeCityId = 'karachi' | 'lahore' | 'islamabad' | 'multan';

export interface MatterTrackOption {
  id: MatterTrackId;
  label: string;
  shortLabel: string;
  deskName: string;
}

export const MATTER_TRACK_OPTIONS: MatterTrackOption[] = [
  {
    id: 'litigation',
    label: 'Tax Litigation / Show Cause Notice / Appeal',
    shortLabel: 'Litigation & Appeals',
    deskName: 'Appellate & Constitutional Litigation Desk',
  },
  {
    id: 'retainer',
    label: 'Corporate Tax Retainer-ship (Monthly Advisory)',
    shortLabel: 'Corporate Retainer',
    deskName: 'Corporate Retainer-ship Desk',
  },
  {
    id: 'international',
    label: 'International / Cross-Border Tax & Treaty Advisory',
    shortLabel: 'International Tax',
    deskName: 'International Taxation Practice',
  },
  {
    id: 'compliance',
    label: 'Tax Compliance, Audit Defense & Filing',
    shortLabel: 'Compliance & Audit',
    deskName: 'Compliance & Audit Defense Desk',
  },
  {
    id: 'fia-nab',
    label: 'FBR / SRB / Customs / FIA / NAB Representation',
    shortLabel: 'Customs / FIA / NAB',
    deskName: 'Regulatory & Special Tribunals Desk',
  },
];

export const ENTITY_TYPE_OPTIONS: { id: EntityTypeId; label: string }[] = [
  { id: 'company', label: 'Private / Public Limited Company' },
  { id: 'mnc', label: 'Multinational / Foreign Enterprise' },
  { id: 'aop', label: 'AOP / Partnership / Firm' },
  { id: 'individual', label: 'High-Net-Worth Individual / Sole Proprietor' },
];

export const FORUM_OPTIONS: { id: ForumId; label: string }[] = [
  { id: 'fbr-ir', label: 'FBR / Commissioner Inland Revenue' },
  { id: 'srb-pra', label: 'Provincial Revenue (SRB / PRA / KPRA / BRA)' },
  { id: 'customs', label: 'Pakistan Customs / Customs Appellate Tribunal' },
  { id: 'atir-tribunal', label: 'ATIR (Appellate Tribunal Inland Revenue)' },
  { id: 'high-supreme-court', label: 'High Court / Supreme Court of Pakistan' },
  { id: 'fia-nab-regulatory', label: 'FIA / NAB / Corporate Regulator' },
];

export const URGENCY_OPTIONS: { id: UrgencyId; label: string }[] = [
  { id: 'urgent-7d', label: 'Urgent Notice / Hearing within 7 Days' },
  { id: 'active-30d', label: 'Active Proceeding / Assessment (14–30 Days)' },
  { id: 'planning-retainer', label: 'Transaction Advisory / Retainer Onboarding' },
];

export interface ConsultationFormValues {
  name: string;
  company: string;
  ntnOrRef: string;
  email: string;
  phone: string;
  matterTrack: MatterTrackId;
  entityType: EntityTypeId;
  forum: ForumId;
  urgency: UrgencyId;
  preferredCity: OfficeCityId;
  message: string;
  acknowledgeFormalEngagement: boolean;
}

export type ConsultationFieldErrors = Partial<Record<keyof ConsultationFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s().-]{6,22}$/;

export function isValidMatterTrack(val: string | null): val is MatterTrackId {
  return MATTER_TRACK_OPTIONS.some((o) => o.id === val);
}

export function isValidCity(val: string | null): val is OfficeCityId {
  return OFFICES.some((o) => o.id === val);
}

export function validateConsultationForm(values: ConsultationFormValues): {
  valid: boolean;
  errors: ConsultationFieldErrors;
} {
  const errors: ConsultationFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  }

  if (values.entityType !== 'individual' && !values.company.trim()) {
    errors.company = 'Please enter your company or firm name.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Please enter your business email address.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = 'Please enter your direct contact number.';
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = 'Please enter a valid contact number.';
  }

  const msg = values.message.trim();
  if (!msg) {
    errors.message = 'Please summarize your notice, tax section, or legal mandate.';
  } else if (msg.length < 20) {
    errors.message =
      'Please provide brief case context (at least 20 characters, e.g. tax year, notice section, or forum) for effective case screening.';
  }

  if (!values.acknowledgeFormalEngagement) {
    errors.acknowledgeFormalEngagement =
      'Please confirm that this request is for a formal legal assessment / engagement rather than free verbal tax advice.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface CaseAssessmentClassification {
  office: OfficeLocation;
  deskName: string;
  matterLabel: string;
  entityLabel: string;
  forumLabel: string;
  urgencyLabel: string;
  priorityTier: 'Priority Litigation Screening' | 'Corporate Mandate Review' | 'Standard Case Screening';
  formattedBrief: string;
  mailtoHref: string;
}

export function classifyCaseAssessment(values: ConsultationFormValues): CaseAssessmentClassification {
  const office = OFFICES.find((o) => o.id === values.preferredCity) || OFFICES[0];
  const matter =
    MATTER_TRACK_OPTIONS.find((m) => m.id === values.matterTrack) || MATTER_TRACK_OPTIONS[0];
  const entity =
    ENTITY_TYPE_OPTIONS.find((e) => e.id === values.entityType) || ENTITY_TYPE_OPTIONS[0];
  const forum = FORUM_OPTIONS.find((f) => f.id === values.forum) || FORUM_OPTIONS[0];
  const urgency = URGENCY_OPTIONS.find((u) => u.id === values.urgency) || URGENCY_OPTIONS[0];

  const priorityTier =
    values.urgency === 'urgent-7d' || values.forum === 'high-supreme-court'
      ? 'Priority Litigation Screening'
      : values.matterTrack === 'retainer' || values.entityType === 'mnc'
        ? 'Corporate Mandate Review'
        : 'Standard Case Screening';

  const lines = [
    `TAX PULSE — FORMAL CASE ASSESSMENT BRIEF`,
    `Priority Tier: ${priorityTier}`,
    `Assigned Desk: ${matter.deskName}`,
    `Preferred Chambers: ${office.footerHeading} (${office.phones[0]?.display || ''})`,
    ``,
    `Client Name: ${values.name.trim()}`,
    `Organization: ${values.company.trim() || 'Individual'}`,
    ...(values.ntnOrRef.trim() ? [`NTN / Notice Ref: ${values.ntnOrRef.trim()}`] : []),
    `Entity Category: ${entity.label}`,
    `Email: ${values.email.trim()}`,
    `Direct Phone: ${values.phone.trim()}`,
    ``,
    `Matter Track: ${matter.label}`,
    `Forum / Authority: ${forum.label}`,
    `Proceeding Urgency: ${urgency.label}`,
    `Formal Paid Engagement Terms Acknowledged: Yes`,
    ``,
    `Case Summary:`,
    values.message.trim(),
  ];

  const formattedBrief = lines.join('\n');
  const subject = `[${priorityTier}] ${matter.shortLabel} — ${values.company.trim() || values.name.trim()} (${office.city})`;
  const mailtoHref = `mailto:${office.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBrief)}`;

  return {
    office,
    deskName: matter.deskName,
    matterLabel: matter.label,
    entityLabel: entity.label,
    forumLabel: forum.label,
    urgencyLabel: urgency.label,
    priorityTier,
    formattedBrief,
    mailtoHref,
  };
}
