'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-cyan-50 min-h-screen relative">
      {/* Fixed WhatsApp Button - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <WhatsAppButton
          message="Hi! I'm interested in the Kerala 4N/5D trip."
          className="shadow-lg"
        >
          Chat on WhatsApp — Check Dates & Book
        </WhatsAppButton>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-teal-600 text-white text-sm px-4 py-2 rounded-full font-medium">
              Kerala's Most Trusted Group Travel Experience
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Kerala 4 Nights • 5 Days
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-teal-600 mb-6">
            Premium Small-Group Escapes
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Houseboat nights • Munnar tea hills • Local hosts • Small groups (12–15)
          </p>

          {/* Pricing Box */}
          <div className="bg-white rounded-2xl p-6 max-w-sm mb-8 shadow-lg border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Starting at</p>
            <p className="text-5xl font-bold mb-2 text-teal-600">₹44,999</p>
            <p className="text-sm text-gray-600">
              /person
            </p>
            <p className="text-xs text-gray-500 mt-2">
              All-inclusive basics • No hidden fees
            </p>
          </div>

          {/* CTA Button */}
          <WhatsAppButton
            message="Hi! I'm interested in the Kerala 4N/5D Premium Small-Group Escape. Can you share dates and availability?"
            className="text-lg px-8 py-4 mb-8"
          >
            Get Dates & Price on WhatsApp
          </WhatsAppButton>

          {/* Social Proof */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">4.9/5</span>
            </div>
            <span className="text-gray-400">•</span>
            <span>2,847+ travellers</span>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            A Kerala local replies within minutes — real answers, no pressure.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-4xl">
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#d4e8dc' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#b8d4e8' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-red-600 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">😂</span>
            </div>
            <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-semibold">
              Made in Bolt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
