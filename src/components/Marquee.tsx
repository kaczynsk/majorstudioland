import { useLanguage } from '../i18n/LanguageContext';

export default function Marquee() {
  const { t } = useLanguage();

  const clients = [
    t('marquee_branding'), '✦', t('marquee_web'), '✦', 'Digital Strategy', '✦',
    'UI/UX Design', '✦', 'Motion & Animation', '✦', 'Product Design', '✦',
    'Creative Direction', '✦', 'Development', '✦', 'Brand Systems', '✦',
    'Campaign Strategy', '✦', 'Visual Identity', '✦', 'E-commerce', '✦',
  ];

  const doubled = [...clients, ...clients];

  return (
    <div style={{
      overflow: 'hidden',
      padding: '1.5rem 0',
      borderTop: '1px solid rgba(77, 54, 139, 0.15)',
      borderBottom: '1px solid rgba(77, 54, 139, 0.15)',
      background: 'rgba(245, 245, 247, 0.5)',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '120px',
        background: 'linear-gradient(90deg, var(--dark-gray), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: 0, top: 0, bottom: 0,
        width: '120px',
        background: 'linear-gradient(270deg, var(--dark-gray), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: item === '✦' ? 'serif' : "'Readex Pro', sans-serif",
            fontSize: item === '✦' ? '0.7rem' : '0.82rem',
            fontWeight: item === '✦' ? 400 : 500,
            color: item === '✦' ? '#fbaf17' : 'var(--text-secondary)',
            marginRight: item === '✦' ? '1.8rem' : '1.8rem',
            letterSpacing: item === '✦' ? '0' : '0.06em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
