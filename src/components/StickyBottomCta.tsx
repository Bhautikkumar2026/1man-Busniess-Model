import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Flame, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface StickyBottomCtaProps {
  onOpenModal: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 37,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-amber-500/40 p-3 sm:p-4 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-6">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 items-center justify-center text-amber-400">
            <Flame className="w-5 h-5 animate-pulse" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-sm sm:text-base text-white">
                {siteData.general.brandName} Masterclass
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                JUST {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} TODAY
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden md:block">
              With {siteData.mentor.name} • Includes {siteData.bonuses.length} Fast-Action Bonuses
            </p>
          </div>
        </div>

        {/* Center Countdown (Hidden on tiny screens) */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-amber-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>Spots Close In:</span>
          <span className="font-bold text-white tracking-wider">
            {formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
          </span>
        </div>

        {/* Right CTA Button */}
        <button
          id="sticky-bottom-cta-btn"
          onClick={onOpenModal}
          className="relative group overflow-hidden rounded-xl px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-heading font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 shrink-0 ml-auto sm:ml-0"
        >
          <Sparkles className="w-4 h-4 fill-slate-950 text-slate-950" />
          <span>BOOK SEAT @ {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
