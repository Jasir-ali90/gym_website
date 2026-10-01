import React, { useState, useEffect, useRef } from 'react';
import { Dumbbell, Phone, MessageCircle, Menu, X, Sparkles, MapPin, Clock } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Facilities', href: '#facilities', id: 'facilities' },
  { name: 'Timings', href: '#timings', id: 'timings' },
  { name: 'Packages', href: '#pricing', id: 'pricing' },
  { name: 'Coaches', href: '#trainers', id: 'trainers' },
  { name: 'Events', href: '#events', id: 'events' },
  { name: 'BMI Tool', href: '#calculator', id: 'calculator' },
  { name: 'Reviews', href: '#reviews', id: 'reviews' },
  { name: 'Location', href: '#location', id: 'location' },
];

export default function Navbar({ onOpenPassModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);

  // Track scroll position for styling and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollspy
      const scrollPosition = window.scrollY + 160;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      setActiveSection(hashId);
    }
  }, []);

  // Close mobile drawer on escape key and outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler with offset clearance
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#');
      setActiveSection('');
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 115;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="top"
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(6, 7, 9, 0.98)' : 'rgba(10, 12, 16, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(229, 9, 20, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.8)' : 'none',
      }}
    >
      {/* Top micro announcement bar */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.92)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '5px 0',
        fontSize: '0.76rem',
        color: '#94a3b8'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, overflow: 'hidden' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
              <span className="pulse-green"></span>
              <strong style={{ color: '#fff', letterSpacing: '0.5px' }}>PREMIUM FITNESS</strong>
              <span className="announcement-location" style={{ color: '#94a3b8' }}>• Karachi's Elite Gym Network</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#cbd5e1', whiteSpace: 'nowrap' }} className="nav-desktop-only">
              <Clock size={12} style={{ color: '#ef4444' }} /> Mon–Sat (6AM-11AM & 5PM-12AM) | <strong style={{ color: '#ef4444' }}>Sun: CLOSED</strong>
            </span>
            <span className="announcement-mobile-closed" style={{ display: 'none', color: '#ef4444', fontWeight: 700 }}>
              • Sun: CLOSED
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <a 
              href="tel:+923132229925" 
              style={{ color: '#ff4d56', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700, fontSize: '0.78rem' }}
            >
              <Phone size={11} /> 0313-2229925
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }} className="nav-desktop-only">|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#cbd5e1' }} className="nav-desktop-only">
              <MapPin size={11} style={{ color: '#ef4444' }} /> Multiple Locations in Karachi
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '10px 20px', 
          gap: '12px' 
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, '#top')}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '9px',
            background: 'linear-gradient(135deg, #240a0d 0%, #0d0f14 100%)',
            border: '1.5px solid rgba(229, 9, 20, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(229, 9, 20, 0.35)',
            flexShrink: 0
          }}>
            <Dumbbell size={20} style={{ color: '#ff2a38' }} />
          </div>
          <div>
            <div style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 900, 
              fontSize: '1.14rem', 
              letterSpacing: '0.5px', 
              color: '#ffffff',
              lineHeight: 1.1,
              whiteSpace: 'nowrap'
            }}>
              PREMIUM <span className="text-red-gradient">FITNESS</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
              <span style={{
                background: 'var(--red-gradient)',
                color: '#fff',
                fontWeight: 900,
                fontSize: '0.56rem',
                padding: '1px 6px',
                borderRadius: '3px',
                letterSpacing: '0.6px',
                whiteSpace: 'nowrap'
              }}>
                EST. KARACHI
              </span>
              <span style={{ fontSize: '0.62rem', color: '#94a3b8', letterSpacing: '0.6px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                ELITE FITNESS CLUBS
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Links (Visible on 1024px+) */}
        <nav className="desktop-nav-menu">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: isActive ? '#ff2a38' : '#cbd5e1',
                  textDecoration: 'none',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.84rem',
                  transition: 'all 0.2s ease',
                  padding: '6px 2px',
                  position: 'relative',
                  letterSpacing: '0.2px',
                  whiteSpace: 'nowrap',
                }}
                className={`nav-link-item ${isActive ? 'active-nav-link' : ''}`}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'var(--red-gradient)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(229, 9, 20, 0.8)'
                  }} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Desktop WhatsApp CTA */}
          <a
            href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20joining%20Premium%20Fitness,%20Karachi."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp desktop-action-btn"
            style={{ padding: '7px 14px', fontSize: '0.8rem' }}
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </a>

          {/* Desktop Free Pass CTA */}
          <button
            onClick={onOpenPassModal}
            className="btn-primary-red desktop-action-btn"
            style={{ padding: '7px 16px', fontSize: '0.78rem' }}
          >
            <Sparkles size={13} />
            <span>Free Pass</span>
          </button>

          {/* Mobile Quick WhatsApp Button */}
          <a
            href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20joining%20Premium%20Fitness,%20Karachi."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-quick-wa-btn"
            aria-label="WhatsApp"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              background: '#25D366',
              color: '#fff',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
              flexShrink: 0
            }}
          >
            <MessageCircle size={18} />
          </a>

          {/* Mobile Hamburger Toggle Button - ALWAYS Visible on Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '9px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1.5px solid rgba(229, 9, 20, 0.55)',
              color: '#fff',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: '0 0 12px rgba(229, 9, 20, 0.25)',
              transition: 'all 0.2s ease',
            }}
            aria-label="Toggle Navigation Menu"
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={20} style={{ color: '#ff2a38' }} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Absolute overlay, never shifts sticky header height) */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            maxHeight: 'calc(100vh - 90px)',
            overflowY: 'auto',
            backgroundColor: 'rgba(8, 10, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(229, 9, 20, 0.45)',
            borderBottom: '2px solid #e50914',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.95)',
            zIndex: 1001,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: isActive ? '#ff4d56' : '#e2e8f0',
                  textDecoration: 'none',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.94rem',
                  padding: '10px 8px',
                  borderRadius: '6px',
                  background: isActive ? 'rgba(229, 9, 20, 0.12)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease',
                }}
              >
                <span>{link.name}</span>
                <span style={{ color: isActive ? '#ff4d56' : 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
                  {isActive ? '●' : '→'}
                </span>
              </a>
            );
          })}

          {/* Drawer CTA Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="btn-primary-red"
              style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            >
              <Sparkles size={16} /> Claim Free 1-Day Pass
            </button>
            <a
              href="https://wa.me/923132229925?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20joining%20Premium%20Fitness,%20Karachi."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ justifyContent: 'center', padding: '12px' }}
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a
              href="tel:+923132229925"
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                padding: '8px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.04)'
              }}
            >
              <Phone size={14} style={{ color: '#ef4444' }} /> Call Front Desk (0313-2229925)
            </a>
          </div>
        </div>
      )}

      {/* Scoped CSS for Perfect Navbar Responsiveness */}
      <style>{`
        .desktop-nav-menu {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.4vw, 20px);
        }
        .nav-link-item:hover {
          color: #ff4d56 !important;
        }

        /* Large Tablets & Mobile Breakpoint (Below 1024px) */
        @media (max-width: 1023px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .desktop-action-btn {
            display: none !important;
          }
          .mobile-quick-wa-btn {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }

        /* Small Phones (Below 640px) */
        @media (max-width: 640px) {
          .nav-desktop-only {
            display: none !important;
          }
          .announcement-location {
            display: none !important;
          }
          .announcement-mobile-closed {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
}
