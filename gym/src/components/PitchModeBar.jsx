import React, { useState } from 'react';
import { Eye, EyeOff, Sparkles, PhoneCall, TrendingUp, CheckCircle2, X } from 'lucide-react';

export default function PitchModeBar({ onOpenPassModal }) {
  const [isOpen, setIsOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  if (!isOpen) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #1e1b4b 0%, #0f172a 50%, #1e1b4b 100%)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.4)',
      color: '#e2e8f0',
      fontSize: '0.85rem',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
    }}>
      <div className="container" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            background: 'linear-gradient(135deg, #a855f7, #ec4899)', 
            color: '#fff', 
            padding: '3px 10px', 
            borderRadius: '999px', 
            fontSize: '0.72rem', 
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <Sparkles size={12} /> Gym Owner Pitch Mode
          </span>
          <span style={{ color: '#cbd5e1' }}>
            <strong>Demo for:</strong> Premium Fitness Chapter 1.O (North Karachi)
          </span>
        </div>

        {!collapsed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
              <CheckCircle2 size={14} /> WhatsApp Lead Engine Ready
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8' }}>
              <TrendingUp size={14} /> 4.5★ Google Review Sync
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fbbf24' }}>
              <PhoneCall size={14} /> +92 313 2229925 Connected
            </span>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              padding: '4px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {collapsed ? <Eye size={12} /> : <EyeOff size={12} />}
            {collapsed ? 'Expand Pitch Tips' : 'Minimize'}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            title="Close selling toolbar"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
