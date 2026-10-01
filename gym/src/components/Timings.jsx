import React, { useState, useEffect } from 'react';
import { Clock, Shield, CheckCircle2, Sun, Moon, XCircle } from 'lucide-react';

export default function Timings({ onOpenPassModal }) {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      const dayStr = now.toLocaleDateString('en-US', { weekday: 'long' });
      setCurrentTime(timeStr);
      setCurrentDay(dayStr);

      const day = now.getDay(); // 0 is Sunday
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentDecimalTime = hour + minute / 60;

      if (day === 0) {
        // SUNDAY STRICTLY CLOSED
        setIsOpenNow(false);
        setStatusMessage('CLOSED TODAY (SUNDAY: DEEP SANITIZATION)');
      } else {
        // Monday - Saturday shifts
        if (currentDecimalTime >= 6.0 && currentDecimalTime < 11.0) {
          setIsOpenNow(true);
          setStatusMessage("OPEN NOW: MEN'S MORNING POWER SHIFT (6AM–11AM)");
        } else if (currentDecimalTime >= 11.0 && currentDecimalTime < 11.5) {
          setIsOpenNow(false);
          setStatusMessage('TRANSITION BREAK (LADIES SHIFT STARTS AT 11:30 AM)');
        } else if (currentDecimalTime >= 11.5 && currentDecimalTime < 16.5) {
          setIsOpenNow(true);
          setStatusMessage('OPEN NOW: 100% PRIVATE LADIES SHIFT (11:30AM–4:30PM)');
        } else if (currentDecimalTime >= 16.5 && currentDecimalTime < 17.0) {
          setIsOpenNow(false);
          setStatusMessage("TRANSITION BREAK (MEN'S EVENING STARTS AT 5:00 PM)");
        } else if (currentDecimalTime >= 17.0 && currentDecimalTime < 24.0) {
          setIsOpenNow(true);
          setStatusMessage("OPEN NOW: MEN'S EVENING HEAVY IRON (5PM–12AM)");
        } else {
          setIsOpenNow(false);
          setStatusMessage('CLOSED FOR THE NIGHT (OPENS TOMORROW 6:00 AM)');
        }
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" style={{ padding: '85px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#ff4d56',
            fontWeight: 800,
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}>
            <Clock size={15} /> OPERATING SCHEDULE
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px'
          }}>
            WORKOUT TIMINGS & <br />
            <span className="text-red-gradient">SEPARATE LADIES HOURS</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Structured, dedicated workout shifts with certified coaches. <strong style={{ color: '#ef4444' }}>Every Sunday is closed</strong> for sanitization and deep machine maintenance.
          </p>

          {/* Real-time Status Card */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: 'rgba(18, 21, 28, 0.95)',
            border: isOpenNow ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(239, 68, 68, 0.5)',
            borderRadius: '999px',
            padding: '9px 22px',
            marginTop: '18px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className={isOpenNow ? 'pulse-green' : 'pulse-red'}></span>
              <span style={{ fontWeight: 800, color: isOpenNow ? '#34d399' : '#f87171', fontSize: '0.86rem' }}>
                {statusMessage || (isOpenNow ? 'GYM IS CURRENTLY OPEN' : 'GYM IS CLOSED')}
              </span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
              Karachi: <strong style={{ color: '#fff' }}>{currentTime || '08:00 PM'}</strong> ({currentDay || 'Monday'})
            </span>
          </div>
        </div>

        {/* Timings Cards Grid */}
        <div className="grid-3" style={{ marginTop: '24px' }}>
          {/* Card 1: Gents Morning Batch */}
          <div className="glass-card" style={{ padding: '28px 24px', borderTop: '3px solid #ff4d56' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(229, 9, 20, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff4d56'
              }}>
                <Sun size={22} />
              </div>
              <span style={{
                background: 'rgba(229, 9, 20, 0.15)',
                color: '#ff4d56',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>
                Morning Shift
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Men's Morning Power
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '18px' }}>
              Early morning training for professionals, students, and athletes before starting their day.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.35)',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '18px'
            }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Batch Hours</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                06:00 AM – 11:00 AM
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '2px' }}>Monday through Saturday</div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.82rem', color: '#cbd5e1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#ef4444' }} /> High-energy cardio & iron session
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#ef4444' }} /> Morning trainer assistance on floor
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#ef4444' }} /> Clean lockers & shower access
              </li>
            </ul>
          </div>

          {/* Card 2: Dedicated Ladies Shift */}
          <div className="glass-card red-shimmer-border" style={{ 
            padding: '28px 24px', 
            background: 'linear-gradient(180deg, rgba(236, 72, 153, 0.08) 0%, rgba(18, 21, 28, 0.95) 100%)',
            borderTop: '3px solid #ec4899',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(236, 72, 153, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f472b6'
              }}>
                <Shield size={22} />
              </div>
              <span style={{
                background: 'rgba(236, 72, 153, 0.25)',
                color: '#f472b6',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>
                100% Ladies Only
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Ladies Exclusive Shift
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '18px' }}>
              Strictly private environment with female fitness instructors, frosted glass privacy, and comfortable cardio/toning zone.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              marginBottom: '18px'
            }}>
              <div style={{ fontSize: '0.72rem', color: '#f472b6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Private Ladies Shift</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f472b6', fontFamily: 'var(--font-display)' }}>
                11:30 AM – 04:30 PM
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '2px' }}>Monday through Saturday</div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.82rem', color: '#cbd5e1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#f472b6' }} /> Certified Female Fitness Coach present
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#f472b6' }} /> Zero male entry or male staff
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#f472b6' }} /> Fat burn, toning & aerobics programs
              </li>
            </ul>
          </div>

          {/* Card 3: Gents Evening / Prime Shift */}
          <div className="glass-card" style={{ padding: '28px 24px', borderTop: '3px solid #dc2626' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(229, 9, 20, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff4d56'
              }}>
                <Moon size={22} />
              </div>
              <span style={{
                background: 'rgba(229, 9, 20, 0.15)',
                color: '#ff4d56',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>
                Evening Prime
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Men's Evening Heavy Iron
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '18px' }}>
              The peak bodybuilding & hypertrophy hours with heavy bass music, high motivation, and master coaches on the floor.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.35)',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '18px'
            }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Prime Evening Hours</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ff4d56', fontFamily: 'var(--font-display)' }}>
                05:00 PM – 12:00 AM
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '2px' }}>Monday through Saturday (Till Midnight)</div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.82rem', color: '#cbd5e1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#ef4444' }} /> Full coaching guidance & spotters
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#ef4444' }} /> Continuous chilled air conditioning
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: '#ef4444' }} /> Heavy powerlifting & bodybuilding vibe
              </li>
            </ul>
          </div>
        </div>

        {/* SUNDAY CLOSED NOTICE BAR */}
        <div style={{
          marginTop: '26px',
          background: 'rgba(229, 9, 20, 0.1)',
          border: '1.5px solid rgba(229, 9, 20, 0.5)',
          borderRadius: '14px',
          padding: '16px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <XCircle size={24} style={{ color: '#ef4444', flexShrink: 0 }} />
            <div>
              <span style={{ color: '#fca5a5', fontSize: '0.92rem', fontWeight: 800 }}>
                Sunday: STRICTLY CLOSED
              </span>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '2px' }}>
                The gym is closed every Sunday for scheduled deep sanitization, machine greasing, and power plant servicing.
              </div>
            </div>
          </div>
          <button 
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '8px 18px', fontSize: '0.8rem' }}
          >
            Claim Monday Session Pass →
          </button>
        </div>
      </div>
    </section>
  );
}
