import { useEffect, useRef } from 'react';
import Logo from './Logo';
import { useLanguage } from '../i18n/LanguageContext';

const words = ['Brands.', 'Products.', 'Experiences.', 'Futures.'];

export default function Hero() {
  const { t } = useLanguage();
  const wordRef = useRef<HTMLSpanElement>(null);
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const type = () => {
      const current = words[wordIndex.current];
      if (!wordRef.current) return;

      if (!deleting.current) {
        wordRef.current.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) {
          timeoutRef.current = setTimeout(() => {
            deleting.current = true;
            type();
          }, 2200);
          return;
        }
      } else {
        wordRef.current.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }

      const speed = deleting.current ? 60 : 100;
      timeoutRef.current = setTimeout(type, speed);
    };

    timeoutRef.current = setTimeout(type, 600);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero-bg grid-lines noise-overlay"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 2rem',
        paddingTop: '72px',
        overflow: 'hidden',
      }}
    >
      {/* Orbs */}
      <div className="orb pulse-glow" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(77, 54, 139, 0.1) 0%, transparent 70%)',
        top: '-10%', left: '50%', transform: 'translateX(-50%)',
      }} />
      <div className="orb" style={{
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(251, 175, 23, 0.06) 0%, transparent 70%)',
        bottom: '10%', right: '-5%',
        animation: 'pulseGlow 7s ease-in-out infinite 2s',
      }} />
      <div className="orb" style={{
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(90, 93, 168, 0.08) 0%, transparent 70%)',
        top: '30%', left: '-5%',
        animation: 'pulseGlow 5s ease-in-out infinite 1s',
      }} />

      {/* Styled Background Logos */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-12deg)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.04,
        filter: 'blur(1px)',
      }}>
        <Logo size={800} />
      </div>

      <div style={{
        position: 'absolute',
        top: '40%',
        right: '-10%',
        transform: 'rotate(15deg)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.15,
        filter: 'blur(120px)',
      }}>
        <Logo size={600} />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '-5%',
        left: '-10%',
        transform: 'rotate(-20deg)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.1,
        filter: 'blur(80px)',
      }}>
        <Logo size={400} />
      </div>

      {/* Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '2rem',
        opacity: 0,
        animation: 'fadeInUp 0.7s ease 0.1s forwards',
      }}>
        <span className="tag-pill">✦ {t('agency')}</span>
      </div>

      {/* Main Title */}
      <h1
        className="hero-title"
        style={{
          textAlign: 'center',
          maxWidth: '1100px',
          marginBottom: '1.5rem',
          opacity: 0,
          animation: 'fadeInUp 0.8s ease 0.25s forwards',
        }}
      >
        <span style={{ display: 'block', color: 'var(--text-primary)' }}>{t('hero_title1')}</span>
        <span style={{ display: 'block' }}>
          <span className="gradient-text">{t('hero_title2')}{' '}</span>
          <span ref={wordRef} style={{
            background: 'linear-gradient(135deg, #fbaf17 0%, #ffd166 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            borderRight: '3px solid #fbaf17',
            paddingRight: '4px',
          }}>Brands.</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        maxWidth: '580px',
        lineHeight: 1.7,
        marginBottom: '3rem',
        fontWeight: 300,
        opacity: 0,
        animation: 'fadeInUp 0.8s ease 0.4s forwards',
      }}>
        {t('hero_subtitle')}
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        opacity: 0,
        animation: 'fadeInUp 0.8s ease 0.55s forwards',
      }}>
        <a
          href="#contact"
          className="btn-yellow"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{ textDecoration: 'none' }}
        >
          {t('hero_btn_start')}
        </a>
        <a
          href="#work"
          className="btn-outline"
          onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{ textDecoration: 'none' }}
        >
          {t('hero_btn_work')}
        </a>
      </div>



      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-tertiary)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        <span>{t('hero_scroll')}</span>
        <div className="slide-right" style={{ color: 'var(--text-tertiary)' }}>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <line x1="8" y1="0" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <polyline points="3,12 8,18 13,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </button>
    </section>
  );
}
