import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  classifyCaseAssessment,
  isValidCity,
  isValidMatterTrack,
  validateConsultationForm,
  type ConsultationFormValues,
} from './validation.ts';

function makeValidValues(overrides: Partial<ConsultationFormValues> = {}): ConsultationFormValues {
  return {
    name: 'Tariq Mahmood',
    company: 'ABC Textiles (Pvt) Ltd.',
    ntnOrRef: 'NTN 1234567-8',
    email: 'tariq@abctextiles.pk',
    phone: '+92 300 1234567',
    matterTrack: 'litigation',
    entityType: 'company',
    forum: 'high-supreme-court',
    urgency: 'urgent-7d',
    preferredCity: 'lahore',
    message: 'Show cause notice u/s 122(5A) for Tax Year 2023; hearing scheduled next week.',
    acknowledgeFormalEngagement: true,
    ...overrides,
  };
}

describe('consultation assessment validation & triage', () => {
  it('flags missing required fields, short vague messages, and unconfirmed formal engagement acknowledgement', () => {
    const empty = validateConsultationForm(
      makeValidValues({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: 'free question',
        acknowledgeFormalEngagement: false,
      }),
    );
    assert.equal(empty.valid, false);
    assert.ok(empty.errors.name);
    assert.ok(empty.errors.company);
    assert.ok(empty.errors.email);
    assert.ok(empty.errors.phone);
    assert.ok(empty.errors.message);
    assert.ok(empty.errors.acknowledgeFormalEngagement);
  });

  it('allows blank company name when entityType is individual while rejecting malformed email/phone', () => {
    const bad = validateConsultationForm(
      makeValidValues({
        entityType: 'individual',
        company: '',
        email: 'not-an-email',
        phone: '123',
      }),
    );
    assert.equal(bad.valid, false);
    assert.equal(bad.errors.company, undefined);
    assert.ok(bad.errors.email);
    assert.ok(bad.errors.phone);
  });

  it('passes valid qualified enquiries and routes priority tier and regional office brief', () => {
    const validInput = makeValidValues();
    const result = validateConsultationForm(validInput);
    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, {});

    const classified = classifyCaseAssessment(validInput);
    assert.equal(classified.office.id, 'lahore');
    assert.equal(classified.priorityTier, 'Priority Litigation Screening');
    assert.match(classified.formattedBrief, /Lahore Office/);
    assert.match(classified.mailtoHref, /^mailto:info@taxpulse\.com\?subject=/);
  });

  it('validates URL query param guards for hero-to-contact triage', () => {
    assert.equal(isValidMatterTrack('retainer'), true);
    assert.equal(isValidMatterTrack('invalid'), false);
    assert.equal(isValidCity('multan'), true);
    assert.equal(isValidCity(null), false);
  });
});
