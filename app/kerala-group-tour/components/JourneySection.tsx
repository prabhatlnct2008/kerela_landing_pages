'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function JourneySection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          4 Nights / 5 Days — Snapshot
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Your Kerala journey, day by day
        </p>

        {/* Itinerary Cards */}
        <div className="space-y-8 mb-12">
          {/* Day 1 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Kochi → Alleppey Backwaters</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Arrival at Kochi → Private transfer to Alleppey</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Traditional Kerala lunch; houseboat or premium backwater stay</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Evening shikara ride + welcome dinner</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex-shrink-0"></div>
          </div>

          {/* Day 2 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Alleppey → Munnar</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Morning by backwaters → Scenic drive to Munnar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Photo stops; handpicked Munnar stay</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex-shrink-0"></div>
          </div>

          {/* Day 3 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Munnar Sightseeing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Sunrise viewpoint, tea estate walk, local attractions</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex-shrink-0"></div>
          </div>

          {/* Day 4 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Local experiences</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Optional jeep safari / waterfall visit / food tasting / campfire</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex-shrink-0"></div>
          </div>

          {/* Day 5 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Munnar → Kochi Departure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Breakfast, checkout, spice/tea stop, drop at Kochi</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton
            message="Hi! I'd like to get the full timeline and exact stays for the Kerala trip."
            className="text-lg px-8 py-4"
          >
            Get full timeline wise plan & exact stays on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
