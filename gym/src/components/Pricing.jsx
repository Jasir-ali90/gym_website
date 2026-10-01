import React from 'react';
import { Check, Sparkles, MessageCircle, Award } from 'lucide-react';

export default function Pricing({ onOpenPassModal }) {
  const plans = [
    {
      id: 'monthly',
      name: 'Standard Monthly',
      tagline: 'Ideal for getting started with zero long-term commitment',
      badge: null,
      price: '4,000',
      period: 'per month',
      popular: false,
      features: [
        'Full access to all commercial gym equipment',
        'Standard floor trainer assistance',
        'Locker & changing room access',
        'Continuous AC & generator backup',
        'Valid for Morning or Evening shifts',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to join the Standard Monthly Plan (PKR 4,000) at Premium Fitness Chapter 1.O North Karachi.'
    },
    {
      id: 'quarterly',
      name: '3-Month Transformation',
      tagline: 'Most recommended for visible body recomposition',
      badge: '🔥 MOST POPULAR',
      price: '10,500',
      period: 'for 3 months',
      popular: true,
      features: [
        'Everything in Monthly Plan',
        'Customized Workout Split (PPL / Bro Split)',
        'Personalized Macro & Calorie Guidance',
        'Bi-weekly Body Fat & Measurement Track',
        'Priority locker access',
        'Complimentary Premium Shaker Bottle',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to enroll in the 3-Month Transformation Plan (PKR 10,500) at Premium Fitness Chapter 1.O North Karachi.'
    },
    {
      id: 'ladies',
      name: 'Ladies Exclusive Pass',
      tagline: 'Dedicated 11:30 AM – 4:30 PM private hours',
      badge: '🌸 100% PRIVATE',
      price: '4,500',
      period: 'per month',
      popular: false,
      features: [
        'Guaranteed zero male entry & complete privacy',
        'Certified Female Instructor guidance on floor',
        'Specialized fat-loss & toning routine',
        'Full cardio & free weights access',
        'Private locker & washroom',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to register for the Ladies Exclusive Pass at Premium Fitness Chapter 1.O North Karachi.'
    },
    {
      id: 'annual',
      name: 'VIP Elite 1-Year Pass',
      tagline: 'For hardcore athletes committed to year-round discipline',
      badge: '👑 BEST VALUE - SAVE 30%',
      price: '34,000',
      period: 'per year',
      popular: false,
      features: [
        'Unlimited 365-day all-access to Chapter 1.O',
        '4 Free Personal Training Sessions with Master Coach',
        'Custom Diet Plan by Coach Ahmed Khan',
        'VIP Permanent Locker assigned with your name',
        'Free guest passes for 2 friends each month',
        'Exclusive Premium Fitness Gym Bag & Tee',
      ],
      whatsappMsg: 'Assalam-o-Alaikum! I want to register for the VIP Elite 1-Year Pass (PKR 34,000) at Premium Fitness Chapter 1.O.'
    }
  ];

  return (
    <section id="pricing" style={{ padding: '85px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(229, 9, 20, 0.2)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
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
            <Award size={15} /> TRANSPARENT PACKAGES
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px'
          }}>
            INVEST IN YOUR <br />
            <span className="text-red-gradient">HEALTH & PHYSIQUE</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Direct transparent pricing in Pakistani Rupees (PKR). No hidden fees or registration traps.
          </p>

          <div style={{
            marginTop: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            color: '#4ade80',
            padding: '7px 16px',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 600
          }}>
            <MessageCircle size={14} /> Instant admission confirmation on WhatsApp (+92 313 2229925)
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-4" style={{ alignItems: 'stretch' }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card pricing-card ${plan.popular ? 'red-shimmer-border' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '34px 22px 26px',
                position: 'relative',
                overflow: 'visible',
                marginTop: '16px',
                background: plan.popular 
                  ? 'linear-gradient(180deg, rgba(229, 9, 20, 0.12) 0%, rgba(18, 21, 28, 0.98) 100%)' 
                  : 'var(--bg-card)',
                border: plan.popular 
                  ? '1.5px solid rgba(229, 9, 20, 0.65)' 
                  : plan.id === 'ladies' 
                  ? '1px solid rgba(236, 72, 153, 0.35)' 
                  : '1px solid rgba(255, 255, 255, 0.08)',
                zIndex: plan.popular ? 3 : 1,
              }}
            >
              {/* Floating Badge (Never Clipped) */}
              {plan.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: plan.id === 'ladies'
                    ? 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
                    : plan.id === 'quarterly'
                    ? 'var(--red-gradient)'
                    : 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
                  color: '#fff',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  boxShadow: plan.id === 'ladies'
                    ? '0 4px 15px rgba(236, 72, 153, 0.5)'
                    : '0 4px 15px rgba(229, 9, 20, 0.55)',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.12rem, 1.35vw, 1.25rem)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '6px',
                  lineHeight: 1.25,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  {plan.name}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', minHeight: '38px', lineHeight: 1.45 }}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price display */}
              <div style={{
                padding: '14px 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>PKR</span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    color: plan.popular ? '#ff4d56' : '#ffffff',
                    lineHeight: 1
                  }}>
                    {plan.price}
                  </span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '3px' }}>
                  {plan.period}
                </div>
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: '22px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Included Features:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {plan.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                      <Check size={14} style={{ color: plan.popular ? '#ef4444' : '#34d399', flexShrink: 0, marginTop: '2px' }} />
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
                  fontSize: '0.85rem',
                  padding: '11px 14px',
                  textAlign: 'center'
                }}
              >
                <MessageCircle size={15} />
                <span>Join on WhatsApp</span>
              </a>
            </div>
          ))}
        </div>

        {/* Free Pass Banner */}
        <div style={{
          marginTop: '45px',
          textAlign: 'center',
          background: 'rgba(229, 9, 20, 0.05)',
          border: '1px dashed rgba(229, 9, 20, 0.4)',
          borderRadius: '16px',
          padding: '22px 20px',
        }}>
          <p style={{ color: '#e2e8f0', fontSize: '0.96rem', marginBottom: '12px' }}>
            Want to try the machines & environment first? Take a complimentary session.
          </p>
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red"
            style={{ padding: '11px 26px', fontSize: '0.88rem' }}
          >
            <Sparkles size={15} />
            <span>Generate Free 1-Day Trial Pass</span>
          </button>
        </div>
      </div>
    </section>
  );
}
