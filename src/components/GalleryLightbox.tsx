import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '../data/gallery.ts';

interface GalleryLightboxProps {
  albumTitle: string;
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  returnFocusTo: HTMLElement | null;
}

export function GalleryLightbox({
  albumTitle,
  images,
  activeIndex,
  onClose,
  onSelectIndex,
  returnFocusTo,
}: GalleryLightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < images.length;

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'ArrowRight' && activeIndex !== null) {
        e.preventDefault();
        onSelectIndex((activeIndex + 1) % images.length);
        return;
      }
      if (e.key === 'ArrowLeft' && activeIndex !== null) {
        e.preventDefault();
        onSelectIndex((activeIndex - 1 + images.length) % images.length);
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (returnFocusTo && document.contains(returnFocusTo)) {
        returnFocusTo.focus();
      }
    };
  }, [isOpen, activeIndex, images.length, onClose, onSelectIndex, returnFocusTo]);

  if (!isOpen || activeIndex === null) return null;

  const current = images[activeIndex];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${albumTitle} image ${activeIndex + 1} of ${images.length}`}
      className="lightbox-enter fixed inset-0 z-50 flex flex-col justify-between bg-[var(--color-dark-backdrop)]/95 p-4 text-[var(--color-on-primary)] sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-on-primary)] sm:text-xl">
            {albumTitle}
          </p>
          <p className="text-xs font-semibold text-[var(--color-on-dark-muted)]">
            Photo {activeIndex + 1} of {images.length}
          </p>
        </div>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="tx-transition inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-[var(--color-dark-border)] bg-[var(--color-dark-surface)] px-3 text-[var(--color-on-primary)] hover:bg-[var(--color-navy-deep)] focus-visible:outline-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-[1100px] flex-1 items-center justify-center gap-3 py-4">
        <button
          type="button"
          onClick={() => onSelectIndex((activeIndex - 1 + images.length) % images.length)}
          aria-label="Previous photo"
          className="tx-transition inline-flex min-h-[48px] min-w-[48px] shrink-0 cursor-pointer items-center justify-center rounded-md border border-[var(--color-dark-border)] bg-[var(--color-dark-surface)] text-[var(--color-on-primary)] hover:bg-[var(--color-navy-deep)] focus-visible:outline-white"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        <figure className="flex max-h-[75dvh] max-w-full flex-col items-center justify-center">
          <img
            src={current.src}
            alt={current.alt || `${albumTitle} — photo ${activeIndex + 1}`}
            className="max-h-[70dvh] w-auto max-w-full rounded border border-[var(--color-dark-border)] bg-[var(--color-dark-surface)] object-contain"
          />
          {current.alt ? (
            <figcaption className="mt-3 text-center text-sm text-[var(--color-on-dark)]">
              {current.alt}
            </figcaption>
          ) : null}
        </figure>

        <button
          type="button"
          onClick={() => onSelectIndex((activeIndex + 1) % images.length)}
          aria-label="Next photo"
          className="tx-transition inline-flex min-h-[48px] min-w-[48px] shrink-0 cursor-pointer items-center justify-center rounded-md border border-[var(--color-dark-border)] bg-[var(--color-dark-surface)] text-[var(--color-on-primary)] hover:bg-[var(--color-navy-deep)] focus-visible:outline-white"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-center gap-2 overflow-x-auto pb-1">
        {images.map((im, idx) => (
          <button
            key={`${im.src}-${idx}`}
            type="button"
            onClick={() => onSelectIndex(idx)}
            aria-label={`View photo ${idx + 1}`}
            aria-current={idx === activeIndex ? 'true' : undefined}
            className={`h-12 w-16 shrink-0 cursor-pointer overflow-hidden rounded border-2 ${
              idx === activeIndex
                ? 'border-[var(--color-accent-light)]'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <img src={im.thumbnail || im.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
