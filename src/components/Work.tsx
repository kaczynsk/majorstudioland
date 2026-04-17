import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

/* ── branding gallery (21 pages) ── */
const brandingPages = Array.from({ length: 21 }, (_, i) => ({
  src: `/work/branding/Asset-${String(i + 1).padStart(2, '0')}.png`,
  alt: `Brand guideline page ${i + 1}`,
}));

export default function Work() {
  const { t } = useLanguage();
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
    let timeout: ReturnType<typeof setTimeout>;
    const el = galleryRef.current;
    if (!el) return;

    // Pre-computed random visit order (shuffled 0..20 indices)
    const makeOrder = () => {
      const arr = Array.from({ length: 21 }, (_, i) => i);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    let visitOrder = makeOrder();
    let step = 0;

    const visitNext = () => {
      if (isPaused.current || isDragging.current) {
        timeout = setTimeout(visitNext, 800);
        return;
      }
      if (step >= visitOrder.length) {
        visitOrder = makeOrder();
        step = 0;
      }
      const targetIndex = visitOrder[step++];
      const cards = el.querySelectorAll('[data-gallery-card]');
      const card = cards[targetIndex] as HTMLElement | undefined;
      if (card) {
        const cardLeft = card.offsetLeft;
        const offset = cardLeft - (el.clientWidth / 2) + (card.offsetWidth / 2);
        el.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
      }
      // Wait 1.5 – 3.5 s before next jump
      const delay = 1500 + Math.random() * 2000;
      timeout = setTimeout(visitNext, delay);
    };

    timeout = setTimeout(visitNext, 1800);
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
              <span className="section-label">{t('work_label')}</span>
              <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '0.75rem' }}>
                {t('work_title1')}<br />
                <span className="gradient-text">{t('work_title2')}</span>
              </h2>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
              color: 'var(--text-tertiary)', maxWidth: '400px', lineHeight: 1.7, fontWeight: 300,
            }}>
              {t('work_desc')}
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
                {t('work_id_title')} — {t('work_id_subtitle')}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.85rem',
                color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '520px',
              }}>
                {t('work_id_desc')}
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
              {t('work_id_pages')}
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
                  scrollSnapAlign: 'center',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77, 54, 139, 0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77, 54, 139, 0.15)';
                }}
                data-gallery-card
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
        gap: '1.5rem',
        padding: '0 2.5rem',
      }} className="work-service-grid">

        {/* ── A: Social Media Content (spans 2 rows) ── */}
        <div className="work-card service-card-social" style={{
          gridRow: 'span 2',
          gridColumn: '1 / 2',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(245, 245, 247, 0.8)',
          border: '1px solid rgba(77, 54, 139, 0.1)',
          minHeight: '520px',
        }}>
          {/* Scrollable feed — gentle oscillate, fixed height, no empty space */}
          <div style={{
            position: 'absolute', inset: 0,
            overflow: 'hidden',
          }}>
            <div className="social-feed-scroll" style={{
              display: 'flex', flexDirection: 'column', gap: '0',
              willChange: 'transform',
            }}>
              <img
                src="/work/social-media/Split 1.png"
                alt="Social media content feed part 1"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
              <img
                src="/work/social-media/Split 2.png"
                alt="Social media content feed part 2"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
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
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_social_tag1')}</span>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_social_tag2')}</span>
            </div>
            <h3 style={{
              fontFamily: "'Readex Pro', sans-serif", fontSize: '1.2rem',
              fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem',
            }}>
              {t('work_grid_social_title')}
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.78rem',
              color: 'var(--text-secondary)', lineHeight: 1.5,
            }}>
              {t('work_grid_social_desc')}
            </p>
          </div>
        </div>

        {/* ── B: Paid Advertising ── */}
        <div className="work-card" style={{
          gridColumn: '2 / 3',
          gridRow: '1 / 2',
          borderRadius: '24px',
          background: 'rgba(245, 245, 247, 0.8)',
          border: '1px solid rgba(77, 54, 139, 0.1)',
          padding: '1.25rem',
        }}>
          {/* 4 portrait ad images in a 2×2 grid, natural ratio */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem', marginBottom: '1rem',
          }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{
                borderRadius: '10px', overflow: 'hidden',
                border: '1px solid rgba(77, 54, 139, 0.12)',
                cursor: 'pointer', transition: 'transform 0.2s ease',
                aspectRatio: '200 / 373',
              }}
                onClick={() => openLightbox(`/work/ads/Ads-0${n}.png`, `Ad campaign ${n}`)}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >
                <img
                  src={`/work/ads/Ads-0${n}.png`}
                  alt={`Ad campaign ${n}`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_ads_tag1')}</span>
            <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_ads_tag2')}</span>
          </div>
          <h3 style={{
            fontFamily: "'Readex Pro', sans-serif", fontSize: '1.05rem',
            fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem',
          }}>
            {t('work_grid_ads_title')}
          </h3>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '0.72rem',
            color: 'var(--text-secondary)', lineHeight: 1.4,
          }}>
            {t('work_grid_ads_desc')}
          </p>
        </div>

        {/* ── C: Graphic Design ── */}
        <div className="work-card" style={{
          gridColumn: '3 / 4',
          gridRow: '1 / 2',
          borderRadius: '24px',
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
                borderRadius: '10px', overflow: 'hidden',
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
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_graphic_tag1')}</span>
            <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_graphic_tag2')}</span>
          </div>
          <h3 style={{
            fontFamily: "'Readex Pro', sans-serif", fontSize: '1.05rem',
            fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem',
          }}>
            {t('work_grid_graphic_title')}
          </h3>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '0.72rem',
            color: 'var(--text-secondary)', lineHeight: 1.4,
          }}>
            {t('work_grid_graphic_desc')}
          </p>
        </div>

        {/* ── D: Video Production — full-bleed hero spanning cols 2-3, row 2 ── */}
        <div className="work-card" style={{
          gridColumn: '2 / 4',
          gridRow: '2 / 3',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(77, 54, 139, 0.1)',
          minHeight: '280px',
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
          {/* Gradient overlay — bottom only so image stays visible */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65) 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '1.5rem',
            zIndex: 2,
          }}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_video_tag1')}</span>
              <span className="tag-pill" style={{ fontSize: '0.58rem' }}>{t('work_grid_video_tag2')}</span>
            </div>
            <h3 style={{
              fontFamily: "'Readex Pro', sans-serif", fontSize: '1.15rem',
              fontWeight: 700, color: '#fff', marginBottom: '0.2rem',
            }}>
              {t('work_grid_video_title')}
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, maxWidth: '520px',
            }}>
              {t('work_grid_video_desc')}
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
              {t('work_cta_text')}
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
              style={{ textDecoration: 'none', padding: '0.6rem 1.6rem', fontSize: '0.82rem' }}
            >
              {t('work_cta_btn')}
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

        /* social feed gentle oscillate — fixed pixel drift, never empty */
        .social-feed-scroll {
          animation: socialScroll 20s ease-in-out infinite;
        }
        .service-card-social:hover .social-feed-scroll {
          animation-play-state: paused;
        }

        @keyframes socialScroll {
          0%   { transform: translateY(0px); }
          48%  { transform: translateY(-130px); }
          52%  { transform: translateY(-130px); }
          100% { transform: translateY(0px); }
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
