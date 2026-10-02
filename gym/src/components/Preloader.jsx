import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  // Exact 15.0 seconds duration guaranteed via real-time clock
  const DURATION_MS = 15000;

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / DURATION_MS) * 100));

      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
      }
    }, 40); // 25 updates per second for super-smooth continuous counter

    return () => clearInterval(interval);
  }, [DURATION_MS]);

  useEffect(() => {
    if (progress === 100) {
      // Hold at 100% for 500ms so the user sees the completed state
      const fadeTimeout = setTimeout(() => {
        setFading(true);
      }, 500);

      const finishTimeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(finishTimeout);
      };
    }
  }, [progress, onComplete]);

  // Derived status text - directly synchronized with progress percentage
  const getStatusText = (pct) => {
    if (pct < 15) return 'Initializing Strength Empire...';
    if (pct < 32) return 'Loading Heavy Iron & Bio-Mechanic Machines...';
    if (pct < 50) return 'Configuring Shift Timings & 100% Private Ladies Shift...';
    if (pct < 70) return 'Syncing Instagram Reels & Community Feeds...';
    if (pct < 88) return 'Calibrating Olympic Lifting Platforms & Cardio Zone...';
    if (pct < 100) return 'Finalizing Peak Athletic Readiness...';
    return 'Welcome to Premium Fitness Chapter 1.O';
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#060709',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: fading ? 'none' : 'all',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* Background Atmospheric Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 45%, rgba(229, 9, 20, 0.22) 0%, rgba(6, 7, 9, 0.95) 65%),
            radial-gradient(circle at 80% 20%, rgba(229, 9, 20, 0.08) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Main Logo & Loader Box */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          padding: '20px',
        }}
      >
        {/* Animated Neon Spinner Container */}
        <div
          style={{
            position: 'relative',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          {/* Outer Pulsing Glow */}
          <div
            className="loader-pulse-glow"
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(229, 9, 20, 0.4) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />

          {/* Rotating Outer Gradient Ring */}
          <div
            className="loader-spinner-ring"
            style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              border: '2px solid transparent',
              borderTopColor: '#ff1e27',
              borderRightColor: '#e50914',
              borderBottomColor: 'rgba(229, 9, 20, 0.2)',
            }}
          />

          {/* Inner Logo Badge */}
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '22px',
              background: '#0c0e12',
              border: '1.5px solid rgba(229, 9, 20, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(229, 9, 20, 0.4), inset 0 0 15px rgba(0, 0, 0, 0.8)',
              overflow: 'hidden',
              padding: '6px',
            }}
          >
            <img
              src="/assets/pf_emblem.png"
              alt="Premium Fitness Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.6))',
              }}
            />
          </div>
        </div>

        {/* Brand Name Typography */}
        <div
          style={{
            fontFamily: 'var(--font-display, "Syne", sans-serif)',
            fontSize: 'clamp(1.4rem, 4vw, 1.85rem)',
            fontWeight: 900,
            letterSpacing: '1.5px',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '4px',
            textTransform: 'uppercase',
          }}
        >
          PREMIUM <span className="text-red-gradient">FITNESS</span>
        </div>

        {/* Slogan from Official Logo */}
        <div
          style={{
            fontSize: '0.72rem',
            color: '#cbd5e1',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '26px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ height: '1px', width: '18px', background: 'rgba(255,255,255,0.3)' }} />
          <span>FITNESS TO THE NEXT LEVEL</span>
          <span style={{ height: '1px', width: '18px', background: 'rgba(255,255,255,0.3)' }} />
        </div>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '240px',
            maxWidth: '80vw',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '14px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #ff3b45 0%, #e50914 50%, #ff1e27 100%)',
              boxShadow: '0 0 12px rgba(255, 30, 39, 0.8)',
              transition: 'width 0.17s linear',
              borderRadius: '999px',
            }}
          />
        </div>

        {/* Percentage and Dynamic Status Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display, "Syne", sans-serif)',
              fontSize: '1rem',
              fontWeight: 800,
              color: '#ff4d56',
              letterSpacing: '1px',
            }}
          >
            {progress}%
          </div>
          <div
            style={{
              fontSize: '0.78rem',
              color: '#94a3b8',
              letterSpacing: '0.3px',
              minHeight: '20px',
              textAlign: 'center',
            }}
          >
            {getStatusText(progress)}
          </div>
        </div>
      </div>

      {/* Scoped CSS for Preloader Animations */}
      <style>{`
        @keyframes rotateLoaderRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseLoaderGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .loader-spinner-ring {
          animation: rotateLoaderRing 1.1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;
        }
        .loader-pulse-glow {
          animation: pulseLoaderGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
