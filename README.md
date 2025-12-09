# Dan's Legacy Catering - Capacity Optimization Platform

A modern, professional catering website for Dan's Legacy, a social enterprise that provides therapeutic counseling and job-skills training to at-risk youth.

## 🎯 Project Overview

This platform transforms Dan's Legacy Catering from a manual, reactive operation into a capacity optimization system. The focus is on filling the calendar to 100% capacity with mission-aligned clients (other charities/non-profits) while maintaining the message: **"Dignity on a Budget"** - not "cheap food."

## 🎨 Design Philosophy

**Vibe:** "Empowered Nurturer" - Warm, abundant, generous
**Aesthetic:** Trendy Farm-to-Table Bistro (NOT a generic charity site)
**Palette:** Warm earth tones (sage greens, terracotta, warm creams) mixed with professional slate greys

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **TypeScript:** Full type safety

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
dans-legacy-catering/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Shadcn UI components
│   ├── AvailabilityCalendar.tsx
│   ├── HeroSection.tsx
│   ├── ImpactSection.tsx
│   ├── MenuSection.tsx
│   └── InquiryForm.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## ✨ Key Features

### 1. Hero Section
- Compelling headline: "World-Class Catering for Our Community Heroes"
- Clear value proposition with 100% proceeds messaging
- Primary and secondary CTAs

### 2. Impact Section (Triple Bottom Line)
- **Social:** Wage-based training for youth
- **Environmental:** Surplus food utilization
- **Economic:** Accessible non-profit rates

### 3. Traffic Light Availability System
- **Green:** Open (High availability)
- **Yellow:** Limited (Urgency: "Only 1 slot left!")
- **Red:** Full (CTA changes to "Join Waitlist")
- **Low Traffic Days:** Tuesdays highlighted with "Community Partner Special" badge (15% off)

### 4. Menu Section ("The Community Feast")
Three distinct packages:
- **The Comfort Feast:** Roast Chicken, Seasonal Veg, Mash, Dessert
- **The Continental:** Artisan Sandwiches, Salads, Soup
- **The Global Table:** Curry/Stew, Rice, Naan, Samosas

All menus display dietary badges: "Halal Option," "Vegetarian Friendly," "Gluten-Free Available"

### 5. Inquiry Form
- Organization type dropdown with conditional messaging
- Corporate selection shows priority message for non-profits
- Clean, professional form using Shadcn components

## 🎨 Color Palette

- **Sage Green:** Primary brand color (warm, nurturing)
- **Terracotta:** Accent color (warm, earthy)
- **Cream:** Background tones (soft, welcoming)
- **Slate Grey:** Professional text and borders

## 🚀 Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📝 Notes

- All availability data is currently mocked for demonstration
- Form submissions are logged to console (ready for backend integration)
- Calendar uses react-day-picker for date selection
- All animations use Framer Motion for smooth, premium feel

## 🤝 Contributing

This is a prototype for Dan's Legacy Catering. For production deployment, consider:
- Backend API integration for availability management
- Payment processing integration
- Email notification system
- Admin dashboard for calendar management

---

Built with ❤️ for Dan's Legacy

