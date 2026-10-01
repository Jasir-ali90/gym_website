import React from 'react';
import { Dumbbell, MessageCircle } from 'lucide-react';
import { Instagram, Facebook } from './BrandIcons';

export default function Footer({ onOpenPassModal }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 115;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '#' + id);
    }
  };

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1f0b0d 0%, #0d0f14 100%)',
                border: '1px solid rgba(229, 9, 20, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Dumbbell size={18} style={{ color: '#ff2a38' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: '#fff' }}>
                  PREMIUM <span className="text-red-gradient">FITNESS</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#ff4d56', fontWeight: 800 }}>CHAPTER 1.O • NORTH KARACHI</div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#94a3b8' }}>
              Founded & operated by <strong style={{ color: '#fff' }}>Muhammad Ali</strong>. Karachi’s premier strength sanctuary featuring heavy iron, bio-mechanic machines, and certified transformation coaches.
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

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '14px', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
              <li><a href="#facilities" onClick={(e) => handleScrollTo(e, 'facilities')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>Gym Facilities & Machines</a></li>
              <li><a href="#timings" onClick={(e) => handleScrollTo(e, 'timings')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>Workout Timings & Shifts</a></li>
              <li><a href="#pricing" onClick={(e) => handleScrollTo(e, 'pricing')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>Membership Fees (PKR)</a></li>
              <li><a href="#trainers" onClick={(e) => handleScrollTo(e, 'trainers')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>Owner Muhammad Ali & Coaches</a></li>
              <li><a href="#events" onClick={(e) => handleScrollTo(e, 'events')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>Beach Outings & Events</a></li>
              <li><a href="#calculator" onClick={(e) => handleScrollTo(e, 'calculator')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>BMI & Macro Calculator</a></li>
              <li><a href="#reviews" onClick={(e) => handleScrollTo(e, 'reviews')} style={{ color: '#cbd5e1', textDecoration: 'none' }}>Google Reviews (4.5★)</a></li>
              <li>
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
                    textAlign: 'left'
                  }}
                >
                  ★ Claim Free 1-Day Trial Pass
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

          {/* Col 4: Location */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '14px', textTransform: 'uppercase' }}>
              Location & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '9px', borderRadius: '8px', border: '1px solid rgba(229, 9, 20, 0.3)' }}>
                <span style={{ color: '#ff4d56', fontWeight: 800 }}>★ CHAPTER 1.O (Flagship)</span>
                <div>2nd Floor, Plot No: A-901, Shahrah-e-Usman, Sector 11-A, North Karachi</div>
                <div style={{ color: '#fff', marginTop: '3px', fontWeight: 600 }}>Helpline: 0313-2229925</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: '#cbd5e1', fontWeight: 700 }}>CHAPTER 3.0</span>
                <div>Sector 14-B, Shadman Town, Karachi</div>
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
            © {new Date().getFullYear()} PREMIUM FITNESS CHAPTER 1.O. All Rights Reserved. Owner: Muhammad Ali. North Karachi, Sindh.
          </div>
          <div>
            <span>Discipline • Iron • Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
