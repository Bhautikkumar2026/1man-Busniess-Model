import React, { useState } from 'react';
import { SiteProvider } from './context/SiteContext';
import { HeaderBanner } from './components/HeaderBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CredibilityLogos } from './components/CredibilityLogos';
import { ThreeSecretsSection } from './components/ThreeSecretsSection';
import { BusinessCalculator } from './components/BusinessCalculator';
import { BonusStackSection } from './components/BonusStackSection';
import { CurriculumTimeline } from './components/CurriculumTimeline';
import { WallOfFame } from './components/WallOfFame';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { MeetMentor } from './components/MeetMentor';
import { FaqSection } from './components/FaqSection';
import { RegistrationModal } from './components/RegistrationModal';
import { StickyBottomCta } from './components/StickyBottomCta';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { AdminFloatingTrigger } from './components/admin/AdminFloatingTrigger';

function MainLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#e2e8f0] flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans relative">
      {/* 1. Top Urgent Countdown Banner */}
      <HeaderBanner onOpenModal={handleOpenModal} />

      {/* 2. Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Headline, Video Trailer, Dynamic Date, Free Seat CTA */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 4. Credibility & Media Logos Ticker */}
        <CredibilityLogos />

        {/* 5. The 3 Core Secrets (Product -> Traffic -> Sales System) */}
        <ThreeSecretsSection onOpenModal={handleOpenModal} />

        {/* 6. Interactive 1-Man Revenue & Freedom Calculator */}
        <BusinessCalculator onOpenModal={handleOpenModal} />

        {/* 7. Fast-Action Bonuses Stack */}
        <BonusStackSection onOpenModal={handleOpenModal} />

        {/* 8. 90-Minute Live Agenda & Timeline */}
        <CurriculumTimeline onOpenModal={handleOpenModal} />

        {/* 9. Wall of Fame / Multi-Crore Case Studies & Filterable Testimonials */}
        <WallOfFame onOpenModal={handleOpenModal} />

        {/* 10. Fit Assessment: Who is this for vs Not for */}
        <WhoIsThisFor onOpenModal={handleOpenModal} />

        {/* 11. Meet Your Mentor */}
        <MeetMentor onOpenModal={handleOpenModal} />

        {/* 12. Frequently Asked Questions Accordion */}
        <FaqSection onOpenModal={handleOpenModal} />
      </main>

      {/* 13. Sticky Bottom CTA Bar */}
      <StickyBottomCta onOpenModal={handleOpenModal} />

      {/* 14. Footer with Legal Disclaimers & Copyright */}
      <Footer />

      {/* 15. Interactive Registration Modal with Instant Confirmation & Lead Storage */}
      <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* 16. Floating Admin Panel Button (Alt + A shortcut) */}
      <AdminFloatingTrigger />

      {/* 17. Full-Featured Admin Customizer & CRM Modal */}
      <AdminPanel />
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <MainLandingPage />
    </SiteProvider>
  );
}
