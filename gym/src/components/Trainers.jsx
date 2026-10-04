import React from 'react';
import { Award, MessageCircle } from 'lucide-react';
import { Instagram } from './BrandIcons';

export default function Trainers({ onOpenPassModal }) {
  const leadershipAndCoaches = [
    {
      id: 1,
      name: 'Muhammad Ali Arif',
      role: 'Founder & Gym Owner',
      badge: '👑 FOUNDER & OWNER',
      experience: 'Gym Visionary',
      image: '/assets/owner_real.jpg',
      bio: 'Visionary founder behind Premium Fitness Chapter 1.O. Built Karachi’s leading hardcore strength club with heavy imported equipment, 100% generator backup, and high-standard discipline.',
      specialties: ['Gym Vision & Leadership', 'Athlete Development', 'Member Experience Excellence'],
      whatsappDirect: 'https://wa.me/923132229925?text=Salam%20Muhammad%20Ali%20Arif%20Bhai!%20I%20would%20like%20to%20connect%20regarding%20Premium%20Fitness%20Chapter%201.O.',
      instagram: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 2,
      name: 'Coach Sajjad Ali',
      role: 'Head of Strength & Discipline',
      badge: '💪 CHAPTER 1.O HEAD COACH',
      experience: '12+ Years Experience',
      image: '/assets/sajjad_ali_chapter1.jpg', // REAL PHOTO FROM CHAPTER 1
      bio: 'The authentic face of Chapter 1.O strength culture. Master of Olympic barbell technique, heavy knurled dumbbells, deadlifts, and form correction with zero compromise on safety.',
      specialties: ['Powerlifting & Technique', 'Heavy Free-Weight Isolation', 'Injury Rehabilitation'],
      whatsappDirect: 'https://wa.me/923132229925?text=Salam%20Coach%20Sajjad%20Ali!%20I%20want%20to%20train%20under%20your%20guidance%20at%20Chapter%201.O.',
      instagram: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 3,
      name: 'Coach Ahmed Khan',
      role: 'Master Transformation & Diet Plan Specialist',
      badge: '⭐ CHIEF NUTRITIONIST',
      experience: '9+ Years Experience',
      image: '/assets/trainer_real.jpg',
      bio: 'Known across North Karachi for custom flexible Pakistani diet plans that melt fat while building lean muscle. Mentored hundreds of life-changing transformations at Chapter 1.O.',
      specialties: ['Custom Pakistani Diet Plans', 'Fat Loss Recomposition', 'Hypertrophy Training'],
      whatsappDirect: 'https://wa.me/923132229925?text=Salam%20Coach%20Ahmed%20Khan!%20I%20want%20to%20inquire%20about%20your%20diet%20plan%20and%20transformation%20coaching.',
      instagram: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 4,
      name: 'Coach Farah & Team',
      role: 'Head Female Fitness & HIIT Instructor',
      badge: '🌸 LADIES SHIFT HEAD',
      experience: '7+ Years Experience',
      image: '/assets/ladies_real.jpg',
      bio: 'Leads the 100% private ladies shift (11:30 AM to 4:30 PM). Specializes in waist toning, postpartum recovery, metabolic conditioning, and complete privacy for women.',
      specialties: ['Ladies Waist Sculpting & Toning', 'Metabolic Aerobics & HIIT', 'PCOS & Hormone Friendly Routines'],
      whatsappDirect: 'https://wa.me/923132229925?text=Salam!%20I%20am%20interested%20in%20joining%20the%20Ladies%20Shift%20under%20Coach%20Farah%20at%20Chapter%201.O.',
      instagram: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    }
  ];

  return (
    <section 
      id="trainers" 
      style={{ 
        padding: '95px 0', 
        backgroundColor: 'var(--bg-primary)', 
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
            <Award size={16} /> CERTIFIED COACHING & FOUNDER
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
            MEET THE FOUNDER & <span className="text-red-gradient">HEAD COACHES</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Led by founder <strong style={{ color: '#ffffff' }}>Muhammad Ali Arif</strong> and master strength coaches with over a decade of elite training experience.
          </p>
        </div>

        {/* Leadership & Trainers Grid */}
        <div className="grid-4" style={{ gap: '22px' }}>
          {leadershipAndCoaches.map((t) => (
            <div key={t.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', borderRadius: '18px', overflow: 'hidden' }}>
              {/* Photo Frame */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={t.image}
                  alt={t.name}
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
                  background: 'linear-gradient(to top, rgba(18, 21, 28, 0.98) 0%, rgba(18, 21, 28, 0.25) 60%, transparent 100%)',
                }} />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: t.id === 1 ? 'var(--red-gradient)' : 'rgba(0,0,0,0.8)',
                  color: t.id === 1 ? '#fff' : '#ff4d56',
                  border: t.id === 1 ? 'none' : '1px solid rgba(229, 9, 20, 0.5)',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '0.5px'
                }}>
                  {t.badge}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '3px'
                }}>
                  {t.name}
                </h3>
                <div style={{ color: '#ff4d56', fontSize: '0.78rem', fontWeight: 700, marginBottom: '10px' }}>
                  {t.role}
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '16px', flex: 1 }}>
                  {t.bio}
                </p>

                {/* Specialties tags */}
                <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {t.specialties.map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#cbd5e1',
                        fontSize: '0.68rem',
                        padding: '2px 7px',
                        borderRadius: '5px'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={t.whatsappDirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1, justifyContent: 'center', padding: '9px 10px', fontSize: '0.78rem' }}
                  >
                    <MessageCircle size={14} />
                    <span>{t.id === 1 ? 'Contact Owner' : 'Book 1-on-1 PT'}</span>
                  </a>
                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(229, 9, 20, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cbd5e1',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ff4d56';
                      e.currentTarget.style.borderColor = '#ff4d56';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.4)';
                    }}
                    title="Follow on Instagram"
                  >
                    <Instagram size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Coaching Trial Banner */}
        <div className="glass-panel" style={{
          marginTop: '36px',
          padding: '22px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.12) 0%, rgba(18, 21, 28, 0.95) 100%)',
          border: '1px solid rgba(229, 9, 20, 0.35)'
        }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '3px' }}>
              Want Form Correction with Coach Sajjad Ali?
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              Claim a complimentary 1-Day Pass and experience personal coaching guidance directly on the floor.
            </p>
          </div>
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '10px 22px', fontSize: '0.84rem' }}
          >
            Claim Free Trial Session →
          </button>
        </div>
      </div>
    </section>
  );
}
