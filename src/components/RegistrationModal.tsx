import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Download,
  ArrowRight,
  User,
  Mail,
  Phone,
  Briefcase,
  CreditCard,
  Lock,
  ChevronLeft,
  Check,
  AlertCircle,
  ExternalLink,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RegistrationFormData } from '../types';
import { useSite } from '../context/SiteContext';
import { launchRazorpayCheckout } from '../utils/razorpay';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const { siteData, addLead, setIsAdminOpen, setActiveAdminTab } = useSite();
  const payment = siteData.payment;
  const ticketPrice = payment?.ticketPrice ?? 9;
  const currencySymbol = payment?.currencySymbol ?? '₹';

  // Step 1: details, Step 2: payment, Step 3: confirmed
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [confirmedPaymentId, setConfirmedPaymentId] = useState<string>('');

  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    currentStatus: 'Coach / Consultant',
    preferredTime: 'Today @ 8:00 PM IST',
  });

  if (!isOpen) return null;

  // Move from details to payment step
  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }
    setPaymentError(null);
    setStep('payment');
  };

  const handlePaymentSuccess = (paymentId: string) => {
    setLoading(false);
    setConfirmedPaymentId(paymentId);

    // Save lead to local CRM with paid status
    addLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      countryCode: formData.countryCode,
      currentStatus: formData.currentStatus,
      preferredTime: formData.preferredTime,
      paymentStatus: 'Paid',
      paymentId: paymentId,
      amountPaid: ticketPrice,
    });

    setStep('confirmed');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#ffffff', '#10b981'],
      });
    } catch (err) {
      // Fallback gracefully
    }
  };

  const handlePayViaRazorpay = async () => {
    setLoading(true);
    setPaymentError(null);

    // Check if key is available in site settings or env
    const keyId =
      payment?.razorpayKeyId ||
      (import.meta as any).env?.VITE_RAZORPAY_KEY_ID ||
      '';

    if (!keyId) {
      // No key provided yet
      setLoading(false);
      setPaymentError(
        'Razorpay Key ID is not configured yet. You can paste your Razorpay Key ID in the Admin Panel or complete a simulated ₹9 test payment below.'
      );
      return;
    }

    try {
      const success = await launchRazorpayCheckout({
        keyId,
        amountInPaise: ticketPrice * 100, // e.g. 9 * 100 = 900 paise
        currency: payment?.currencyCode || 'INR',
        name: siteData.general.brandName || '1 Man Business Model',
        description: `Live Masterclass Ticket + ${siteData.bonuses.length} AI Fast-Action Bonuses`,
        image: siteData.mentor.photoUrl,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: `${formData.countryCode}${formData.phone.replace(/[^0-9]/g, '')}`,
        },
        notes: {
          sessionTime: formData.preferredTime,
          status: formData.currentStatus,
        },
        themeColor: '#f59e0b',
        onSuccess: (resp) => {
          handlePaymentSuccess(resp.razorpay_payment_id || `rzp_${Date.now()}`);
        },
        onDismiss: () => {
          setLoading(false);
        },
        onError: (err) => {
          setLoading(false);
          setPaymentError(err?.message || 'Payment was cancelled or failed. Please retry.');
        },
      });

      if (!success) {
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      setPaymentError(err?.message || 'Error initializing Razorpay.');
    }
  };

  const handleSimulatePayment = () => {
    setLoading(true);
    setPaymentError(null);
    setTimeout(() => {
      const simulatedId = `pay_sim_${Date.now().toString(36).toUpperCase()}`;
      handlePaymentSuccess(simulatedId);
    }, 700);
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(
      `${siteData.general.brandName} Live Masterclass - ${siteData.mentor.name}`
    );
    const details = encodeURIComponent(
      `Join ${siteData.mentor.name} live to discover the ${siteData.general.brandName} (${siteData.hero.highlightedText}) with AI leverage.\n\nTicket Confirmed: ${currencySymbol}${ticketPrice}\nAccess link in your email.`
    );
    const location = encodeURIComponent('Online Zoom / Private Webcast');
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-500/40 p-5 sm:p-7 shadow-2xl shadow-amber-500/10 my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: ATTENDEE REGISTRATION DETAILS */}
        {step === 'details' && (
          <div>
            {/* Header */}
            <div className="text-center mb-5 pr-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
                <span>EXCLUSIVE {siteData.hero.sessionDuration || '90-MIN'} MASTERCLASS</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                Reserve Your VIP Seat
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Special access pass:{' '}
                <span className="line-through text-slate-400 font-semibold">{payment.regularPrice || '₹4,999'}</span>{' '}
                → <span className="text-amber-400 font-extrabold">{currencySymbol}{ticketPrice} Today</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleProceedToPayment} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Your Best Email (For Private Zoom Link)</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>WhatsApp Number (Instant Access & Calendar Alert)</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-2.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-400 shrink-0"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+61">+61 (AU)</option>
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Role selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  <span>Current Profession / Background</span>
                </label>
                <select
                  value={formData.currentStatus}
                  onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Coach / Consultant">Coach / Consultant / Trainer</option>
                  <option value="Working Professional">Corporate Professional (Want to build 1-man business)</option>
                  <option value="Freelancer / Agency Owner">Freelancer / Agency Owner (Want to productize)</option>
                  <option value="Creator / Author / Teacher">Content Creator / Author / Teacher</option>
                  <option value="Other Expert">Doctor / Lawyer / Domain Expert</option>
                </select>
              </div>

              {/* Slot selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Preferred Session Slot</span>
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Today @ 8:00 PM IST">Today @ {siteData.hero.sessionTimeText} (Filling Fast)</option>
                  <option value="Tomorrow @ 8:00 PM IST">Tomorrow @ {siteData.hero.sessionTimeText}</option>
                  <option value="Saturday Weekend Special">Weekend Special Batch</option>
                </select>
              </div>

              {/* Proceed Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-heading font-black text-base shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <span>PROCEED TO SECURE SEAT ({currencySymbol}{ticketPrice})</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 px-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>256-Bit SSL Encrypted</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                  <span>Includes {siteData.bonuses.length} AI Bonuses</span>
                </span>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: ORDER SUMMARY & RAZORPAY CHECKOUT */}
        {step === 'payment' && (
          <div className="space-y-4">
            {/* Back button & Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Edit Details</span>
              </button>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase">
                <CreditCard className="w-3 h-3" />
                <span>Final Step • Payment</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-heading font-black text-2xl text-white">
                Complete Your Seat Booking
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Registering: <span className="text-white font-bold">{formData.fullName}</span> ({formData.email})
              </p>
            </div>

            {/* Order Breakdown Card */}
            <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  {siteData.general.brandName} Live Pass ({siteData.hero.sessionDuration})
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="line-through text-slate-500">{payment.regularPrice || '₹4,999'}</span>
                  <span className="font-bold text-white">{currencySymbol}{ticketPrice}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Fast-Action AI Frameworks & Tool Stack
                </span>
                <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  FREE (Worth ₹24,999)
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  Pre-Webinar Prep Kit & Notion Templates
                </span>
                <span className="font-bold text-blue-400">INCLUDED</span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-bold">
                <span className="text-white font-heading">Total Amount Due</span>
                <span className="text-xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  {currencySymbol}{ticketPrice}
                </span>
              </div>
            </div>

            {/* Payment methods supported */}
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-center">
              <p className="text-[11px] text-slate-400 mb-2 font-medium">
                Accepted Payment Methods via Razorpay:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-300 font-semibold">
                <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">UPI / QR (GPay, PhonePe, Paytm)</span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Credit / Debit Cards</span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">NetBanking</span>
              </div>
            </div>

            {/* Error Message if any */}
            {paymentError && (
              <div className="bg-amber-500/10 border border-amber-500/40 rounded-xl p-3 text-xs text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p>{paymentError}</p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      setActiveAdminTab('payment');
                      setIsAdminOpen(true);
                    }}
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-amber-300 underline font-bold"
                  >
                    <span>Open Admin Panel → Configure Razorpay Keys</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={handlePayViaRazorpay}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-heading font-black text-base shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="inline-block animate-spin border-2 border-slate-950 border-t-transparent rounded-full w-5 h-5"></span>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 text-slate-950" />
                    <span>PAY {currencySymbol}{ticketPrice} VIA RAZORPAY</span>
                  </>
                )}
              </button>

              {/* Instant Test Mode Simulation button (especially useful before user pastes their keys!) */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                  title="Simulate instant payment for rapid preview & testing without live transaction"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Test Mode: Complete {currencySymbol}{ticketPrice} Simulated Payment</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Razorpay Verified Gateway • 100% Refundable Guarantee</span>
            </div>
          </div>
        )}

        {/* STEP 3: CONFIRMATION / SUCCESS STATE */}
        {step === 'confirmed' && (
          <div className="text-center py-3 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                PAYMENT SUCCESSFUL • VIP SEAT CONFIRMED 🎉
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-3">
                You're In, {formData.fullName.split(' ')[0] || 'Friend'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto">
                We have received your payment of <span className="text-amber-400 font-bold">{currencySymbol}{ticketPrice}</span>. Your private access link and invoice have been sent to <span className="text-amber-300 font-bold">{formData.email}</span>.
              </p>
            </div>

            {/* Event & Transaction receipt card */}
            <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Payment ID:</span>
                <span className="font-mono font-bold text-emerald-400 text-[11px]">{confirmedPaymentId}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Host:</span>
                <span className="font-bold text-white">{siteData.mentor.name}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Time:</span>
                <span className="font-bold text-amber-300">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Fast Action Bonuses:</span>
                <span className="font-bold text-emerald-400">{siteData.bonuses.length} AI Assets Unlocked</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleAddToCalendar}
                className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>1-CLICK ADD TO GOOGLE CALENDAR</span>
              </button>

              <button
                type="button"
                onClick={() => alert(`Pre-Webinar Prep Kit & Notion Blueprint sent to ${formData.email}!`)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Pre-Webinar Prep Kit (PDF)</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Return to Masterclass Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
