import React from 'react';
import { useSite } from '../context/SiteContext';

export const Footer: React.FC = () => {
  const { siteData } = useSite();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-14 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-lg text-amber-400">
                {siteData.general.logoShort || '1M'}
              </div>
            </div>
            <div>
              <p className="font-heading font-black text-white text-base uppercase">
                {siteData.general.brandName}
              </p>
              <p className="text-[11px] text-slate-500">
                An initiative by {siteData.mentor.name} • {siteData.general.brandSub}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-400">
            <a href="#secrets" className="hover:text-amber-400 transition-colors">The 3 Secrets</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">Revenue Calculator</a>
            <a href="#bonuses" className="hover:text-amber-400 transition-colors">Bonuses</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Hall of Fame</a>
            <a href="#mentor" className="hover:text-amber-400 transition-colors">About {siteData.mentor.shortName}</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="space-y-3 text-[11px] text-slate-500 leading-relaxed max-w-5xl">
          <p>
            <strong className="text-slate-400">Income & Earnings Disclaimer:</strong> Any earnings, revenue claims, or income representations made by {siteData.mentor.name} or students featured on this website are aspirational statements only of potential earnings. The success of testimonials and case studies featured are exceptional results and not guaranteed for everyone. Success in any digital coaching business requires hard work, consistent implementation, genuine market value creation, and dedication.
          </p>
          <p>
            <strong className="text-slate-400">Not Affiliated With Facebook / Meta / Google:</strong> This site is not a part of the Facebook website, Meta Inc., or Google LLC. Additionally, this site is NOT endorsed by Facebook, Meta, or Google in any way.
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteData.general.brandName} • All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
