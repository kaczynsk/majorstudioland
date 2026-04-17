const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="2" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="15" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="15" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    number: '01',
    title: 'Social Media Content',
    subtitle: 'Content · Reels · Feed Management',
    description: 'Full content creation for your social channels — reels, stories, carousels, and captions that build your brand and grow your audience.',
    list: ['Feed Strategy', 'Reels & Videos', 'Community Management', 'Monthly Reports'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 18L10 10L15 15L19 11L26 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    number: '02',
    title: 'Graphic Design',
    subtitle: 'Print · Branding · Visuals',
    description: 'Striking visual assets for every touchpoint — from event printables and retail packaging to full brand identity systems.',
    list: ['Brand Identity', 'Print Design', 'Social Visuals', 'Event Design'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 5L23 14L5 23V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    number: '03',
    title: 'Video Production',
    subtitle: 'Podcast · Talking Head · Editing',
    description: 'Professional multi-camera video production for podcasts, brand films, and social content — from setup and lighting to final edit.',
    list: ['Podcast Production', 'Brand Films', 'Social Video', 'Full Post-Production'],
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: '5rem 2.5rem',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(77, 54, 139, 0.12)',
      borderBottom: '1px solid rgba(77, 54, 139, 0.12)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              Four services.<br />
              <span className="gradient-text">Real results.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: '380px',
          }}>
            End-to-end digital services built for brands that want to grow online.
          </p>
        </div>

        {/* Service Cards — 4 columns, compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }} className="services-grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card card-light"
              style={{
                padding: '1.5rem',
                borderRadius: '18px',
                position: 'relative',
                cursor: 'default',
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(77, 54, 139, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              <span style={{
                position: 'absolute', top: '1rem', right: '1rem',
                fontFamily: "'Inter', sans-serif", fontSize: '0.6rem',
                color: 'rgba(77,54,139,0.3)', fontWeight: 600, letterSpacing: '0.05em',
              }}>{service.number}</span>

              {/* Icon */}
              <div style={{
                width: '44px', height: '44px',
                background: 'rgba(77, 54, 139, 0.07)',
                border: '1px solid rgba(77, 54, 139, 0.12)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--purple-main)',
                marginBottom: '1.1rem',
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: "'Readex Pro', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.2rem',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.65rem',
                color: 'var(--accent-yellow)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                {service.subtitle}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.1rem',
              }}>
                {service.description}
              </p>

              <div style={{ borderTop: '1px solid rgba(77, 54, 139, 0.1)', paddingTop: '1rem' }}>
                {service.list.map((item, j) => (
                  <div key={j} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.73rem',
                    color: 'var(--text-secondary)',
                    padding: '0.15rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }} className="yellow-dot">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-light:hover {
          border-color: rgba(77,54,139,0.25) !important;
          box-shadow: 0 16px 40px rgba(77,54,139,0.1);
          transform: translateY(-3px);
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
