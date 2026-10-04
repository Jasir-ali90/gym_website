import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  Navigation, 
  Sparkles
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const CHAPTERS = [
  {
    id: 'ch1',
    title: 'CHAPTER 1.O (FLAGSHIP)',
    badge: 'FLAGSHIP HEADQUARTERS',
    badgeColor: '#ef4444',
    address: '2nd Floor, Plot A-901, Shahrah-e-Usman, Sector 11-A, North Karachi',
    phone: '0313-2229925',
    timings: 'Mon–Sat: 6AM-11AM & 5PM-12AM | Ladies: 11:30AM-4:30PM | Sun: CLOSED',
    landmark: 'Opposite Usman Public School / Near Power House Chowrangi',
    mapUrl: 'https://maps.google.com/?q=24.9922,67.0673'
  },
  {
    id: 'ch2',
    title: 'CHAPTER 2.0 (BUFFER ZONE)',
    badge: 'COMMUNITY CLUB',
    badgeColor: '#eab308',
    address: 'Sector 15-A, Near Power House Chowrangi, North Karachi / Buffer Zone',
    phone: '0313-2229925',
    timings: 'Mon–Sat: 6AM-11AM & 5PM-12AM | Ladies: 11:30AM-4:30PM | Sun: CLOSED',
    landmark: 'Near Erum Shopping Mall & Powerhouse Hub',
    mapUrl: 'https://maps.google.com/?q=24.9785,67.0589'
  },
  {
    id: 'ch3',
    title: 'CHAPTER 3.0 (SHADMAN TOWN)',
    badge: 'NEW FACILITY',
    badgeColor: '#10b981',
    address: 'Sector 14-B, Main Shadman Town, Karachi',
    phone: '0313-2229925',
    timings: 'Mon–Sat: 6AM-11AM & 5PM-12AM | Ladies: 11:30AM-4:30PM | Sun: CLOSED',
    landmark: 'Main Commercial Market, Sector 14-B',
    mapUrl: 'https://maps.google.com/?q=24.9650,67.0630'
  }
];

export default function ContactPage({ onOpenPassModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'Chapter 1.0 (North Karachi)',
    shift: 'Men’s Evening Shift (5PM - 12AM)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const text = `Assalam-o-Alaikum! New inquiry from Website:%0A` +
      `👤 Name: ${encodeURIComponent(formData.name)}%0A` +
      `📞 Phone: ${encodeURIComponent(formData.phone)}%0A` +
      `📍 Branch: ${encodeURIComponent(formData.branch)}%0A` +
      `⏰ Preferred Shift: ${encodeURIComponent(formData.shift)}%0A` +
      `💬 Message: ${encodeURIComponent(formData.message || 'I want to visit the gym.')}`;

    window.open(`https://wa.me/923132229925?text=${text}`, '_blank');
  };

  return (
    <div>
      <PageHeader 
        badge="LOCATIONS & INQUIRIES"
        title="VISIT OR REACH"
        highlight="OUR 3 CHAPTERS"
        breadcrumb="Contact & Locations"
        description="Whether you want to claim your free pass, tour our facilities, or inquire about fees — our team is ready to welcome you."
      />

      {/* 3 CHAPTER CARDS */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-pill mb-2">OUR PRESENCE IN KARACHI</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 900, textTransform: 'uppercase' }}>
              CHOOSE YOUR NEAREST <span className="text-red-gradient">FACILITY</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {CHAPTERS.map((ch) => (
              <div 
                key={ch.id} 
                className="card-pro"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: ch.id === 'ch1' ? 'rgba(229, 9, 20, 0.6)' : 'rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{
                    background: ch.badgeColor,
                    color: '#fff',
                    fontSize: '0.66rem',
                    fontWeight: 900,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    letterSpacing: '0.5px'
                  }}>
                    {ch.badge}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#ff4d56', fontWeight: 700 }}>Sunday: Closed</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                  {ch.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <MapPin size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                    <span>{ch.address}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Navigation size={15} style={{ color: '#94a3b8', flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8', fontSize: '0.78rem' }}>{ch.landmark}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={15} style={{ color: '#ef4444', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.76rem' }}>Mon–Sat: 6AM–11AM & 5PM–12AM (Ladies: 11:30AM–4:30PM)</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={15} style={{ color: '#ef4444', flexShrink: 0 }} />
                    <a href={`tel:${ch.phone.replace(/[^0-9]/g, '')}`} style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
                      {ch.phone}
                    </a>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <a
                    href={ch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, justifyContent: 'center', padding: '9px 12px', fontSize: '0.8rem' }}
                  >
                    <Navigation size={13} />
                    <span>Open Maps</span>
                  </a>
                  <a
                    href={`https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20want%20to%20visit%20${encodeURIComponent(ch.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1, justifyContent: 'center', padding: '9px 12px', fontSize: '0.8rem' }}
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FORM & GOOGLE MAPS SPLIT */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start'
          }}>
            {/* Form */}
            <div className="card-pro" style={{ padding: '34px' }}>
              <div className="badge-pill mb-2">QUICK INQUIRY</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                SEND US A MESSAGE
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '22px' }}>
                Fill in your details below and our team will immediately respond on WhatsApp or phone.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '6px' }}>
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Daniyal Ahmed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '6px' }}>
                    WHATSAPP / PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0313-XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '6px' }}>
                      BRANCH
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 10px',
                        borderRadius: '8px',
                        background: '#12151c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#fff',
                        fontSize: '0.82rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Chapter 1.0 (North Karachi)">Chapter 1.0 (Sector 11-A)</option>
                      <option value="Chapter 2.0 (Buffer Zone)">Chapter 2.0 (Buffer Zone)</option>
                      <option value="Chapter 3.0 (Shadman Town)">Chapter 3.0 (Shadman Town)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '6px' }}>
                      PREFERRED SHIFT
                    </label>
                    <select
                      value={formData.shift}
                      onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 10px',
                        borderRadius: '8px',
                        background: '#12151c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#fff',
                        fontSize: '0.82rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Men's Morning (6AM-11AM)">Men's Morning (6AM-11AM)</option>
                      <option value="Ladies Shift (11:30AM-4:30PM)">100% Ladies (11:30AM-4:30PM)</option>
                      <option value="Men's Evening (5PM-12AM)">Men's Evening (5PM-12AM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '6px' }}>
                    YOUR GOAL OR QUESTION
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Want to inquire about 3-month fat loss transformation and trainer fees."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-red"
                  style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
                >
                  <Send size={16} />
                  <span>Send Message & Chat on WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Google Map & Direct Contact Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid rgba(229, 9, 20, 0.45)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                height: '320px',
                background: '#0d0f14',
                position: 'relative'
              }}>
                <iframe
                  title="Premium Fitness Chapter 1.0 Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.7310577717804!2d67.0651113!3d24.9922222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3411b0e7745ef%3A0x8673a5a415ff6640!2sNorth%20Karachi%20Town%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div style={{ padding: '22px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ color: '#fff', fontSize: '0.98rem', fontWeight: 800, marginBottom: '8px' }}>
                  Parking & Accessibility Guide
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.55, margin: 0 }}>
                  Dedicated bike and car parking is available right outside all 3 branches with security guard surveillance. Accessible via Shahrah-e-Usman and Powerhouse Chowrangi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(10, 12, 16, 0.95) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>
            DROP BY TODAY FOR A FREE TOUR
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '22px' }}>
            No appointment required. Visit during open hours and speak to our front desk.
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
