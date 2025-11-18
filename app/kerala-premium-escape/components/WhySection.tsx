'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function WhySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why busy professionals pick this Kerala trip
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Built on feedback from 2,847+ travellers
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Local Expertise */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              Guides born & raised in Kerala; real routes, authentic food.
            </p>
          </div>

          {/* Premium, Not Pricey */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Premium, Not Pricey</h3>
            <p className="text-gray-600 leading-relaxed">
              Handpicked stays, comfortable transport, fair price.
            </p>
          </div>

          {/* Stress-Free */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Stress-Free</h3>
            <p className="text-gray-600 leading-relaxed">
              We handle logistics, you enjoy the moments.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton
            message="Hi! I'd like to know more about the Kerala trip. Can you share details?"
            variant="secondary"
          >
            Ask a Kerala Local on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
