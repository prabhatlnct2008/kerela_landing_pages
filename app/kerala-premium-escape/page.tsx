import { Suspense } from 'react';
import SourceTracker from '@/components/SourceTracker';
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
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <SourceTracker pageName="kerala-premium-escape" />
      </Suspense>

      <HeroSection />
      <StatsSection />
      <WhySection />
      <QualificationSection />
      <JourneySection />
      <PricingSection />
      <ScarcitySection />
      <FAQSection />
      <Footer />
    </main>
  );
}
