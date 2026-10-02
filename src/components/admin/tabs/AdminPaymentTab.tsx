import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import {
  CreditCard,
  Key,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  DollarSign,
  Lock,
  Zap,
  Info,
} from 'lucide-react';

export const AdminPaymentTab: React.FC = () => {
  const { siteData, updatePayment } = useSite();
  const payment = siteData.payment;
  const [savedAlert, setSavedAlert] = useState(false);

  const handleUpdate = (field: string, val: any) => {
    updatePayment({ [field]: val });
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2000);
  };

  const isKeyConfigured = Boolean(
    payment?.razorpayKeyId && payment.razorpayKeyId.trim().length > 5
  );

  return (
    <div className="space-y-6 text-sm max-w-4xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30 rounded-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-black text-white text-base sm:text-lg">
                Razorpay Payment Gateway & Ticket Pricing
              </h3>
              {isKeyConfigured ? (
                <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Live Gateway Ready
                </span>
              ) : (
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded-full border border-amber-500/30 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Test / Demo Active
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Collect nominal webinar fees (default <strong>₹9</strong>) via UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, and NetBanking. Once attendees complete the registration form, they proceed to pay before receiving their access link.
            </p>
          </div>
        </div>
      </div>

      {savedAlert && (
        <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl px-4 py-2.5 text-xs text-emerald-300 font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Payment settings saved successfully!</span>
        </div>
      )}

      {/* Razorpay API Credentials Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-400" />
            <h4 className="font-heading font-bold text-white text-sm">
              Razorpay API Credentials
            </h4>
          </div>
          <a
            href="https://dashboard.razorpay.com/#/access/api_keys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium underline"
          >
            <span>Get Razorpay Keys</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Razorpay Key ID */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Razorpay Key ID <span className="text-amber-400 font-bold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. rzp_live_xxxxxxxxxxxxxx or rzp_test_xxxxxxxxxxxxxx"
              value={payment?.razorpayKeyId || ''}
              onChange={(e) => handleUpdate('razorpayKeyId', e.target.value.trim())}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-600 font-mono text-xs focus:outline-none focus:border-amber-400"
            />
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Public key used on the frontend to initiate the checkout modal (safe for client side).
          </p>
        </div>

        {/* Razorpay Key Secret */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Razorpay Key Secret (Optional / For Records)
          </label>
          <input
            type="password"
            placeholder="••••••••••••••••••••••••"
            value={payment?.razorpayKeySecret || ''}
            onChange={(e) => handleUpdate('razorpayKeySecret', e.target.value.trim())}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-600 font-mono text-xs focus:outline-none focus:border-amber-400"
          />
          <p className="text-[11px] text-slate-400 mt-1">
            Your private key secret. Never exposed publicly to users.
          </p>
        </div>

        {/* Quick Instructions */}
        <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800 text-xs text-slate-300 space-y-1.5">
          <p className="font-bold text-amber-300 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>How to get your Razorpay Keys in 2 minutes:</span>
          </p>
          <ol className="list-decimal list-inside space-y-1 text-slate-400 pl-1">
            <li>Log in to your <strong>Razorpay Dashboard</strong> (dashboard.razorpay.com).</li>
            <li>Go to <strong>Settings</strong> → <strong>API Keys</strong> tab.</li>
            <li>Click <strong>Generate Key</strong> (or copy your existing Key ID).</li>
            <li>Paste your <strong>Key ID</strong> into the field above. That's it!</li>
          </ol>
        </div>
      </div>

      {/* Ticket Price & Currency Configuration */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <DollarSign className="w-4 h-4 text-emerald-400" />
          <h4 className="font-heading font-bold text-white text-sm">
            Ticket Pricing & Currency
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Ticket Price */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Webinar Ticket Price (Nominal Fee)
            </label>
            <div className="flex items-center gap-2">
              <span className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 font-bold font-mono">
                {payment?.currencySymbol || '₹'}
              </span>
              <input
                type="number"
                min="1"
                step="1"
                value={payment?.ticketPrice ?? 9}
                onChange={(e) => handleUpdate('ticketPrice', Number(e.target.value))}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono font-bold text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Current amount charged at checkout: <strong>₹{payment?.ticketPrice ?? 9}</strong>
            </p>
          </div>

          {/* Regular Price (Strikethrough) */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Regular Strikethrough Price
            </label>
            <input
              type="text"
              value={payment?.regularPrice || '₹4,999'}
              onChange={(e) => handleUpdate('regularPrice', e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Shown to highlight huge perceived value (e.g. ₹4,999 value for ₹9).
            </p>
          </div>
        </div>

        {/* Currency settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Currency Symbol
            </label>
            <input
              type="text"
              value={payment?.currencySymbol || '₹'}
              onChange={(e) => handleUpdate('currencySymbol', e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Currency ISO Code
            </label>
            <input
              type="text"
              value={payment?.currencyCode || 'INR'}
              onChange={(e) => handleUpdate('currencyCode', e.target.value.toUpperCase())}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Payment Behavior Toggles */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
        <h4 className="font-heading font-bold text-white text-sm border-b border-slate-800 pb-3">
          Checkout Flow Controls
        </h4>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <p className="font-bold text-white text-xs">Require Payment Before Confirmation</p>
            <p className="text-[11px] text-slate-400">
              When enabled, users must pay ₹{payment?.ticketPrice ?? 9} before their seat is confirmed.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleUpdate('isPaymentRequired', !payment?.isPaymentRequired)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              payment?.isPaymentRequired
                ? 'bg-emerald-500 text-slate-950 font-black'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {payment?.isPaymentRequired ? 'ENABLED (₹9 Ticket)' : 'DISABLED'}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <p className="font-bold text-white text-xs">Allow Test Mode Simulation</p>
            <p className="text-[11px] text-slate-400">
              Allows you and team members to test the booking flow instantly even before pasting production keys.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleUpdate('testMode', !payment?.testMode)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              payment?.testMode
                ? 'bg-amber-400 text-slate-950 font-black'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {payment?.testMode ? 'TEST MODE ACTIVE' : 'LIVE ONLY'}
          </button>
        </div>
      </div>
    </div>
  );
};
