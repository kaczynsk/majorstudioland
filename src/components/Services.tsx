const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L2 8V20L14 26L26 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 2V26M2 8L14 14L26 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    number: '01',
    title: 'Brand Identity',
    subtitle: 'Strategy · Design · Systems',
    description: 'We build brand identities that are both visually iconic and strategically sound — logo systems, typography, color, voice, and guidelines that scale.',
    list: ['Logo & Wordmark Design', 'Brand Guidelines', 'Visual Identity Systems', 'Brand Strategy', 'Naming & Messaging'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9H19M9 13H16M9 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.5 22L21.5 23L23.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    number: '02',
    title: 'Web Design & Dev',
    subtitle: 'UX · UI · Engineering',
    description: 'Award-level websites and web apps built with precision. From marketing sites to complex platforms, we design and develop digital experiences that perform.',
    list: ['Marketing Websites', 'Web Applications', 'Landing Pages', 'CMS Integration', 'Performance Optimization'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14C8 10.5 10 7 14 7C18 7 20 10.5 20 14C20 17.5 18 21 14 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9V14L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    number: '03',
    title: 'Product Design',
    subtitle: 'UX Research · Prototyping',
    description: 'We take products from concept to launch — wireframes, user research, UX architecture, interactive prototypes, and polished UI that converts users.',
    list: ['UX Research & Audits', 'Wireframing', 'Interactive Prototypes', 'Design Systems', 'Mobile App Design'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="20" r="2" fill="currentColor" />
        <circle cx="24" cy="14" r="2" fill="currentColor" />
        <path d="M2 4H26M2 24H26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    number: '04',
    title: 'Digital Strategy',
    subtitle: 'Analytics · Growth · CRO',
    description: 'Strategy before creativity. We map out digital ecosystems, analyze audiences, and create roadmaps that align design with measurable business outcomes.',
    list: ['Digital Audits', 'Growth Strategy', 'CRO & Analytics', 'Content Strategy', 'SEO Architecture'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 22L12 10L16 16L19 12L23 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="18" x2="14" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    number: '05',
    title: 'Motion & Animation',
    subtitle: 'UI Motion · Video · 2D',
    description: 'Bring interfaces to life with purposeful animation. From micro-interactions to full brand films and campaign animations — we make brands move.',
    list: ['UI Micro-interactions', 'Brand Animation', 'Video Production', '2D Motion Graphics', 'Scroll Animations'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 10H22L20 22H8L6 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 10V7C10 5.5 11 4 14 4C17 4 18 5.5 18 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 16L13 18L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    number: '06',
    title: 'E-commerce & Campaigns',
    subtitle: 'Shopify · Campaigns · Social',
    description: 'High-converting e-commerce experiences and campaigns that turn browsers into buyers. We handle everything from storefronts to ad creatives.',
    list: ['Shopify Design & Dev', 'Campaign Creatives', 'Social Media Design', 'Email Design', 'Performance Ads'],
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: '7rem 2.5rem',
      background: 'var(--mid-gray)',
      borderTop: '1px solid rgba(77, 54, 139, 0.12)',
      borderBottom: '1px solid rgba(77, 54, 139, 0.12)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'end',
          marginBottom: '5rem',
        }}>
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title" style={{ color: 'white', marginTop: '0.75rem' }}>
              Full-stack<br />
              <span className="gradient-text">creative muscle.</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              fontWeight: 300,
            }}>
              From strategy to execution, M Studios operates as a creative partner — not just a vendor. 
              We embed with your team and deliver work that actually moves the needle.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card card-dark"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                position: 'relative',
                cursor: 'default',
              }}
            >
              <span className="step-number">{service.number}</span>
              
              {/* Icon */}
              <div style={{
                width: '52px',
                height: '52px',
                background: 'rgba(77, 54, 139, 0.2)',
                border: '1px solid rgba(77, 54, 139, 0.3)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c4b5fd',
                marginBottom: '1.5rem',
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: "'Readex Pro', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '0.25rem',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                color: 'var(--accent-yellow)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>
                {service.subtitle}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                {service.description}
              </p>

              <div style={{ borderTop: '1px solid rgba(77, 54, 139, 0.15)', paddingTop: '1.25rem' }}>
                {service.list.map((item, j) => (
                  <div key={j} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.35)',
                    padding: '0.2rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
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
        @media (max-width: 1024px) {
          #services [style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #services [style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
          #services [style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
