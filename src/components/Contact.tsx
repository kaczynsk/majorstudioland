import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const budgets = ['< 20k DZD', '50k–200k DZD', '200k–500k DZD', '500k–1M DZD', '1M+ DZD', 'Not sure'];
  const services = [t('serv_video'), t('serv_photo'), t('serv_branding'), t('serv_graphic'), t('serv_event'), t('serv_web'), t('serv_product'), t('serv_digital'), t('serv_other')];
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const toggleService = (s: string) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const toggleBudget = (b: string) => {
    setSelectedBudgets(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  };



  return (
    <section id="contact" style={{
      padding: '7rem 2.5rem',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(77, 54, 139, 0.12)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div className="orb" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(77, 54, 139, 0.2) 0%, transparent 70%)',
        top: '-10%', right: '-10%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{t('contact_label')}</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)', marginTop: '0.75rem', marginBottom: '1rem' }}>
            {t('contact_title1')}<br />
            <span className="gradient-text">{t('contact_title2')}</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            {t('contact_desc')}
          </p>
        </div>

        {!sent ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Left: contact info */}
            <div>
              <div style={{
                background: 'rgba(245, 245, 247, 0.8)',
                border: '1px solid rgba(77, 54, 139, 0.1)',
                borderRadius: '24px',
                padding: '2.5rem',
                marginBottom: '1.5rem',
              }}>
                <h3 style={{
                  fontFamily: "'Readex Pro', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {t('contact_connect')}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}>
                  {t('contact_connect_desc')}
                </p>

                {[
                  { label: 'Email', value: 'major.algerie@gmail.com' },
                  { label: 'Phone & Whatsapp', value: '0552586617' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 0',
                    borderBottom: i < 1 ? '1px solid rgba(77, 54, 139, 0.12)' : 'none',
                  }}>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div style={{
                background: 'rgba(245, 245, 247, 0.8)',
                border: '1px solid rgba(77, 54, 139, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem',
              }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Follow the Studio</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {[
                    { 
                      name: 'Instagram', 
                      href: 'https://www.instagram.com/studios.major/',
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      )
                    },
                    { 
                      name: 'Facebook', 
                      href: 'https://web.facebook.com/studios.major/',
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      )
                    },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      padding: '0.5rem 1rem',
                      border: '1px solid rgba(77, 54, 139, 0.25)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease',
                      background: 'rgba(245, 245, 247, 0.5)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77, 54, 139, 0.4)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(77, 54, 139, 0.1)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77, 54, 139, 0.25)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(245, 245, 247, 0.5)';
                    }}
                    >
                      {s.icon}
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form (Using FormSubmit.co for Zero-Config) */}
            <form 
              action="https://formsubmit.co/major.algerie@gmail.com" 
              method="POST"
              onSubmit={() => setIsSending(true)}
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Project Request - Major Studios" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Hidden inputs for selected data */}
              <input type="hidden" name="selected_services" value={selected.join(', ')} />
              <input type="hidden" name="selected_budget" value={selectedBudgets.join(', ')} />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    {t('contact_form_name')}
                  </label>
                  <input name="user_name" className="form-input" type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    {t('contact_form_company')}
                  </label>
                  <input name="user_company" className="form-input" type="text" placeholder="Your Company Name" />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  {t('contact_form_phone')}
                </label>
                <input name="user_phone" className="form-input" type="tel" placeholder="05XX XX XX XX" required />
              </div>

              {/* Services */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                  {t('contact_form_services')}
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {services.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleService(s)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.75rem',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '8px',
                        border: selected.includes(s) ? '1px solid #4d368b' : '1px solid rgba(77, 54, 139, 0.25)',
                        background: selected.includes(s) ? 'rgba(77, 54, 139, 0.1)' : 'rgba(245, 245, 247, 0.5)',
                        color: selected.includes(s) ? 'var(--purple-main)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                  {t('contact_form_budget')}
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {budgets.map((b, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleBudget(b)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.75rem',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '8px',
                        border: selectedBudgets.includes(b) ? '1px solid #fbaf17' : '1px solid rgba(77, 54, 139, 0.25)',
                        background: selectedBudgets.includes(b) ? 'rgba(251, 175, 23, 0.12)' : 'rgba(245, 245, 247, 0.5)',
                        color: selectedBudgets.includes(b) ? 'var(--accent-yellow)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  {t('contact_form_tell_us')}
                </label>
                <textarea
                  name="message"
                  className="form-input"
                  placeholder="..."
                  rows={5}
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-yellow" 
                disabled={isSending}
                style={{ 
                  width: '100%', 
                  fontSize: '1rem', 
                  padding: '1rem', 
                  borderRadius: '14px',
                  opacity: isSending ? 0.7 : 1,
                  cursor: isSending ? 'not-allowed' : 'pointer'
                }}
              >
                {isSending ? '...' : t('contact_form_submit')}
              </button>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-tertiary)', textAlign: 'center', marginTop: '1rem' }}>
                {t('contact_form_privacy')}
              </p>
            </form>
          </div>
        ) : (
          /* Success state */
          <div style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            background: 'rgba(245, 245, 247, 0.8)',
            border: '1px solid rgba(77, 54, 139, 0.1)',
            borderRadius: '24px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✦</div>
            <h3 style={{ fontFamily: "'Readex Pro', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t('contact_success_title')}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {t('contact_success_desc')}
            </p>
            <button onClick={() => setSent(false)} className="btn-outline">
              {t('contact_success_btn')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
