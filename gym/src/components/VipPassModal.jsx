import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, QrCode, Download, MessageCircle, CheckCircle } from 'lucide-react';

export default function VipPassModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'ticket'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shift: 'evening',
    goal: 'weight_loss'
  });
  const [passId, setPassId] = useState('');
  const [copiedNotice, setCopiedNotice] = useState(false);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate unique VIP Pass ID
    const randomId = 'PFC1-' + Math.floor(1000 + Math.random() * 9000);
    setPassId(randomId);

    // Trigger red & gold confetti explosion
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#ff1e27', '#b91c1c', '#ffffff']
      });
    } catch (err) {
      console.log(err);
    }

    setStep('ticket');
  };

  const whatsappTicketMsg = `Assalam-o-Alaikum! I have claimed my FREE 1-DAY VIP PASS for Premium Fitness Chapter 1.O.
- Pass ID: ${passId}
- Name: ${formData.name}
- Shift: ${formData.shift === 'ladies' ? 'Ladies Private Hours (11:30AM-4:30PM)' : formData.shift === 'morning' ? 'Men Morning Shift (6AM-11AM)' : 'Men Evening Prime Shift (5PM-12AM)'}
- Contact: ${formData.phone}
Please confirm my slot at 2nd Floor, 901 Shahrah-e-Usman, North Karachi.`;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.88)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '16px',
    }}>
      <div style={{
        backgroundColor: '#0c0e12',
        border: '1.5px solid rgba(229, 9, 20, 0.5)',
        borderRadius: '20px',
        maxWidth: '520px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(229, 9, 20, 0.25)',
        overflow: 'hidden',
      }}>
        {/* Top Red Bar */}
        <div style={{
          height: '5px',
          background: 'var(--red-gradient)',
          width: '100%'
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#cbd5e1',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={17} />
        </button>

        {step === 'form' ? (
          <div style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <span style={{
                background: 'rgba(229, 9, 20, 0.15)',
                color: '#ff4d56',
                padding: '3px 12px',
                borderRadius: '999px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                marginBottom: '8px'
              }}>
                <Sparkles size={12} /> Complimentary VIP Access
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.65rem',
                fontWeight: 900,
                color: '#fff',
                marginBottom: '6px',
                lineHeight: 1.2
              }}>
                CLAIM FREE 1-DAY PASS
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem' }}>
                Test our 50kg dumbbells, bio-mechanic machines, and chilled AC with zero commitment.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '5px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bilal Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '5px' }}>
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0313-XXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '5px' }}>
                  Select Preferred Shift
                </label>
                <select
                  value={formData.shift}
                  onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: '#141720',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="evening">Men's Prime Evening (05:00 PM – 12:00 AM)</option>
                  <option value="morning">Men's Morning Power (06:00 AM – 11:00 AM)</option>
                  <option value="ladies">Ladies Exclusive Shift (11:30 AM – 04:30 PM)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '5px' }}>
                  Main Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: '#141720',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="weight_loss">Rapid Fat Loss & Body Shred</option>
                  <option value="muscle_gain">Muscle Hypertrophy & Bulk</option>
                  <option value="strength">Strength & Olympic Lifting</option>
                  <option value="general_health">General Stamina & Posture</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary-red"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px',
                  fontSize: '0.95rem',
                  marginTop: '8px'
                }}
              >
                <Sparkles size={17} />
                <span>GENERATE VIP PASS NOW</span>
              </button>
            </form>
          </div>
        ) : (
          /* VIP Ticket View */
          <div style={{ padding: 'clamp(20px, 4vw, 32px)', textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.18) 0%, rgba(155, 0, 20, 0.08) 100%)',
              border: '2px dashed rgba(229, 9, 20, 0.65)',
              borderRadius: '16px',
              padding: '22px 18px',
              position: 'relative',
              marginBottom: '20px',
            }}>
              {/* Ticket Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '12px' }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.05rem', color: '#fff' }}>
                    PREMIUM FITNESS
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#ff4d56', fontWeight: 800 }}>CHAPTER 1.O • NORTH KARACHI</div>
                </div>
                <div style={{
                  background: 'var(--red-gradient)',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '0.68rem',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  VIP GUEST PASS
                </div>
              </div>

              {/* Pass Details */}
              <div style={{ textAlign: 'left', marginBottom: '14px' }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Guest Name</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                  {formData.name}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', textAlign: 'left', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Pass ID</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ff4d56' }}>{passId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Validity</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#34d399' }}>Valid for Today / Tomorrow</div>
                </div>
              </div>

              {/* QR / Barcode element */}
              <div style={{
                background: '#fff',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#000'
              }}>
                <QrCode size={32} />
                <div style={{ textAlign: 'left', fontSize: '0.72rem', fontWeight: 700, color: '#000' }}>
                  <div>PRESENT AT FRONT DESK</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>2nd Floor, 901 Shahrah-e-Usman</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`https://wa.me/923132229925?text=${encodeURIComponent(whatsappTicketMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
              >
                <MessageCircle size={17} />
                <span>Show Pass to Front Desk on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setCopiedNotice(true);
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(`PREMIUM FITNESS VIP PASS: ${passId} | Guest: ${formData.name}`);
                  }
                  setTimeout(() => setCopiedNotice(false), 4500);
                }}
                className="btn-secondary-dark"
                style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.82rem' }}
              >
                <Download size={15} />
                <span>Save / Copy Pass Info</span>
              </button>

              {copiedNotice && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  color: '#34d399',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}>
                  <CheckCircle size={14} /> Pass {passId} saved! Screenshot or WhatsApp front desk to enter.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
