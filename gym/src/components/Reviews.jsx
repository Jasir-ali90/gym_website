import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, ExternalLink } from 'lucide-react';

export default function Reviews() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Bilal Tariq',
      category: 'machines',
      rating: 5,
      date: '2 weeks ago',
      review: 'Best gym in North Karachi Sector 11-A without a doubt! Heavy dumbbells up to 50kg, original bio-mechanic machines, and the AC is ALWAYS running even during K-Electric power cuts because of their silent generator.',
      verified: true,
      tag: 'Verified Google Review'
    },
    {
      id: 2,
      name: 'Hamza Sheikh',
      category: 'coaching',
      rating: 5,
      date: '1 month ago',
      review: 'Coach Ahmed Khan is a true gem. His flexible Pakistani diet plan and daily form corrections helped me lose 14kg in 3 months without feeling weak. The vibe and brotherhood in evening shift is pure motivation!',
      verified: true,
      tag: '14KG Transformation'
    },
    {
      id: 3,
      name: 'Dr. Sana Rehman',
      category: 'ladies',
      rating: 5,
      date: '3 weeks ago',
      review: 'The ladies timings (11:30 AM to 4:30 PM) are 100% private and respectful. The female instructor Coach Farah is very attentive and guides thoroughly on cardio and toning machines. Highly recommended for Karachi females.',
      verified: true,
      tag: 'Ladies Timing Member'
    },
    {
      id: 4,
      name: 'Daniyal Farooq',
      category: 'ambiance',
      rating: 5,
      date: '2 months ago',
      review: 'Samson power vibes! The high-bass sound system, lighting, and heavy iron knurled bars give you the best workout pump of your life. 2nd floor location on Shahrah-e-Usman is very easy to access.',
      verified: true,
      tag: 'Powerlifter'
    },
    {
      id: 5,
      name: 'Usman Ali Khan',
      category: 'coaching',
      rating: 5,
      date: '3 months ago',
      review: 'Coach Sajjad Ali’s technique breakdown completely fixed my lower back pain during squats and deadlifts. Staff is cooperative, lockers are clean, and atmosphere is 10/10.',
      verified: true,
      tag: 'Verified Google Review'
    },
    {
      id: 6,
      name: 'Zubair Qureshi',
      category: 'machines',
      rating: 5,
      date: '4 months ago',
      review: 'I have trained in multiple gyms across Karachi, but Chapter 1.O hits different. Everything from dumbbells to cable jungle is well maintained and lubricated. Outstanding management by Muhammad Ali.',
      verified: true,
      tag: 'Strength Athlete'
    },
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === filter);

  return (
    <section id="reviews" style={{ padding: '85px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
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
            <Star size={15} fill="#ff4d56" /> SOCIAL PROOF & REPUTATION
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px'
          }}>
            RATED 4.5 STARS ON GOOGLE <br />
            <span className="text-red-gradient">BY 94+ ATHLETES</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Real reviews from real members training daily at Premium Fitness Chapter 1.O, North Karachi.
          </p>

          {/* Google Live Rating Card */}
          <div 
            className="responsive-pill-badge" 
            style={{
              marginTop: '20px',
              background: 'rgba(18, 21, 28, 0.95)',
              border: '1px solid rgba(229, 9, 20, 0.4)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                background: '#4285F4',
                color: '#fff',
                fontWeight: 900,
                fontSize: '0.72rem',
                padding: '2px 7px',
                borderRadius: '4px'
              }}>
                G
              </div>
              <span style={{ fontWeight: 800, color: '#fff', fontSize: '1.05rem' }}>4.5</span>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#ff4d56" color="#ff4d56" />
                ))}
              </div>
            </div>
            <span className="badge-divider" style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ color: '#cbd5e1', fontSize: '0.84rem' }}>
              Based on <strong>94+ Google Reviews</strong>
            </span>
            <a
              href="https://www.google.com/search?q=PREMIUM+FITNESS+Karachi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ff4d56',
                fontSize: '0.8rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Verify on Google <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'machines', label: 'Machines & AC' },
            { id: 'coaching', label: 'Trainers & Diet Plans' },
            { id: 'ladies', label: 'Ladies Exclusive' },
            { id: 'ambiance', label: 'Gym Vibe & Sound' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                border: filter === cat.id ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                background: filter === cat.id ? 'linear-gradient(135deg, rgba(229,9,20,0.25), rgba(155,0,20,0.12))' : 'rgba(255,255,255,0.02)',
                color: filter === cat.id ? '#fff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid-3">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>
                      {rev.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                      <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <CheckCircle size={11} /> {rev.tag}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{rev.date}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="#ff4d56" color="#ff4d56" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div style={{ position: 'relative', marginBottom: '14px' }}>
                  <Quote size={18} style={{ color: 'rgba(229, 9, 20, 0.2)', position: 'absolute', top: '-6px', left: '-4px' }} />
                  <p style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.55, paddingLeft: '14px' }}>
                    "{rev.review}"
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                paddingTop: '10px',
                marginTop: '8px'
              }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                  Experience at Chapter 1.O
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#ff4d56' }}>
                  <ThumbsUp size={11} /> Highly Recommended
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
