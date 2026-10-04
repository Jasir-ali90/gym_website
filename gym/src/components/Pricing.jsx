import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, Award, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenPassModal }) {
  const [membershipType, setMembershipType] = useState('standard');

  const standardPlans = [
    {
      id: 'starter',
      name: 'Starter Monthly',
      tagline: 'Ideal for getting started with zero long-term commitment',
      badge: null,
      price: '4,000',
      period: 'per month',
      popular: false,
      features: [
        'Full access to all commercial gym equipment',
        'Standard floor coach assistance & spotting',
        'Locker & changing room access',
        'Continuous chilled AC & generator backup',
        'Valid for Morning or Evening shifts',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to join the Starter Monthly Plan (PKR 4,000) at Premium Fitness Chapter 1.O North Karachi.'
    },
    {
      id: 'pro',
      name: 'Pro Transformation',
      tagline: 'Most recommended for visible, rapid body recomposition',
      badge: '★ RECOMMENDED • MOST POPULAR',
      price: '10,500',
      period: 'billed quarterly (3 months)',
      popular: true,
      features: [
        'Everything included in Monthly Plan',
        'Personalized Workout Split (PPL / Upper-Lower)',
        'Custom Macro & Calorie Guidance for Pakistani Meals',
        'Bi-weekly Body Fat & Measurement Tracking',
        'Priority locker access',
        'Complimentary Premium Shaker Bottle',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to enroll in the Pro 3-Month Transformation Plan (PKR 10,500) at Premium Fitness Chapter 1.O North Karachi.'
    },
    {
      id: 'annual',
      name: 'VIP Annual',
      tagline: 'For hardcore athletes committed to year-round discipline',
      badge: '👑 VALUE SAVER (SAVE 25%)',
      price: '36,000',
      period: 'per year (Rs. 3,000/mo equiv.)',
      popular: false,
      features: [
        'Unlimited 365-day all-access to gym facilities',
        '4 Free Personal Training Sessions with Master Coach',
        'Custom Diet Plan by Coach Ahmed Khan',
        'VIP Permanent Locker assigned with your name',
        'Free guest passes for 2 friends each month',
        'Exclusive Premium Fitness Gym Bag & Tee',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to register for the VIP Annual Pass (PKR 36,000) at Premium Fitness Chapter 1.O.'
    }
  ];

  const ladiesPlans = [
    {
      id: 'ladies-monthly',
      name: 'Ladies Private Monthly',
      tagline: 'Dedicated 11:30 AM – 4:30 PM private workout hours',
      badge: '🌸 100% PRIVATE',
      price: '4,500',
      period: 'per month',
      popular: false,
      features: [
        'Guaranteed zero male entry & complete privacy',
        'Certified Female Instructor guidance on floor',
        'Specialized fat-loss & toning routine',
        'Full cardio & free weights floor access',
        'Private locker & hygienic washroom',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to join the Ladies Private Monthly Pass (PKR 4,500) at Premium Fitness Chapter 1.O North Karachi.'
    },
    {
      id: 'ladies-quarterly',
      name: 'Ladies 3-Month Sculpt',
      tagline: 'Structured waist sculpting & toning program',
      badge: '★ BEST VALUE FOR LADIES',
      price: '11,500',
      period: 'billed for 3 months',
      popular: true,
      features: [
        'Full private access for 3 months',
        'Personalized waist sculpting & toning routine',
        'PCOS & hormonal-friendly nutrition guidelines',
        'Progressive cardio HIIT supervision',
        'Complimentary workout shaker bottle',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to enroll in the Ladies 3-Month Sculpt Plan (PKR 11,500) at Premium Fitness Chapter 1.O.'
    },
    {
      id: 'ladies-annual',
      name: 'Ladies VIP Annual',
      tagline: 'Year-round fitness, health & confidence',
      badge: '👑 ANNUAL VIP',
      price: '38,000',
      period: 'per year',
      popular: false,
      features: [
        'Unlimited 365 days private ladies access',
        'Continuous female instructor guidance',
        'Quarterly body recomposition tracking',
        'Dedicated permanent locker space',
        '2 Free guest passes for female friends',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to enroll in the Ladies VIP Annual Pass (PKR 38,000) at Premium Fitness Chapter 1.O.'
    }
  ];

  const activePlans = membershipType === 'standard' ? standardPlans : ladiesPlans;

  return (
    <section 
      id="pricing" 
      style={{ 
        padding: '95px 0', 
        backgroundColor: 'var(--bg-secondary)', 
        borderTop: '1px solid rgba(229, 9, 20, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 46px' }}>
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
            <Award size={16} /> TRANSPARENT MEMBERSHIP PACKAGES
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
            FLEXIBLE <span className="text-red-gradient">MEMBERSHIP PLANS</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 24px' }}>
            Direct transparent pricing in Pakistani Rupees (PKR). No hidden admission fees, no surprise charges.
          </p>

          {/* Category Toggle Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(0,0,0,0.5)',
            padding: '5px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '12px'
          }}>
            <button
              onClick={() => setMembershipType('standard')}
              style={{
                padding: '9px 24px',
                borderRadius: '999px',
                border: 'none',
                background: membershipType === 'standard' ? 'var(--red-gradient)' : 'transparent',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Standard Men's & General Access
            </button>
            <button
              onClick={() => setMembershipType('ladies')}
              style={{
                padding: '9px 24px',
                borderRadius: '999px',
                border: 'none',
                background: membershipType === 'ladies' ? 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' : 'transparent',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ShieldCheck size={15} />
              <span>100% Private Ladies Pass</span>
            </button>
          </div>

          <div style={{
            marginTop: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            color: '#4ade80',
            padding: '7px 18px',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <MessageCircle size={15} /> Instant admission confirmation on WhatsApp (+92 313 2229925)
          </div>
        </div>

        {/* Crisp 3-Card Grid */}
        <div className="grid-3" style={{ alignItems: 'stretch', gap: '28px' }}>
          {activePlans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card pricing-card ${plan.popular ? 'red-shimmer-border' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '36px 28px',
                position: 'relative',
                borderRadius: '20px',
                background: plan.popular 
                  ? 'linear-gradient(180deg, rgba(229, 9, 20, 0.12) 0%, rgba(18, 21, 28, 0.98) 100%)' 
                  : 'var(--bg-card)',
                border: plan.popular 
                  ? '2px solid rgba(229, 9, 20, 0.75)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: plan.popular 
                  ? '0 16px 45px rgba(229, 9, 20, 0.25)' 
                  : 'var(--shadow-card)',
                transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
                zIndex: plan.popular ? 2 : 1,
                transition: 'all 0.3s ease',
              }}
            >
              {/* Floating Badge */}
              {plan.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: membershipType === 'ladies'
                    ? 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
                    : plan.id === 'pro'
                    ? 'var(--red-gradient)'
                    : 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
                  color: '#fff',
                  padding: '5px 16px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  letterSpacing: '0.6px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div style={{ marginBottom: '18px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '8px',
                  lineHeight: 1.25,
                }}>
                  {plan.name}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', minHeight: '42px', lineHeight: 1.5 }}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price Display */}
              <div style={{
                padding: '16px 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '22px',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '0.92rem', color: '#94a3b8', fontWeight: 700 }}>PKR</span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: plan.popular ? '#ff4d56' : '#ffffff',
                    lineHeight: 1
                  }}>
                    {plan.price}
                  </span>
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '0.8rem', marginTop: '4px', fontWeight: 500 }}>
                  {plan.period}
                </div>
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: '26px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  Included Benefits:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {plan.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      <Check size={16} style={{ color: plan.popular ? '#ef4444' : '#34d399', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Booking CTA */}
              <a
                href={`https://wa.me/923132229925?text=${encodeURIComponent(plan.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.popular ? 'btn-primary-red' : 'btn-secondary-dark'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.92rem',
                  padding: '13px 20px',
                  textAlign: 'center',
                  fontWeight: 800
                }}
              >
                <MessageCircle size={16} />
                <span>JOIN ON WHATSAPP</span>
              </a>
            </div>
          ))}
        </div>

        {/* Free Pass Banner */}
        <div style={{
          marginTop: '52px',
          textAlign: 'center',
          background: 'rgba(229, 9, 20, 0.06)',
          border: '1.5px dashed rgba(229, 9, 20, 0.45)',
          borderRadius: '18px',
          padding: '26px 24px',
        }}>
          <p style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, marginBottom: '14px' }}>
            Want to test out the machines and atmosphere before committing?
          </p>
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '13px 30px', fontSize: '0.94rem' }}
          >
            <Sparkles size={16} />
            <span>Generate Free 1-Day Trial Pass</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
