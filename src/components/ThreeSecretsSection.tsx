import React from 'react';
import { Sparkles, Brain, Video, Cpu, ArrowRight, CheckCircle2, Zap, Layers, BarChart3 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface ThreeSecretsSectionProps {
  onOpenModal: () => void;
}

export const ThreeSecretsSection: React.FC<ThreeSecretsSectionProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const secrets = siteData.secrets;
  const mentor = siteData.mentor;

  const icons = [Brain, Video, Cpu];
  const borderColors = ['border-amber-500/30', 'border-yellow-500/30', 'border-orange-500/30'];
  const gradientBgs = ['from-amber-500/20 to-yellow-500/10', 'from-yellow-500/20 to-amber-500/10', 'from-orange-500/20 to-yellow-500/10'];

  return (
    <section id="secrets" className="py-20 bg-[#0c0f17] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 3 CORE SECRETS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            The Blueprint Behind The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              1-Man Business Revolution
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Here is the exact formula {mentor.name} will reveal inside this {siteData.hero.sessionDuration} live session to help you escape the agency & 9-to-5 trap.
          </p>
        </div>

        {/* 3 Secrets Grid / Cards */}
        <div id="blueprint" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {secrets.map((secret, index) => {
            const Icon = icons[index % icons.length];
            const borderCol = borderColors[index % borderColors.length];
            const bgGrad = gradientBgs[index % gradientBgs.length];

            return (
              <div
                key={secret.id || index}
                className={`relative rounded-3xl bg-slate-900/90 border ${borderCol} p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:translate-y-[-4px] transition-all duration-300 group`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-black text-slate-400 tracking-widest bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                      SECRET #{secret.number || `0${index + 1}`}
                    </span>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20 uppercase">
                      {secret.pillTitle}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${bgGrad} border ${borderCol} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                        {secret.tagline}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-amber-200/80 font-medium mb-4 italic border-l-2 border-amber-400 pl-3">
                    "{secret.highlight}"
                  </p>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {secret.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-3 mb-8">
                    {secret.bulletPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Result Pill */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="bg-slate-950/80 text-amber-300 text-xs font-semibold py-2 px-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-[11px] sm:text-xs">{secret.keyOutcome}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">
                      {secret.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Blueprint Diagram comparison card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
              THE 3-STEP FREEDOM FLYWHEEL
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-8">
              How The "Product → Traffic → Sales" Loop Creates Infinite Leverage
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                  <Layers className="w-4 h-4" /> 1. PRODUCT
                </div>
                <p className="text-xs text-slate-300">
                  Build 1 flagship digital asset with AI. Package your wisdom into an irresistible offer stack with zero production overhead.
                </p>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-2">
                  <Zap className="w-4 h-4" /> 2. TRAFFIC
                </div>
                <p className="text-xs text-slate-300">
                  Drive targeted visitors using AI-generated short video clips and low-budget hyper-targeted social ads with 5x+ ROAS.
                </p>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                  <BarChart3 className="w-4 h-4" /> 3. SALES
                </div>
                <p className="text-xs text-slate-300">
                  Convert strangers to customers through 90-minute automated video funnels. Re-invest profits directly into automated scaling.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-base sm:text-lg shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform cursor-pointer"
            >
              <span>DISCOVER THE FULL FRAMEWORK LIVE (JUST {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9})</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
