'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import trackingService from '@/services/trackingService';
import { getSourceFromUrl } from '@/utils/sourceTracking';

interface TrackingProviderProps {
  children: React.ReactNode;
  pageName: string;
}

export default function TrackingProvider({ children, pageName }: TrackingProviderProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeTracking = async () => {
      // Check if session already exists
      const existingSession = trackingService.getSessionId();

      if (!existingSession) {
        // Create new session
        const source = getSourceFromUrl(searchParams);
        const utm_source = searchParams.get('utm_source');
        const utm_medium = searchParams.get('utm_medium');
        const utm_campaign = searchParams.get('utm_campaign');

        await trackingService.createSession({
          page: pageName,
          source,
          utm_source,
          utm_medium,
          utm_campaign,
        });
      }

      // Track page view
      await trackingService.trackPageView(pageName);

      setInitialized(true);
    };

    initializeTracking();
  }, [searchParams, pageName]);

  // Track scroll depth
  useEffect(() => {
    if (!initialized) return;

    let lastDepth = 0;
    const checkpoints = [25, 50, 75, 100];

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const depth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

      // Track when passing checkpoints
      checkpoints.forEach(checkpoint => {
        if (depth >= checkpoint && lastDepth < checkpoint) {
          trackingService.trackScroll(checkpoint);
          lastDepth = checkpoint;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialized]);

  return <>{children}</>;
}
