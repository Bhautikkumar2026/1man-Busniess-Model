import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { sitePresets } from '../../../data/defaultSiteData';
import { Sliders, Download, Upload, RotateCcw, Check, Copy } from 'lucide-react';

export const AdminPresetsTab: React.FC = () => {
  const { loadPreset, resetToDefaults, exportConfigJSON, importConfigJSON } = useSite();
  const [importJsonText, setImportJsonText] = useState('');
  const [copied, setCopied] = useState(false);
  const [importSuccess, setImportSuccess] = useState<boolean | null>(null);

  const handleCopyJSON = () => {
    const jsonStr = exportConfigJSON();
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const jsonStr = exportConfigJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `1man_business_model_config_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApplyImport = () => {
    if (!importJsonText.trim()) return;
    const ok = importConfigJSON(importJsonText);
    setImportSuccess(ok);
    if (ok) {
      setImportJsonText('');
      setTimeout(() => setImportSuccess(null), 3000);
    }
  };

  return (
    <div className="space-y-6 text-sm">
      {/* 1-Click Niche & Mentor Presets */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <Sliders className="w-4 h-4" />
          1-Click Presets & Templates
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Switch the whole website theme, hero messaging, and mentor credentials in 1 click.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.entries(sitePresets).map(([key, preset]) => (
            <div
              key={key}
              className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="font-heading font-black text-white text-sm mb-1">
                  {preset.label}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {preset.description}
                </p>
              </div>

              <button
                onClick={() => {
                  if (window.confirm(`Load preset "${preset.label}"? This will update your hero and mentor content.`)) {
                    loadPreset(key);
                  }
                }}
                className="w-full py-2 rounded-lg bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-amber-300 font-bold text-xs border border-amber-500/30 transition-all cursor-pointer"
              >
                Apply Preset
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Backup & Export / Import */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Export Configuration */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
          <h4 className="font-heading font-black text-amber-400 text-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export & Backup Site Data
          </h4>
          <p className="text-xs text-slate-400">
            Download your customized website configuration (hero, secrets, bonuses, testimonials, FAQs) as a JSON file or copy to clipboard.
          </p>

          <div className="flex gap-2 pt-2">
            <button
              onClick={handleDownloadJSON}
              className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-950 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON Backup</span>
            </button>

            <button
              onClick={handleCopyJSON}
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-3.5 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 border border-slate-700"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Import Configuration */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
          <h4 className="font-heading font-black text-blue-400 text-sm flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Import JSON Configuration
          </h4>
          <p className="text-xs text-slate-400">
            Paste a previously saved JSON configuration to restore or share site setups.
          </p>

          <textarea
            rows={3}
            value={importJsonText}
            onChange={(e) => setImportJsonText(e.target.value)}
            placeholder='Paste JSON here (e.g. { "hero": { ... }, "mentor": { ... } })...'
            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono text-[11px] focus:outline-none focus:border-blue-400"
          />

          {importSuccess === true && (
            <p className="text-xs text-emerald-400 font-bold">
              ✓ Configuration imported and applied successfully!
            </p>
          )}
          {importSuccess === false && (
            <p className="text-xs text-red-400 font-bold">
              ✗ Invalid JSON format. Please verify your syntax.
            </p>
          )}

          <button
            onClick={handleApplyImport}
            disabled={!importJsonText.trim()}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Apply JSON Settings</span>
          </button>
        </div>
      </div>

      {/* Danger Zone: Factory Reset */}
      <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-black text-red-400 text-sm flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Reset Everything to Original Defaults
          </h4>
          <p className="text-xs text-slate-400">
            Restores all Siddharth Rajsekar masterclass copy, headlines, testimonials, and bonuses.
          </p>
        </div>

        <button
          onClick={resetToDefaults}
          className="bg-red-900/30 hover:bg-red-900/60 text-red-300 border border-red-700/50 px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Factory Reset</span>
        </button>
      </div>
    </div>
  );
};
