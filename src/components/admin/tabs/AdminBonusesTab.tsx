import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { Gift, Plus, Trash2, Edit3, Tag, Sparkles } from 'lucide-react';
import { Bonus } from '../../../types';

export const AdminBonusesTab: React.FC = () => {
  const { siteData, addBonus, updateBonus, deleteBonus } = useSite();
  const [editingBonusId, setEditingBonusId] = useState<string | null>(null);

  const handleAddNewBonus = () => {
    const newBonus: Bonus = {
      id: 'bonus-' + Date.now(),
      title: 'New Fast-Action Resource',
      subtitle: 'Exclusive downloadable kit for live masterclass attendees',
      value: '₹4,999',
      description: 'Step-by-step workbook and actionable blueprints to fast-track your 1-man business launch.',
      iconName: 'Sparkles',
      tag: 'INSTANT BONUS',
    };
    addBonus(newBonus);
    setEditingBonusId(newBonus.id);
  };

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div>
          <h3 className="font-heading font-black text-amber-400 text-base flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Fast-Action Bonuses Stack ({siteData.bonuses.length} Active)
          </h3>
          <p className="text-xs text-slate-400">
            Edit titles, values, descriptions, and tags. The total value is calculated automatically on the website.
          </p>
        </div>
        <button
          onClick={handleAddNewBonus}
          className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-amber-300 shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Bonus</span>
        </button>
      </div>

      {/* Bonuses List */}
      <div className="space-y-4">
        {siteData.bonuses.map((bonus, idx) => {
          const isEditing = editingBonusId === bonus.id;

          return (
            <div
              key={bonus.id}
              className={`p-4 rounded-xl border transition-all ${
                isEditing
                  ? 'bg-slate-900 border-amber-500/60 shadow-lg'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center font-mono">
                    #{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">
                    Value: {bonus.value}
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded uppercase tracking-wider">
                    {bonus.tag}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditingBonusId(isEditing ? null : bonus.id)}
                    className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800"
                    title="Edit Bonus"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete bonus: "${bonus.title}"?`)) {
                        deleteBonus(bonus.id);
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800"
                    title="Delete Bonus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Bonus Title
                    </label>
                    <input
                      type="text"
                      value={bonus.title}
                      onChange={(e) => updateBonus(bonus.id, { title: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-emerald-400 mb-1">
                      Monetary Value (e.g. ₹7,999 or $99)
                    </label>
                    <input
                      type="text"
                      value={bonus.value}
                      onChange={(e) => updateBonus(bonus.id, { value: e.target.value })}
                      className="w-full bg-slate-950 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-emerald-300 font-bold text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Subtitle / Hook
                    </label>
                    <input
                      type="text"
                      value={bonus.subtitle}
                      onChange={(e) => updateBonus(bonus.id, { subtitle: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Badge / Tag (e.g. INSTANT DOWNLOAD)
                    </label>
                    <input
                      type="text"
                      value={bonus.tag}
                      onChange={(e) => updateBonus(bonus.id, { tag: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Bonus Description
                    </label>
                    <textarea
                      rows={2}
                      value={bonus.description}
                      onChange={(e) => updateBonus(bonus.id, { description: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="font-heading font-black text-white text-sm">
                    {bonus.title}
                  </h4>
                  <p className="text-xs text-amber-300/80 mb-1">{bonus.subtitle}</p>
                  <p className="text-xs text-slate-400">{bonus.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
