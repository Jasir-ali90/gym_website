import React, { useState } from 'react';
import { MapPin, Phone, Send, CloudSun, Compass, CheckCircle } from 'lucide-react';
import { Instagram, Facebook } from './BrandIcons';

export default function LocationContact() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(`Assalam-o-Alaikum!
Name: ${formState.name}
Phone: ${formState.phone}
Message: ${formState.message || 'I want more details about Chapter 1.O gym membership packages.'}`);
    window.open(`https://wa.me/923132229925?text=${encoded}`, '_blank');
    setSent(true);
    setFormState({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section 
      id="location" 
      style={{ 
        padding: '95px 0', 
        backgroundColor: 'var(--bg-secondary)', 
        borderTop: '1px solid rgba(229, 9, 20, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#ff4d56',
            fontWeight: 800,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            marginBottom: '12px'
          }}>
            <MapPin size={16} /> VISIT OUR FLAGSHIP CLUB
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '16px',
            color: '#ffffff'
          }}>
            LOCATED IN <span className="text-red-gradient">NORTH KARACHI SECTOR 11-A</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Centrally situated on main Shahrah-e-Usman with lift access, dedicated security, and easily accessible parking.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid-2" style={{ gap: '30px', alignItems: 'stretch' }}>
          {/* Left Column: Details & Socials */}
          <div className="glass-card" style={{ padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Address item */}
              <div style={{ display: 'flex', gap: '14px', marginBottom: '22px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(229, 9, 20, 0.12)',
                  border: '1px solid rgba(229, 9, 20, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ff4d56',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '3px' }}>
                    Gym Address
                  </h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    2nd Floor, Plot No: A-901, Shahrah-e-Usman,<br />
                    Sector 11-A, North Karachi, Karachi, 75850, Pakistan.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/PREMIUM+FITNESS+CHAPTER+1.O/data=!4m2!3m1!1s0x3eb341ebcc1dfb75:0x416241bc1b10f6d3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#ff4d56',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      marginTop: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    <Compass size={14} /> Open in Google Maps Navigation →
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp item */}
              <div style={{ display: 'flex', gap: '14px', marginBottom: '22px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4ade80',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '3px' }}>
                    Front Desk Helpline
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <a href="tel:+923132229925" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 600 }}>
                      +92 313 2229925 (Desk & WhatsApp)
                    </a>
                    <a href="tel:+923132229925" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.82rem' }}>
                      0313-2229925 (Local Karachi Dial)
                    </a>
                  </div>
                </div>
              </div>

              {/* Climate Note */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <CloudSun size={22} style={{ color: '#ff4d56' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>
                    Karachi Weather: Chilled Air-Conditioned Floor
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                    Zero humidity workout environment with industrial AC & generator backup.
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>
                Follow Chapter 1.O Daily Content:
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href="https://www.instagram.com/premiumfitnesschapter1.o/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-dark"
                  style={{ flex: 1, justifyContent: 'center', padding: '9px 12px', fontSize: '0.82rem' }}
                >
                  <Instagram size={15} style={{ color: '#ec4899' }} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/premiumfitness.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-dark"
                  style={{ flex: 1, justifyContent: 'center', padding: '9px 12px', fontSize: '0.82rem' }}
                >
                  <Facebook size={15} style={{ color: '#3b82f6' }} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Direct Message */}
          <div className="glass-card" style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>
              Interactive Location Map
            </h4>

            {/* Map Frame */}
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(229, 9, 20, 0.4)',
              marginBottom: '18px',
              position: 'relative'
            }}>
              <iframe
                title="Premium Fitness Chapter 1.O Location"
                src="https://maps.google.com/maps?q=PREMIUM+FITNESS+CHAPTER+1.O+North+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e2e8f0' }}>
                Send Quick Inquiry to Front Desk:
              </div>
              <div className="responsive-form-row">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontSize: '0.85rem'
                  }}
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <textarea
                placeholder="Ask about fees, timings, or diet plans..."
                rows="2"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  resize: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-whatsapp"
                style={{ justifyContent: 'center', padding: '11px', fontSize: '0.88rem' }}
              >
                <Send size={15} />
                <span>Send Directly via WhatsApp</span>
              </button>
              {sent && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80', fontSize: '0.78rem', justifyContent: 'center', marginTop: '4px' }}>
                  <CheckCircle size={13} /> Message sent to WhatsApp (+92 313 2229925)!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
