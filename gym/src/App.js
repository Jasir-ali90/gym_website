import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Timings from './components/Timings';
import Pricing from './components/Pricing';
import BmiCalculator from './components/BmiCalculator';
import Trainers from './components/Trainers';
import GymLifeEvents from './components/GymLifeEvents';
import Reviews from './components/Reviews';
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

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section with Real Photo & Owner Muhammad Ali */}
        <Hero onOpenPassModal={handleOpenPassModal} />

        {/* Facilities & Equipment Tour with Real Photography */}
        <Facilities onOpenPassModal={handleOpenPassModal} />

        {/* Timings & Shifts (Sunday Strictly Closed) */}
        <Timings onOpenPassModal={handleOpenPassModal} />

        {/* Membership Packages in PKR */}
        <Pricing onOpenPassModal={handleOpenPassModal} />

        {/* Interactive BMI & Macro Target Tool */}
        <BmiCalculator />

        {/* Leadership: Owner Muhammad Ali & Master Coaches */}
        <Trainers onOpenPassModal={handleOpenPassModal} />

        {/* Gym Life, Beach Outings, Competitions & Viral Reels */}
        <GymLifeEvents />

        {/* Real Google Reviews 4.5 Stars */}
        <Reviews />

        {/* Location, Google Maps & Direct Front Desk Desk */}
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
