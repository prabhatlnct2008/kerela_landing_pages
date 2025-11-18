'use client';

import WhatsAppButton from '@/components/WhatsAppButton';

export default function JourneySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          4 Nights / 5 Days — Your Journey
        </h2>
        <p className="text-center text-gray-600 mb-16">
          A carefully curated itinerary that balances exploration, relaxation, and authentic local experiences
        </p>

        {/* Itinerary Items */}
        <div className="space-y-12">
          {/* Day 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
                <p className="text-white font-medium">Houseboat Experience</p>
              </div>
            </div>
            <div>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                Day 1
              </div>
              <h3 className="text-2xl font-bold mb-4">Kochi → Alleppey Backwaters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Arrival at Kochi → Private transfer to Alleppey</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Traditional Kerala lunch</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Houseboat or premium backwater stay</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Evening shikara ride + welcome dinner</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center md:order-2">
              <div className="text-center">
                <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-medium">Scenic Drive</p>
              </div>
            </div>
            <div className="md:order-1">
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                Day 2
              </div>
              <h3 className="text-2xl font-bold mb-4">Alleppey → Munnar</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Morning by backwaters</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Scenic drive to Munnar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Photo stops along the way</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Check-in to handpicked Munnar stay</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-medium">Munnar Sightseeing</p>
              </div>
            </div>
            <div>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                Day 3
              </div>
              <h3 className="text-2xl font-bold mb-4">Munnar Sightseeing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Sunrise viewpoint</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Tea estate walk</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Local attractions visit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Free time for shopping</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Day 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center md:order-2">
              <div className="text-center">
                <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-medium">Local Experiences</p>
              </div>
            </div>
            <div className="md:order-1">
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                Day 4
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Experiences</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Optional jeep safari</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Waterfall visit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Local food tasting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Campfire night</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Day 5 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <p className="text-white font-medium">Departure</p>
              </div>
            </div>
            <div>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                Day 5
              </div>
              <h3 className="text-2xl font-bold mb-4">Munnar → Kochi Departure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Breakfast and checkout</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Spice/tea shop stop</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Drop at Kochi airport/station</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span>Goodbye with memories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <WhatsAppButton
            message="Hi! I'd like to get the full timeline and exact stays for the Kerala trip."
            className="text-lg px-8 py-4"
          >
            Get Full Timeline & Exact Stays on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
