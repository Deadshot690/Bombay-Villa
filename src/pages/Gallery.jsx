import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/heroSection/HeroSection';
import { useEffect, useRef, useState } from 'react';

const galleryImages = [
  '/images/Apartment.jpg',
  '/images/IMG_1007.JPG',
  '/images/IMG_1312.JPG',
  '/images/IMG_1607.JPG',
  '/images/IMG_1634.JPG',
  '/images/IMG_1636.JPG',
  '/images/IMG_20260202_134023.jpg',
  '/images/IMG_4607.JPG',
  '/images/IMG_4974.JPG',
  '/images/I-Bomaby-Villa.JPG',
  '/images/I-Bomaby-Villa1.JPG',
  '/images/I-Bomaby-Villa3.JPG',
  '/images/K-Bombay-villa.JPG',
  '/images/K-Bombay-Villa2.JPG',
  '/images/K-Bombay-Villa3.JPG',
  '/images/hotel-apartment.jpg',
  '/images/img.jpeg',
  '/images/img2.jpeg',
  '/images/img3.jpeg',
  '/images/img4.jpeg',
  '/images/new4.jpeg',
  '/images/r1.jpg',
  '/images/r2.jpeg',
  '/images/r4.jpeg',
  '/images/v1.jpeg',
  '/images/v3.jpeg',
  '/images/v4.jpeg',
  '/images/villa5.jpg',
  '/images/woman-working-pharmacy-wearing-coat.jpg',
  '/images/villa.jpg',
  '/images/villa4.jpeg',
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.utils.toArray('.gallery-reveal').forEach((el, i) => {
  //       gsap.fromTo(
  //         el,
  //         { opacity: 0, y: 40 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.6,
  //           delay: ((i % 6) * 0.08),
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: el,
  //             start: 'top 90%',
  //             toggleActions: 'play none none none',
  //           },
  //         }
  //       );
  //     });
  //   }, sectionRef);
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

    return (
      <>
        <Helmet>
          <title>Gallery — Bombay Villa Advisory</title>
          <meta name="description" content="Step inside our world. Discover a curated gallery of our villas, projects, and the lifestyle we create." />
        </Helmet>
        <Header />
        <div style={{ position: 'relative' }}>
          <HeroSection page="Gallery" image="/images/New.jpeg" />
          {/* Bottom gradient fade for Hero section */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '140px',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)',
              width: '100%',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </div>
        <div ref={sectionRef}>
          <div className="pb-32 section-padding" style={{ marginTop: '-80px', position: 'relative', zIndex: 2 }}>
            <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="gallery-reveal break-inside-avoid overflow-hidden cursor-pointer group mb-4"
                  style={{
                    borderRadius: '1.25rem',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
                    backdropFilter: 'blur(2px)',
                    transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                  }}
                  onClick={() => setLightboxIndex(i)}
                  tabIndex={0}
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105"
                    style={{
                      transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
                      borderRadius: '1.25rem',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {lightboxIndex !== null && (
            <div
              className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                className="absolute top-6 right-6 text-primary-foreground text-2xl hover:opacity-70"
                onClick={() => setLightboxIndex(null)}
              >
                ✕
              </button>
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground text-3xl hover:opacity-70"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}
              >
                ‹
              </button>
              <img
                src={galleryImages[lightboxIndex]}
                alt={`Gallery ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground text-3xl hover:opacity-70"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}
              >
                ›
              </button>
            </div>
          )}
        </div>
        {/* Footer is rendered by App.jsx, do not render here to avoid duplicate footers */}
      </>
  );
};

export default Gallery;
