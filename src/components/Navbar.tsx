import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useLanguage, Language } from '../i18n/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t('nav_work'), href: '#work' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 2.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(77, 54, 139, 0.1)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          {/* Logo mark */}
          <Logo size={36} style={{ boxShadow: '0 0 20px rgba(77, 54, 139, 0.4)', borderRadius: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Readex Pro', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>Major Studios</span>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 500,
              color: 'var(--text-tertiary)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '1px',
            }}>{t('agency')}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link hover-underline"
              onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA & Lang Switch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          {/* Lang Switcher Desktop */}
          <div className="hidden-mobile" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: language === lang ? 700 : 400,
                  color: language === lang ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textTransform: 'uppercase', padding: '0.2rem',
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="btn-primary hidden-mobile"
            style={{ display: 'inline-block', textDecoration: 'none', fontSize: '0.75rem', padding: '0.55rem 1.2rem' }}
          >
            {t('nav_cta')}
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
              color: 'var(--text-primary)',
            }}
            aria-label="Menu"
          >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              {menuOpen ? (
                <>
                  <line x1="1" y1="1" x2="21" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="21" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="0" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          paddingTop: '72px',
        }}>
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
              style={{
                fontFamily: "'Readex Pro', sans-serif",
                fontSize: '2.2rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                opacity: 0,
                animation: `fadeInUp 0.5s ease ${i * 0.08}s forwards`,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="btn-yellow"
            style={{
              marginTop: '1rem',
              textDecoration: 'none',
              opacity: 0,
              animation: `fadeInUp 0.5s ease ${navItems.length * 0.08}s forwards`,
            }}
          >
            {t('nav_cta')}
          </a>

          {/* Lang Switcher Mobile */}
          <div style={{
            display: 'flex', gap: '1.5rem', marginTop: '2rem',
            opacity: 0, animation: `fadeInUp 0.5s ease ${(navItems.length + 1) * 0.08}s forwards`,
          }}>
            {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', fontWeight: language === lang ? 700 : 400,
                  color: language === lang ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textTransform: 'uppercase',
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
