# Kerala Landing Pages

Two high-converting landing pages for Kerala tour packages, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Two Landing Page Variants**:
  - **Premium Escape** (`/kerala-premium-escape`) - Dark theme with dramatic hero section
  - **Group Tour** (`/kerala-group-tour`) - Light theme with clean, modern design

- **Source Tracking**: Automatically captures and stores traffic source from URL parameters
- **Pixel-Perfect Design**: Based on provided screenshot segments
- **Fully Responsive**: Mobile-first design that works on all devices
- **WhatsApp Integration**: Direct CTA buttons with source tracking
- **Performance Optimized**: Built with Next.js for fast load times

## 📁 Project Structure

```
kerela_landing_pages/
├── app/
│   ├── kerala-premium-escape/      # Landing Page 1 (Dark Theme)
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── WhySection.tsx
│   │   │   ├── QualificationSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── ScarcitySection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── Footer.tsx
│   │   └── page.tsx
│   │
│   ├── kerala-group-tour/          # Landing Page 2 (Light Theme)
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── WhySection.tsx
│   │   │   ├── QualificationSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── Footer.tsx
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx                    # Home page
│   └── globals.css
│
├── components/
│   ├── SourceTracker.tsx           # Client-side source tracking
│   └── WhatsAppButton.tsx          # Reusable WhatsApp CTA
│
├── utils/
│   └── sourceTracking.ts           # Source tracking utilities
│
└── screenshots/                    # Design reference screenshots
    ├── kerela_landing_page_1/
    └── kerela_landing_page_2/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kerela_landing_pages
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Source Tracking

Both landing pages automatically track visitor sources through URL parameters:

### Supported Parameters:
- `?source=<value>` - Primary source parameter
- `?utm_source=<value>` - Google Analytics UTM source
- `?ref=<value>` - Referral source
- `?referrer=<value>` - Alternative referrer parameter

### Examples:
- `/kerala-premium-escape?source=facebook`
- `/kerala-group-tour?utm_source=google&utm_campaign=summer`
- `/kerala-premium-escape?ref=instagram`

### How it Works:
1. `SourceTracker` component captures source on page load
2. Source data is stored in `localStorage`
3. WhatsApp CTAs include source information in messages
4. Data includes: source, timestamp, and page name

## 🎨 Landing Page Comparison

| Feature | Premium Escape | Group Tour |
|---------|---------------|------------|
| Theme | Dark with overlay | Light and clean |
| Hero Style | Full-screen background | Gradient background |
| Stats Display | Grid layout | Horizontal bar |
| Color Scheme | Gray/Green | Teal/Cyan |
| Best For | Dramatic impact | Modern, professional |

## 📱 WhatsApp Integration

All WhatsApp CTAs automatically:
- Include pre-filled messages
- Append source tracking data
- Open in new tab/window
- Work on both mobile and desktop

Default phone number: `+91-9999999999` (Update in `utils/sourceTracking.ts`)

## 🛠 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **localStorage** - Client-side data persistence

## 📋 Component Architecture

Each landing page follows a modular, segment-based architecture:

1. **HeroSection** - Above-the-fold content with CTA
2. **StatsSection/StatsBar** - Social proof and metrics
3. **WhySection** - Value propositions
4. **QualificationSection** - Target audience filtering
5. **JourneySection** - Day-by-day itinerary
6. **PricingSection** - Transparent pricing breakdown
7. **FAQSection** - Common questions and answers
8. **Footer** - Contact info and legal

## 🎯 Key Features Implementation

### Pixel-Perfect Design
- Built from actual screenshot segments
- Responsive breakpoints for all devices
- Careful attention to spacing, typography, and colors

### Source Tracking
- Automatic capture on page load
- Multiple parameter support
- Local storage persistence
- Integration with WhatsApp CTAs

### Performance
- Next.js Static Site Generation (SSG)
- Optimized images and assets
- Minimal JavaScript bundle
- Fast page load times

## 📝 Customization

### Update Contact Information
Edit `utils/sourceTracking.ts`:
```typescript
const phoneNumber = '919999999999'; // Your WhatsApp number
```

Edit Footer components for email and address.

### Modify Content
Each section is a separate component - update the content in respective component files.

### Change Colors
Update `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    green: "#22c55e",
    dark: "#1e293b",
    navy: "#0f172a",
  },
}
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is built for Kerala Wanderers travel company.

## 🤝 Contributing

This is a client project. Contact the project maintainer for contribution guidelines.

---

Built with ❤️ using Next.js and Tailwind CSS
