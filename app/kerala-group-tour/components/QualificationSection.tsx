'use client';

export default function QualificationSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Is this trip for you?
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* This is for */}
          <div className="bg-white border-2 border-teal-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-teal-600">This is for:</h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  Working couples, small friend groups, solo professionals (31–55)
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  Those who want curated comfort and local experiences
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  People who value quality over bargain-hunting
                </span>
              </li>
            </ul>
          </div>

          {/* This is NOT for */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">This is NOT for:</h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700">
                  Backpackers chasing the cheapest stay
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700">
                  Party-goers looking for nightlife-heavy trips
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700">
                  Large coach-tour fans who prefer 30–40 person groups
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Honesty Statement */}
        <p className="text-center text-gray-500 italic mt-12">
          Honesty reduces bad leads and increases qualified clicks.
        </p>
      </div>
    </section>
  );
}
