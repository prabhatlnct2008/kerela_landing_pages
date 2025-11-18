# Image Management System

This folder contains the configuration for managing images across all landing pages.

## 📁 Structure

```
content/
├── images.json          # Central image configuration file
└── README.md            # This file

public/images/
├── hero/                # Hero/banner images (1920x1080 recommended)
├── testimonials/        # User testimonial photos (400x400 recommended)
├── journey/             # Day-by-day itinerary images (800x600 recommended)
└── gallery/             # Additional gallery images (various sizes)
```

## 📝 How to Add/Update Images

### 1. Add Image Files

Place your images in the appropriate folder under `public/images/`:

```bash
# Example: Adding a hero image
cp my-kerala-photo.jpg public/images/hero/kerala-backwaters.jpg

# Example: Adding testimonial photos
cp user-photo-1.jpg public/images/testimonials/user-1.jpg
cp user-photo-2.jpg public/images/testimonials/user-2.jpg
```

### 2. Update Configuration

Edit `content/images.json` to reference your new images:

```json
{
  "kerala-premium-escape": {
    "hero": {
      "background": "/images/hero/kerala-backwaters.jpg",
      "alt": "Kerala backwaters with traditional houseboat"
    },
    "testimonials": [
      {
        "id": 1,
        "image": "/images/testimonials/user-1.jpg",
        "alt": "Happy traveler portrait"
      }
    ]
  }
}
```

### 3. Image Recommendations

| Category | Recommended Size | Format | Notes |
|----------|------------------|--------|-------|
| Hero | 1920×1080px | JPG | Keep under 500KB for fast loading |
| Testimonials | 400×400px | JPG/PNG | Circular crop works best |
| Journey | 800×600px | JPG | Landscape orientation |
| Gallery | 600×400px | JPG | Flexible sizes |

### 4. Optimize Images

Before uploading, compress images to reduce file size:

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target: Under 200KB per image
- Quality: 80-85% is usually sufficient

## 🎨 Using Images in Components

Import the image utility functions:

```tsx
import {
  getHeroImage,
  getTestimonialImages,
  getJourneyImages
} from '@/utils/imageConfig';

// In your component
const heroImage = getHeroImage('kerala-premium-escape');
const testimonials = getTestimonialImages('kerala-premium-escape');
const journeyDays = getJourneyImages('kerala-premium-escape');

// Use in JSX
<div style={{ backgroundImage: `url(${heroImage.background})` }}>
  <img src={testimonials[0].image} alt={testimonials[0].alt} />
</div>
```

## 🔄 Automatic Placeholders

If an image is missing or not configured, the system automatically shows a placeholder:

- **Hero**: Green placeholder with "Hero Image" text
- **Testimonials**: Green circular placeholder with emoji
- **Journey**: Cyan placeholder with "Journey Image" text
- **Gallery**: Purple placeholder with "Gallery Image" text

This ensures your landing pages always look complete, even before adding real images.

## 🖼️ Image Categories

### Hero Images
- Large background images for the top section
- Should be high-quality, inspiring shots of Kerala
- Examples: Backwaters, tea plantations, houseboats

### Testimonial Images
- Profile photos of happy travelers
- Should show faces clearly
- Can use stock photos initially

### Journey Images
- One image per day of the itinerary
- Should represent the activities/locations for that day
- Help users visualize the trip

### Gallery Images
- Supplementary images showcasing the experience
- Cultural activities, food, accommodations, landscapes
- Used in additional sections

## 🎯 Best Practices

1. **Use descriptive filenames**: `kerala-backwaters.jpg` not `img1.jpg`
2. **Add meaningful alt text**: Helps with SEO and accessibility
3. **Maintain aspect ratios**: Use recommended sizes to avoid distortion
4. **Compress before upload**: Faster page loads = better conversions
5. **Use consistent style**: Similar color grading across images looks professional
6. **Update both pages**: Keep both landing page variants updated

## 🔧 Advanced: Per-Page Customization

Each landing page can have completely different images:

```json
{
  "kerala-premium-escape": {
    "hero": { "background": "/images/hero/dark-moody-backwaters.jpg" }
  },
  "kerala-group-tour": {
    "hero": { "background": "/images/hero/bright-cheerful-tea.jpg" }
  }
}
```

## 📤 Future: Admin Upload Interface

The admin dashboard (coming soon) will allow you to:
- Upload images directly through a web interface
- Preview images before publishing
- Batch upload multiple images
- Automatically optimize and compress images
- Manage alt text and descriptions

---

**Need Help?** Check the main README.md for project setup or contact the development team.
