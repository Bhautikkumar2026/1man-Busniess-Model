import React from 'react';
import { CheckCircle, XCircle, Users, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface WhoIsThisForProps {
  onOpenModal: () => void;
}

export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const whoFor = siteData.whoFor;
  const whoNotFor = siteData.whoNotFor;

  return (
    <section className="py-20 bg-[#0c0f17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>FIT ASSESSMENT</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Is The 1-Man Business Model{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Right For You?
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We value your time. Please review the criteria below before booking your masterclass seat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Who It Is For */}
          <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-emerald-400">
                This Masterclass IS For You If:
              </h3>
            </div>

            <div className="space-y-4">
              {whoFor.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {item.text}
                    </h4>
                    {item.subtext && (
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who It Is NOT For */}
          <div className="rounded-3xl bg-slate-900/90 border border-red-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-red-400">
                This Masterclass IS NOT For You If:
              </h3>
            </div>

            <div className="space-y-4">
              {whoNotFor.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {item.text}
                    </h4>
                    {item.subtext && (
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
          >
            <span>I'M READY TO BUILD MY 1-MAN BUSINESS (JOIN FOR {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9})</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
