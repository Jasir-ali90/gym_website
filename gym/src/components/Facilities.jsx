import React from 'react';
import { Dumbbell, ShieldCheck, Wind, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Facilities({ onOpenPassModal }) {
  const highlights = [
    {
      id: 1,
      title: 'MODERN EQUIPMENT',
      tag: 'Up to 50KG Dumbbells',
      description: 'Solid rubber hex & cast-iron dumbbells up to 50kg+, competition Olympic power racks, incline benches, and high-gauge cable crossover machines.',
      image: '/assets/dumbbells_real.jpg',
      icon: <Dumbbell size={24} style={{ color: '#ff4d56' }} />,
      perks: ['Solid 50kg Dumbbells', 'Olympic Power Racks', 'Deadlift Platforms']
    },
    {
      id: 2,
      title: 'EXPERT TRAINERS',
      tag: 'Certified Strength Mentors',
      description: 'Head coaches on the gym floor ensuring strict lifting posture, injury-free progressive overload, and high-energy motivation in every session.',
      image: '/assets/trainer_real.jpg',
      icon: <Award size={24} style={{ color: '#ef4444' }} />,
      perks: ['Master Form Correction', 'Powerlifting & Hypertrophy', 'Dedicated Floor Support']
    },
    {
      id: 3,
      title: 'PERSONALIZED PLANS',
      tag: 'Custom Diet & Private Ladies Suite',
      description: 'Tailored calorie & macro targets designed for Pakistani meals, coupled with a 100% private ladies shift supervised by certified female coaches.',
      image: '/assets/ladies_real.jpg',
      icon: <ShieldCheck size={24} style={{ color: '#ec4899' }} />,
      perks: ['100% Private Ladies Shift', 'Customized Diet Targets', 'Waist Sculpting & Toning']
    },
    {
      id: 4,
      title: 'CHILLED AC & POWER BACKUP',
      tag: 'Zero Downtime 24/7',
      description: 'Heavy commercial inverter AC units keep the workout floor ice-cold in extreme Karachi heat, backed by a dedicated silent heavy-duty generator.',
      image: '/assets/hero_real.jpg',
      icon: <Wind size={24} style={{ color: '#10b981' }} />,
      perks: ['100% Generator Backup', 'Dual Chilled AC Inverters', 'Sanitized Premium Lockers']
    },
  ];

  return (
    <section 
      id="facilities" 
      style={{ 
        padding: '95px 0', 
        backgroundColor: 'var(--bg-secondary)', 
        borderTop: '1px solid rgba(229, 9, 20, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
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
            <Dumbbell size={16} /> VALUE PROPOSITIONS & FACILITIES
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
            THE PREMIUM <span className="text-red-gradient">ADVANTAGE</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Built without compromise. Heavy commercial infrastructure, master coach guidance, and an environment engineered to transform your body.
          </p>
        </div>

        {/* 4 Clean Highlight Cards */}
        <div className="grid-2" style={{ gap: '28px' }}>
          {highlights.map((item) => (
            <div 
              key={item.id} 
              className="glass-card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: '18px',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image Frame with Overlay */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="card-zoom-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 21, 28, 0.98) 0%, rgba(18, 21, 28, 0.3) 65%, transparent 100%)',
                }} />
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(0, 0, 0, 0.82)',
                  border: '1px solid rgba(229, 9, 20, 0.5)',
                  color: '#ff4d56',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '0.5px'
                }}>
                  {item.tag}
                </span>
              </div>

              {/* Card Body with Generous Padding */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    letterSpacing: '0.3px'
                  }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '22px', flex: 1 }}>
                  {item.description}
                </p>

                {/* Highlights List */}
                <div style={{ 
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
                  paddingTop: '16px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '9px' 
                }}>
                  {item.perks.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacious Action Callout */}
        <div className="glass-panel" style={{
          marginTop: '48px',
          padding: '28px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.14) 0%, rgba(18, 21, 28, 0.95) 100%)',
          border: '1.5px solid rgba(229, 9, 20, 0.4)',
          borderRadius: '20px'
        }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Experience Our Heavy Iron & Machines In Person
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
              Visit 2nd Floor, Plot No: A-901 Shahrah-e-Usman, Sector 11-A, North Karachi for a complimentary tour.
            </p>
          </div>
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '14px 28px', fontSize: '0.92rem' }}
          >
            <span>Claim Free 1-Day Trial Pass</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
