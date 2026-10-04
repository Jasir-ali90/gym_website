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

      {/* Direct Call Button (Desktop only) */}
      <a
        href="tel:+923132229925"
        aria-label="Call Gym Front Desk"
        className="floating-call-btn desktop-floating-item"
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

      {/* Floating WhatsApp Button - Sticky on Both Desktop & Mobile */}
      <a
        href="https://wa.me/923132229925?text=Hi%20Premium%20Fitness,%20I%20want%20membership%20details"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp-btn"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 28px rgba(37, 211, 102, 0.55), 0 0 16px rgba(37, 211, 102, 0.35)',
          textDecoration: 'none',
          transition: 'all 0.25s ease',
          position: 'relative',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={30} />
        <span
          style={{
            position: 'absolute',
            top: '3px',
            right: '3px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            border: '2px solid #fff'
          }}
        />
      </a>

      <style>{`
        /* On mobile devices, keep the WhatsApp button prominent while hiding secondary floating clutter */
        @media (max-width: 768px) {
          .floating-actions-wrapper {
            bottom: 16px !important;
            right: 16px !important;
          }
          .desktop-floating-item,
          .floating-pass-btn,
          .floating-btn-scroll {
            display: none !important;
          }
          .floating-whatsapp-btn {
            width: 54px !important;
            height: 54px !important;
          }
        }
      `}</style>
    </div>
  );
}
