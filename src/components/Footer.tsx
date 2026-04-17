import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-white)',
      borderTop: '1px solid rgba(77, 54, 139, 0.15)',
      padding: '4rem 2.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <Logo size={36} style={{ boxShadow: '0 0 20px rgba(77, 54, 139, 0.3)', borderRadius: '10px' }} />
              <div style={{ lineHeight: 1 }}>
                <span style={{ fontFamily: "'Readex Pro', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', display: 'block' }}>Major Studios</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', color: 'var(--text-tertiary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Digital Agency</span>
              </div>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              maxWidth: '280px',
              marginBottom: '1.5rem',
            }}>
              We build bold digital identities, immersive experiences, and scalable products for ambitious brands.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { 
                  label: 'IG', title: 'Instagram', href: 'https://www.instagram.com/studios.major/',
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )
                },
                { 
                  label: 'FB', title: 'Facebook', href: 'https://web.facebook.com/studios.major/',
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(77, 54, 139, 0.25)',
                    background: 'rgba(245, 245, 247, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'var(--text-primary)';
                    el.style.borderColor = 'rgba(77, 54, 139, 0.4)';
                    el.style.background = 'rgba(77, 54, 139, 0.1)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'var(--text-secondary)';
                    el.style.borderColor = 'rgba(77, 54, 139, 0.25)';
                    el.style.background = 'rgba(245, 245, 247, 0.8)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Studio
            </h4>
            {['About', 'Work', 'Contact'].map((item) => (
              <div key={item} style={{ marginBottom: '0.7rem' }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="footer-link"
                  onClick={(e) => { e.preventDefault(); handleNav(`#${item.toLowerCase()}`); }}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Services
            </h4>
            {['Social Media', 'Paid Advertising', 'Graphic Design', 'Video Production'].map((item) => (
              <div key={item} style={{ marginBottom: '0.7rem' }}>
                <a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); handleNav('#services'); }}>
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Contact
            </h4>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Location</p>
              <span className="footer-link" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                10 rue freres oudek,<br />
                el harrach, Algiers, Algeria
              </span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Email</p>
              <a href="mailto:major.algerie@gmail.com" className="footer-link" style={{ fontSize: '0.85rem' }}>
                major.algerie@gmail.com
              </a>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Phone & Whatsapp</p>
              <span className="footer-link" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                +213 552 58 66 17
              </span>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-block', padding: '0.65rem 1.4rem', fontSize: '0.78rem' }}
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="divider" style={{ marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            © {year} SARL DAAB (Major Studios). All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>
                {item}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', animation: 'pulseGlow 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
              Available for new projects
            </span>
          </div>
        </div>

        {/* Large text bg */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          fontFamily: "'Readex Pro', sans-serif",
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(77, 54, 139, 0.12)',
          userSelect: 'none',
          lineHeight: 1,
          pointerEvents: 'none',
        }}>
          M STUDIOS
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer [style*="gridTemplateColumns: '1.5fr 1fr 1fr 1fr'"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer [style*="gridTemplateColumns: '1.5fr 1fr 1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
