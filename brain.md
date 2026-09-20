# Ecomprime Handlers Project

## Stack
- **Framework**: React 19 + Vite 8
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Quality Tooling**: ESLint 10, Prettier 3

## Reference
- **URL**: `https://sites.google.com/view/ecomprimehandlers/home/`
- **Identity**: E-commerce service provider for Indian sellers scaling on Amazon, Flipkart, and Meesho.
- **Tagline**: "Your store, our strategy — profits made simple."
- **Contact Info**: +91-9302757694 | ecomprimehandlers04@gmail.com | Jabalpur, Madhya Pradesh

## Completed
- Initialized production-ready React + Vite + TypeScript project.
- Established centralized visual design system matching the reference website identity.
- Built responsive shared `Navbar` component with desktop navigation and mobile drawer.
- Built responsive shared `Footer` component with contact info, business hours, and copyright.
- Built reusable modular UI components (`SectionTitle`, `PlatformCard`, `ServiceCard`, `CTASection`).
- Built complete, responsive `Home` page with Hero, Marketplace focus, Core Services grid, Stats, and CTAs.
- Passed all lint (`npm run lint`) and production build checks (`npm run build`).

## Design System
- **Primary Accent**: Amber Gold (`#EAB308` / `bg-amber-500` / `bg-amber-600`)
- **Dark Neutral**: Deep Slate (`#0F172A` / `slate-900`)
- **Light Surface**: Warm Light (`#FAFAFA` / `slate-50`, `#FFFFFF`)
- **Typography**: Sans-serif system / Inter scale with tight headings (`tracking-tight font-extrabold`)
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Buttons**:
  - Primary CTA: Amber Gold background, dark text, rounded-xl (`bg-amber-500 hover:bg-amber-600 font-bold px-6 py-3.5`)
  - Secondary CTA: Outline / Solid Slate (`bg-white border border-slate-300` or `bg-slate-900 text-white`)
- **Cards**: White surface (`bg-white`), 1px slate border (`border-slate-200`), subtle shadow (`shadow-xs hover:shadow-md`)

## Components
- `Navbar.tsx`: Shared header with logo, navigation links, quick call CTA, and mobile navigation drawer.
- `Footer.tsx`: Shared footer with brand details, quick links, contact info, working hours, and copyright.
- `SectionTitle.tsx`: Reusable section heading with badge, main title, and description.
- `PlatformCard.tsx`: Marketplace highlight card for Amazon, Flipkart, and Meesho.
- `ServiceCard.tsx`: Service highlight card with icon, title, description, and tags.
- `CTASection.tsx`: Conversion call-to-action banner for consultation inquiries.

## Pages
- **Home**: Completed (`src/pages/Home.tsx`)
- **Services**: Placeholder (`src/pages/Services.tsx`)
- **About**: Placeholder (`src/pages/About.tsx`)
- **Gallery**: Placeholder (`src/pages/Gallery.tsx`)
- **Contact**: Placeholder (`src/pages/Contact.tsx`)

## Assets
- SVG Icons from `lucide-react` (ShoppingBag, TrendingUp, Search, Megaphone, Box, FileCheck, Palette, Phone, Mail, MapPin, Clock, etc.).
- Image placeholders integrated; local image directory created at `src/assets/images/`.

## Important Decisions
- **Tailwind v4 Setup**: Uses `@tailwindcss/vite` plugin with `@import "tailwindcss";` in `src/index.css`.
- **Router Navigation**: Used `NavLink` for active state indication; mobile menu closes on link selection directly without state-in-effect issues.
- **Routing Preservation**: Maintained existing routes (`/`, `/services`, `/about`, `/gallery`, `/contact`).

## Next Task
Next task: implement Services page using the established design system and reference website.
