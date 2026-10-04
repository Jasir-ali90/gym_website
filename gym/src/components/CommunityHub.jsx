import React, { useState, useEffect } from 'react';
import { Star, Users, Calculator, MessageCircle } from 'lucide-react';
import Reviews from './Reviews';
import GymLifeEvents from './GymLifeEvents';
import BmiCalculator from './BmiCalculator';

export default function CommunityHub() {
  const [activeTab, setActiveTab] = useState('reviews');

  // Listen to hash changes if user navigated to #reviews, #events, or #calculator
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#reviews') setActiveTab('reviews');
      else if (hash === '#events') setActiveTab('events');
      else if (hash === '#calculator') setActiveTab('calculator');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section 
      id="community" 
      style={{ 
        padding: '95px 0', 
        backgroundColor: 'var(--bg-secondary)', 
        borderTop: '1px solid rgba(229, 9, 20, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
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
            <Star size={16} fill="#ff4d56" /> COMMUNITY & REAL REPUTATION
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
            LIFE AT <span className="text-red-gradient">PREMIUM FITNESS</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 28px' }}>
            Hear directly from our verified members, explore our community culture and beach trips, or calculate your personal fitness targets.
          </p>

          {/* Interactive Navigation Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(0,0,0,0.5)',
            padding: '6px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.1)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <button
              onClick={() => setActiveTab('reviews')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'reviews' ? 'var(--red-gradient)' : 'transparent',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Star size={16} fill={activeTab === 'reviews' ? '#fff' : '#ff4d56'} />
              <span>Verified Reviews (4.5★)</span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'events' ? 'var(--red-gradient)' : 'transparent',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Users size={16} />
              <span>Gym Culture & Outings</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'calculator' ? 'var(--red-gradient)' : 'transparent',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Calculator size={16} />
              <span>BMI & Calorie Tool</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div style={{ marginTop: '20px' }}>
          <div id="reviews" style={{ display: activeTab === 'reviews' ? 'block' : 'none' }}>
            <Reviews isEmbedded={true} />
          </div>

          <div id="events" style={{ display: activeTab === 'events' ? 'block' : 'none' }}>
            <GymLifeEvents isEmbedded={true} />
          </div>

          <div id="calculator" style={{ display: activeTab === 'calculator' ? 'block' : 'none' }}>
            <BmiCalculator isEmbedded={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
