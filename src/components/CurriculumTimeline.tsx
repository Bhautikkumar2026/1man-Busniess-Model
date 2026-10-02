import React from 'react';
import { Clock, Compass, Cpu, Video, Workflow, Gift, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface CurriculumTimelineProps {
  onOpenModal: () => void;
}

export const CurriculumTimeline: React.FC<CurriculumTimelineProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const curriculum = siteData.curriculum;

  const icons = [Compass, Cpu, Video, Workflow, Gift];

  return (
    <section className="py-20 bg-[#0c0f17] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>{siteData.hero.sessionDuration.toUpperCase()} MASTERCLASS TIMELINE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Every Minute Is Packed With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-amber-300">
              Actionable Gold
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No fluff, no endless theory. Here is the exact minute-by-minute progression of the live masterclass.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4 mb-12">
          {curriculum.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.id || idx}
                className="rounded-2xl bg-slate-900/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-amber-500/40 transition-colors shadow-lg"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {item.time}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 border border-amber-500/30 text-sm font-bold transition-all cursor-pointer"
          >
            <span>JOIN THE LIVE SESSION (ZERO COST)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
