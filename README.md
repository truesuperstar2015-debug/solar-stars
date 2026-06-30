# ☀️ Solar Stars — Multi-Platform Solar Energy Solution

A comprehensive digital platform for Solar Stars, including a high-conversion landing page, customer portal, and cross-platform mobile app.

## 🏗️ Architecture

This is a **Turborepo monorepo** with the following structure:

```
solar-stars/
├── apps/
│   ├── web/        → Next.js 14 (Landing Page + Customer Portal)
│   └── mobile/     → React Native / Expo (iOS + Android)
├── packages/
│   ├── ui/         → Shared UI components
│   ├── types/      → TypeScript type definitions
│   ├── config/     → Shared configuration
│   └── utils/      → Shared utility functions
└── supabase/       → Database migrations & edge functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- pnpm 9+
- Expo CLI (for mobile)

### Installation

```bash
git clone https://github.com/truesuperstar2015-debug/solar-stars.git
cd solar-stars
pnpm install
cp apps/web/.env.example apps/web/.env.local
pnpm dev
```

## 📱 Features

### Landing Page (solarstars.net)
- Hero section with clear value proposition
- Interactive Solar Savings Calculator
- Service descriptions (Residential, Commercial, Battery, Maintenance)
- Customer testimonials & multi-step quote form
- SEO optimized, mobile-first design

### Customer Portal
- Energy production monitoring dashboard
- Project tracker (Domino's-style progress)
- Document repository, Billing, Support tickets
- Referral program ($500 per conversion)

### Mobile App (iOS + Android)
- All portal features in native mobile experience
- Push notifications, biometric auth, offline support
- Quick-dial: (845) 444-1915

## 📞 Contact

- **Phone:** (845) 444-1915
- **Email:** tolin@solarstars.net
- **Website:** https://solarstars.net

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Web | Next.js 14 (App Router) |
| Mobile | React Native (Expo) |
| Styling | Tailwind CSS + NativeWind |
| Database | PostgreSQL (Supabase) |
| Auth | NextAuth.js + Supabase Auth |
| Payments | Stripe |
| Deployment | Vercel + EAS |

## 📄 License

Proprietary — Solar Stars © 2025
