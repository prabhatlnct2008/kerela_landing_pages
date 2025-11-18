'use client';

import { useState, useEffect, useCallback } from 'react';
import trackingService from '@/services/trackingService';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleExitIntent = useCallback((e: MouseEvent) => {
    // Show on desktop when mouse leaves viewport from top
    if (
      e.clientY <= 0 &&
      window.innerWidth >= 768 // Desktop only
    ) {
      setIsOpen(true);
      // Track exit intent
      trackingService.trackExitIntent();
    }
  }, []);

  useEffect(() => {
    // Only attach on desktop
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      // Wait 3 seconds before activating exit intent
      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', handleExitIntent);
      }, 3000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseleave', handleExitIntent);
      };
    }
  }, [handleExitIntent]);

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
    setEmail('');
    onClose?.();
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await trackingService.submitUserDetails({
        email: email,
        form_type: 'exit_intent_email',
        metadata: {
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          choice: 'email'
        }
      });

      if (success) {
        setSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp choice
    trackingService.trackEvent({
      event_type: 'exit_intent_whatsapp',
      metadata: {
        page: typeof window !== 'undefined' ? window.location.pathname : '',
        choice: 'whatsapp'
      }
    });

    // Redirect to WhatsApp
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
    const message = encodeURIComponent('Hi! I was just browsing the Kerala trip page and would love to know more details.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Close popup after a short delay
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Wait! Before You Go...
              </h2>
              <p className="text-gray-600 text-lg">
                How would you like us to send you trip details?
              </p>
            </div>

            {/* Two Options */}
            <div className="space-y-4">
              {/* Email Option */}
              <form onSubmit={handleEmailSubmit} className="border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Send via Email</h3>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition mb-3"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Me Details'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
                </div>
              </div>

              {/* WhatsApp Option */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:bg-green-50 transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition">Chat on WhatsApp</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition">Get instant replies from our Kerala expert</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-6">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        ) : (
          <div className="text-center py-12 px-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              We'll send you exclusive Kerala travel details shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
