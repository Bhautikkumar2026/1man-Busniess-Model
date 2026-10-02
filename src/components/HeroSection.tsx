import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  Play,
  Star,
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowRight,
  Video,
  Flame,
  Gift,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const hero = siteData.hero;
  const mentor = siteData.mentor;
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Compute dynamic formatted date for today / next session
  const getNextSessionDate = () => {
    if (hero.sessionDateText && hero.sessionDateText !== 'Today / Next Live Batch') {
      return hero.sessionDateText;
    }
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#090b10] via-[#0e121b] to-[#090b10]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow target audience badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm shadow-amber-500/10">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>{hero.eyebrow}</span>
        </div>

        {/* Live Date & Time Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-300 font-semibold mb-6">
          <span className="inline-flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-800 text-amber-300 shadow-inner">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>LIVE SESSION: {getNextSessionDate()}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-800 text-slate-200">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>
              {hero.sessionTimeText} ({hero.sessionDuration})
            </span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6">
          {hero.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 drop-shadow-sm">
            {hero.highlightedText}
          </span>{' '}
          {hero.titleEnd}
        </h1>

        {/* Sub-headline / Hook */}
        <p className="text-lg sm:text-2xl text-amber-200/90 font-medium max-w-3xl mx-auto mb-4">
          {hero.subheadline}
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {hero.description}
        </p>

        {/* Video Presentation Card / Preview */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-amber-500/40 via-slate-800 to-slate-900 shadow-2xl shadow-amber-500/10 border border-slate-700/60">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center group">
              {isPlayingVideo ? (
                <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mb-4">
                    <Video className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {hero.videoTrailerTitle}
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mb-6">
                    {hero.videoTrailerDesc}
                  </p>
                  <button
                    onClick={onOpenModal}
                    className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30 cursor-pointer"
                  >
                    <span>JOIN FULL {hero.sessionDuration} LIVE MASTERCLASS (JUST {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  {/* High Quality Thumbnail */}
                  <img
                    src={hero.videoThumbnail}
                    alt="Masterclass Video Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-50 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                  {/* Badges on video */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-red-600/90 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                      {hero.sessionDuration} Masterclass
                    </span>
                    <span className="bg-slate-900/80 backdrop-blur text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30">
                      {hero.studentsCount} Enrolled
                    </span>
                  </div>

                  {/* Host info badge on video */}
                  <div className="absolute bottom-4 left-4 text-left">
                    <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Hosted By {mentor.name}
                    </p>
                    <p className="text-white font-extrabold text-sm sm:text-lg">
                      {mentor.title}
                    </p>
                  </div>

                  {/* Big Play Button */}
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    aria-label="Play Masterclass Preview"
                  >
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-slate-950 ml-1" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Primary Call to Action Card */}
        <div className="max-w-2xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] sm:text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
            {hero.spotsText}
          </div>

          <div className="mb-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-slate-400 text-sm line-through">
                Regular Price: {hero.regularPrice}
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 font-extrabold text-sm px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                {hero.discountedPriceText}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Includes {siteData.bonuses.length} Fast-Action Bonuses (Distributed Live)
            </p>
          </div>

          {/* Huge Pulsing CTA Button */}
          <button
            id="hero-main-cta-btn"
            onClick={onOpenModal}
            className="w-full relative group overflow-hidden rounded-2xl py-4 sm:py-5 px-6 font-heading font-black text-lg sm:text-2xl text-slate-950 shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <div className="absolute inset-0 btn-shine"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Sparkles
                className="w-6 h-6 fill-slate-950 text-slate-950 animate-spin"
                style={{ animationDuration: '6s' }}
              />
              <span>YES! RESERVE MY SEAT FOR {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} NOW</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </button>

          {/* Quick guarantees & features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-slate-800 text-xs text-slate-300 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Gift className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fast-Action AI Bonuses</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Secure UPI & Card Payment</span>
            </div>
          </div>
        </div>

        {/* Social Proof metrics under hero */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-12 text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="ml-1 text-white font-bold">{hero.reviewRating}</span>
              </div>
              <p className="text-[11px] text-slate-400">{hero.reviewsCount} Masterclass Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            <div className="text-left">
              <p className="font-bold text-white">{hero.studentsCount}</p>
              <p className="text-[11px] text-slate-400">Across 40+ Countries</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div className="text-left">
              <p className="font-bold text-white">{hero.achieversCount}</p>
              <p className="text-[11px] text-slate-400">Verified Achievers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
