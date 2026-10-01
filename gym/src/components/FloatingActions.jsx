import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Sparkles } from 'lucide-react';

export default function FloatingActions({ onOpenPassModal }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="floating-actions-wrapper"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
        zIndex: 999,
      }}
    >
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="floating-btn-scroll"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(18, 21, 28, 0.95)',
            border: '1px solid rgba(229, 9, 20, 0.4)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ff4d56')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.4)')}
        >
          <ArrowUp size={17} />
        </button>
      )}

      {/* Floating Free Pass Pill */}
      <button
        onClick={onOpenPassModal}
        className="floating-pass-btn"
        style={{
          background: 'var(--red-gradient)',
          color: '#fff',
          fontWeight: 800,
          padding: '8px 16px',
          borderRadius: '999px',
          border: 'none',
          boxShadow: '0 8px 25px rgba(229, 9, 20, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          fontSize: '0.78rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        <Sparkles size={13} />
        <span>Free VIP Pass</span>
      </button>

      {/* Direct Call Button */}
      <a
        href="tel:+923132229925"
        aria-label="Call Gym Front Desk"
        className="floating-call-btn"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#dc2626',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(220, 38, 38, 0.45)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Phone size={20} />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20want%20to%20inquire%20about%20Premium%20Fitness%20Chapter%201.O,%20North%20Karachi."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease',
          position: 'relative'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={28} />
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '11px',
            height: '11px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            border: '2px solid #fff'
          }}
        />
      </a>

      <style>{`
        @media (max-width: 640px) {
          .floating-actions-wrapper {
            bottom: 14px !important;
            right: 14px !important;
            gap: 8px !important;
          }
          .floating-pass-btn {
            display: none !important;
          }
          .floating-call-btn {
            width: 42px !important;
            height: 42px !important;
          }
          .floating-btn-scroll {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
