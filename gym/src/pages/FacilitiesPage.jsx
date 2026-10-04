import React, { useState } from 'react';
import { 
  Dumbbell, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Lock, 
  Coffee, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const FACILITIES_DATA = [
  {
    id: 'heavy-iron',
    category: 'strength',
    title: 'Heavy Iron & Calibrated Free Weights',
    tag: 'STRENGTH PLATFORMS',
    color: '#ef4444',
    icon: Dumbbell,
    image: '/assets/dumbbells_real.jpg',
    description: 'Purpose-built for powerlifters, bodybuilders, and athletes who demand heavy, calibrated iron and solid footing.',
    specs: [
      'Dumbbells up to 50KG in 2.5kg micro-increments',
      'Competition-grade Olympic Barbells (20kg / 28mm & 29mm)',
      'Heavy-duty Power Racks with safety spotter arms',
      'Solid rubber deadlift drop platforms',
      'Multi-angle adjustable commercial utility benches',
      'Calibrated cast iron and rubber bumper plates'
    ]
  },
  {
    id: 'biomechanics',
    category: 'machines',
    title: 'Bio-Mechanic & Plate-Loaded Machinery',
    tag: 'TARGETED HYPERTROPHY',
    color: '#ff4d56',
    icon: Layers,
    image: '/assets/bench_real.jpg',
    description: 'Precision resistance curve machines engineered to isolate muscle groups while protecting joints and ligaments.',
    specs: [
      '45-Degree Leg Press & Heavy Hack Squat',
      'Dual-pulley Functional Cable Crossover Stations',
      'Converging Chest Press & Incline Hammer-style presses',
      'Plate-loaded Lat Pulldown & Seated Low Cable Rows',
      'Prone Leg Curls & Seated Quadricep Extensions',
      'Preacher Curl Benches & Tricep Pushdown towers'
    ]
  },
  {
    id: 'ladies-floor',
    category: 'ladies',
    title: '100% Dedicated Ladies Floor & Private Studio',
    tag: 'STRICT PRIVACY GUARANTEE',
    color: '#ec4899',
    icon: ShieldCheck,
    image: '/assets/ladies_real.jpg',
    description: 'An exclusive, discreet, and empowering fitness environment designed exclusively for women during the 11:30 AM – 04:30 PM shift.',
    specs: [
      '100% Private, curtained & tinted workout floor',
      'Zero male presence (trainers, staff & visitors barred)',
      'Certified female coaches on the floor for all routines',
      'Specialized PCOS/PCOD and post-natal fat burn programs',
      'Private changing cubicles and hygienic washrooms',
      'Safe, respectful, and motivating sisterhood community'
    ]
  },
  {
    id: 'cardio-theatre',
    category: 'cardio',
    title: 'Cardio Cinema & Endurance Deck',
    tag: 'AEROBIC & VO2 MAX',
    color: '#06b6d4',
    icon: Activity,
    image: '/assets/cardio_real.jpg',
    description: 'High-end cardiovascular equipment outfitted with interactive screens to maximize calorie burn and cardiovascular health.',
    specs: [
      'Commercial heavy-duty motor treadmills with incline up to 15%',
      'StairMaster continuous climbing stepmills',
      'Cross-trainer Ellipticals with low joint impact',
      'High-resistance Assault Air Bikes for HIIT conditioning',
      'Concept2 style indoor rowing machines',
      'Heart-rate telemetry and real-time calorie burn monitors'
    ]
  },
  {
    id: 'recovery-lockers',
    category: 'recovery',
    title: 'Executive Lockers & Hygiene Suites',
    tag: 'RECOVERY & COMFORT',
    color: '#10b981',
    icon: Lock,
    image: '/assets/strength_event.jpg',
    description: 'Clean, sanitized, and secure locker rooms designed so you can train before work or freshen up right after a grueling workout.',
    specs: [
      'Individual digital padlock lockers for personal belongings',
      'High-pressure hot & cold continuous water showers',
      'Spotless vanity mirrors, grooming stations & hair dryers',
      'Daily 3-phase disinfectant and sanitization rounds',
      'Hands-free hand sanitizer stations at every zone',
      'Shoe racks and clean gym-only footwear changing stations'
    ]
  },
  {
    id: 'nutrition-bar',
    category: 'recovery',
    title: 'Supplement Bar & Pre-Workout Fuel',
    tag: 'NUTRITION & HYDRATION',
    color: '#eab308',
    icon: Coffee,
    image: '/assets/event_gathering.jpg',
    description: 'On-site nutrition hub providing authentic, 100% lab-tested supplements, protein shakes, and hydration drinks.',
    specs: [
      'Freshly blended 100% Whey Protein Isolate shakes',
      'High-stimulant & pump pre-workout shots',
      'Electrolyte & branched-chain amino acid (BCAA) hydration',
      'Zero-calorie cold water dispensers & energy bars',
      'Direct supplement consultations with Coach Muhammad Ali Arif',
      'Authentic certified products with zero fake import risk'
    ]
  }
];

export default function FacilitiesPage({ onOpenPassModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredFacilities = activeFilter === 'all' 
    ? FACILITIES_DATA 
    : FACILITIES_DATA.filter(f => f.category === activeFilter);

  return (
    <div>
      <PageHeader 
        badge="WORLD-CLASS INFRASTRUCTURE"
        title="ELITE GYM"
        highlight="FACILITIES & ZONES"
        breadcrumb="Facilities"
        description="Every square foot of The Gym Fitness Club is designed for serious results. Inspect our calibrated iron, bio-mechanic machines, and 100% private ladies floor."
      />

      {/* FILTER BUTTONS */}
      <section style={{ padding: '24px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'none' }}>
            {[
              { id: 'all', label: 'All 6 Zones' },
              { id: 'strength', label: 'Free Weights & Iron' },
              { id: 'machines', label: 'Bio-Mechanic Machines' },
              { id: 'ladies', label: '100% Ladies Studio' },
              { id: 'cardio', label: 'Cardio Deck' },
              { id: 'recovery', label: 'Lockers & Nutrition' },
            ].map(tab => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    border: isActive ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                    background: isActive ? 'var(--red-gradient)' : 'rgba(255,255,255,0.04)',
                    color: isActive ? '#fff' : '#cbd5e1',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 800 : 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {filteredFacilities.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  className="card-pro"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderColor: item.category === 'ladies' ? 'rgba(236,72,153,0.45)' : 'rgba(255,255,255,0.1)',
                    padding: 0
                  }}
                >
                  {/* Image Header with Badge */}
                  <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #161a22 0%, #0d0f14 100%)';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(14, 17, 23, 0.95) 0%, rgba(14, 17, 23, 0.3) 60%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px'
                    }}>
                      <span style={{
                        background: item.color,
                        color: '#fff',
                        fontSize: '0.68rem',
                        fontWeight: 900,
                        padding: '4px 10px',
                        borderRadius: '4px',
                        letterSpacing: '0.6px',
                        width: 'fit-content',
                        textTransform: 'uppercase'
                      }}>
                        {item.tag}
                      </span>

                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(10px)',
                        border: `1.5px solid ${item.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color
                      }}>
                        <IconComp size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.description}
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ fontSize: '0.76rem', color: '#ff4d56', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '10px' }}>
                        Zone Specifications:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.specs.map((spec, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                            <CheckCircle2 size={15} style={{ color: item.color, flexShrink: 0, marginTop: '3px' }} />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GYM ETIQUETTE & HYGIENE POLICY */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-pill mb-2">CLUB STANDARDS</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              GYM ETIQUETTE & <span className="text-red-gradient">HYGIENE PROTOCOLS</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
              To ensure a professional and safe environment for all lifters, we strictly enforce these rules.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px'
          }}>
            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.95rem', marginBottom: '6px' }}>1. Re-Rack All Weights</div>
              <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.5, margin: 0 }}>
                Always return dumbbells and plates to their designated tree positions immediately after completing sets.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.95rem', marginBottom: '6px' }}>2. Mandatory Workout Towel</div>
              <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.5, margin: 0 }}>
                A personal towel is compulsory on all benches and padded machine seats for sweat hygiene.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.95rem', marginBottom: '6px' }}>3. Indoor Clean Footwear</div>
              <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.5, margin: 0 }}>
                Outdoor muddy sneakers or slippers are prohibited on the training turf. Bring dedicated workout trainers.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(236,72,153,0.05)', border: '1px solid rgba(236,72,153,0.3)' }}>
              <div style={{ color: '#ec4899', fontWeight: 800, fontSize: '0.95rem', marginBottom: '6px' }}>4. Ladies Shift Sanctity</div>
              <p style={{ color: '#cbd5e1', fontSize: '0.84rem', lineHeight: 1.5, margin: 0 }}>
                Strict zero tolerance during 11:30 AM – 04:30 PM. Men are not permitted inside under any circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CTA */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(10, 12, 16, 0.95) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>
            READY TO TRY OUR CALIBRATED GEAR?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '22px' }}>
            Book a complimentary 1-day pass and feel the biomechanics difference firsthand.
          </p>
          <button onClick={onOpenPassModal} className="btn-primary-red" style={{ padding: '12px 28px' }}>
            <Sparkles size={16} />
            <span>Claim Free 1-Day Trial</span>
          </button>
        </div>
      </section>
    </div>
  );
}
