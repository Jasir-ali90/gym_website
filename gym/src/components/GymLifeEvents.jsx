import React, { useState } from 'react';
import { Play, Users, ExternalLink, Heart, MessageCircle, Bookmark, Share2, CheckCircle2 } from 'lucide-react';
import { Instagram } from './BrandIcons';

export default function GymLifeEvents() {
  const [activeTab, setActiveTab] = useState('all');
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const instagramPosts = [
    {
      id: 1,
      category: 'reels',
      badge: '🎬 VIRAL REEL',
      type: 'reel',
      title: '50KG Heavy Dumbbell Press with Coach Sajjad Ali',
      image: '/assets/sajjad_ali_chapter1.jpg',
      audio: 'Original Audio - Coach Sajjad Ali • Chapter 1.O',
      likes: 642,
      comments: 58,
      caption: 'Form over ego—every single rep counts! Coach Sajjad Ali guiding our athlete through heavy 50kg dumbbell presses on chest day. Consistent progressive overload is standard practice here at Chapter 1.O.',
      hashtags: '#PremiumFitness #Chapter1O #FitnessToTheNextLevel #HeavyLifting #NorthKarachi #ChestDayGrind',
      instagramUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 2,
      category: 'ladies',
      badge: '🔒 LADIES SHIFT',
      type: 'reel',
      title: '100% Private Ladies Morning Shift in Motion',
      image: '/assets/facilities_real.jpg',
      audio: 'Original Audio - Premium Ladies Workout Session',
      likes: 519,
      comments: 42,
      caption: 'Complete dignity, privacy, and dedicated female trainers. Exclusive ladies timing (11:00 AM – 4:00 PM) with cardio machines, guided free-weights, and certified female coaches.',
      hashtags: '#LadiesGym #WomenFitness #KarachiLadiesGym #100PercentPrivate #Chapter1O #FitnessToTheNextLevel',
      instagramUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 3,
      category: 'outings',
      badge: '🏖️ ANNUAL OUTING',
      type: 'post',
      title: 'Annual Beach Excursion & BBQ at Hawkesbay',
      image: '/assets/outing_real.jpg',
      audio: 'Beach Waves & Brotherhood • Premium Outing',
      likes: 812,
      comments: 94,
      caption: 'More than a gym, we are a brotherhood! Owner Muhammad Ali with coaches and members celebrating our annual beach trip at Hawkesbay/French Beach. Live BBQ, swimming, and memories that last a lifetime.',
      hashtags: '#GymFamily #Brotherhood #AnnualOuting #Hawkesbay #KarachiCoast #PremiumFitness #Chapter1O',
      instagramUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 4,
      category: 'outings',
      badge: '🏆 POWERLIFTING MEET',
      type: 'reel',
      title: 'Chapter 1.O Deadlift & Bench Press PR Showdown',
      image: '/assets/strength_event.jpg',
      audio: 'Crowd Cheering • Olympic Lifting Platform',
      likes: 728,
      comments: 86,
      caption: 'Max effort day! Lifters testing their 1-rep maximums on our dedicated Olympic deadlift platform. Official judge scoring, medals, and premium whey protein rewards presented by Muhammad Ali.',
      hashtags: '#DeadliftPR #BenchPressMeet #PowerliftingPakistan #StrengthEmpire #RawLifting #Chapter1O',
      instagramUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 5,
      category: 'transformations',
      badge: '🔥 TRANSFORMATION',
      type: 'post',
      title: '90-Day Fat Loss & Shred by Coach Ahmed Khan',
      image: '/assets/bench_real.jpg',
      audio: 'Transformation Journey • Coach Ahmed Khan',
      likes: 674,
      comments: 63,
      caption: 'Dedication speaks louder than excuses! Down 14kg of stubborn body fat and building lean muscle definition under Coach Ahmed Khan’s customized macro nutrition and strength protocol.',
      hashtags: '#TransformationTuesday #90DayShred #FatLossJourney #KarachiFitness #CoachAhmed #ResultsMatter',
      instagramUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    },
    {
      id: 6,
      category: 'reels',
      badge: '🎥 FACILITY TOUR',
      type: 'reel',
      title: '2nd Floor Facility Tour: Heavy Iron & Cardio Line',
      image: '/assets/trainer_real.jpg',
      audio: 'Gym Motivation Beats • High Energy',
      likes: 935,
      comments: 112,
      caption: 'Step inside Karachi’s premier strength arena! 2nd floor, Sector 15-A/2 Buffer Zone North Karachi. Heavy 50kg dumbbell racks, plate-loaded bio-mechanic machines, and 100% uninterrupted generator backup.',
      hashtags: '#GymTour #NorthKarachi #BufferZone #BestGymInKarachi #PremiumFitness #FitnessToTheNextLevel',
      instagramUrl: 'https://www.instagram.com/premiumfitnesschapter1.o/'
    }
  ];

  const filteredPosts = activeTab === 'all'
    ? instagramPosts
    : instagramPosts.filter(p => p.category === activeTab);

  return (
    <section id="events" style={{ padding: '85px 0', backgroundColor: '#07080b', position: 'relative' }}>
      {/* Background Accent Gradients */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1200px',
        height: '350px',
        background: 'radial-gradient(circle at 50% 0%, rgba(229, 9, 20, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 34px' }}>
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
            <Users size={16} /> OFFICIAL INSTAGRAM FEED & COMMUNITY
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px',
            color: '#fff'
          }}>
            GYM LIFE, VIRAL REELS & <br />
            <span className="text-red-gradient">AUTHENTIC INSTAGRAM CULTURE</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
            Explore genuine daily reels, heavy lifts, 100% private ladies shift moments, and beach outings pulled directly from our official Instagram handle.
          </p>
        </div>

        {/* Official Instagram Profile Spotlight Card */}
        <div style={{
          maxWidth: '880px',
          margin: '0 auto 40px',
          background: 'linear-gradient(135deg, rgba(20, 24, 33, 0.95), rgba(12, 14, 18, 0.95))',
          border: '1.5px solid rgba(229, 9, 20, 0.35)',
          borderRadius: '18px',
          padding: '24px 28px',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(12px)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            {/* Left: Avatar + Handle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Instagram Story Gradient Ring */}
              <a
                href="https://www.instagram.com/premiumfitnesschapter1.o/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  padding: '2.5px',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  flexShrink: 0,
                  boxShadow: '0 0 16px rgba(220, 39, 67, 0.4)'
                }}
                title="View @premiumfitnesschapter1.o on Instagram"
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#0a0c10',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/assets/pf_emblem.png"
                    alt="Premium Fitness Chapter 1.O"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              </a>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '1.18rem',
                    letterSpacing: '0.3px',
                    fontFamily: 'var(--font-display)'
                  }}>
                    premiumfitnesschapter1.o
                  </span>
                  <CheckCircle2 size={16} fill="#0ea5e9" color="#fff" />
                </div>
                <div style={{
                  color: '#ff4d56',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  marginTop: '2px'
                }}>
                  "FITNESS TO THE NEXT LEVEL"
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.74rem', marginTop: '2px' }}>
                  Official Chapter 1.O Page • North Karachi • Founder: Muhammad Ali
                </div>
              </div>
            </div>

            {/* Middle: Stats */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              borderRight: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0 20px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.15rem' }}>722+</div>
                <div style={{ color: '#94a3b8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Posts</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.15rem' }}>1,050+</div>
                <div style={{ color: '#94a3b8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Athletes</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.15rem' }}>#1</div>
                <div style={{ color: '#94a3b8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rated</div>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div>
              <a
                href="https://www.instagram.com/premiumfitnesschapter1.o/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  color: '#ffffff',
                  padding: '10px 22px',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.86rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(220, 39, 67, 0.35)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(220, 39, 67, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(220, 39, 67, 0.35)';
                }}
              >
                <Instagram size={17} />
                <span>Follow on Instagram</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Reels & Highlights' },
            { id: 'reels', label: '🎬 Viral Workout Reels' },
            { id: 'ladies', label: '🔒 100% Private Ladies Shift' },
            { id: 'outings', label: '🏖️ Outings & Competitions' },
            { id: 'transformations', label: '🔥 Transformations' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: activeTab === tab.id ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === tab.id ? 'linear-gradient(135deg, rgba(229,9,20,0.35), rgba(155,0,20,0.18))' : 'rgba(255,255,255,0.02)',
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

        {/* Instagram Posts / Reels Grid */}
        <div className="grid-3" style={{ gap: '22px' }}>
          {filteredPosts.map((post) => {
            const isLiked = likedPosts[post.id];
            const currentLikes = isLiked ? post.likes + 1 : post.likes;

            return (
              <div
                key={post.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#0d1016',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.45)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Instagram Post Header */}
                <div style={{
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: 'rgba(15, 18, 25, 0.7)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      padding: '1.5px',
                      background: 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#000', padding: '2px' }}>
                        <img src="/assets/pf_emblem.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <a
                          href={post.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#ffffff',
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            textDecoration: 'none'
                          }}
                        >
                          premiumfitnesschapter1.o
                        </a>
                        <CheckCircle2 size={13} fill="#0ea5e9" color="#fff" />
                      </div>
                      <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>North Karachi, Pakistan</div>
                    </div>
                  </div>

                  <span style={{
                    background: 'rgba(229, 9, 20, 0.2)',
                    border: '1px solid rgba(229, 9, 20, 0.5)',
                    color: '#ff4d56',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.4px'
                  }}>
                    {post.badge}
                  </span>
                </div>

                {/* Media Preview Box */}
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden', backgroundColor: '#000' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="card-zoom-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Subtle Dark Gradient at bottom of media */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 80%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Play Button for Reels */}
                  {post.type === 'reel' && (
                    <a
                      href={post.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${post.title} on Instagram`}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: 'rgba(229, 9, 20, 0.9)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 25px rgba(229, 9, 20, 0.65)',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.12)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
                    >
                      <Play size={22} fill="#fff" style={{ marginLeft: '3px' }} />
                    </a>
                  )}

                  {/* Audio Track Tag at bottom of media */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                    pointerEvents: 'none'
                  }}>
                    <span style={{ color: '#ff4d56' }}>♫</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {post.audio}
                    </span>
                  </div>
                </div>

                {/* Instagram Action Icons Row */}
                <div style={{
                  padding: '12px 14px 6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <button
                      onClick={(e) => toggleLike(post.id, e)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        color: isLiked ? '#ef4444' : '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.15s ease'
                      }}
                      title={isLiked ? 'Unlike' : 'Like'}
                      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.85)')}
                      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Heart size={20} fill={isLiked ? '#ef4444' : 'none'} />
                    </button>
                    <a
                      href={post.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                      title="Comment on Instagram"
                    >
                      <MessageCircle size={19} />
                    </a>
                    <a
                      href={post.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                      title="Share Post"
                    >
                      <Share2 size={18} />
                    </a>
                  </div>

                  <a
                    href={post.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                    title="Bookmark on Instagram"
                  >
                    <Bookmark size={18} />
                  </a>
                </div>

                {/* Likes Counter & Caption */}
                <div style={{ padding: '10px 14px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', marginBottom: '8px' }}>
                      {currentLikes.toLocaleString()} likes • {post.comments} comments
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#fff',
                      lineHeight: 1.3,
                      marginBottom: '6px'
                    }}>
                      {post.title}
                    </h3>

                    <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: '8px' }}>
                      <strong style={{ color: '#fff', marginRight: '6px' }}>premiumfitnesschapter1.o</strong>
                      {post.caption}
                    </p>

                    <div style={{ color: '#60a5fa', fontSize: '0.78rem', lineHeight: 1.4, marginBottom: '14px', wordBreak: 'break-word' }}>
                      {post.hashtags}
                    </div>
                  </div>

                  {/* Direct Link Button */}
                  <a
                    href={post.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '7px',
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(45deg, rgba(240, 148, 51, 0.2), rgba(220, 39, 67, 0.2))';
                      e.currentTarget.style.borderColor = 'rgba(220, 39, 67, 0.4)';
                      e.currentTarget.style.color = '#ff4d56';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <Instagram size={14} />
                    <span>View Real Post on Instagram</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
