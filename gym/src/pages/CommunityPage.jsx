import React, { useState } from 'react';
import { 
  Calculator, 
  Star, 
  MessageCircle, 
  Users, 
  Trophy
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BmiCalculator from '../components/BmiCalculator';
import GymLifeEvents from '../components/GymLifeEvents';
import Reviews from '../components/Reviews';

export default function CommunityPage({ onOpenPassModal }) {
  const [activeTab, setActiveTab] = useState('calculator'); // 'calculator' | 'events' | 'reviews'

  return (
    <div>
      <PageHeader 
        badge="FITNESS TOOLS & COMMUNITY"
        title="HEALTH TOOLS &"
        highlight="COMMUNITY VIBES"
        breadcrumb="Community & Tools"
        description="Check your Body Mass Index (BMI), witness real member transformations, and explore upcoming powerlifting and fitness events across Karachi."
      />

      {/* SUB-NAVIGATION TABS */}
      <section style={{ padding: '20px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setActiveTab('calculator')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === 'calculator' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === 'calculator' ? 'var(--red-gradient)' : 'rgba(255,255,255,0.04)',
                color: activeTab === 'calculator' ? '#fff' : '#cbd5e1',
                fontSize: '0.86rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <Calculator size={16} />
              <span>BMI & Health Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === 'reviews' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === 'reviews' ? 'var(--red-gradient)' : 'rgba(255,255,255,0.04)',
                color: activeTab === 'reviews' ? '#fff' : '#cbd5e1',
                fontSize: '0.86rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <Star size={16} />
              <span>Google Reviews (4.9 ★)</span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === 'events' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === 'events' ? 'var(--red-gradient)' : 'rgba(255,255,255,0.04)',
                color: activeTab === 'events' ? '#fff' : '#cbd5e1',
                fontSize: '0.86rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <Trophy size={16} />
              <span>Gym Life & Events</span>
            </button>
          </div>
        </div>
      </section>

      {/* ACTIVE TAB CONTENT */}
      <div>
        {activeTab === 'calculator' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <BmiCalculator />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <Reviews />
          </div>
        )}

        {activeTab === 'events' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <GymLifeEvents />
          </div>
        )}
      </div>

      {/* JOIN COMMUNITY WHATSAPP BANNER */}
      <section style={{
        padding: '50px 0',
        background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.12) 0%, rgba(10, 12, 16, 0.98) 100%)',
        borderTop: '1px solid rgba(37, 211, 102, 0.3)',
        borderBottom: '1px solid rgba(37, 211, 102, 0.3)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#25D366', fontWeight: 800, fontSize: '0.85rem', marginBottom: '10px' }}>
            <Users size={18} />
            <span>JOIN 2,500+ KARACHI LIFTERS</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>
            BECOME PART OF THE PREMIUM FITNESS BROTHERHOOD
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Daily workout tips, healthy recipe ideas, form check videos, and announcement of internal club powerlifting challenges.
          </p>
          <a
            href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20join%20the%20Premium%20Fitness%20community."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '12px 28px', display: 'inline-flex' }}
          >
            <MessageCircle size={18} />
            <span>Join WhatsApp Community</span>
          </a>
        </div>
      </section>
    </div>
  );
}
