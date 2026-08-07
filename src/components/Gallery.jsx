import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function Gallery({ viewAll = false }) {
  const galleryImages = Object.values(
    import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp,svg}', {
      eager: true,
      as: 'url',
    }),
  )
    .filter((src) => !src.includes('20200918_173115~2'))
    .sort()

  const [activeIndex, setActiveIndex] = useState(0)

  const activeImage = galleryImages[activeIndex]
  const imageAlt = useMemo(() => {
    if (!activeImage) return ''
    return activeImage
      .split('/')
      .pop()
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]/g, ' ')
  }, [activeImage])

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  const sectionId = viewAll ? 'gallery-all' : 'gallery'

  return (
    <section id={sectionId} className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Gallery</p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)] sm:text-4xl">
              {viewAll ? 'All project images' : 'Explore our completed projects and design inspiration.'}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--accent)]">
              {viewAll
                ? 'Browse the full gallery of images showcasing our vastu-aligned and modern construction work.'
                : 'A compact carousel preview of our project gallery. Click View all to explore every image.'}
            </p>
          </div>
          {viewAll ? (
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent)] bg-[color:var(--panel)]/90 px-5 py-3 text-sm font-semibold text-[color:var(--accent)] transition hover:bg-[color:var(--accent)]/10"
            >
              Return to homepage
            </a>
          ) : (
            <a
              href="#gallery-all"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              View all
            </a>
          )}
        </div>

        {galleryImages.length > 0 ? (
          viewAll ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, index) => {
                const alt = src
                  .split('/')
                  .pop()
                  .replace(/\.[^.]+$/, '')
                  .replace(/[-_]/g, ' ')
                return (
                  <article
                    key={`${alt}-${index}`}
                    className="overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)]/80 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="h-72 w-full object-cover transition duration-300 hover:scale-105"
                    />
                    <div className="border-t border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-4 text-sm text-[color:var(--text)]">
                      <p className="font-semibold">{alt}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="mt-10 grid gap-8 xl:grid-cols-[0.95fr_0.45fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]/80 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                <img
                  src={activeImage}
                  alt={imageAlt}
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-6 py-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] opacity-80">Featured image</p>
                  <p className="mt-2 text-xl font-semibold">{imageAlt}</p>
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center px-4">
                  <button
                    onClick={handlePrevious}
                    type="button"
                    className="rounded-full bg-black/35 p-3 text-white transition hover:bg-black/55"
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={18} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center px-4">
                  <button
                    onClick={handleNext}
                    type="button"
                    className="rounded-full bg-black/35 p-3 text-white transition hover:bg-black/55"
                    aria-label="Next image"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="grid gap-4">
                {galleryImages.slice(0, 4).map((src, index) => {
                  const alt = src
                    .split('/')
                    .pop()
                    .replace(/\.[^.]+$/, '')
                    .replace(/[-_]/g, ' ')
                  return (
                    <button
                      key={`${alt}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`overflow-hidden rounded-[1.5rem] border px-0 py-0 transition ${
                        activeIndex === index ? 'border-[color:var(--accent)] ring-2 ring-[color:var(--accent)]/20' : 'border-[color:var(--border)]'
                      }`}
                    >
                      <img src={src} alt={alt} className="h-32 w-full object-cover" />
                    </button>
                  )
                })}
                <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 p-5 text-sm text-[color:var(--text)]">
                  <p className="font-semibold">Gallery overview</p>
                  <p className="mt-3 leading-7 text-[color:var(--accent)]">Swipe through the carousel preview and click View all to see every image on one page.</p>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="mt-10 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)]/80 p-10 text-center text-[color:var(--accent)]">
            <p className="font-medium">Gallery images will appear here once you add files to <code>src/assets/gallery</code>.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
