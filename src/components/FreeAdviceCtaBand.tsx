import { PhoneCall } from 'lucide-react';
import { HOME_CONTENT } from '../data/firm.ts';
import { AppLink } from './RouterContext.tsx';

interface FreeAdviceCtaBandProps {
  buttonLabel?: string;
}

export function FreeAdviceCtaBand({
  buttonLabel = HOME_CONTENT.freeAdviceCta.buttonLabel,
}: FreeAdviceCtaBandProps) {
  return (
    <section
      className="border-y border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
      aria-label={HOME_CONTENT.freeAdviceCta.heading}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8 lg:py-12">
        <div className="max-w-[65ch]">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-on-primary)] sm:text-3xl">
            {HOME_CONTENT.freeAdviceCta.heading}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-[var(--color-on-dark)]">
            {HOME_CONTENT.freeAdviceCta.body}
          </p>
        </div>
        <AppLink
          to="/contact-us/"
          className="tx-transition inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-base font-bold text-[var(--color-on-accent)] hover:bg-[var(--color-accent-hover)] focus-visible:outline-white"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          <span>{buttonLabel}</span>
        </AppLink>
      </div>
    </section>
  );
}
