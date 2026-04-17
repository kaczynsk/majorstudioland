import { useEffect, useRef } from 'react';

const words = ['Brands.', 'Products.', 'Experiences.', 'Futures.'];

export default function Hero() {
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
        background: 'radial-gradient(circle, rgba(77, 54, 139, 0.35) 0%, transparent 70%)',
        top: '-10%', left: '50%', transform: 'translateX(-50%)',
      }} />
      <div className="orb" style={{
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(251, 175, 23, 0.12) 0%, transparent 70%)',
        bottom: '10%', right: '-5%',
        animation: 'pulseGlow 7s ease-in-out infinite 2s',
      }} />
      <div className="orb" style={{
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(90, 93, 168, 0.25) 0%, transparent 70%)',
        top: '30%', left: '-5%',
        animation: 'pulseGlow 5s ease-in-out infinite 1s',
      }} />

      {/* Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '2rem',
        opacity: 0,
        animation: 'fadeInUp 0.7s ease 0.1s forwards',
      }}>
        <span className="tag-pill">✦ Digital Studio</span>
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
        <span style={{ display: 'block', color: 'white' }}>We Build</span>
        <span style={{ display: 'block' }}>
          <span className="gradient-text">Digital </span>
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
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        maxWidth: '580px',
        lineHeight: 1.7,
        marginBottom: '3rem',
        fontWeight: 300,
        opacity: 0,
        animation: 'fadeInUp 0.8s ease 0.4s forwards',
      }}>
        Major Studios crafts bold digital identities, immersive web experiences, 
        and scalable products that move brands forward — at scale.
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
          Start a Project →
        </a>
        <a
          href="#work"
          className="btn-outline"
          onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{ textDecoration: 'none' }}
        >
          View Our Work
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
          color: 'rgba(255,255,255,0.3)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <div className="slide-right" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <line x1="8" y1="0" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <polyline points="3,12 8,18 13,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </button>
    </section>
  );
}
