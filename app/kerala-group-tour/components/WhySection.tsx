'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function WhySection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Why busy professionals pick this Kerala trip
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Local Expertise */}
          <div className="text-center">
            <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Local Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              Guides born & raised in Kerala; real routes, authentic food.
            </p>
          </div>

          {/* Premium, Not Pricey */}
          <div className="text-center">
            <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Premium, Not Pricey</h3>
            <p className="text-gray-600 leading-relaxed">
              Handpicked stays, comfortable transport, fair price.
            </p>
          </div>

          {/* Stress-Free */}
          <div className="text-center">
            <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Stress-Free</h3>
            <p className="text-gray-600 leading-relaxed">
              We handle logistics, you enjoy the moments.
            </p>
          </div>
        </div>

        {/* Built on feedback */}
        <p className="text-center text-gray-500 mb-8">
          Built on feedback from 2,847+ travellers.
        </p>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton
            message="Hi! I'd like to know more about the Kerala trip. Can you share details?"
          >
            Ask a Kerala Local on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
