const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by listening. Deep dives into your brand, market, competitors, and audience. We define objectives and build a shared strategic foundation.',
    duration: '1–2 Weeks',
    deliverables: ['Brand Audit', 'Competitive Analysis', 'Creative Brief', 'Project Roadmap'],
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'With insights in hand, we craft the approach. Positioning, messaging architecture, user journeys, and a creative direction that aligns with your goals.',
    duration: '1–2 Weeks',
    deliverables: ['Brand Strategy', 'UX Architecture', 'Content Strategy', 'Creative Direction'],
  },
  {
    number: '03',
    title: 'Design',
    description: 'This is where it comes to life. We explore, iterate, and perfect — delivering design systems and visual work that is bold, purposeful, and unmistakably yours.',
    duration: '2–4 Weeks',
    deliverables: ['Concepts & Iterations', 'Design System', 'UI/UX Design', 'Motion Direction'],
  },
  {
    number: '04',
    title: 'Build',
    description: 'Pixel-perfect development that brings the design to life. We build fast, accessible, and scalable — with clean code and immaculate attention to detail.',
    duration: '2–6 Weeks',
    deliverables: ['Development', 'CMS Integration', 'QA Testing', 'Performance Audit'],
  },
  {
    number: '05',
    title: 'Launch & Grow',
    description: "We don't just ship and disappear. We support your launch, monitor performance, and offer ongoing partnership to ensure continued growth.",
    duration: 'Ongoing',
    deliverables: ['Launch Support', 'Analytics Setup', 'Iterations', 'Retainer Options'],
  },
];

export default function Process() {
  return (
    <section id="process" style={{
      padding: '7rem 2.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ maxWidth: '700px', marginBottom: '5rem' }}>
        <span className="section-label">How We Work</span>
        <h2 className="section-title" style={{ color: 'white', marginTop: '0.75rem' }}>
          A process built<br />
          <span className="gradient-text">for clarity & craft.</span>
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.8,
          marginTop: '1.25rem',
          fontWeight: 300,
        }}>
          No black boxes. No surprises. Our process is transparent, collaborative, 
          and designed to deliver exceptional results on time.
        </p>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 1fr',
            gap: '2rem',
            padding: '2.5rem 0',
            borderBottom: i < steps.length - 1 ? '1px solid rgba(77, 54, 139, 0.12)' : 'none',
            alignItems: 'start',
            transition: 'all 0.3s ease',
          }}
          className="process-row"
          >
            {/* Number */}
            <div style={{
              fontFamily: "'Readex Pro', sans-serif",
              fontSize: '3rem',
              fontWeight: 700,
              color: 'rgba(77, 54, 139, 0.25)',
              lineHeight: 1,
              paddingTop: '0.25rem',
            }}>
              {step.number}
            </div>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <h3 style={{
                  fontFamily: "'Readex Pro', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                }}>
                  {step.title}
                </h3>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.68rem',
                  color: 'var(--accent-yellow)',
                  background: 'rgba(251, 175, 23, 0.12)',
                  border: '1px solid rgba(251, 175, 23, 0.25)',
                  padding: '0.2rem 0.7rem',
                  borderRadius: '100px',
                  letterSpacing: '0.05em',
                }}>
                  {step.duration}
                </span>
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8,
                maxWidth: '460px',
              }}>
                {step.description}
              </p>
            </div>

            {/* Deliverables */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'flex-end',
              paddingTop: '0.5rem',
            }}>
              {step.deliverables.map((d, j) => (
                <span key={j} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.4)',
                  background: 'rgba(34, 34, 42, 0.8)',
                  border: '1px solid rgba(77, 54, 139, 0.2)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '8px',
                  letterSpacing: '0.02em',
                }}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .process-row:hover {
          padding-left: 1rem;
          background: rgba(77, 54, 139, 0.03);
          border-radius: 12px;
        }
        @media (max-width: 900px) {
          .process-row {
            grid-template-columns: 60px 1fr !important;
          }
          .process-row > div:last-child {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .process-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
