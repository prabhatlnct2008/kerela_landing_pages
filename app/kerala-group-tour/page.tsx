import { Suspense } from 'react';
import TrackingProvider from '@/components/TrackingProvider';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import WhySection from './components/WhySection';
import QualificationSection from './components/QualificationSection';
import JourneySection from './components/JourneySection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export const metadata = {
  title: 'Kerala 4 Nights • 5 Days - Premium Small-Group Escapes | Kerala Wanderers',
  description: 'Experience authentic Kerala with local guides. Houseboat nights, Munnar tea hills, and curated comfort for small groups (12-15). Starting at ₹44,999 per person.',
};

export default function KeralaGroupTour() {
  return (
    <Suspense fallback={null}>
      <TrackingProvider pageName="kerala-group-tour">
        <main className="min-h-screen bg-white">
          <HeroSection />
          <StatsBar />
          <WhySection />
          <QualificationSection />
          <JourneySection />
          <PricingSection />
          <FAQSection />
          <Footer />

          {/* Exit Intent Popup */}
          <ExitIntentPopup />
        </main>
      </TrackingProvider>
    </Suspense>
  );
}
