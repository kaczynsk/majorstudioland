const projects = [
  {
    title: 'Apex Finance',
    category: 'Brand Identity · Web Design',
    tags: ['Fintech', 'Branding'],
    description: 'Complete brand overhaul and digital platform for a next-gen fintech startup.',
    aspect: '16/9',
    color: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accentColor: '#5a5da8',
  },
  {
    title: 'Nōma Studio',
    category: 'Web Experience · Motion',
    tags: ['Creative Studio', 'Motion'],
    description: 'Immersive portfolio and brand experience for a Copenhagen-based architecture firm.',
    aspect: '4/5',
    color: 'linear-gradient(135deg, #1c1a0f 0%, #2a240f 50%, #3d3510 100%)',
    accentColor: '#fbaf17',
  },
  {
    title: 'Velox Health',
    category: 'Product Design · Strategy',
    tags: ['HealthTech', 'SaaS'],
    description: 'End-to-end UX/UI design for a health monitoring SaaS platform.',
    aspect: '4/5',
    color: 'linear-gradient(135deg, #0f1f1a 0%, #0d2218 50%, #0a2a1e 100%)',
    accentColor: '#34d399',
  },
  {
    title: 'Luminary',
    category: 'E-commerce · Brand Systems',
    tags: ['Luxury', 'E-commerce'],
    description: 'Luxury e-commerce experience and full brand system for a premium lifestyle brand.',
    aspect: '16/9',
    color: 'linear-gradient(135deg, #1f1015 0%, #2a0f1c 50%, #350f22 100%)',
    accentColor: '#f472b6',
  },
  {
    title: 'Datum AI',
    category: 'Product Design · UI/UX',
    tags: ['AI/ML', 'Dashboard'],
    description: 'Complex data visualization dashboard and design system for an AI analytics platform.',
    aspect: '16/9',
    color: 'linear-gradient(135deg, #0f0f1f 0%, #151530 50%, #1a1a40 100%)',
    accentColor: '#818cf8',
  },
];

function PlaceholderImage({ color, accentColor }: { color: string; accentColor: string; title: string }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid lines inside */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(${accentColor}15 1px, transparent 1px), linear-gradient(90deg, ${accentColor}15 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      {/* Center orb */}
      <div style={{
        width: '120px', height: '120px',
        background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(20px)',
      }} />

      {/* Photo placeholder icon */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        position: 'relative',
        zIndex: 1,
        opacity: 0.5,
      }}>
        <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
          <rect x="1" y="1" width="46" height="38" rx="6" stroke="white" strokeWidth="1.5" strokeDasharray="4 3" />
          <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="1.5" />
          <path d="M1 30 L14 18 L22 26 L32 14 L47 30" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}>
          Add Project Photo
        </span>
      </div>

      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '1.5rem',
        width: '40px',
        height: '40px',
        borderRight: `2px solid ${accentColor}60`,
        borderBottom: `2px solid ${accentColor}60`,
        borderRadius: '0 0 4px 0',
      }} />
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        left: '1.5rem',
        width: '40px',
        height: '40px',
        borderLeft: `2px solid ${accentColor}60`,
        borderTop: `2px solid ${accentColor}60`,
        borderRadius: '4px 0 0 0',
      }} />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" style={{ padding: '7rem 2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title" style={{ color: 'white', marginTop: '0.75rem' }}>
              Projects that<br />
              <span className="gradient-text">define brands.</span>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.2s ease',
            }}
            className="hover-underline"
          >
            View All Work <span style={{ fontSize: '1.1rem' }}>→</span>
          </a>
        </div>
      </div>

      {/* Project Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'auto',
        gap: '1.5rem',
      }}>
        {/* Project 1 - Wide */}
        <div
          className="work-card"
          style={{ gridColumn: 'span 7', gridRow: 'span 1', aspectRatio: '16/9', minHeight: '320px' }}
        >
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
            <PlaceholderImage {...projects[0]} />
          </div>
          <div className="overlay" />
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            right: '1.5rem',
            zIndex: 2,
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              {projects[0].tags.map(tag => (
                <span key={tag} className="tag-pill" style={{ fontSize: '0.62rem' }}>{tag}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>
              {projects[0].title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
              {projects[0].category}
            </p>
          </div>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '40px',
            height: '40px',
            background: 'rgba(251, 175, 23, 0.9)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 3,
          }} className="card-arrow">
            <span style={{ fontSize: '1rem', color: '#111' }}>↗</span>
          </div>
        </div>

        {/* Project 2 - Tall */}
        <div
          className="work-card"
          style={{ gridColumn: 'span 5', gridRow: 'span 2', minHeight: '560px' }}
        >
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
            <PlaceholderImage {...projects[1]} />
          </div>
          <div className="overlay" />
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            right: '1.5rem',
            zIndex: 2,
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              {projects[1].tags.map(tag => (
                <span key={tag} className="tag-pill" style={{ fontSize: '0.62rem' }}>{tag}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>
              {projects[1].title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
              {projects[1].category}
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="work-card"
          style={{ gridColumn: 'span 4', minHeight: '280px' }}
        >
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
            <PlaceholderImage {...projects[2]} />
          </div>
          <div className="overlay" />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: 2 }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
              {projects[2].tags.map(tag => (
                <span key={tag} className="tag-pill" style={{ fontSize: '0.62rem' }}>{tag}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>
              {projects[2].title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
              {projects[2].category}
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="work-card"
          style={{ gridColumn: 'span 3', minHeight: '280px' }}
        >
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
            <PlaceholderImage {...projects[3]} />
          </div>
          <div className="overlay" />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: 2 }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
              {projects[3].tags.map(tag => (
                <span key={tag} className="tag-pill" style={{ fontSize: '0.62rem' }}>{tag}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>
              {projects[3].title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
              {projects[3].category}
            </p>
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div style={{
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        borderRadius: '16px',
        background: 'rgba(77, 54, 139, 0.06)',
        border: '1px solid rgba(77, 54, 139, 0.15)',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.9rem',
        }}>
          Ready to be our next case study?
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

      <style>{`
        .work-card:hover .card-arrow { opacity: 1 !important; }
        @media (max-width: 900px) {
          [style*="gridColumn: 'span 7'"] { grid-column: span 12 !important; }
          [style*="gridColumn: 'span 5'"] { grid-column: span 12 !important; grid-row: span 1 !important; }
          [style*="gridColumn: 'span 4'"] { grid-column: span 6 !important; }
          [style*="gridColumn: 'span 3'"] { grid-column: span 6 !important; }
        }
        @media (max-width: 600px) {
          [style*="gridColumn"] { grid-column: span 12 !important; grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
