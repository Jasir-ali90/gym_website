import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function TimingsPage({ onOpenPassModal }) {
  const [liveStatus, setLiveStatus] = useState({ text: 'CHECKING LIVE STATUS...', color: '#94a3b8', activeShift: null });

  useEffect(() => {
    const calculateStatus = () => {
      // Calculate based on Pakistan Standard Time (UTC+5)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pktTime = new Date(utc + (3600000 * 5));
      
      const day = pktTime.getDay(); // 0 is Sunday
      const hours = pktTime.getHours();
      const minutes = pktTime.getMinutes();
      const decimalTime = hours + (minutes / 60);

      if (day === 0) {
        setLiveStatus({
          text: 'CLOSED TODAY (SUNDAY MAINTENANCE)',
          color: '#ef4444',
          activeShift: 'sunday',
          sub: 'Deep sanitation & machine servicing underway. Re-opens Monday 6:00 AM.'
        });
        return;
      }

      // Monday to Saturday
      if (decimalTime >= 6.0 && decimalTime < 11.0) {
        setLiveStatus({
          text: 'OPEN NOW — MEN’S MORNING SHIFT',
          color: '#10b981',
          activeShift: 'morning',
          sub: 'Current shift closes at 11:00 AM. Next: Ladies Shift (11:30 AM).'
        });
      } else if (decimalTime >= 11.0 && decimalTime < 11.5) {
        setLiveStatus({
          text: 'SANITIZATION BREAK (11:00 AM – 11:30 AM)',
          color: '#eab308',
          activeShift: 'transition',
          sub: 'Floor sanitization & prep for exclusive Ladies Shift.'
        });
      } else if (decimalTime >= 11.5 && decimalTime < 16.5) {
        setLiveStatus({
          text: 'OPEN NOW — 100% LADIES PRIVATE SHIFT',
          color: '#ec4899',
          activeShift: 'ladies',
          sub: 'Strict female privacy active. Certified female coaches on duty.'
        });
      } else if (decimalTime >= 16.5 && decimalTime < 17.0) {
        setLiveStatus({
          text: 'SANITIZATION BREAK (04:30 PM – 05:00 PM)',
          color: '#eab308',
          activeShift: 'transition',
          sub: 'Sanitization & prep for Men’s Evening Prime Shift.'
        });
      } else if (decimalTime >= 17.0 || decimalTime < 0.0) {
        setLiveStatus({
          text: 'OPEN NOW — MEN’S EVENING PRIME RUSH',
          color: '#ef4444',
          activeShift: 'evening',
          sub: 'Open until 12:00 AM midnight. Peak training energy.'
        });
      } else {
        setLiveStatus({
          text: 'CURRENTLY CLOSED (NIGHT REST)',
          color: '#94a3b8',
          activeShift: 'night',
          sub: 'Gym re-opens at 06:00 AM sharp with the Morning Shift.'
        });
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <PageHeader 
        badge="TRAINING SCHEDULE & SHIFTS"
        title="WORKOUT TIMINGS &"
        highlight="DAILY SCHEDULE"
        breadcrumb="Timings"
        description="Plan your workout sessions with precision. 3 dedicated daily shifts with guaranteed 100% female privacy and zero disruptions."
      />

      {/* LIVE STATUS BAR */}
      <section style={{ padding: '20px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            background: 'rgba(18, 21, 28, 0.95)',
            border: `1.5px solid ${liveStatus.color}`,
            borderRadius: '14px',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            boxShadow: `0 0 25px ${liveStatus.color}25`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span className="pulse-green" style={{ background: liveStatus.color, boxShadow: `0 0 10px ${liveStatus.color}` }} />
              <div>
                <div style={{ color: liveStatus.color, fontWeight: 900, fontSize: '0.98rem', letterSpacing: '0.5px' }}>
                  {liveStatus.text}
                </div>
                {liveStatus.sub && (
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>
                    {liveStatus.sub}
                  </div>
                )}
              </div>
            </div>

            <button onClick={onOpenPassModal} className="btn-primary-red" style={{ padding: '7px 16px', fontSize: '0.8rem' }}>
              <Sparkles size={13} />
              <span>Claim Free Pass</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 CORE SHIFTS DETAILED BREAKDOWN */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-pill mb-2">3 DISTINCT WORKOUT SHIFTS</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              DEDICATED SLOTS FOR <span className="text-red-gradient">EVERY SCHEDULE</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0 auto', fontSize: '0.92rem' }}>
              Our shifts run Monday through Saturday with strict adherence to timing protocols.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}>
            {/* Shift 1: Morning */}
            <div className="card-pro" style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              borderColor: liveStatus.activeShift === 'morning' ? '#ef4444' : 'rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(234, 179, 8, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#eab308' }}>
                  <Sun size={22} />
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(234,179,8,0.15)', color: '#eab308', padding: '4px 10px', borderRadius: '6px', fontWeight: 800 }}>
                  EARLY RISERS
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase' }}>MEN'S MORNING SHIFT</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', margin: '4px 0 12px', fontFamily: 'var(--font-display)' }}>
                06:00 AM – 11:00 AM
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '20px' }}>
                Crisp morning air, minimal wait times on benches, and high focus. Ideal for professionals and business owners before office hours.
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ef4444" /> Days: Monday to Saturday</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ef4444" /> Coaches: Strength spotters on floor</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ef4444" /> Showers & Lockers fully open</span>
                </div>
              </div>
            </div>

            {/* Shift 2: Ladies */}
            <div className="card-pro" style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              borderColor: 'rgba(236, 72, 153, 0.6)',
              background: 'linear-gradient(145deg, rgba(28, 18, 25, 0.95) 0%, rgba(14, 17, 23, 0.95) 100%)',
              boxShadow: '0 15px 40px rgba(236, 72, 153, 0.15)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(236, 72, 153, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec4899' }}>
                  <ShieldCheck size={22} />
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(236,72,153,0.25)', color: '#f472b6', padding: '4px 10px', borderRadius: '6px', fontWeight: 900 }}>
                  100% PRIVATE
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#ec4899', fontWeight: 800, textTransform: 'uppercase' }}>EXCLUSIVE LADIES SHIFT</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', margin: '4px 0 12px', fontFamily: 'var(--font-display)' }}>
                11:30 AM – 04:30 PM
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '20px' }}>
                A respectful, private sanctuary with certified female fitness coaches. Absolutely zero male presence permitted during these 5 hours.
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(236,72,153,0.2)' }}>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ec4899" /> Days: Monday to Saturday</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ec4899" /> Female certified coaches only</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ec4899" /> Curtained windows & private reception</span>
                </div>
              </div>
            </div>

            {/* Shift 3: Evening */}
            <div className="card-pro" style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              borderColor: liveStatus.activeShift === 'evening' ? '#ef4444' : 'rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(229, 9, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <Moon size={22} />
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(229,9,20,0.15)', color: '#ff4d56', padding: '4px 10px', borderRadius: '6px', fontWeight: 800 }}>
                  PEAK ENERGY
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#ff4d56', fontWeight: 800, textTransform: 'uppercase' }}>MEN'S EVENING PRIME RUSH</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', margin: '4px 0 12px', fontFamily: 'var(--font-display)' }}>
                05:00 PM – 12:00 AM
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '20px' }}>
                The heart of Premium Fitness. Hardcore beats, full coaching staff on duty, and intense training atmosphere until midnight.
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ef4444" /> Days: Monday to Saturday</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ef4444" /> Head Coach Muhammad Ali Arif on floor</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ef4444" /> Open until 12:00 AM midnight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUNDAY POLICY & MAINTENANCE CALLOUT */}
      <section style={{ padding: '30px 0', background: 'rgba(229, 9, 20, 0.08)', borderTop: '1px solid rgba(229, 9, 20, 0.3)', borderBottom: '1px solid rgba(229, 9, 20, 0.3)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontWeight: 900, fontSize: '0.9rem', marginBottom: '8px' }}>
            <AlertCircle size={18} />
            <span>SUNDAY POLICY: STRICTLY CLOSED FOR ALL MEMBERS</span>
          </div>
          <p style={{ color: '#fca5a5', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
            Every Sunday is reserved for deep biocide chemical sanitization, cable lubrications, barbell inspection, and giving our athletes essential muscle recovery time.
          </p>
        </div>
      </section>

      {/* FREQUENTLY ASKED TIMING QUESTIONS */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-pill mb-2">COMMON QUESTIONS</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              TIMINGS & SHIFTS <span className="text-red-gradient">FAQS</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>Can I work out in both Morning and Evening shifts on the same day?</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                Yes! Standard membership permits one full workout session per day. Pro and VIP members can access multiple sessions with prior check-in.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>Are female coaches available during the entire Ladies Shift?</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                Yes. Our certified female fitness coach is present throughout the 11:30 AM to 04:30 PM window to guide routines, adjust weights, and assist newcomers.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>What happens to shifts during Ramadan or Gazetted Holidays?</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                Special Ramadan hours are announced 1 week prior (including post-Iftar and late-night Taraweeh slots). Notice boards and WhatsApp broadcast members with exact timings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(10, 12, 16, 0.95) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>
            FIND A SHIFT THAT FITS YOUR ROUTINE
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '22px' }}>
            Drop by during any shift to experience the atmosphere in person.
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
