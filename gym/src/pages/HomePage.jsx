import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Star,
  MapPin,
  ChevronRight
} from 'lucide-react';
import Hero from '../components/Hero';

export default function HomePage({ onOpenPassModal }) {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <Hero onOpenPassModal={onOpenPassModal} />

      {/* 2. VALUE PROPOSITION STRIP */}
      <section style={{ 
        padding: '36px 0', 
        background: 'rgba(12, 14, 18, 0.95)', 
        borderBottom: '1px solid rgba(229, 9, 20, 0.25)' 
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(229, 9, 20, 0.15)',
                border: '1.5px solid rgba(229, 9, 20, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff4d56',
                flexShrink: 0
              }}>
                <Dumbbell size={22} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '0.96rem', fontWeight: 800, margin: 0 }}>Pro Bio-Mechanics</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.78rem', margin: '2px 0 0' }}>Calibrated weights up to 50KG</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(236, 72, 153, 0.15)',
                border: '1.5px solid rgba(236, 72, 153, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ec4899',
                flexShrink: 0
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '0.96rem', fontWeight: 800, margin: 0 }}>100% Ladies Floor</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.78rem', margin: '2px 0 0' }}>Certified female trainers only</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(229, 9, 20, 0.15)',
                border: '1.5px solid rgba(229, 9, 20, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff4d56',
                flexShrink: 0
              }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '0.96rem', fontWeight: 800, margin: 0 }}>Triple Daily Shifts</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.78rem', margin: '2px 0 0' }}>Morning, Ladies & Evening Prime</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(234, 179, 8, 0.15)',
                border: '1.5px solid rgba(234, 179, 8, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#eab308',
                flexShrink: 0
              }}>
                <Award size={22} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '0.96rem', fontWeight: 800, margin: 0 }}>Muhammad Ali Arif</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.78rem', margin: '2px 0 0' }}>Founder & Master Coach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACILITIES HIGHLIGHT SECTION */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="badge-pill mb-2">WORLD-CLASS INFRASTRUCTURE</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase' }}>
                EXPERIENCE THE <span className="text-red-gradient">ELITE ENVIRONMENT</span>
              </h2>
              <p style={{ color: '#94a3b8', maxWidth: '600px', fontSize: '0.95rem' }}>
                Engineered for maximum hypertrophy, fat loss, and athletic performance with imported bio-mechanic machinery.
              </p>
            </div>
            <Link to="/facilities" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Explore All Facilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {/* Card 1 */}
            <div className="card-pro" style={{ padding: '30px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(229, 9, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4d56', marginBottom: '20px' }}>
                <Dumbbell size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Heavy Iron & Free Weights</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Olympic bars, calibrated bumper plates, and a massive dumbbell rack ranging from 1kg all the way to 50kg.
              </p>
              <Link to="/facilities" style={{ color: '#ff4d56', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                View Zone Details <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card-pro" style={{ padding: '30px', borderColor: 'rgba(236, 72, 153, 0.4)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec4899', marginBottom: '20px' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Exclusive Ladies Studio</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                100% private atmosphere, tinted windows, zero male staff during shift, and certified female trainers for guidance.
              </p>
              <Link to="/facilities" style={{ color: '#ec4899', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Ladies Shift Protocols <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card-pro" style={{ padding: '30px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(229, 9, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4d56', marginBottom: '20px' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Cardio Cinema & HIIT</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Interactive touch-screen treadmills, curved runners, assault bikes, and stairmasters for maximum calorie burn.
              </p>
              <Link to="/facilities" style={{ color: '#ff4d56', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Cardio Specs <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TIMINGS PREVIEW STRIP */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(18, 21, 28, 0.95) 0%, rgba(10, 12, 16, 0.95) 100%)',
            border: '1.5px solid rgba(229, 9, 20, 0.45)',
            borderRadius: '20px',
            padding: ' clamp(24px, 4vw, 44px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge-pill mb-2" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}>
                <span className="pulse-green" style={{ width: '8px', height: '8px', background: '#34d399' }}></span>
                WEEKDAY SHIFTS (MON – SAT)
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
                FIND YOUR PERFECT <span className="text-red-gradient">WORKOUT HOUR</span>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                Whether you lift at dawn, want private female fitness hours, or crush iron after work — Premium Fitness has dedicated slots tailored to you.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/timings" className="btn-primary-red">
                  <Clock size={16} />
                  <span>View Full Schedule</span>
                </Link>
                <button onClick={onOpenPassModal} className="btn-secondary">
                  <span>Claim 1-Day Trial</span>
                </button>
              </div>
            </div>

            {/* Quick Timing Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>MORNING SHIFT (MEN)</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>06:00 AM – 11:00 AM</div>
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(229,9,20,0.15)', color: '#ff4d56', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>Mon - Sat</span>
              </div>

              <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'rgba(236,72,153,0.08)', border: '1.5px solid rgba(236,72,153,0.35)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#f472b6', fontWeight: 700 }}>100% LADIES PRIVATE SHIFT</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>11:30 AM – 04:30 PM</div>
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(236,72,153,0.2)', color: '#f472b6', padding: '4px 10px', borderRadius: '6px', fontWeight: 800 }}>Strict Privacy</span>
              </div>

              <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>EVENING PRIME RUSH (MEN)</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>05:00 PM – 12:00 AM</div>
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(229,9,20,0.15)', color: '#ff4d56', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>Peak Energy</span>
              </div>

              <div style={{ padding: '10px 18px', borderRadius: '10px', background: 'rgba(229, 9, 20, 0.12)', border: '1px solid rgba(229, 9, 20, 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ff4d56', fontWeight: 800, fontSize: '0.82rem' }}>SUNDAY: CLOSED</span>
                <span style={{ color: '#fca5a5', fontSize: '0.75rem' }}>Deep Sanitization & Servicing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PREVIEW */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-pill mb-2">HONEST TRANSPARENT PRICING</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              CHOOSE YOUR <span className="text-red-gradient">MEMBERSHIP TIER</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              No hidden admission fees, no surprises. Direct access to elite training.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}>
            {/* Tier 1: Starter */}
            <div className="card-pro" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>STARTER FITNESS</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', margin: '10px 0 4px', fontFamily: 'var(--font-display)' }}>
                Rs. 4,000 <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>/ month</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', marginBottom: '20px' }}>Ideal for consistent lifters needing high-end machines & locker access.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> Full Free Weights & Machine Floor</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> Cardio & Functional Turf Access</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> Digital Locker & Shower Suites</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> General Floor Trainer Guidance</li>
              </ul>

              <Link to="/pricing" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                View Starter Details
              </Link>
            </div>

            {/* Tier 2: Pro Transformation (Highlighted) */}
            <div className="card-pro" style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              borderColor: 'rgba(229, 9, 20, 0.8)',
              background: 'linear-gradient(145deg, rgba(22, 26, 34, 0.98) 0%, rgba(14, 17, 23, 0.98) 100%)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(229, 9, 20, 0.25)'
            }}>
              <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: 'var(--red-gradient)', color: '#fff', fontSize: '0.72rem', fontWeight: 900, padding: '4px 14px', borderRadius: '999px', letterSpacing: '0.8px', boxShadow: '0 4px 12px rgba(229, 9, 20, 0.5)' }}>
                ★ MOST POPULAR (SAVE 15%)
              </div>
              <div style={{ fontSize: '0.8rem', color: '#ff4d56', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>PRO TRANSFORMATION</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', margin: '10px 0 4px', fontFamily: 'var(--font-display)' }}>
                Rs. 10,500 <span style={{ fontSize: '0.85rem', color: '#ff4d56', fontWeight: 700 }}>/ 3 months</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', marginBottom: '20px' }}>Comprehensive plan with customized diet charting & progress tracking.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> Everything in Starter Tier</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> Personalized Diet & Calorie Macro Plan</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> Monthly Body Composition & Fat Tracking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> 1-on-1 Consultation with Coach</li>
              </ul>

              <Link to="/pricing" className="btn-primary-red" style={{ width: '100%', justifyContent: 'center' }}>
                Join Pro Plan Now
              </Link>
            </div>

            {/* Tier 3: VIP Elite */}
            <div className="card-pro" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.8rem', color: '#eab308', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>VIP ELITE ANNUAL</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', margin: '10px 0 4px', fontFamily: 'var(--font-display)' }}>
                Rs. 36,000 <span style={{ fontSize: '0.85rem', color: '#eab308', fontWeight: 700 }}>/ year</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', marginBottom: '20px' }}>All-inclusive passport across Chapters 1.0, 2.0 & 3.0 with VIP perks.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> All-Chapter Multi-Access (1.0, 2.0, 3.0)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> Dedicated VIP Permanent Locker</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> 2 Free Monthly Guest Workout Passes</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> Direct WhatsApp Mentorship with Ali Arif</li>
              </ul>

              <Link to="/pricing" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                View VIP Benefits
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/pricing" style={{ color: '#ff4d56', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span>Compare All Features, Ladies Pass & Freezes</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER & TRAINERS SPOTLIGHT */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge-pill mb-2">CERTIFIED COACHING EXCELLENCE</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
                LED BY FOUNDER <span className="text-red-gradient">MUHAMMAD ALI ARIF</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                With over a decade of elite bodybuilding, strength conditioning, and clinical fat loss coaching, Muhammad Ali Arif built Premium Fitness on one core principle: <em>No gimmicks, just scientific results and unmatched discipline.</em>
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <CheckCircle2 size={17} color="#ef4444" /> Certified Strength & Conditioning Specialists
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <CheckCircle2 size={17} color="#ec4899" /> Dedicated Female Coaches for 100% Ladies Shift
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <CheckCircle2 size={17} color="#ef4444" /> Personalized Biomechanical Posture Corrections
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/trainers" className="btn-primary-red">
                  <Users size={16} />
                  <span>Meet All Coaches</span>
                </Link>
                <Link to="/community" className="btn-secondary">
                  <span>Transformation Stories</span>
                </Link>
              </div>
            </div>

            {/* Coach Card Visual */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid rgba(229, 9, 20, 0.5)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                background: '#0d0f14',
                position: 'relative'
              }}>
                <img 
                  src="/assets/owner_real.jpg" 
                  alt="Muhammad Ali Arif - Founder & Master Coach"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6, 7, 9, 0.95) 0%, rgba(6, 7, 9, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px'
                }}>
                  <span style={{ background: 'var(--red-gradient)', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: '4px', width: 'fit-content', marginBottom: '8px' }}>
                    FOUNDER & HEAD COACH
                  </span>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>Muhammad Ali Arif</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '4px 0 0' }}>10+ Years Experience • 1,000+ Transformations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL GOOGLE REVIEWS TEASER */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="badge-pill mb-2" style={{ background: 'rgba(234, 179, 8, 0.15)', borderColor: 'rgba(234, 179, 8, 0.4)', color: '#eab308' }}>
                <Star size={12} fill="#eab308" color="#eab308" /> 4.9 RATING ON GOOGLE
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase' }}>
                KARACHI'S HIGHEST <span className="text-red-gradient">RATED MEMBERS</span>
              </h2>
            </div>
            <Link to="/community" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Read All 150+ Reviews & BMI Tool</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div className="card-pro" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#eab308" color="#eab308" />)}
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '14px' }}>
                "Best gym in North Karachi hands down. Proper imported machinery, heavy dumbbells, and Ali bhai personally guides everyone on correct posture and diet."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--red-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem' }}>
                  FK
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>Farhan Khan</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>Member since 2023 • Chapter 1.0</div>
                </div>
              </div>
            </div>

            <div className="card-pro" style={{ padding: '24px', borderColor: 'rgba(236,72,153,0.3)' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#ec4899" color="#ec4899" />)}
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '14px' }}>
                "As a female, finding a gym with 100% privacy and knowledgeable female trainers was tough. Premium Fitness ladies shift is 10/10 secure and clean!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(236,72,153,0.3)', border: '1px solid #ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem' }}>
                  SZ
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>Sadia Zaidi</div>
                  <div style={{ color: '#ec4899', fontSize: '0.74rem' }}>Ladies Shift Member • Chapter 2.0</div>
                </div>
              </div>
            </div>

            <div className="card-pro" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#eab308" color="#eab308" />)}
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '14px' }}>
                "Lost 16kg in 4 months following the Pro Transformation package. The staff pushes you to your limits with respect. Highly recommended!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--red-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem' }}>
                  OB
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>Osama Bilal</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>Pro Member • Chapter 1.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BIG BOTTOM CTA BANNER */}
      <section style={{
        padding: '70px 0',
        background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.25) 0%, rgba(10, 12, 16, 0.98) 100%)',
        borderTop: '1.5px solid rgba(229, 9, 20, 0.4)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="badge-pill mb-2">READY TO LEVEL UP?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '14px' }}>
            CLAIM YOUR 1-DAY <span className="text-red-gradient">FREE VIP PASS</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Step inside any of our 3 Karachi chapters, experience our calibrated machines, and see why hundreds of Karachi lifters call Premium Fitness their second home.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={onOpenPassModal} className="btn-primary-red" style={{ padding: '14px 28px', fontSize: '0.92rem' }}>
              <Sparkles size={18} />
              <span>Claim Free VIP Pass</span>
            </button>
            <Link to="/contact" className="btn-secondary" style={{ padding: '14px 24px', fontSize: '0.92rem' }}>
              <MapPin size={18} />
              <span>Visit Club Locations</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
