const testimonials = [
  {
    quote: "M Studios completely transformed how we show up online. The team was meticulous, fast, and genuinely invested in our success. The result speaks for itself.",
    author: "Sarah K.",
    role: "CEO, Apex Finance",
    avatar: "SK",
    rating: 5,
  },
  {
    quote: "Working with Major Studios felt less like hiring an agency and more like gaining a co-founder. Their strategic thinking elevated the entire project beyond what we imagined.",
    author: "James R.",
    role: "Founder, Noma Studio",
    avatar: "JR",
    rating: 5,
  },
  {
    quote: "The design system they built for us has saved us thousands of hours. It scales perfectly and the team at M Studios made the whole process enjoyable.",
    author: "Priya M.",
    role: "Head of Product, Datum AI",
    avatar: "PM",
    rating: 5,
  },
  {
    quote: "Truly a studio that punches above its weight. The quality, attention to detail, and ability to capture our brand vision was exceptional from start to finish.",
    author: "Tom W.",
    role: "CMO, Luminary",
    avatar: "TW",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#fbaf17">
          <path d="M7 1L8.8 5.1L13.3 5.5L10 8.4L11 12.8L7 10.5L3 12.8L4 8.4L0.7 5.5L5.2 5.1L7 1Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{
      padding: '7rem 2.5rem',
      background: 'var(--bg-white)',
      borderTop: '1px solid rgba(77, 54, 139, 0.12)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Client Stories</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '0.75rem' }}>
            Words from the people<br />
            <span className="gradient-text">we've built for.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Quote mark */}
              <div style={{
                fontSize: '3.5rem',
                lineHeight: 1,
                color: 'rgba(77, 54, 139, 0.4)',
                fontFamily: 'Georgia, serif',
                marginBottom: '0.5rem',
                marginTop: '-0.5rem',
              }}>
                "
              </div>

              <StarRating count={t.rating} />

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontWeight: 300,
                fontStyle: 'italic',
              }}>
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                {/* Avatar */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4d368b, #5a5da8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.05em',
                  }}>
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Readex Pro', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.1rem',
                  }}>
                    {t.author}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.02em',
                  }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          padding: '2rem',
          borderTop: '1px solid rgba(77, 54, 139, 0.12)',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            Trusted by teams at
          </span>
          {['Fintech Co.', 'Brand X', 'HealthPlus', 'Datum AI', 'Luminary', 'Studio North'].map((brand, i) => (
            <span key={i} style={{
              fontFamily: "'Readex Pro', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease',
              cursor: 'default',
            }}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #testimonials [style*="gridTemplateColumns: 'repeat(2, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
