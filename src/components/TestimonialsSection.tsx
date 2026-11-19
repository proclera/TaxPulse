import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CLIENTS_META, TESTIMONIALS } from '../data/clients.ts';

interface TestimonialsSectionProps {
  useHomeVariants?: boolean;
  backgroundClassName?: string;
}

export function TestimonialsSection({
  useHomeVariants = false,
  backgroundClassName = 'bg-[var(--color-surface-warm)]',
}: TestimonialsSectionProps) {
  const [active, setActive] = useState(0);
  const item = TESTIMONIALS[active];
  const paragraphs = useHomeVariants && item.homeParagraphs ? item.homeParagraphs : item.paragraphs;
  const go = (offset: number) => setActive((current) => (current + offset + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section aria-labelledby="testimonials-heading" className={`border-y border-[var(--color-border)] ${backgroundClassName}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--color-border)] pb-6">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">Client perspectives</p>
            <h2 id="testimonials-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl">{CLIENTS_META.testimonialsHeading}</h2>
          </div>
          <div className="flex items-center gap-2" aria-label="Testimonial navigation">
            <span className="mr-2 text-sm font-semibold text-[var(--color-muted-foreground)]">{active + 1} / {TESTIMONIALS.length}</span>
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="slider-control"><ChevronLeft className="h-5 w-5" aria-hidden="true" /></button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="slider-control"><ChevronRight className="h-5 w-5" aria-hidden="true" /></button>
          </div>
        </div>
        <article key={item.id} className="testimonial-enter rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_48px_rgba(15,36,94,0.06)] sm:p-10" aria-live="polite" aria-atomic="true">
          <Quote className="mb-5 h-8 w-8 text-[var(--color-accent)]" aria-hidden="true" />
          <blockquote className="max-w-[80ch] space-y-4 text-base leading-relaxed text-[var(--color-foreground)] sm:text-lg">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </blockquote>
          <footer className="mt-7 border-t border-[var(--color-border-subtle)] pt-5">
            <cite className="font-display text-xl font-semibold not-italic text-[var(--color-primary)]">{item.attribution}</cite>
          </footer>
        </article>
      </div>
    </section>
  );
}
