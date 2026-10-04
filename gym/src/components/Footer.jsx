import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Sparkles } from 'lucide-react';
import { Instagram, Facebook } from './BrandIcons';

export default function Footer({ onOpenPassModal }) {
  return (
    <footer style={{
      backgroundColor: '#040507',
      borderTop: '1.5px solid rgba(229, 9, 20, 0.4)',
      padding: '65px 0 28px',
      color: '#94a3b8',
      fontSize: '0.88rem',
    }}>
      <div className="container">
        {/* Top 4-column Grid */}
        <div className="grid-4" style={{ gap: '30px', marginBottom: '45px' }}>
          {/* Col 1: Brand & Owner */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: '#0d0f14',
                border: '1.5px solid rgba(229, 9, 20, 0.65)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 0 14px rgba(229, 9, 20, 0.35)',
                flexShrink: 0
              }}>
                <img 
                  src="/assets/pf_emblem.png" 
                  alt="Premium Fitness Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: '#fff' }}>
                  PREMIUM <span className="text-red-gradient">FITNESS</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#ff4d56', fontWeight: 800 }}>ELITE FITNESS CHAIN • KARACHI</div>
              </div>
            </Link>

            <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#94a3b8' }}>
              Founded & operated by <strong style={{ color: '#fff' }}>Muhammad Ali Arif</strong>. Karachi’s premier strength and fitness chain featuring calibrated iron, bio-mechanic machines, and certified coaches.
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href="https://www.instagram.com/premiumfitnesschapter1.o/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none'
                }}
                title="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com/premiumfitness.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none'
                }}
                title="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://wa.me/923132229925"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4ade80',
                  textDecoration: 'none'
                }}
                title="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '14px', textTransform: 'uppercase' }}>
              Club Webpages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
              <li><Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/facilities" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Facilities & Equipment</Link></li>
              <li><Link to="/timings" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Workout Timings & Shifts</Link></li>
              <li><Link to="/pricing" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Membership Fees & Plans</Link></li>
              <li><Link to="/trainers" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Coaches & Ali Arif</Link></li>
              <li><Link to="/community" style={{ color: '#cbd5e1', textDecoration: 'none' }}>BMI Tool & Community</Link></li>
              <li><Link to="/contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact & 3 Branches</Link></li>
              <li style={{ marginTop: '4px' }}>
                <button
                  onClick={onOpenPassModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ff4d56',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Sparkles size={13} /> Claim Free Trial Pass
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Shifts (SUNDAY CLOSED) */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '14px', textTransform: 'uppercase' }}>
              Workout Shifts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
              <div>
                <strong style={{ color: '#fff' }}>Men's Morning Shift:</strong>
                <div>06:00 AM – 11:00 AM (Mon - Sat)</div>
              </div>
              <div>
                <strong style={{ color: '#ec4899' }}>100% Ladies Shift:</strong>
                <div>11:30 AM – 04:30 PM (Mon - Sat)</div>
              </div>
              <div>
                <strong style={{ color: '#ff4d56' }}>Men's Evening Shift:</strong>
                <div>05:00 PM – 12:00 AM (Mon - Sat)</div>
              </div>
              <div style={{ background: 'rgba(229, 9, 20, 0.12)', padding: '6px 9px', borderRadius: '6px', border: '1px solid rgba(229, 9, 20, 0.4)' }}>
                <strong style={{ color: '#ff4d56' }}>Sunday: CLOSED</strong>
                <div style={{ color: '#fca5a5', fontSize: '0.72rem' }}>Deep sanitization & machine servicing</div>
              </div>
            </div>
          </div>

          {/* Col 4: Locations (Chapter 1.0, 2.0, 3.0) */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '14px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} style={{ color: '#ef4444' }} /> Our Chapters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.78rem' }}>
              {/* Chapter 1.0 */}
              <div style={{ background: 'rgba(229, 9, 20, 0.06)', padding: '9px 11px', borderRadius: '8px', border: '1px solid rgba(229, 9, 20, 0.35)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ color: '#ff4d56', fontWeight: 800, fontSize: '0.8rem' }}>CHAPTER 1.O</span>
                  <span style={{ fontSize: '0.62rem', background: 'rgba(229,9,20,0.2)', color: '#fca5a5', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>Flagship</span>
                </div>
                <div style={{ color: '#cbd5e1', lineHeight: 1.35 }}>2nd Floor, Plot A-901, Shahrah-e-Usman, Sector 11-A, North Karachi</div>
                <a href="tel:+923132229925" style={{ color: '#fff', marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.74rem' }}>
                  <Phone size={10} style={{ color: '#ef4444' }} /> 0313-2229925
                </a>
              </div>

              {/* Chapter 2.0 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.025)', padding: '9px 11px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>CHAPTER 2.0</span>
                  <span style={{ fontSize: '0.62rem', background: 'rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>Buffer Zone</span>
                </div>
                <div style={{ color: '#94a3b8', lineHeight: 1.35 }}>Sector 15-A, Near Power House Chowrangi, North Karachi</div>
                <a href="tel:+923132229925" style={{ color: '#cbd5e1', marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.74rem' }}>
                  <Phone size={10} style={{ color: '#ef4444' }} /> 0313-2229925
                </a>
              </div>

              {/* Chapter 3.0 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.025)', padding: '9px 11px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>CHAPTER 3.0</span>
                  <span style={{ fontSize: '0.62rem', background: 'rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>Shadman Town</span>
                </div>
                <div style={{ color: '#94a3b8', lineHeight: 1.35 }}>Sector 14-B, Main Shadman Town, Karachi</div>
                <a href="tel:+923132229925" style={{ color: '#cbd5e1', marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.74rem' }}>
                  <Phone size={10} style={{ color: '#ef4444' }} /> 0313-2229925
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem'
        }}>
          <div>
            © {new Date().getFullYear()} PREMIUM FITNESS. All Rights Reserved. Founder & Owner: Muhammad Ali Arif. Karachi, Pakistan.
          </div>
          <div style={{ color: '#ff4d56', fontWeight: 600, display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span>Chapter 1.0</span> • <span>Chapter 2.0</span> • <span>Chapter 3.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
