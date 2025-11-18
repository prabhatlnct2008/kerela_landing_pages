'use client';

export default function ScarcitySection() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Limited seats per batch
        </h2>
        <p className="text-xl text-gray-300 mb-4">
          We cap batches at 12–15 travellers. Most weekend batches fill in 4–7 days.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Message now to reserve your preferred dates.
        </p>

        {/* Seats Left Badge */}
        <div className="inline-block bg-orange-500/20 border-2 border-orange-500 text-orange-300 px-8 py-4 rounded-full">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xl font-bold">Next batch: 8 seats left</span>
          </div>
        </div>
      </div>
    </section>
  );
}
