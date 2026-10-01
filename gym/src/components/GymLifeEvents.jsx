import React, { useState } from 'react';
import { Play, Users, ExternalLink } from 'lucide-react';

export default function GymLifeEvents() {
  const [activeTab, setActiveTab] = useState('all');

  const events = [
    {
      id: 1,
      category: 'outings',
      title: 'Annual Beach Outing & Member BBQ',
      tag: '🏖️ Karachi Coastline Trip',
      date: 'Annual Tradition',
      image: '/assets/outing_real.jpg',
      description: 'More than a gym—we are a family. Every year, gym owner Muhammad Ali and the coaching team take members for an all-day beach excursion to Hawkesbay/French Beach with swimming, beach sports, and live BBQ.',
      actionText: 'View Outing Reels on Instagram',
      actionUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 2,
      category: 'competitions',
      title: 'Chapter 1.O Bench Press & Deadlift Meet',
      tag: '🏆 Strength Championship',
      date: 'Quarterly Meet',
      image: '/assets/strength_event.jpg',
      description: 'Members test their max PRs in our in-house powerlifting competition. Weight categories with official judges, medals, winner shields, and whey protein prizes sponsored by Muhammad Ali.',
      actionText: 'See Competition Highlights',
      actionUrl: 'https://www.facebook.com/premiumfitness.official/'
    },
    {
      id: 3,
      category: 'videos',
      title: 'Official Gym Walkthrough Video Tour',
      tag: '🎬 Video Walkthrough',
      date: 'YouTube Feature',
      image: '/assets/sajjad_ali_chapter1.jpg', // REAL PHOTO OF SAJJAD ALI AT CHAPTER 1
      description: 'Complete video walkthrough with Coach Sajjad Ali showing the 2nd-floor facility, heavy 50kg dumbbell racks, cardio line, and private ladies section.',
      actionText: 'Watch Tour on YouTube',
      actionUrl: 'https://www.youtube.com/watch?v=7087WJRHWho',
      isVideo: true
    },
    {
      id: 4,
      category: 'outings',
      title: '14th August Independence Day Workout Gala',
      tag: '🇵🇰 Community Celebration',
      date: 'Annual 14th August',
      image: '/assets/event_gathering.jpg',
      description: 'Celebrating Pakistan Independence Day with special green & white workout challenges, pushup showdowns, cake cutting, and community camaraderie.',
      actionText: 'Check Event Album',
      actionUrl: 'https://www.facebook.com/premiumfitness.official/'
    },
    {
      id: 5,
      category: 'videos',
      title: 'Transformation Reels & Daily Motivation',
      tag: '🔥 Instagram Reels',
      date: 'Daily Updates',
      image: '/assets/trainer_real.jpg',
      description: 'Follow Coach Ahmed Khan and members crushing heavy squats, shoulder presses, and celebrating massive body transformations on our active Instagram page.',
      actionText: 'Follow @premiumfitnesschapter1.o',
      actionUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/',
      isVideo: true
    },
    {
      id: 6,
      category: 'competitions',
      title: '3-Month Member Transformation Challenge',
      tag: '⚡ Diet & Shred Challenge',
      date: 'Seasonal Event',
      image: '/assets/bench_real.jpg',
      description: 'Structured 90-day fat loss and muscle building challenge with weekly weigh-ins, body fat testing, and cash prizes for top body recomposition.',
      actionText: 'Join Next Challenge',
      actionUrl: 'https://wa.me/923132229925?text=Salam!%20I%20want%20to%20register%20for%20the%20Transformation%20Challenge%20at%20Chapter%201.O.'
    }
  ];

  const filteredEvents = activeTab === 'all'
    ? events
    : events.filter(e => e.category === activeTab);

  return (
    <section id="events" style={{ padding: '85px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
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
            <Users size={15} /> COMMUNITY, OUTINGS & CULTURE
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px'
          }}>
            GYM LIFE, ANNUAL OUTINGS & <br />
            <span className="text-red-gradient">STRENGTH COMPETITIONS</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            At Premium Fitness Chapter 1.O, we build lasting brotherhood and athlete culture with annual beach picnics, strength meets, and viral workout reels.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Highlights' },
            { id: 'outings', label: 'Beach Outings & Gatherings' },
            { id: 'competitions', label: 'Lifting Competitions' },
            { id: 'videos', label: 'Videos & Viral Reels' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: activeTab === tab.id ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === tab.id ? 'linear-gradient(135deg, rgba(229,9,20,0.25), rgba(155,0,20,0.12))' : 'rgba(255,255,255,0.02)',
                color: activeTab === tab.id ? '#fff' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid-3" style={{ gap: '22px' }}>
          {filteredEvents.map((item) => (
            <div key={item.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Image Box */}
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

                {/* Badge */}
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

                {/* Play button if video */}
                {item.isVideo && (
                  <a
                    href={item.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Play gym tour video"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(229, 9, 20, 0.92)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 30px rgba(229, 9, 20, 0.6)',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.12)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
                  >
                    <Play size={22} fill="#fff" style={{ marginLeft: '3px' }} />
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.25,
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '18px' }}>
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-dark"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '9px 12px',
                    fontSize: '0.8rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>{item.actionText}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
