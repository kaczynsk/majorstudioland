import { useLanguage } from '../i18n/LanguageContext';

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section style={{
      padding: '5rem 2.5rem',
      background: 'var(--bg-white)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple glow */}
      <div className="orb pulse-glow" style={{
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(77, 54, 139, 0.15) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        background: 'rgba(245, 245, 247, 0.8)',
        border: '1px solid rgba(77, 54, 139, 0.1)',
        borderRadius: '28px',
        padding: '4.5rem 3rem',
        backdropFilter: 'blur(20px)',
      }}>
        {/* Decorative top line */}
        <div style={{
          width: '60px', height: '3px',
          background: 'linear-gradient(90deg, #4d368b, #fbaf17)',
          borderRadius: '10px',
          margin: '0 auto 2rem',
        }} />

        <span className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>
          {t('cta_title1')}
        </span>

        <h2 style={{
          fontFamily: "'Readex Pro', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
        }}>
          {t('cta_title1')}<br />
          <span className="gradient-text">{t('cta_title2')}</span>
        </h2>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '500px',
          margin: '0 auto 3rem',
          fontWeight: 300,
        }}>
          {t('cta_desc')}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-yellow"
            style={{ textDecoration: 'none', fontSize: '1rem', padding: '1rem 2.5rem' }}
          >
            {t('cta_btn')} →
          </a>
          <a
            href="mailto:major.algerie@gmail.com"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            major.algerie@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
