import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import VipPassModal from './components/VipPassModal';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Architecture Components
import HomePage from './pages/HomePage';
import FacilitiesPage from './pages/FacilitiesPage';
import TimingsPage from './pages/TimingsPage';
import PricingPage from './pages/PricingPage';
import TrainersPage from './pages/TrainersPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';

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
    <BrowserRouter>
      {/* Automatically reset scroll to top on every route change */}
      <ScrollToTop />

      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Animated Splash Preloader with Official Emblem */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Luxury Navigation Bar with Active Route Indicators */}
        <Navbar onOpenPassModal={handleOpenPassModal} />

        {/* Multi-Page Routes */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenPassModal={handleOpenPassModal} />} />
            <Route path="/facilities" element={<FacilitiesPage onOpenPassModal={handleOpenPassModal} />} />
            <Route path="/timings" element={<TimingsPage onOpenPassModal={handleOpenPassModal} />} />
            <Route path="/pricing" element={<PricingPage onOpenPassModal={handleOpenPassModal} />} />
            <Route path="/trainers" element={<TrainersPage onOpenPassModal={handleOpenPassModal} />} />
            <Route path="/community" element={<CommunityPage onOpenPassModal={handleOpenPassModal} />} />
            <Route path="/contact" element={<ContactPage onOpenPassModal={handleOpenPassModal} />} />
            
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Comprehensive Multi-Page Footer */}
        <Footer onOpenPassModal={handleOpenPassModal} />

        {/* Floating Action Buttons (WhatsApp, Phone, Pass, Scroll-to-top) */}
        <FloatingActions onOpenPassModal={handleOpenPassModal} />

        {/* VIP 1-Day Pass Interactive Ticket Modal */}
        <VipPassModal isOpen={isPassModalOpen} onClose={handleClosePassModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
