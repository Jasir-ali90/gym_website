import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  CreditCard
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function PricingPage({ onOpenPassModal }) {
  const [billingCycle, setBillingCycle] = useState('quarterly'); // 'monthly' | 'quarterly' | 'annual'
  const [isLadiesPass, setIsLadiesPass] = useState(false);

  // Price calculations based on duration
  const prices = {
    monthly: { starter: '4,000', pro: '5,500', vip: '7,500', period: '/ month' },
    quarterly: { starter: '10,500', pro: '14,000', vip: '19,500', period: '/ 3 months', discount: 'Save 15%' },
    annual: { starter: '36,000', pro: '48,000', vip: '65,000', period: '/ year', discount: 'Save 35%' }
  };

  const currentPrices = prices[billingCycle];

  return (
    <div>
      <PageHeader 
        badge="TRANSPARENT MEMBERSHIP TIERS"
        title="INVEST IN YOUR"
        highlight="BODY & HEALTH"
        breadcrumb="Membership Plans"
        description="No hidden registration fees. No forced long-term lock-ins. Select the plan that aligns with your transformation goals."
      />

      {/* DURATION & LADIES TOGGLE */}
      <section style={{ padding: '30px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
          {/* Duration Selector */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '5px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            gap: '4px'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: billingCycle === 'monthly' ? 'var(--red-gradient)' : 'transparent',
                color: billingCycle === 'monthly' ? '#fff' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              1 Month
            </button>

            <button
              onClick={() => setBillingCycle('quarterly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: billingCycle === 'quarterly' ? 'var(--red-gradient)' : 'transparent',
                color: billingCycle === 'quarterly' ? '#fff' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>3 Months</span>
              <span style={{ fontSize: '0.65rem', background: '#eab308', color: '#000', padding: '1px 6px', borderRadius: '4px', fontWeight: 900 }}>POPULAR</span>
            </button>

            <button
              onClick={() => setBillingCycle('annual')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: billingCycle === 'annual' ? 'var(--red-gradient)' : 'transparent',
                color: billingCycle === 'annual' ? '#fff' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Annual VIP</span>
              <span style={{ fontSize: '0.65rem', background: '#10b981', color: '#000', padding: '1px 6px', borderRadius: '4px', fontWeight: 900 }}>SAVE 35%</span>
            </button>
          </div>

          {/* Ladies Pass Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setIsLadiesPass(!isLadiesPass)}
              style={{
                background: isLadiesPass ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: isLadiesPass ? '1.5px solid #ec4899' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '7px 16px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                color: isLadiesPass ? '#f472b6' : '#cbd5e1',
                fontSize: '0.82rem',
                fontWeight: 700,
                transition: 'all 0.2s ease'
              }}
            >
              <ShieldCheck size={16} />
              <span>{isLadiesPass ? '✓ Showing Ladies Exclusive Shift Rates' : 'Switch to 100% Ladies Shift Pass'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 PRICING TIERS */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}>
            {/* Card 1: Starter */}
            <div className="card-pro" style={{ padding: '34px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                STARTER FITNESS
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', margin: '12px 0 4px', fontFamily: 'var(--font-display)' }}>
                Rs. {currentPrices.starter} <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{currentPrices.period}</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '24px' }}>
                Ideal for independent lifters and athletes seeking high-end machines and full gym access.
              </p>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '22px' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> Full Free Weights & Machine Floor</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> Cardio Cinema & Stairmasters</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> Daily Locker & Shower Access</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#ef4444" /> General Floor Trainer Guidance</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}><XCircle size={16} color="#64748b" /> Personalized Nutrition & Diet Chart</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}><XCircle size={16} color="#64748b" /> Multi-Chapter Passports</li>
              </ul>

              <a
                href={`https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20want%20to%20enroll%20in%20Starter%20Fitness%20Plan%20(${billingCycle}%20billing).`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Enroll Starter on WhatsApp
              </a>
            </div>

            {/* Card 2: Pro Transformation (Highlighted) */}
            <div className="card-pro" style={{
              padding: '34px',
              display: 'flex',
              flexDirection: 'column',
              borderColor: '#ef4444',
              background: 'linear-gradient(145deg, rgba(24, 28, 38, 0.98) 0%, rgba(14, 17, 23, 0.98) 100%)',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(229, 9, 20, 0.3)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-13px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--red-gradient)',
                color: '#fff',
                fontSize: '0.74rem',
                fontWeight: 900,
                padding: '4px 16px',
                borderRadius: '999px',
                letterSpacing: '0.8px',
                boxShadow: '0 4px 15px rgba(229, 9, 20, 0.6)'
              }}>
                ★ MOST RECOMMENDED CHOICE
              </div>

              <div style={{ fontSize: '0.82rem', color: '#ff4d56', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                PRO TRANSFORMATION
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', margin: '12px 0 4px', fontFamily: 'var(--font-display)' }}>
                Rs. {currentPrices.pro} <span style={{ fontSize: '0.85rem', color: '#ff4d56', fontWeight: 700 }}>{currentPrices.period}</span>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '24px' }}>
                Engineered for serious body recomposition, muscle building, and coached fat loss results.
              </p>

              <div style={{ height: '1px', background: 'rgba(229,9,20,0.3)', marginBottom: '22px' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> Everything in Starter Tier</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> Customized Calorie & Macro Diet Plan</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> Monthly Body Composition & Fat Tracking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> 1-on-1 Consultation with Head Coach</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600 }}><CheckCircle2 size={16} color="#ef4444" /> 1-Month Freeze Privilege (Travel / Exam)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}><XCircle size={16} color="#64748b" /> Multi-Chapter Passports</li>
              </ul>

              <a
                href={`https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20want%20to%20enroll%20in%20PRO%20TRANSFORMATION%20Plan%20(${billingCycle}%20billing).`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-red"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Enroll Pro Plan on WhatsApp
              </a>
            </div>

            {/* Card 3: VIP Elite */}
            <div className="card-pro" style={{ padding: '34px', display: 'flex', flexDirection: 'column', borderColor: 'rgba(234, 179, 8, 0.4)' }}>
              <div style={{ fontSize: '0.82rem', color: '#eab308', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                VIP ELITE ANNUAL
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', margin: '12px 0 4px', fontFamily: 'var(--font-display)' }}>
                Rs. {currentPrices.vip} <span style={{ fontSize: '0.85rem', color: '#eab308', fontWeight: 700 }}>{currentPrices.period}</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '24px' }}>
                The ultimate executive passport across Chapters 1.0, 2.0 & 3.0 with personal mentorship.
              </p>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '22px' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> All-Chapter Passport (1.0, 2.0, 3.0)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> Permanent Reserved VIP Digital Locker</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> 2 Free Monthly Guest Workout Passes</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> Direct WhatsApp Mentorship with Ali Arif</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> Priority Workout Slot Reservations</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}><CheckCircle2 size={16} color="#eab308" /> 2-Month Membership Freeze Allowance</li>
              </ul>

              <a
                href={`https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20the%20VIP%20ELITE%20Plan%20(${billingCycle}%20billing).`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Apply for VIP Membership
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FULL FEATURE COMPARISON TABLE */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-pill mb-2">SIDE-BY-SIDE MATRIX</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              MEMBERSHIP <span className="text-red-gradient">FEATURE COMPARISON</span>
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(229, 9, 20, 0.4)' }}>
                  <th style={{ padding: '14px 16px', color: '#fff', fontWeight: 800 }}>Feature / Privilege</th>
                  <th style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 700, textAlign: 'center' }}>Starter</th>
                  <th style={{ padding: '14px 16px', color: '#ff4d56', fontWeight: 800, textAlign: 'center' }}>Pro Transformation</th>
                  <th style={{ padding: '14px 16px', color: '#eab308', fontWeight: 800, textAlign: 'center' }}>VIP Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Access to Gym Floor & Calibrated Iron', starter: '✓ Full', pro: '✓ Full', vip: '✓ Full' },
                  { feature: 'Cardio Deck & HIIT Machines', starter: '✓ Full', pro: '✓ Full', vip: '✓ Full' },
                  { feature: 'Locker & Shower Facilities', starter: '✓ Daily', pro: '✓ Daily', vip: '✓ Permanent Locker' },
                  { feature: 'Floor Trainer Guidance', starter: '✓ Basic', pro: '✓ Dedicated', vip: '✓ VIP Mentorship' },
                  { feature: 'Customized Diet & Calorie Chart', starter: '—', pro: '✓ Included', vip: '✓ Personalized + Macro Updates' },
                  { feature: 'Monthly Body Composition & Fat Tracking', starter: '—', pro: '✓ Monthly', vip: '✓ Bi-Weekly InBody' },
                  { feature: 'Multi-Chapter Access (1.0, 2.0, 3.0)', starter: '—', pro: '—', vip: '✓ All 3 Chapters' },
                  { feature: 'Monthly Guest Workout Passes', starter: '—', pro: '—', vip: '✓ 2 Passes / Month' },
                  { feature: 'Membership Freeze Allowance', starter: '—', pro: '✓ 30 Days', vip: '✓ 60 Days' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: idx % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                    <td style={{ padding: '14px 16px', color: '#cbd5e1', fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: '14px 16px', color: '#94a3b8', textAlign: 'center' }}>{row.starter}</td>
                    <td style={{ padding: '14px 16px', color: '#fff', fontWeight: 700, textAlign: 'center' }}>{row.pro}</td>
                    <td style={{ padding: '14px 16px', color: '#eab308', fontWeight: 700, textAlign: 'center' }}>{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP POLICY & PAYMENT METHODS */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef4444', fontWeight: 800, fontSize: '1rem', marginBottom: '10px' }}>
                <CreditCard size={20} />
                <span>Accepted Payment Methods</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                We accept payments via <strong style={{ color: '#fff' }}>Cash at Reception</strong>, <strong style={{ color: '#fff' }}>JazzCash</strong>, <strong style={{ color: '#fff' }}>EasyPaisa</strong>, and <strong style={{ color: '#fff' }}>Online Direct Bank Transfer</strong>. Official printed receipts are issued upon payment.
              </p>
            </div>

            <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', fontWeight: 800, fontSize: '1rem', marginBottom: '10px' }}>
                <ShieldCheck size={20} />
                <span>Transparent Freeze Policy</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                Heading out of Karachi or have college exams? Pro and VIP members can freeze their membership for up to 30 to 60 days with a quick WhatsApp notice to the front desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CTA */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(10, 12, 16, 0.95) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>
            NOT SURE WHICH PLAN SUITS YOU?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '22px' }}>
            Start with our 1-Day Complimentary Pass or chat with our team for advice.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={onOpenPassModal} className="btn-primary-red" style={{ padding: '12px 26px' }}>
              <Sparkles size={16} />
              <span>Claim Free 1-Day Pass</span>
            </button>
            <a
              href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20need%20help%20choosing%20a%20membership%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '12px 24px' }}
            >
              <MessageCircle size={16} />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
