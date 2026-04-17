export default function CTABanner() {
  return (
    <section style={{
      padding: '5rem 2.5rem',
      background: 'var(--dark-gray)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple glow */}
      <div className="orb pulse-glow" style={{
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(77, 54, 139, 0.35) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        background: 'rgba(34, 34, 42, 0.5)',
        border: '1px solid rgba(77, 54, 139, 0.25)',
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
          Ready When You Are
        </span>

        <h2 style={{
          fontFamily: "'Readex Pro', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          color: 'white',
          marginBottom: '1.5rem',
        }}>
          The best digital brands<br />
          <span className="gradient-text">start with a conversation.</span>
        </h2>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.7,
          maxWidth: '500px',
          margin: '0 auto 3rem',
          fontWeight: 300,
        }}>
          Whether you have a brief ready or just an idea — we want to hear from you. 
          Major things start with a single message.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-yellow"
            style={{ textDecoration: 'none', fontSize: '1rem', padding: '1rem 2.5rem' }}
          >
            Start a Project →
          </a>
          <a
            href="mailto:major.algerie@gmail.com"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            major.algerie@gmail.com
          </a>
        </div>

        {/* Bottom decorative elements */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(77, 54, 139, 0.15)',
          flexWrap: 'wrap',
        }}>
          {[
            '✦ No-pressure discovery call',
            '✦ 24-hour response time',
            '✦ Fixed-price projects available',
          ].map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.03em',
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
