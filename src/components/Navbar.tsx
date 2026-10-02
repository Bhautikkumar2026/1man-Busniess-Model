import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Award, Sliders } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const { siteData, setIsAdminOpen } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'The 3 Secrets', href: '#secrets' },
    { name: 'Revenue Calculator', href: '#calculator' },
    { name: 'Bonuses', href: '#bonuses' },
    { name: 'Hall of Fame', href: '#testimonials' },
    { name: 'About Mentor', href: '#mentor' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav id="main-navigation" className="w-full bg-[#090b10]/95 backdrop-blur-md border-b border-slate-800/80 sticky top-[37px] sm:top-[38px] z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                {siteData.general.logoShort || '1M'}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {siteData.general.brandName}
                </span>
                <span className="text-[10px] font-bold bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/30">
                  AI EDITION
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                {siteData.general.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-xs font-bold text-slate-300 hover:text-amber-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
              title="Customize Website Content"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Panel</span>
            </button>

            <button
              id="navbar-cta-btn"
              onClick={onOpenModal}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-slate-950 cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 rounded-xl animate-pulse-glow"></span>
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-[11px] bg-gradient-to-r from-amber-400 to-amber-500 font-bold text-slate-950 text-sm shadow-md">
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Book Seat @ {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 text-xs flex items-center gap-1"
              title="Admin Panel"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              id="mobile-register-mini-btn"
              onClick={onOpenModal}
              className="sm:hidden text-xs font-bold bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <span>Seat @ {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/80 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminOpen(true);
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>OPEN ADMIN PANEL (CUSTOMIZE SITE)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
            >
              <Sparkles className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>BOOK SEAT @ {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} & UNLOCK BONUSES</span>
            </button>
            <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Special {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} Pass
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Fast-Action Bonuses Included
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
