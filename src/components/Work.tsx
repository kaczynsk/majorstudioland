import { useState, useRef, useEffect } from 'react';

/* ── branding gallery (21 pages) ── */
const brandingPages = Array.from({ length: 21 }, (_, i) => ({
  src: `/work/branding/Asset-${String(i + 1).padStart(2, '0')}.png`,
  alt: `Brand guideline page ${i + 1}`,
}));

export default function Work() {
  /* ── lightbox state ── */
  const [lightbox, setLightbox] = useState<{ open: boolean; src: string; alt: string }>({
    open: false,
    src: '',
    alt: '',
  });

  /* ── horizontal scroll for gallery ── */
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);


  const isPaused = useRef(false);

  useEffect(() => {
    let timeout: any;
    const el = galleryRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused.current && el && !isDragging.current) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Jump to next section with variable distance
          const jump = Math.floor(Math.random() * 300) + 300;
          el.scrollBy({ left: jump, behavior: 'smooth' });
        }
      }
      // Next jump will take place in 2 to 4 seconds
      timeout = setTimeout(tick, Math.floor(Math.random() * 2000) + 2000);
    };

    timeout = setTimeout(tick, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    startX.current = e.pageX - (galleryRef.current?.offsetLeft || 0);
    scrollLeft.current = galleryRef.current?.scrollLeft || 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (galleryRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (galleryRef.current) galleryRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    setTimeout(() => { isPaused.current = false; }, 2000);
  };

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ open: true, src, alt });
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightbox({ open: false, src: '', alt: '' });
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="work" style={{ padding: '7rem 0', maxWidth: '1400px', margin: '0 auto' }}>
        {/* ── Section Header ── */}
        <div style={{ padding: '0 2.5rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-label">Our Work</span>
              <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '0.75rem' }}>
                Real projects,<br />
                <span className="gradient-text">real results.</span>
              </h2>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
              color: 'var(--text-tertiary)', maxWidth: '400px', lineHeight: 1.7, fontWeight: 300,
            }}>
              From a full brand identity to social content, ads, and video — here's what we deliver when a client trusts us with their vision.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            ★  HERO CASE STUDY — MAJOR Brand Identity
           ══════════════════════════════════════════════ */}
        <div style={{
          background: 'rgba(245, 245, 247, 0.8)',
          border: '1px solid rgba(77, 54, 139, 0.1)',
          borderRadius: '28px',
          margin: '0 2.5rem 3rem',
          overflow: 'hidden',
        }}>
          {/* Top bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2rem 2.5rem 1.5rem', flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                {['Branding', 'Identity', 'Strategy', 'Design System'].map(tag => (
                  <span key={tag} className="tag-pill" style={{ fontSize: '0.6rem' }}>{tag}</span>
                ))}
              </div>
              <h3 style={{
                fontFamily: "'Readex Pro', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem',
              }}>
                MAJOR — Full Brand Identity
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.85rem',
                color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '520px',
              }}>
                A complete graphic charter for an innovative educational platform — from logo design and color systems to mascot creation, typography, and bilingual social media templates. 21 pages of structured brand identity.
              </p>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: "'Inter', sans-serif", fontSize: '0.7rem',
              color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              21 Pages · Auto-browsing
            </div>
          </div>

          {/* Horizontal scroll gallery */}
          <div
            ref={galleryRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseEnter={() => { isPaused.current = true; }}
            onTouchStart={() => { isPaused.current = true; }}
            onTouchEnd={() => { setTimeout(() => { isPaused.current = false; }, 2000); }}
            style={{
              display: 'flex', gap: '1rem',
              overflowX: 'auto', overflowY: 'hidden',
              padding: '0 2.5rem 2rem',
              cursor: isDragging.current ? 'grabbing' : 'grab',
              scrollbarWidth: 'none',
              userSelect: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {brandingPages.map((page, i) => (
              <div
                key={i}
                onClick={() => openLightbox(page.src, page.alt)}
                style={{
                  flex: '0 0 auto',
                  width: 'clamp(260px, 30vw, 360px)',
                  aspectRatio: '16/9',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(77, 54, 139, 0.15)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77, 54, 139, 0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77, 54, 139, 0.15)';
                }}
              >
                <img
                  src={page.src}
                  alt={page.alt}
                  loading="lazy"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Page number overlay */}
                <div style={{
                  position: 'absolute', bottom: '0.6rem', right: '0.6rem',
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                  borderRadius: '6px', padding: '0.2rem 0.5rem',
                  fontFamily: "'Inter', sans-serif", fontSize: '0.6rem',
                  color: 'var(--bg-white)',
                }}>
                  {i + 1} / 21
                </div>
              </div>
            ))}
          </div>

          {/* Scroll track indicator */}
          <div style={{
            margin: '0 2.5rem 1.5rem',
            height: '2px', background: 'rgba(77, 54, 139, 0.15)', borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: '30%', height: '100%',
              background: 'linear-gradient(90deg, #4d368b, #fbaf17)',
              borderRadius: '2px',
              animation: 'scrollIndicator 8s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SERVICE SHOWCASE GRID
           ══════════════════════════════════════════════ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '1.5rem',
        padding: '0 2.5rem',
      }} className="work-service-grid">

        {/* ── A: Social Media Content (spans 2 rows, fills available height) ── */}
        <div className="work-card service-card-social" style={{
          gridRow: 'span 2',
          gridColumn: '1 / 2',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(245, 245, 247, 0.8)',
            border: '1px solid rgba(77, 54, 139, 0.1)',
          }}>
            {/* Scrollable feed */}
            <div style={{
              width: '100%', height: '100%',
              overflow: 'hidden', position: 'relative',
            }}>
              <div className="social-feed-scroll" style={{
                display: 'flex', flexDirection: 'column', gap: '0',
              }}>
                <img
                  src="/work/social-media/Split 1.png"
                  alt="Social media content feed part 1"
                  loading="lazy"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                />
                <img
                  src="/work/social-media/Split 2.png"
                  alt="Social media content feed part 2"
                  loading="lazy"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          {/* Overlay info */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(255,255,255,0.98) 60%)',
            padding: '3rem 1.5rem 1.5rem',
            zIndex: 2,
          }}>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Social Media</span>
                <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Content</span>
              </div>
              <h3 style={{
                fontFamily: "'Readex Pro', sans-serif", fontSize: '1.2rem',
                fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem',
              }}>
                Social Media Management
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.78rem',
                color: 'var(--text-secondary)', lineHeight: 1.5,
              }}>
                30+ reels and video thumbnails with a cohesive visual identity across the entire Instagram feed.
              </p>
            </div>
          </div>

        {/* ── B: Paid Advertising (Smaller Card) ── */}
        <div className="work-card" style={{
          gridColumn: '2 / 3',
          gridRow: '1 / 2',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(245, 245, 247, 0.8)',
            border: '1px solid rgba(77, 54, 139, 0.1)',
            padding: '1.25rem',
          }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem', marginBottom: '1rem',
          }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{
                  borderRadius: '12px', overflow: 'hidden',
                  border: '1px solid rgba(77, 54, 139, 0.12)',
                  cursor: 'pointer', transition: 'transform 0.2s ease',
                }}
                  onClick={() => openLightbox(`/work/ads/Ads-0${n}.png`, `Ad campaign ${n}`)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                >
                  <img
                    src={`/work/ads/Ads-0${n}.png`}
                    alt={`Ad campaign ${n}`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '9/16' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Facebook Ads</span>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Instagram Ads</span>
            </div>
            <h3 style={{
              fontFamily: "'Readex Pro', sans-serif", fontSize: '1.1rem',
              fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem',
            }}>
              Paid Advertising
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
              color: 'var(--text-secondary)', lineHeight: 1.5,
            }}>
              From concept and design to publishing — targeted ad campaigns across Facebook and Instagram that drive installs and engagement.
            </p>
          </div>

        {/* ── C: Graphic Design (Smaller Card) ── */}
        <div className="work-card" style={{
          gridColumn: '3 / 4',
          gridRow: '1 / 2',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(245, 245, 247, 0.8)',
            border: '1px solid rgba(77, 54, 139, 0.1)',
            padding: '1.25rem',
          }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem', marginBottom: '1rem',
          }}>
            {[
              { src: '/work/graphic-design/Printables Designs1.png', alt: 'Ignite Algiers badge design' },
              { src: '/work/graphic-design/Printables Designs2.png', alt: 'Ignite Algiers roll-up banners' },
            ].map((img, i) => (
                <div key={i} style={{
                  borderRadius: '12px', overflow: 'hidden',
                  border: '1px solid rgba(77, 54, 139, 0.12)',
                  cursor: 'pointer', transition: 'transform 0.2s ease',
                  aspectRatio: '1',
                }}
                  onClick={() => openLightbox(img.src, img.alt)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Print</span>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Event Design</span>
            </div>
            <h3 style={{
              fontFamily: "'Readex Pro', sans-serif", fontSize: '1.1rem',
              fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem',
            }}>
              Graphic Design
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
              color: 'var(--text-secondary)', lineHeight: 1.5,
            }}>
              Event printables for Ignite Algiers and product visuals for retail — from concept to print-ready files.
            </p>
          </div>

        {/* ── D: Video Production (Wide Card) ── */}
        <div className="work-card" style={{
          gridColumn: '2 / 4',
          gridRow: '2 / 3',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(245, 245, 247, 0.8)',
            border: '1px solid rgba(77, 54, 139, 0.1)',
            minHeight: '220px',
          }}>
            <img
              src="/work/video/podcast-setup.jpeg"
              alt="Video production studio setup"
              loading="lazy"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                position: 'absolute', inset: 0, display: 'block',
              }}
            />
            {/* Dark overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(17,17,22,0.7), rgba(17,17,22,0.4))',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(17,17,22,0.9) 70%)',
              padding: '3rem 1.5rem 1.5rem',
              zIndex: 2,
            }}>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Video</span>
                <span className="tag-pill" style={{ fontSize: '0.58rem' }}>Podcasts</span>
              </div>
              <h3 style={{
                fontFamily: "'Readex Pro', sans-serif", fontSize: '1.1rem',
                fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem',
              }}>
                Video Production & Podcasts
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
                color: 'var(--text-secondary)', lineHeight: 1.5,
              }}>
                Professional multi-camera setups for video podcasts and talking-head content — from lighting to final edit.
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA row ── */}
        <div style={{
          marginTop: '3rem', padding: '0 2.5rem',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', padding: '2rem',
            borderRadius: '16px',
            background: 'rgba(77, 54, 139, 0.06)',
            border: '1px solid rgba(77, 54, 139, 0.15)',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              color: 'var(--text-secondary)', fontSize: '0.9rem',
            }}>
              Ready to be our next success story?
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
              style={{ textDecoration: 'none', padding: '0.6rem 1.6rem', fontSize: '0.82rem' }}
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LIGHTBOX OVERLAY
         ══════════════════════════════════════════════ */}
      {lightbox.open && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '12px',
              cursor: 'default',
              animation: 'scaleIn 0.25s ease',
            }}
          />
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              borderRadius: '50%', width: '44px', height: '44px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-primary)', fontSize: '1.2rem', transition: 'background 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.05)'; }}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Scoped Styles ── */}
      <style>{`
        /* scrollbar hide */
        [style*="overflowX: auto"]::-webkit-scrollbar { display: none; }

        /* social feed auto-scroll animation */
        .social-feed-scroll {
          animation: socialScroll 15s linear infinite;
        }
        .service-card-social:hover .social-feed-scroll {
          animation-play-state: paused;
        }

        @keyframes socialScroll {
          0% { transform: translateY(0); }
          45% { transform: translateY(calc(-100% + 500px)); }
          55% { transform: translateY(calc(-100% + 500px)); }
          100% { transform: translateY(0); }
        }

        /* scroll track indicator */
        @keyframes scrollIndicator {
          0% { transform: translateX(0); }
          50% { transform: translateX(230%); }
          100% { transform: translateX(0); }
        }

        /* lightbox animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Service grid responsive */
        @media (max-width: 900px) {
          .work-service-grid {
            grid-template-columns: 1fr !important;
          }
          .work-card {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
          }
          .service-card-social {
            max-height: 500px;
          }
        }
      `}</style>
    </>
  );
}
