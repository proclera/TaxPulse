import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Images } from 'lucide-react';
import { GALLERY_ALBUMS, GALLERY_META, type GalleryAlbum } from '../data/gallery.ts';
import { GalleryLightbox } from '../components/GalleryLightbox.tsx';
import { PageBanner } from '../components/PageBanner.tsx';
import { AppLink } from '../components/RouterContext.tsx';

export function GalleryPage() {
  return (
    <>
      <PageBanner title={GALLERY_META.pageTitle} crumbs={[{ label: GALLERY_META.pageTitle }]} />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ALBUMS.map((album, idx) => (
              <article
                key={album.slug}
                className="tx-transition flex flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-sm"
              >
                <AppLink to={`/${album.slug}/`} className="block aspect-[3/2] overflow-hidden bg-[var(--color-muted)]">
                  <img
                    src={album.cover}
                    alt={album.cardTitle}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    fetchPriority={idx === 0 ? 'high' : undefined}
                    className="h-full w-full object-cover"
                  />
                </AppLink>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                      <AppLink to={`/${album.slug}/`} className="hover:underline">
                        {album.cardTitle}
                      </AppLink>
                    </h2>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-hover)]">
                      <Images className="h-4 w-4" aria-hidden="true" />
                      <span>{album.images.length} Photos</span>
                    </p>
                  </div>

                  <div className="mt-4 border-t border-[var(--color-border-subtle)] pt-4">
                    <AppLink
                      to={`/${album.slug}/`}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-accent-hover)] hover:underline"
                    >
                      <span>View Album</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </AppLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function GalleryAlbumPage({ album }: { album: GalleryAlbum }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <PageBanner
        title={album.title}
        crumbs={[
          { label: 'Gallery', to: '/gallery/' },
          { label: album.cardTitle },
        ]}
      />

      <section className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[var(--color-border)] pb-6 sm:flex-row sm:items-end">
            <div>
              <AppLink
                to="/gallery/"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Back to Gallery</span>
              </AppLink>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-primary)]">
                {album.title}
              </h2>
              {album.description ? (
                <div className="mt-3 max-w-[68ch] space-y-3 text-base leading-relaxed text-[var(--color-foreground)]">
                  {album.description.split('\n\n').map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              ) : null}
            </div>
            <p className="shrink-0 text-sm font-bold text-[var(--color-muted-foreground)]">
              {album.images.length} photos
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {album.images.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setActiveIndex(idx);
                }}
                className="tx-transition aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] hover:border-[var(--color-primary)] hover:shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt || `${album.title} — photo ${idx + 1}`}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : undefined}
                  className="h-full w-full object-cover"
                />
                <span className="sr-only">
                  Open {img.alt || `${album.title} photo ${idx + 1}`} in lightbox
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        albumTitle={album.title}
        images={album.images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelectIndex={setActiveIndex}
        returnFocusTo={triggerRef.current}
      />
    </>
  );
}
