import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Kerala Landing Pages
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose a landing page to view
        </p>

        <div className="space-y-4">
          {/* Landing Page 1 */}
          <Link
            href="/kerala-premium-escape"
            className="block p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:shadow-lg transition-all group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Premium Escape (Dark Theme)</h2>
                <p className="text-gray-300 text-sm">
                  Dark overlay hero with dramatic design
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  URL: /kerala-premium-escape
                </p>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Landing Page 2 */}
          <Link
            href="/kerala-group-tour"
            className="block p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Group Tour (Light Theme)</h2>
                <p className="text-teal-100 text-sm">
                  Clean, light design with modern layout
                </p>
                <p className="text-teal-200 text-xs mt-2">
                  URL: /kerala-group-tour
                </p>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="mt-12 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">📊 Source Tracking</h3>
          <p className="text-sm text-gray-600">
            Both pages support source tracking via URL parameters:
          </p>
          <ul className="text-xs text-gray-500 mt-2 space-y-1 ml-4">
            <li>• ?source=facebook</li>
            <li>• ?utm_source=google</li>
            <li>• ?ref=instagram</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
