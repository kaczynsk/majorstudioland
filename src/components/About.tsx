const values = [
  {
    icon: '⚡',
    title: 'Speed with Soul',
    desc: 'We move fast — but never at the expense of craft. Every pixel is intentional.',
  },
  {
    icon: '🎯',
    title: 'Strategy First',
    desc: 'Design without strategy is decoration. We build with purpose and clear objectives.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    desc: 'We embed with your team. Your success is our success — not just a deliverable.',
  },
  {
    icon: '∞',
    title: 'Built to Scale',
    desc: 'Systems thinking in everything we build — design systems, code, and strategy that grows with you.',
  },
];

const team = [
  { name: 'Add Team Member', role: 'Creative Director', initials: 'CD' },
  { name: 'Add Team Member', role: 'Lead Designer', initials: 'LD' },
  { name: 'Add Team Member', role: 'Strategy Lead', initials: 'SL' },
  { name: 'Add Team Member', role: 'Tech Lead', initials: 'TL' },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2.5rem',
      background: 'linear-gradient(180deg, var(--dark-gray) 0%, var(--mid-gray) 100%)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Main About Block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
          marginBottom: '7rem',
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

          {/* Right: image + floating cards */}
          <div style={{ position: 'relative' }}>
            {/* Main image */}
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(77, 54, 139, 0.2)',
            }}
            className="photo-placeholder"
            >
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <rect x="2" y="2" width="52" height="52" rx="10" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="6 4" />
                  <circle cx="20" cy="20" r="6" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <path d="M2 40 L16 26 L24 34 L36 18 L54 36" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
                  Add Team / Studio Photo
                </span>
              </div>
            </div>

            {/* Floating card 1 */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              left: '-2rem',
              background: 'rgba(17, 17, 20, 0.95)',
              border: '1px solid rgba(77, 54, 139, 0.3)',
              borderRadius: '16px',
              padding: '1.2rem 1.5rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
            className="float-anim"
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(251, 175, 23, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>⭐</div>
                <div>
                  <div style={{ fontFamily: "'Readex Pro', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>5.0 / 5.0</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>Client Satisfaction</div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '7rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Values</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}>
            {values.map((v, i) => (
              <div key={i} className="card-dark" style={{
                borderRadius: '20px',
                padding: '2rem 1.75rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: "'Readex Pro', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.35)',
                  lineHeight: 1.7,
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">The Team</span>
              <h3 style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                The minds behind M Studios.
              </h3>
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}>
            {team.map((member, i) => (
              <div key={i} className="card-dark" style={{
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                {/* Photo area */}
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  background: `linear-gradient(135deg, rgba(77, 54, 139, ${0.15 + i * 0.05}) 0%, rgba(34, 34, 42, 0.95) 100%)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  borderBottom: '1px solid rgba(77, 54, 139, 0.15)',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '64px', height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(77, 54, 139, 0.3)',
                    border: '2px dashed rgba(77, 54, 139, 0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>Photo</span>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Add Member Photo
                  </span>

                  {/* Initials badge */}
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    width: '32px', height: '32px',
                    background: 'rgba(77, 54, 139, 0.4)',
                    border: '1px solid rgba(77, 54, 139, 0.5)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>{member.initials}</span>
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.2rem' }}>
                    {member.name}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--accent-yellow)', letterSpacing: '0.08em' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #about [style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
          #about [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          #about [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
