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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/journey/day-1-kochi.jpg"
                alt="Kochi - Fort Kochi streets and Chinese fishing nets"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg md:order-2">
              <img
                src="/images/journey/day-2-munnar.jpg"
                alt="Munnar - Tea plantations and hills"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/journey/day-3-thekkady.jpg"
                alt="Thekkady - Periyar wildlife sanctuary"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg md:order-2">
              <img
                src="/images/journey/day-4-alleppey.jpg"
                alt="Alleppey - Houseboat on backwaters"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/journey/day-5-departure.jpg"
                alt="Departure day memories"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
