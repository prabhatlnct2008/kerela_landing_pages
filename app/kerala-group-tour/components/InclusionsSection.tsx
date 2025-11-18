'use client';

export default function InclusionsSection() {
  const included = [
    'Houseboat overnight with all meals (air-conditioned)',
    'All breakfasts and dinners throughout the trip',
    'Private AC transport for the entire journey',
    'Expert local guide (English + Hindi speaking)',
    'All hotel stays (3-star and above)',
    'Munnar sightseeing with tea plantation tour',
    'Thekkady spice plantation visit',
    'Kochi city tour including Fort Kochi',
    'All tolls, parking, and driver allowances',
    'GST and taxes included'
  ];

  const notIncluded = [
    'Airfare or train tickets to/from Kerala',
    'Lunches during the trip',
    'Entry fees to monuments and museums',
    'Personal expenses (shopping, etc.)',
    'Travel insurance',
    'Tips and gratuities',
    'Any activities not mentioned in itinerary',
    'Alcoholic beverages'
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's Included (And What's Not)
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete transparency - no hidden costs or surprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Included */}
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border-2 border-cyan-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Included in Package</h3>
            </div>

            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Not Included</h3>
            </div>

            <ul className="space-y-3">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-cyan-50 border-l-4 border-cyan-600 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-1">Budget Estimate</h4>
                <p className="text-gray-700">
                  For excluded items, budget approximately ₹3,000-5,000 per person for the entire trip
                  (lunches, entry fees, and personal expenses). We'll share exact entry fees in the detailed itinerary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
