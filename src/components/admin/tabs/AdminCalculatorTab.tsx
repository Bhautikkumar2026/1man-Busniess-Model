import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { Calculator, Plus, Trash2, Edit3, TrendingUp } from 'lucide-react';
import { CalculatorNiche } from '../../../types';

export const AdminCalculatorTab: React.FC = () => {
  const { siteData, updateCalculatorNiches } = useSite();
  const currency = siteData.general.currencySymbol;

  const handleNicheChange = (
    index: number,
    field: keyof CalculatorNiche,
    val: string | number
  ) => {
    const updated = [...siteData.calculatorNiches];
    updated[index] = { ...updated[index], [field]: val };
    updateCalculatorNiches(updated);
  };

  const handleAddNiche = () => {
    const newNiche: CalculatorNiche = {
      id: 'niche-' + Date.now(),
      name: 'New Coaching Niche',
      defaultTicket: 4999,
      defaultAudience: 150,
      conversionRate: 0.08,
      profitMarginPercent: 88,
    };
    updateCalculatorNiches([...siteData.calculatorNiches, newNiche]);
  };

  const handleRemoveNiche = (index: number) => {
    if (siteData.calculatorNiches.length <= 1) {
      alert('You must have at least one niche in the calculator.');
      return;
    }
    updateCalculatorNiches(siteData.calculatorNiches.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div>
          <h3 className="font-heading font-black text-amber-400 text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Revenue Simulator Niches & Benchmarks
          </h3>
          <p className="text-xs text-slate-400">
            Tune average ticket price, expected conversion rates, and net profit margins for each selectable niche.
          </p>
        </div>
        <button
          onClick={handleAddNiche}
          className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-amber-300 shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Niche</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {siteData.calculatorNiches.map((niche, idx) => (
          <div
            key={niche.id || idx}
            className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 font-mono">
                Niche #{idx + 1}
              </span>
              <button
                onClick={() => handleRemoveNiche(idx)}
                className="text-slate-500 hover:text-red-400 p-1"
                title="Remove Niche"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                Niche Name
              </label>
              <input
                type="text"
                value={niche.name}
                onChange={(e) => handleNicheChange(idx, 'name', e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-bold text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-300 mb-1">
                  Default Ticket ({currency})
                </label>
                <input
                  type="number"
                  value={niche.defaultTicket}
                  onChange={(e) =>
                    handleNicheChange(idx, 'defaultTicket', Number(e.target.value))
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-amber-300 font-bold text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 mb-1">
                  Default Attendees/Mo
                </label>
                <input
                  type="number"
                  value={niche.defaultAudience}
                  onChange={(e) =>
                    handleNicheChange(idx, 'defaultAudience', Number(e.target.value))
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 mb-1">
                  Conversion Rate (e.g. 0.08 = 8%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  max="0.5"
                  value={niche.conversionRate}
                  onChange={(e) =>
                    handleNicheChange(idx, 'conversionRate', parseFloat(e.target.value))
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] text-emerald-400 mb-1">
                  Net Profit Margin (%)
                </label>
                <input
                  type="number"
                  min="50"
                  max="99"
                  value={niche.profitMarginPercent}
                  onChange={(e) =>
                    handleNicheChange(idx, 'profitMarginPercent', parseInt(e.target.value))
                  }
                  className="w-full bg-slate-900 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-emerald-300 font-bold text-xs"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
