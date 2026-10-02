import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Zap, Star, Trophy, Flame, UserCheck } from 'lucide-react';

export default function Hero({ onOpenPassModal }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '65px 0 55px',
    }}>
      {/* Real Gym Photo Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/assets/hero_real.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        zIndex: 0,
      }} />

      {/* Red & Black Multi-layered Overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          linear-gradient(180deg, rgba(6, 7, 9, 0.90) 0%, rgba(12, 14, 18, 0.82) 45%, rgba(6, 7, 9, 0.98) 100%),
          radial-gradient(circle at 50% 30%, rgba(229, 9, 20, 0.16) 0%, transparent 65%)
        `,
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Badges */}
        <div className="responsive-pill-badge" style={{ marginBottom: '20px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff4d56', fontWeight: 800, fontSize: '0.8rem' }}>
            <Flame size={14} style={{ color: '#ef4444' }} />
            PREMIUM FITNESS NETWORK
          </span>
          <span className="badge-divider" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ color: '#e2e8f0', fontSize: '0.8rem', fontWeight: 600 }}>
            Karachi, Pakistan
          </span>
          <span className="badge-divider" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#fff', fontSize: '0.8rem', fontWeight: 800 }}>
            <UserCheck size={14} style={{ color: '#ff4d56' }} /> Owner: Muhammad Ali
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5.2vw, 4.4rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          letterSpacing: '-0.5px',
          color: '#ffffff',
          maxWidth: '1020px',
          margin: '0 auto 18px',
          textShadow: '0 4px 30px rgba(0,0,0,0.9)',
        }}>
          WHERE DISCIPLINE MEETS <br />
          <span className="text-red-gradient red-glow-text">STRENGTH & EMPIRE</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.92rem, 1.8vw, 1.15rem)',
          color: '#cbd5e1',
          maxWidth: '780px',
          margin: '0 auto 32px',
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          Founded by <strong style={{ color: '#ff4d56' }}>Muhammad Ali</strong>, Premium Fitness brings you elite heavy iron up to 50kg, certified coaches, and dedicated private ladies timings across our Karachi branches.
        </p>

        {/* CTA Group */}
        <div 
          className="hero-cta-group"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '46px',
          }}
        >
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '15px 32px', fontSize: '0.96rem' }}
          >
            <Sparkles size={18} />
            <span>CLAIM FREE 1-DAY PASS</span>
            <ArrowRight size={17} />
          </button>

          <a
            href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20joining%20Premium%20Fitness,%20Karachi."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '15px 28px', fontSize: '0.96rem' }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#pricing"
            className="btn-secondary-dark"
            style={{ padding: '15px 26px', fontSize: '0.96rem' }}
          >
            <span>Membership Fees (PKR)</span>
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="hero-metrics-grid">
          {/* 1. Google Rating */}
          <div className="glass-panel hero-metric-card" style={{ padding: '16px 20px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="hero-metric-icon" style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(229, 9, 20, 0.15)',
              border: '1px solid rgba(229, 9, 20, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff4d56',
              flexShrink: 0
            }}>
              <Star size={22} fill="#ff4d56" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="hero-metric-val" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>4.5 ★</span>
                <span style={{ fontSize: '0.68rem', background: '#3b82f6', color: '#fff', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>Google</span>
              </div>
              <div className="hero-metric-label" style={{ fontSize: '0.78rem', color: '#94a3b8' }}>94+ Verified Reviews</div>
            </div>
          </div>

          {/* 2. Heavy Dumbbells */}
          <div className="glass-panel hero-metric-card" style={{ padding: '16px 20px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="hero-metric-icon" style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(229, 9, 20, 0.15)',
              border: '1px solid rgba(229, 9, 20, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff4d56',
              flexShrink: 0
            }}>
              <Trophy size={22} />
            </div>
            <div>
              <div className="hero-metric-val" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>50+</div>
              <div className="hero-metric-label" style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Solid Dumbbells up to 50kg</div>
            </div>
          </div>

          {/* 3. 100% Power & AC */}
          <div className="glass-panel hero-metric-card" style={{ padding: '16px 20px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="hero-metric-icon" style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
              flexShrink: 0
            }}>
              <Zap size={22} />
            </div>
            <div>
              <div className="hero-metric-val" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>100%</div>
              <div className="hero-metric-label" style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Chilled AC & Silent Generator</div>
            </div>
          </div>

          {/* 4. Dedicated Ladies */}
          <div className="glass-panel hero-metric-card" style={{ padding: '16px 20px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="hero-metric-icon" style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f472b6',
              flexShrink: 0
            }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="hero-metric-val" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>100% Private</div>
              <div className="hero-metric-label" style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Ladies Shift (11:30AM–4:30PM)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
