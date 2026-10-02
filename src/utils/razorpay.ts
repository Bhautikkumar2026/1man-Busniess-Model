/**
 * Razorpay Checkout SDK Loader & Helper
 */

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => resolve(false));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export interface RazorpayPaymentSuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface LaunchRazorpayOptions {
  keyId: string;
  amountInPaise: number; // e.g. 900 for ₹9.00
  currency?: string;
  name: string;
  description: string;
  image?: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes?: Record<string, string>;
  themeColor?: string;
  onSuccess: (response: RazorpayPaymentSuccessResponse) => void;
  onDismiss?: () => void;
  onError?: (error: any) => void;
}

export const launchRazorpayCheckout = async (options: LaunchRazorpayOptions): Promise<boolean> => {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded || !(window as any).Razorpay) {
    if (options.onError) {
      options.onError(new Error('Failed to load Razorpay SDK. Please check your internet connection.'));
    }
    return false;
  }

  try {
    const rzpOptions = {
      key: options.keyId,
      amount: options.amountInPaise,
      currency: options.currency || 'INR',
      name: options.name,
      description: options.description,
      image: options.image || undefined,
      prefill: options.prefill,
      notes: options.notes || {},
      theme: {
        color: options.themeColor || '#f59e0b',
        backdrop_color: 'rgba(9, 11, 16, 0.85)',
      },
      modal: {
        ondismiss: () => {
          if (options.onDismiss) {
            options.onDismiss();
          }
        },
      },
      handler: function (response: RazorpayPaymentSuccessResponse) {
        options.onSuccess(response);
      },
    };

    const rzp = new (window as any).Razorpay(rzpOptions);

    rzp.on('payment.failed', function (response: any) {
      if (options.onError) {
        options.onError(response.error || new Error('Payment failed'));
      }
    });

    rzp.open();
    return true;
  } catch (err) {
    if (options.onError) {
      options.onError(err);
    }
    return false;
  }
};
