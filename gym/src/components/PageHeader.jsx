import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ badge, title, highlight, description, breadcrumb }) {
  return (
    <div style={{
      position: 'relative',
      padding: '70px 0 50px',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(229, 9, 20, 0.22) 0%, rgba(10, 12, 16, 0.95) 75%, #060709 100%)',
      borderBottom: '1px solid rgba(229, 9, 20, 0.25)',
      overflow: 'hidden'
    }}>
      {/* Decorative Grid Lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        opacity: 0.7
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '18px' }}>
          <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={13} style={{ color: '#ef4444' }} />
          <span style={{ color: '#ff4d56', fontWeight: 600 }}>{breadcrumb || title}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(229, 9, 20, 0.15)', border: '1px solid rgba(229, 9, 20, 0.45)', color: '#ff4d56', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444' }} />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          color: '#ffffff',
          marginBottom: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {title} <span className="text-red-gradient">{highlight}</span>
        </h1>

        {/* Description */}
        {description && (
          <p style={{
            fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            color: '#cbd5e1',
            maxWidth: '680px',
            lineHeight: 1.6
          }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
