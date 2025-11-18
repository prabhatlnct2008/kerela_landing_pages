'use client';

export default function ServicePromiseSection() {
  return (
    <section className="bg-gradient-to-br from-cyan-600 to-cyan-700 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Service Guarantee
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  What you see is what you get. The price you pay now is the{' '}
                  <span className="font-bold text-cyan-700 bg-cyan-100 px-2 py-1 rounded">
                    final price
                  </span>
                  {' '}— no hidden charges, no extra costs, no surprises during the trip.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-cyan-50 rounded-lg p-3">
                    <svg className="w-6 h-6 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">100% Transparent Pricing</span>
                  </div>

                  <div className="flex items-center gap-3 bg-cyan-50 rounded-lg p-3">
                    <svg className="w-6 h-6 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Instant Issue Resolution</span>
                  </div>

                  <div className="flex items-center gap-3 bg-cyan-50 rounded-lg p-3">
                    <svg className="w-6 h-6 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">24/7 Support During Trip</span>
                  </div>

                  <div className="flex items-center gap-3 bg-cyan-50 rounded-lg p-3">
                    <svg className="w-6 h-6 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Badge */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Trusted by <strong className="text-cyan-700">500+ professionals</strong> across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
