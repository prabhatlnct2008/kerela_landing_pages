'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSourceFromUrl, storeSource } from '@/utils/sourceTracking';

interface SourceTrackerProps {
  pageName: string;
}

export default function SourceTracker({ pageName }: SourceTrackerProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const source = getSourceFromUrl(searchParams);

    if (source) {
      storeSource({
        source,
        timestamp: new Date().toISOString(),
        page: pageName,
      });
    }
  }, [searchParams, pageName]);

  return null; // This component doesn't render anything
}
