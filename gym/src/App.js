import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Timings from './components/Timings';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import CommunityHub from './components/CommunityHub';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import VipPassModal from './components/VipPassModal';

function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [loading, setLoading] = useState(process.env.NODE_ENV !== 'test');

  const handleOpenPassModal = () => {
    setIsPassModalOpen(true);
  };

  const handleClosePassModal = () => {
    setIsPassModalOpen(false);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Animated Splash Preloader with Official Emblem */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Luxury Navigation Bar */}
      <Navbar onOpenPassModal={handleOpenPassModal} />

      {/* Main Page Content - Curated Continuous Flow (5-6 Core Sections) */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section with Real Photo & Owner Muhammad Ali Arif */}
        <Hero onOpenPassModal={handleOpenPassModal} />

        {/* 2. Key Facilities / Value Propositions (Curated 4-card grid) */}
        <Facilities onOpenPassModal={handleOpenPassModal} />

        {/* 3. Class Schedule & Gym Timings (Interactive Shift Tabs & Sunday Closed) */}
        <Timings onOpenPassModal={handleOpenPassModal} />

        {/* 4. Flexible Membership Packages in PKR (3 Crisp Tiers + Ladies Pass Toggle) */}
        <Pricing onOpenPassModal={handleOpenPassModal} />

        {/* 5. Certified Leadership: Owner Muhammad Ali Arif & Master Coaches */}
        <Trainers onOpenPassModal={handleOpenPassModal} />

        {/* 6. Community Hub: Tabbed Reviews (4.5★), Gym Life Outings & BMI Calculator */}
        <CommunityHub />

        {/* 7. Flagship Location, Google Maps & Direct Front Desk Desk */}
        <LocationContact />
      </main>

      {/* Comprehensive Footer (Sunday Closed) */}
      <Footer onOpenPassModal={handleOpenPassModal} />

      {/* Floating Action Buttons (WhatsApp, Phone, Pass, Scroll-to-top) */}
      <FloatingActions onOpenPassModal={handleOpenPassModal} />

      {/* VIP 1-Day Pass Interactive Ticket Modal */}
      <VipPassModal isOpen={isPassModalOpen} onClose={handleClosePassModal} />
    </div>
  );
}

export default App;
