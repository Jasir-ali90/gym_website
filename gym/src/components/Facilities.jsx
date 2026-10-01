import React, { useState } from 'react';
import { Dumbbell, Activity, Shield, Wind, Coffee, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Facilities({ onOpenPassModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'strength', label: 'Heavy Iron & Dumbbells' },
    { id: 'cardio', label: 'Cardio & Endurance' },
    { id: 'ladies', label: 'Ladies Exclusive' },
    { id: 'amenities', label: 'AC & Amenities' },
  ];

  const facilities = [
    {
      id: 1,
      category: 'strength',
      title: 'Heavy Iron Free Weight Zone',
      tag: 'Up to 50KG Dumbbells',
      description: 'Solid rubber hex & cast-iron dumbbells ranging from 2.5kg up to 50kg+. Multiple flat, incline, and decline Olympic benches with competition-grade knurled barbells.',
      image: '/assets/dumbbells_real.jpg',
      icon: <Dumbbell size={20} style={{ color: '#ff4d56' }} />,
      highlights: ['Solid 50kg Dumbbells', 'Olympic Power Racks', 'Deadlift Bumper Plates']
    },
    {
      id: 2,
      category: 'cardio',
      title: 'High-Performance Cardio Suite',
      tag: 'Heart Rate & Fat Burn',
      description: 'High-end commercial treadmills, cross-trainers, spin bikes, and stairmasters with digital tracking. Positioned in front of panoramic views and chilled AC blowers.',
      image: '/assets/cardio_real.jpg',
      icon: <Activity size={20} style={{ color: '#06b6d4' }} />,
      highlights: ['Touchscreen Treadmills', 'High-Incline Runners', 'HIIT Cardio Zone']
    },
    {
      id: 3,
      category: 'strength',
      title: 'Olympic Benches & Power Racks',
      tag: 'Compound Strength',
      description: 'Dedicated squat racks, flat benches, incline benches, and deadlift platforms engineered for intense strength workouts and powerlifters.',
      image: '/assets/bench_real.jpg',
      icon: <Dumbbell size={20} style={{ color: '#ef4444' }} />,
      highlights: ['Hack Squat & Leg Press', 'Olympic Barbells', 'Smith Machine Pro']
    },
    {
      id: 4,
      category: 'ladies',
      title: '100% Private Ladies Workout Floor',
      tag: 'Dedicated Timings & Trainer',
      description: 'Complete privacy with frosted partitions, separate locker space, and dedicated female personal trainers. Specialized fat-loss, toning, and strength routines.',
      image: '/assets/ladies_real.jpg',
      icon: <Shield size={20} style={{ color: '#ec4899' }} />,
      highlights: ['100% Private Environment', 'Certified Female Coach', 'Specialized Toning Gears']
    },
    {
      id: 5,
      category: 'amenities',
      title: 'Chilled Air-Conditioning & Power Backup',
      tag: 'Zero Load Shedding',
      description: 'Dual commercial inverter split units keep the gym chilled throughout scorching Karachi summers. Continuous heavy-duty diesel generator guarantees 0-second downtime.',
      image: '/assets/hero_real.jpg',
      icon: <Wind size={20} style={{ color: '#10b981' }} />,
      highlights: ['Heavy Generator Backup', 'High-Volume AC Blowers', 'Motivation Sound System']
    },
    {
      id: 6,
      category: 'amenities',
      title: 'Supplement Bar & Safe Lockers',
      tag: 'Post-Workout Fuel',
      description: 'Secure digital lockers, clean changing rooms, fresh washrooms, and an on-site nutrition counter for premium whey protein shakes, BCAAs, and pre-workout drinks.',
      image: '/assets/strength_event.jpg',
      icon: <Coffee size={20} style={{ color: '#f59e0b' }} />,
      highlights: ['Protein Shakes & Hydration', 'Secured Lockers', 'Clean Washrooms']
    },
  ];

  const filtered = activeTab === 'all' 
    ? facilities 
    : facilities.filter(f => f.category === activeTab);

  return (
    <section id="facilities" style={{ padding: '85px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(229, 9, 20, 0.2)' }}>
      <div className="container">
        {/* Section Header */}
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
            <Dumbbell size={15} /> COMMERCIAL INFRASTRUCTURE
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px'
          }}>
            EQUIPMENT DESIGNED FOR <br />
            <span className="text-red-gradient">UNSTOPPABLE RESULTS</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Chapter 1.O is equipped with high-gauge commercial equipment engineered to take heavy loads without compromise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '35px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '9px 18px',
                borderRadius: '999px',
                border: activeTab === cat.id ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === cat.id ? 'linear-gradient(135deg, rgba(229,9,20,0.25), rgba(155,0,20,0.12))' : 'rgba(255,255,255,0.03)',
                color: activeTab === cat.id ? '#fff' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid-3">
          {filtered.map((item) => (
            <div key={item.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Image Frame */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="card-zoom-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 21, 28, 0.95) 0%, rgba(18, 21, 28, 0.2) 60%, transparent 100%)',
                }} />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(229, 9, 20, 0.5)',
                  color: '#ff4d56',
                  padding: '3px 9px',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  backdropFilter: 'blur(8px)',
                }}>
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.2
                  }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '18px', flex: 1 }}>
                  {item.description}
                </p>

                {/* Highlights List */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {item.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={13} style={{ color: '#ef4444', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="glass-panel" style={{
          marginTop: '40px',
          padding: '24px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '18px',
          background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.12) 0%, rgba(18, 21, 28, 0.9) 100%)',
          border: '1px solid rgba(229, 9, 20, 0.35)'
        }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
              Want to visit our gym floor before joining?
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Visit 2nd Floor, Plot No: A-901 Shahrah-e-Usman, Sector 11-A, North Karachi for a complimentary tour.
            </p>
          </div>
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red"
          >
            <span>Get Free Day Pass</span>
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
