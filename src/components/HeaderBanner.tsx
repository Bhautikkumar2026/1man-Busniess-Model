import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface HeaderBannerProps {
  onOpenModal: () => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 37,
  });

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

  return (
    <div id="top-announcement-bar" className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-slate-950 font-semibold text-xs sm:text-sm py-2 px-3 sm:px-6 sticky top-0 z-40 shadow-lg shadow-amber-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left message with live pulse */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-800"></span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] sm:text-xs text-red-950 bg-amber-400/80 px-2 py-0.5 rounded-full border border-amber-300">
            <Flame className="w-3.5 h-3.5 fill-red-800 text-red-800" />
            Live Masterclass
          </span>
          <span className="hidden md:inline font-bold text-slate-950">
            {siteData.general.topBannerText}
          </span>
          <span className="inline md:hidden font-bold">
            90-Min Masterclass
          </span>
        </div>

        {/* Center Countdown & spots left */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1 bg-black/85 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-400/40">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Spots Close In:</span>
            <span className="font-bold tracking-widest text-white">
              {formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-[11px] font-sans font-bold text-slate-950 bg-white/70 px-2 py-0.5 rounded">
            <span>{siteData.hero.spotsText}</span>
          </div>
        </div>

        {/* Right CTA pill */}
        <button
          id="banner-register-btn"
          onClick={onOpenModal}
          className="hidden sm:inline-flex items-center gap-1.5 bg-slate-950 hover:bg-slate-900 text-amber-400 hover:text-amber-300 text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Reserve Seat @ {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} ({siteData.hero.regularPrice} Value)</span>
        </button>
      </div>
    </div>
  );
};
