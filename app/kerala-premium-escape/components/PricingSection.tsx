'use client';

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why ₹45,000 is a fair price
        </h2>
        <p className="text-center text-gray-300 mb-16">
          Complete transparency, no hidden costs
        </p>

        {/* Pricing Breakdown */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <div className="space-y-6">
            {/* Accommodation */}
            <div className="flex justify-between items-center pb-6 border-b border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-lg">Accommodation (4 nights, premium picks)</span>
              </div>
              <span className="text-xl font-bold">₹21,000</span>
            </div>

            {/* Private Transfers */}
            <div className="flex justify-between items-center pb-6 border-b border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-lg">Private transfers & fuel</span>
              </div>
              <span className="text-xl font-bold">₹8,000</span>
            </div>

            {/* Houseboat */}
            <div className="flex justify-between items-center pb-6 border-b border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-lg">Houseboat experience</span>
              </div>
              <span className="text-xl font-bold">₹6,000</span>
            </div>

            {/* Local Guide */}
            <div className="flex justify-between items-center pb-6 border-b border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-lg">Local guide, coordination & entrance fees</span>
              </div>
              <span className="text-xl font-bold">₹5,000</span>
            </div>

            {/* Meals/Activities */}
            <div className="flex justify-between items-center pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-lg">Meals / activities buffer</span>
              </div>
              <span className="text-xl font-bold">₹5,000</span>
            </div>

            {/* Market Equivalent */}
            <div className="pt-6 border-t-2 border-white/40">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-medium text-gray-300">Market-equivalent cost:</span>
                <span className="text-2xl text-gray-400 line-through">₹50,000—₹60,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Our price:</span>
                <span className="text-4xl font-bold text-green-400">₹45,000</span>
              </div>
              <p className="text-sm text-gray-400 italic mt-2">Limited batch pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
