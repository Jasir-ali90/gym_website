import React from 'react';
import { 
  Sparkles, 
  MessageCircle
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const COACHES_DATA = [
  {
    id: 'ali-arif',
    name: 'Muhammad Ali Arif',
    role: 'Founder & Head Transformation Coach',
    image: '/assets/trainer_ali.webp',
    experience: '10+ Years Experience',
    specialties: ['Elite Muscle Hypertrophy', 'Biomechanics & Form Perfection', 'Competition Prep', 'Rehab Conditioning'],
    clients: '1,000+ Transformations',
    bio: 'Pioneer of science-based bodybuilding in North Karachi. Ali Arif has personally mentored hundreds of competitive bodybuilders, athletes, and working professionals from skinny/obese to peak physical conditioning.',
    quote: '"Discipline is doing what needs to be done, even when the motivation fades. We build warriors, not excuses."',
    badge: 'FOUNDER & MASTER COACH',
    badgeColor: '#ef4444'
  },
  {
    id: 'ayesha-malik',
    name: 'Coach Ayesha Malik',
    role: 'Head Female Fitness & Conditioning Coach',
    image: '/assets/trainer_ayesha.webp',
    experience: '6+ Years Experience',
    specialties: ['Female Fat Loss & Tone', 'PCOS/PCOD Safe Training', 'Post-Natal Recovery', 'Mobility & Glute Development'],
    clients: '450+ Female Clients',
    bio: 'Leading our exclusive 100% Ladies Shift (11:30 AM – 04:30 PM). Coach Ayesha creates a safe, respectful, and motivating sisterhood where women achieve rapid, sustainable body recomposition.',
    quote: '"Strong women empower each other. We focus on strength, health, and permanent lifestyle upgrades."',
    badge: '100% LADIES SHIFT HEAD',
    badgeColor: '#ec4899'
  },
  {
    id: 'hamza-khan',
    name: 'Coach Hamza Khan',
    role: 'Senior Strength & Powerlifting Coach',
    image: '/assets/trainer_hamza.webp',
    experience: '7+ Years Experience',
    specialties: ['Powerlifting Squat/Bench/Deadlift', 'Athletic Conditioning', 'Aggressive Fat Shredding', 'Nutrition Macro Planning'],
    clients: '600+ Athletes Mentored',
    bio: 'A certified powerlifter with competition honors. Hamza specializes in breaking strength plateaus, mastering compound lifts safely, and guiding hardcore heavy lifters to new PRs.',
    quote: '"Progressive overload coupled with clean whole foods yields undeniable results every single time."',
    badge: 'STRENGTH SPECIALIST',
    badgeColor: '#eab308'
  },
  {
    id: 'bilal-ahmed',
    name: 'Coach Bilal Ahmed',
    role: 'Functional HIIT & Sports Mobility Specialist',
    image: '/assets/trainer_bilal.webp',
    experience: '5+ Years Experience',
    specialties: ['High-Intensity Interval Training', 'Cardiovascular VO2 Max', 'Joint Mobility & Core Strength', 'Beginner Ramp-Up'],
    clients: '350+ Members Coached',
    bio: 'Specializing in rapid functional fitness and conditioning. Bilal is renowned for his motivating group classes and helping desk-job professionals eliminate back pain and sluggishness.',
    quote: '"Movement is medicine. Start where you are, use what you have, and never stop moving forward."',
    badge: 'FUNCTIONAL & HIIT',
    badgeColor: '#06b6d4'
  }
];

export default function TrainersPage({ onOpenPassModal }) {
  return (
    <div>
      <PageHeader 
        badge="CERTIFIED COACHING ROSTER"
        title="MEET OUR MASTER"
        highlight="COACHES & MENTORS"
        breadcrumb="Coaches"
        description="Results don't happen by accident. Learn from qualified professionals with proven track records in muscle hypertrophy, female fitness, and metabolic conditioning."
      />

      {/* COACHES CARDS */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {COACHES_DATA.map((coach) => (
              <div 
                key={coach.id}
                className="card-pro"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  padding: 0,
                  borderColor: coach.badgeColor === '#ec4899' ? 'rgba(236,72,153,0.45)' : 'rgba(255,255,255,0.1)'
                }}
              >
                {/* Photo & Overlay */}
                <div style={{ position: 'relative', height: '340px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #161a22 0%, #0d0f14 100%)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14, 17, 23, 0.98) 0%, rgba(14, 17, 23, 0.4) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px'
                  }}>
                    <span style={{
                      background: coach.badgeColor,
                      color: '#fff',
                      fontSize: '0.68rem',
                      fontWeight: 900,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      letterSpacing: '0.6px',
                      width: 'fit-content'
                    }}>
                      {coach.badge}
                    </span>

                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#cbd5e1', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {coach.experience} • {coach.clients}
                      </div>
                      <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#fff', margin: '4px 0 0' }}>
                        {coach.name}
                      </h3>
                      <div style={{ color: coach.badgeColor, fontSize: '0.82rem', fontWeight: 700, marginTop: '2px' }}>
                        {coach.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                    {coach.bio}
                  </p>

                  <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.025)', borderLeft: `3px solid ${coach.badgeColor}`, marginBottom: '20px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.82rem', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                      {coach.quote}
                    </p>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.74rem', color: '#ff4d56', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                      Core Specialties:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {coach.specialties.map((spec, i) => (
                        <span key={i} style={{ fontSize: '0.74rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {spec}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(coach.name)}%20regarding%20training.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                    >
                      <MessageCircle size={14} />
                      <span>Book Consultation With {coach.name.split(' ')[0]}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR 5-STEP SCIENTIFIC COACHING METHODOLOGY */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-pill mb-2">SYSTEMATIC APPROACH</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              HOW OUR <span className="text-red-gradient">COACHING WORKS</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
              Zero guessing. We follow a battle-tested protocol to ensure you hit your goals safely.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ padding: '22px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ef4444', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>01</div>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, marginBottom: '6px' }}>Body Assessment</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                We measure baseline weight, body fat %, joint mobility, and past injury history.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ef4444', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>02</div>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, marginBottom: '6px' }}>Custom Routine</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                We curate a customized workout split matching your work schedule and goals.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ef4444', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>03</div>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, marginBottom: '6px' }}>Form & Mechanics</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                On-the-floor spotters verify your posture on squats, deadlifts, and bench press.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ef4444', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>04</div>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, marginBottom: '6px' }}>Desi Meal Planning</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                Realistic Pakistani meal charts (chicken, daal, eggs, rice) without starving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(10, 12, 16, 0.95) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>
            READY TO TRAIN WITH KARACHI'S BEST?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '22px' }}>
            Schedule an initial consultation and fitness assessment with our certified staff.
          </p>
          <button onClick={onOpenPassModal} className="btn-primary-red" style={{ padding: '12px 28px' }}>
            <Sparkles size={16} />
            <span>Claim Free 1-Day Trial</span>
          </button>
        </div>
      </section>
    </div>
  );
}
