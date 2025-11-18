/**
 * Image Configuration Utility
 * Manages images from content/images.json with automatic placeholder fallbacks
 */

import imageData from '@/content/images.json';

type PageName = 'kerala-premium-escape' | 'kerala-group-tour';
type ImageCategory = 'hero' | 'testimonials' | 'journey' | 'gallery';

interface HeroImage {
  background: string;
  alt: string;
}

interface TestimonialImage {
  id: number;
  image: string;
  alt: string;
}

interface JourneyImage {
  day: number;
  image: string;
  alt: string;
}

/**
 * Gets the hero background image for a specific page
 */
export function getHeroImage(pageName: PageName): HeroImage {
  const data = imageData[pageName];
  if (!data || !data.hero) {
    return {
      background: imageData.placeholders.hero,
      alt: 'Hero background'
    };
  }
  return data.hero;
}

/**
 * Gets testimonial images for a specific page
 */
export function getTestimonialImages(pageName: PageName): TestimonialImage[] {
  const data = imageData[pageName];
  if (!data || !data.testimonials || data.testimonials.length === 0) {
    // Return placeholder testimonials
    return [
      { id: 1, image: imageData.placeholders.testimonial, alt: 'Testimonial user' },
      { id: 2, image: imageData.placeholders.testimonial, alt: 'Testimonial user' },
      { id: 3, image: imageData.placeholders.testimonial, alt: 'Testimonial user' }
    ];
  }
  return data.testimonials;
}

/**
 * Gets a single testimonial image by ID
 */
export function getTestimonialImage(pageName: PageName, id: number): string {
  const testimonials = getTestimonialImages(pageName);
  const testimonial = testimonials.find(t => t.id === id);
  return testimonial?.image || imageData.placeholders.testimonial;
}

/**
 * Gets journey/itinerary images for a specific page
 */
export function getJourneyImages(pageName: PageName): JourneyImage[] {
  const data = imageData[pageName];
  if (!data || !data.journey || data.journey.length === 0) {
    // Return placeholder journey images
    return Array.from({ length: 5 }, (_, i) => ({
      day: i + 1,
      image: imageData.placeholders.journey,
      alt: `Day ${i + 1}`
    }));
  }
  return data.journey;
}

/**
 * Gets a single journey image by day number
 */
export function getJourneyImage(pageName: PageName, day: number): string {
  const journeyImages = getJourneyImages(pageName);
  const dayImage = journeyImages.find(j => j.day === day);
  return dayImage?.image || imageData.placeholders.journey;
}

/**
 * Gets gallery images for a specific page
 */
export function getGalleryImages(pageName: PageName): string[] {
  const data = imageData[pageName];
  if (!data || !data.gallery || data.gallery.length === 0) {
    // Return placeholder gallery images
    return Array.from({ length: 6 }, () => imageData.placeholders.gallery);
  }
  return data.gallery;
}

/**
 * Checks if an image exists (simple client-side check)
 * Returns the image URL or placeholder
 */
export function getImageWithFallback(
  imagePath: string,
  placeholderType: keyof typeof imageData.placeholders = 'gallery'
): string {
  // If it's already a data URI (placeholder), return as-is
  if (imagePath.startsWith('data:')) {
    return imagePath;
  }

  // For production, you might want to add actual image existence checking
  // For now, we'll return the path as-is and let the browser handle missing images
  return imagePath;
}

/**
 * Gets all placeholders
 */
export function getPlaceholders() {
  return imageData.placeholders;
}

/**
 * Helper to get image alt text or generate default
 */
export function getImageAlt(category: ImageCategory, index: number = 0): string {
  const defaults: Record<ImageCategory, string> = {
    hero: 'Kerala landscape',
    testimonials: `Traveler testimonial ${index + 1}`,
    journey: `Journey day ${index + 1}`,
    gallery: `Gallery image ${index + 1}`
  };
  return defaults[category];
}

export default {
  getHeroImage,
  getTestimonialImages,
  getTestimonialImage,
  getJourneyImages,
  getJourneyImage,
  getGalleryImages,
  getImageWithFallback,
  getPlaceholders,
  getImageAlt
};
