import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, CheckCircle2, Sun, Moon, XCircle, ArrowRight } from 'lucide-react';

export default function Timings({ onOpenPassModal }) {
  const [activeTab, setActiveTab] = useState('all');
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
          setStatusMessage("OPEN NOW: MEN'S MORNING SHIFT (6:00 AM – 11:00 AM)");
        } else if (currentDecimalTime >= 11.0 && currentDecimalTime < 11.5) {
          setIsOpenNow(false);
          setStatusMessage('TRANSITION BREAK (LADIES SHIFT STARTS AT 11:30 AM)');
        } else if (currentDecimalTime >= 11.5 && currentDecimalTime < 16.5) {
          setIsOpenNow(true);
          setStatusMessage('OPEN NOW: 100% PRIVATE LADIES SHIFT (11:30 AM – 4:30 PM)');
        } else if (currentDecimalTime >= 16.5 && currentDecimalTime < 17.0) {
          setIsOpenNow(false);
          setStatusMessage("TRANSITION BREAK (MEN'S EVENING STARTS AT 5:00 PM)");
        } else if (currentDecimalTime >= 17.0 && currentDecimalTime < 24.0) {
          setIsOpenNow(true);
          setStatusMessage("OPEN NOW: MEN'S EVENING SHIFT (5:00 PM – 12:00 AM)");
        } else {
          setIsOpenNow(false);
          setStatusMessage('CLOSED FOR THE NIGHT (OPENS TOMORROW AT 6:00 AM)');
        }
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const shifts = [
    {
      id: 'morning',
      category: 'men',
      name: 'MORNING POWER SESSION',
      tag: "Men's Power Shift",
      time: '06:00 AM – 11:00 AM',
      days: 'Monday through Saturday (All Weekdays)',
      icon: <Sun size={24} style={{ color: '#ff4d56' }} />,
      accentColor: '#ff4d56',
      badgeBg: 'rgba(229, 9, 20, 0.15)',
      description: 'Ideal for early-bird professionals, athletes, and students kickstarting their day with high metabolic focus.',
      perks: ['Cardio warmups & empty stomach fat burn', 'Morning coach guidance on gym floor', 'Clean shower & locker facilities']
    },
    {
      id: 'ladies',
      category: 'ladies',
      name: 'PRIVATE LADIES SHIFT',
      tag: '100% Ladies Only',
      time: '11:30 AM – 04:30 PM',
      days: 'Monday through Saturday (Strictly Private)',
      icon: <ShieldCheck size={24} style={{ color: '#f472b6' }} />,
      accentColor: '#ec4899',
      badgeBg: 'rgba(236, 72, 153, 0.2)',
      description: 'Guaranteed 100% private environment with certified female trainers, privacy partitions, and comfortable aerobics floor.',
      perks: ['Certified Female Instructors present', 'Zero male entry or male staff allowed', 'Waist shaping, toning & HIIT routines']
    },
    {
      id: 'evening',
      category: 'men',
      name: 'EVENING HEAVY IRON SESSION',
      tag: "Men's Prime Peak",
      time: '05:00 PM – 12:00 AM',
      days: 'Monday through Saturday (Till Midnight)',
      icon: <Moon size={24} style={{ color: '#ff4d56' }} />,
      accentColor: '#dc2626',
      badgeBg: 'rgba(229, 9, 20, 0.15)',
      description: 'The peak hypertrophy & heavy lifting hours with powerful music, maximum pump, and master coaches spotting every rep.',
      perks: ['Full coaching guidance & spotters on deck', 'Heavy free weights & competition benches', 'Chilled continuous AC blowers']
    }
  ];

  const filteredShifts = activeTab === 'all' 
    ? shifts 
    : shifts.filter(s => s.category === activeTab);

  return (
    <section 
      id="timings" 
      style={{ 
        padding: '95px 0', 
        backgroundColor: 'var(--bg-primary)', 
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 46px' }}>
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
            <Clock size={16} /> CLASS SCHEDULE & GYM TIMINGS
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
            STRUCTURED <span className="text-red-gradient">TIMINGS & SHIFTS</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Dedicated, disciplined batch hours ensuring zero overcrowded equipment and 100% privacy for ladies.
          </p>

          {/* Real-time Status Card */}
          <div 
            className="responsive-pill-badge" 
            style={{
              marginTop: '22px',
              border: isOpenNow ? '1.5px solid rgba(16, 185, 129, 0.5)' : '1.5px solid rgba(239, 68, 68, 0.55)',
              background: 'rgba(18, 21, 28, 0.98)',
              padding: '10px 22px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className={isOpenNow ? 'pulse-green' : 'pulse-red'}></span>
              <span style={{ fontWeight: 800, color: isOpenNow ? '#34d399' : '#f87171', fontSize: '0.9rem' }}>
                {statusMessage || (isOpenNow ? 'GYM IS CURRENTLY OPEN' : 'GYM IS CLOSED')}
              </span>
            </div>
            <span className="badge-divider" style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
            <span style={{ color: '#e2e8f0', fontSize: '0.88rem', fontWeight: 600 }}>
              Karachi Time: <strong style={{ color: '#fff' }}>{currentTime || '08:00 PM'}</strong> ({currentDay || 'Monday'})
            </span>
          </div>
        </div>

        {/* Shift Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '38px'
        }}>
          {[
            { id: 'all', label: 'All Shifts (Overview)' },
            { id: 'men', label: "Men's Power Hours (6AM-11AM & 5PM-12AM)" },
            { id: 'ladies', label: '100% Private Ladies (11:30AM-4:30PM)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === tab.id ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === tab.id ? 'var(--red-gradient)' : 'rgba(255,255,255,0.04)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timings Cards Grid */}
        <div className="grid-3" style={{ gap: '26px' }}>
          {filteredShifts.map((shift) => (
            <div 
              key={shift.id} 
              className="glass-card" 
              style={{ 
                padding: '32px 26px', 
                borderTop: `4px solid ${shift.accentColor}`,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '18px',
                background: shift.id === 'ladies' 
                  ? 'linear-gradient(180deg, rgba(236, 72, 153, 0.08) 0%, rgba(18, 21, 28, 0.98) 100%)' 
                  : 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: shift.badgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {shift.icon}
                </div>
                <span style={{
                  background: shift.badgeBg,
                  color: shift.accentColor,
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {shift.tag}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                {shift.name}
              </h3>
              
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '22px' }}>
                {shift.description}
              </p>

              {/* Large, High-Contrast Time Block */}
              <div style={{
                background: 'rgba(0,0,0,0.5)',
                padding: '18px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                marginBottom: '22px'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>
                  Batch Hours
                </div>
                <div style={{ 
                  fontSize: 'clamp(1.25rem, 1.8vw, 1.45rem)', 
                  fontWeight: 900, 
                  color: shift.id === 'ladies' ? '#f472b6' : '#ffffff', 
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.5px',
                  marginTop: '4px'
                }}>
                  {shift.time}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '4px', fontWeight: 500 }}>
                  {shift.days}
                </div>
              </div>

              {/* Perks list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#cbd5e1', flex: 1 }}>
                {shift.perks.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: shift.accentColor, flexShrink: 0 }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SUNDAY STRICTLY CLOSED NOTICE BAR */}
        <div style={{
          marginTop: '34px',
          background: 'rgba(229, 9, 20, 0.1)',
          border: '1.5px solid rgba(229, 9, 20, 0.55)',
          borderRadius: '16px',
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <XCircle size={28} style={{ color: '#ef4444', flexShrink: 0 }} />
            <div>
              <span style={{ color: '#fca5a5', fontSize: '1rem', fontWeight: 800 }}>
                SUNDAY: STRICTLY CLOSED
              </span>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '3px' }}>
                All branches are closed every Sunday for scheduled deep sanitization, machine greasing, and power plant maintenance.
              </div>
            </div>
          </div>
          <button 
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '10px 22px', fontSize: '0.86rem' }}
          >
            <span>Claim Weekday Session Pass</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
