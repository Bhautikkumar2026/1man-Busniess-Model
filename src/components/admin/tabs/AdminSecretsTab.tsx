import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { Lightbulb, Plus, Trash2, CheckCircle2, Flame } from 'lucide-react';
import { SecretItem } from '../../../types';

export const AdminSecretsTab: React.FC = () => {
  const { siteData, updateSecret } = useSite();
  const [activeSecretId, setActiveSecretId] = useState<string>(siteData.secrets[0]?.id || 'secret-1');

  const selectedSecret = siteData.secrets.find((s) => s.id === activeSecretId) || siteData.secrets[0];

  const handleBulletChange = (bIndex: number, text: string) => {
    if (!selectedSecret) return;
    const newBullets = [...selectedSecret.bulletPoints];
    newBullets[bIndex] = text;
    updateSecret(selectedSecret.id, { bulletPoints: newBullets });
  };

  const handleAddBullet = () => {
    if (!selectedSecret) return;
    updateSecret(selectedSecret.id, {
      bulletPoints: [...selectedSecret.bulletPoints, 'New tactical insight or framework step'],
    });
  };

  const handleRemoveBullet = (bIndex: number) => {
    if (!selectedSecret) return;
    updateSecret(selectedSecret.id, {
      bulletPoints: selectedSecret.bulletPoints.filter((_, i) => i !== bIndex),
    });
  };

  if (!selectedSecret) {
    return <div className="text-slate-400">No secrets defined.</div>;
  }

  return (
    <div className="space-y-6 text-sm">
      {/* Secret Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {siteData.secrets.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => setActiveSecretId(sec.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSecretId === sec.id
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="font-mono">#{sec.number || `0${idx + 1}`}</span>
            <span>{sec.pillTitle || `Secret ${idx + 1}`}</span>
          </button>
        ))}
      </div>

      {/* Secret Details Editor */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-black text-amber-400 text-base flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Editing Secret #{selectedSecret.number}
          </h3>
          <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
            ID: {selectedSecret.id}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Secret Number (e.g. 01, 02, 03)
            </label>
            <input
              type="text"
              value={selectedSecret.number}
              onChange={(e) => updateSecret(selectedSecret.id, { number: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-300 mb-1">
              Pill Badge Title (Top Pill)
            </label>
            <input
              type="text"
              value={selectedSecret.pillTitle}
              onChange={(e) => updateSecret(selectedSecret.id, { pillTitle: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
              placeholder="THE DIGITAL ASSET ENGINE"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Secret Tagline / Hook
            </label>
            <input
              type="text"
              value={selectedSecret.tagline}
              onChange={(e) => updateSecret(selectedSecret.id, { tagline: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-bold text-xs"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-amber-300 mb-1">
              Highlighted Outcome Phrase
            </label>
            <input
              type="text"
              value={selectedSecret.highlight}
              onChange={(e) => updateSecret(selectedSecret.id, { highlight: e.target.value })}
              className="w-full bg-slate-950 border border-amber-500/50 rounded-lg px-3 py-2 text-amber-300 font-bold text-xs"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Full Strategy Description
            </label>
            <textarea
              rows={3}
              value={selectedSecret.description}
              onChange={(e) => updateSecret(selectedSecret.id, { description: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-emerald-400 mb-1">
              Key Metric Outcome (Bottom Pill)
            </label>
            <input
              type="text"
              value={selectedSecret.keyOutcome}
              onChange={(e) => updateSecret(selectedSecret.id, { keyOutcome: e.target.value })}
              className="w-full bg-slate-950 border border-emerald-500/50 rounded-lg px-3 py-2 text-emerald-300 text-xs"
              placeholder="Build 1 asset once, sell it 10,000 times..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Implementation Timeframe
            </label>
            <input
              type="text"
              value={selectedSecret.timeframe}
              onChange={(e) => updateSecret(selectedSecret.id, { timeframe: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
              placeholder="Day 1 to 14"
            />
          </div>
        </div>

        {/* Tactical Bullet Points */}
        <div className="pt-3 border-t border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-200">
              Tactical Bullet Points (What Students Discover)
            </label>
            <button
              onClick={handleAddBullet}
              className="text-amber-400 hover:text-amber-300 text-xs flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Bullet Point</span>
            </button>
          </div>

          <div className="space-y-2">
            {selectedSecret.bulletPoints.map((bullet, bIndex) => (
              <div key={bIndex} className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) => handleBulletChange(bIndex, e.target.value)}
                  className="w-full bg-transparent text-slate-200 text-xs focus:outline-none"
                />
                <button
                  onClick={() => handleRemoveBullet(bIndex)}
                  className="text-slate-500 hover:text-red-400 p-1"
                  title="Remove Bullet"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
