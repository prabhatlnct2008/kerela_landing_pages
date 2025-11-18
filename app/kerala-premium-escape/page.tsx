import { Suspense } from 'react';
import TrackingProvider from '@/components/TrackingProvider';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import WhySection from './components/WhySection';
import QualificationSection from './components/QualificationSection';
import JourneySection from './components/JourneySection';
import PricingSection from './components/PricingSection';
import ScarcitySection from './components/ScarcitySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export const metadata = {
  title: 'Kerala 4 Nights • 5 Days - Premium Small-Group Escapes | Kerala Wanderers',
  description: 'Experience authentic Kerala with local guides. Houseboat nights, Munnar tea hills, and curated comfort for small groups (12-15). Starting at ₹44,999 per person.',
};

export default function KeralaPremiumEscape() {
  return (
    <Suspense fallback={null}>
      <TrackingProvider pageName="kerala-premium-escape">
        <main className="min-h-screen">
          <HeroSection />
          <StatsSection />
          <WhySection />
          <QualificationSection />
          <JourneySection />
          <PricingSection />
          <ScarcitySection />
          <FAQSection />
          <Footer />

          {/* Exit Intent Popup */}
          <ExitIntentPopup />
        </main>
      </TrackingProvider>
    </Suspense>
  );
}
