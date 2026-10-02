import React, { useState } from 'react';
import { Award, Star, Quote, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface WallOfFameProps {
  onOpenModal: () => void;
}

export const WallOfFame: React.FC<WallOfFameProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const testimonials = siteData.testimonials;
  const [filter, setFilter] = useState<string>('all');

  const filteredTestimonials =
    filter === 'all'
      ? testimonials
      : testimonials.filter((t) => (t.category || '').toLowerCase() === filter.toLowerCase());

  return (
    <section id="testimonials" className="py-20 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>WALL OF FAME & PROOF</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Real People. Real Freedom.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Real Multi-Crore Results.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            See how regular coaches, teachers, doctors, and professionals built 1-man empires using this exact blueprint.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Achievers' },
            { id: 'growth', label: 'Life & Mindset' },
            { id: 'career', label: 'Career & Business' },
            { id: 'health', label: 'Health & Wellness' },
            { id: 'wealth', label: 'Finance & Wealth' },
            { id: 'tech', label: 'AI & Tech' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header with image, name & badge */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400/40 shadow-md"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs text-slate-400">{t.role}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {t.badge}
                    </span>
                  </div>
                </div>

                {/* Big Result Highlight */}
                <div className="bg-slate-950/80 rounded-2xl p-3 border border-slate-800 mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold">Total Revenue</p>
                    <p className="font-mono font-black text-emerald-400 text-lg sm:text-xl">
                      {t.revenue}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2 py-1 rounded">
                    {t.timeframe}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-slate-700 absolute -top-2 -left-1 opacity-40 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-300 italic pl-5 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Niche tag & stars */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-amber-300/80 font-medium">
                  {t.niche}
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Hall of Fame */}
        <div className="text-center bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-slate-300 font-medium mb-4">
            You don't need prior fame, technical skills, or investment capital. All you need is the right 1-man system.
          </p>
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
          >
            <span>JOIN {siteData.hero.studentsCount} CO-ACHIEVERS (BOOK SEAT FOR {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
