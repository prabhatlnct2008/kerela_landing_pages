'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function InclusionsSection() {
  const included = [
    "4 nights accommodation (handpicked)",
    "Daily breakfast + selected experiences",
    "Houseboat stay (as per package)",
    "Private intercity transfers & local guide",
    "Entry fees per itinerary",
    "Airport/station transfers (batch timings)"
  ];

  const notIncluded = [
    "Flights / long-distance train travel to Kochi",
    "Most lunches & dinners (we suggest trusted local spots)",
    "Optional activities (jeep safari, etc.)",
    "Travel insurance & personal expenses"
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          What's included & what's not
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Included */}
          <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">Included</h3>
            </div>

            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">Not Included</h3>
            </div>

            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton
            message="Hi! I have questions about what's included in the Kerala trip package."
            location="inclusions_section"
            variant="secondary"
          >
            Questions about inclusions? Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
