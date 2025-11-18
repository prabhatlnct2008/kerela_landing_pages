'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/kerala-palms.jpg)',
      backgroundColor: '#1e3a2e'
    }}>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-green-500 text-white text-sm px-4 py-2 rounded-full font-medium">
            Kerala's Most Trusted Group Travel Experience
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kerala 4 Nights • 5 Days
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-6">
          Premium Small-Group Escapes
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Houseboat nights • Munnar tea hills • Local hosts • Small groups (12–15)
        </p>

        {/* Pricing Box */}
        <div className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl p-6 max-w-md mx-auto mb-8 shadow-2xl">
          <p className="text-sm text-gray-600 mb-2">Starting at</p>
          <p className="text-5xl font-bold mb-2">₹44,999</p>
          <p className="text-sm text-gray-600">
            per person • All-inclusive basics • No hidden fees
          </p>
        </div>

        {/* CTA Button */}
        <WhatsAppButton
          message="Hi! I'm interested in the Kerala 4N/5D Premium Small-Group Escape. Can you share dates and availability?"
          className="text-lg px-8 py-4"
        >
          Get Dates & Price on WhatsApp
        </WhatsAppButton>

        {/* Social Proof */}
        <div className="mt-8 text-sm text-gray-300">
          <p>A Kerala local replies within minutes — real answers, no pressure.</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5
            </span>
            <span>•</span>
            <span>2,847+ travellers</span>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button - Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <WhatsAppButton
          message="Hi! I'm interested in the Kerala 4N/5D trip."
          className="shadow-2xl"
        >
          Chat on WhatsApp
        </WhatsAppButton>
      </div>

      {/* Fixed WhatsApp Button - Desktop */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <WhatsAppButton
          message="Hi! I'm interested in the Kerala 4N/5D trip."
          className="shadow-lg"
        >
          Chat on WhatsApp
        </WhatsAppButton>
      </div>

      {/* Navigation Icons at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-16 text-white/60">
        <div className="flex flex-col items-center cursor-pointer hover:text-white transition">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-white transition">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-white transition">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-white transition">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
