const team = [
  { name: 'Abderrahmane Ammali', role: 'Chief Executive Officer', photo: '/team/CEO.png' },
  { name: 'Rabah Soltane', role: 'Chief Marketing Officer', photo: '/team/CMO.png' },
  { name: 'Abdelalim Chicha', role: 'Chief Technology Officer', photo: '/team/CTO.png' },
  { name: 'Amine Guellati', role: 'Graphic Design Lead', photo: '/team/GD-Lead.png' },
  { name: 'Marya Djalab', role: 'UI/UX Lead', photo: '/team/UIUX-Lead.png' },
  { name: 'Madjid Medjkane', role: 'Video Production Lead', photo: '/team/Video-Lead.png' },
  { name: 'Katia Chaouar', role: 'Producer', photo: '/team/Producer.png' },
  { name: 'Chemse Soltani', role: 'Sales', photo: '/team/Sales1.jpeg' },
  { name: 'Hadil Khiati', role: 'Sales', photo: '/team/Sales2.jpeg' },
  { name: 'Lina Khoubzi', role: 'Sales', photo: '/team/Sales3.jpeg' },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2.5rem',
      background: 'var(--bg-white)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Main About Block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
          marginBottom: '6rem',
        }}>
          {/* Left: text */}
          <div>
            <span className="section-label">About M Studios</span>
            <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '0.75rem', marginBottom: '1.5rem' }}>
              Built from experience.<br />
              <span className="gradient-text">Driven by impact.</span>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
              fontWeight: 300,
            }}>
              Major Studios started from a startup company MAJOR created in 2024, and funded in 2025.
              After gaining extensive national and international experience practicing marketing and software development,
              we decided to open our digital services to the external world.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                Work With Us →
              </a>
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline"
                style={{ textDecoration: 'none' }}
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Right: real photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(77, 54, 139, 0.15)',
              boxShadow: '0 40px 80px rgba(77, 54, 139, 0.12)',
            }}>
              <img
                src="/about-team.jpg"
                alt="M Studios team"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">The Team</span>
            <h3 style={{
              fontFamily: "'Readex Pro', sans-serif", fontSize: '2rem',
              fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem',
            }}>
              The people behind M Studios.
            </h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.25rem',
          }} className="team-grid">
            {team.map((member, i) => (
              <div key={i} style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(77, 54, 139, 0.1)',
                background: 'rgba(245, 245, 247, 0.8)',
                transition: 'all 0.3s ease',
              }}
              className="team-card"
              >
                {/* Photo */}
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {member.name}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: 'var(--accent-yellow)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(77,54,139,0.12);
          border-color: rgba(77,54,139,0.25);
        }
        @media (max-width: 1200px) {
          .team-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(3, 1fr) !important; }
          #about [style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
