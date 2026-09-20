# Ecom Account Manager Project

## Stack
- **Framework**: React 19 + Vite 8
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Quality Tooling**: ESLint 10, Prettier 3

## Reference
- **URL**: `https://sites.google.com/view/ecomprimehandlers/home/`
- **Identity**: E-commerce service provider for Indian sellers scaling on Amazon, Myntra, and Meesho.
- **Tagline**: "Your store, our strategy — profits made simple."
- **Contact Info**: +91-9993055674 | ecomlistingexpert@gmail.com | Indore, Madhya Pradesh

## Completed
- Initialized production-ready React + Vite + TypeScript project.
- Established centralized visual design system matching the reference website identity.
- Built responsive shared `Navbar` component with desktop navigation and mobile drawer.
- Built responsive shared `Footer` component with contact info, business hours, and copyright.
- Built reusable modular UI components (`SectionTitle`, `PlatformCard`, `ServiceCard`, `CTASection`).
- Built complete, responsive `Home` page with Hero, Marketplace focus, Core Services grid, Stats, and CTAs.
- Configured Vercel deployment SPA rewrites (`vercel.json`) to fix client-side routing 404 issues on direct URL navigation/refresh.
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
- `PlatformCard.tsx`: Marketplace highlight card for Amazon, Myntra, and Meesho.
- `ServiceCard.tsx`: Service highlight card with icon, title, description, and tags.
- `CTASection.tsx`: Conversion call-to-action banner for consultation inquiries.

## Pages
- **Home**: Completed (`src/pages/Home.tsx`)
- **Services**: Completed (`src/pages/Services.tsx`) - full breakdown, 4-step workflow, platform matrices, FAQ, reused CTASection
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
- **CTA Component Constraint**: Do not create any new CTA component; strictly reuse or adapt the existing `CTASection.tsx` across pages to maintain design consistency and avoid component proliferation.

## Deployment / Vercel
- **Deployment Platform**: Vercel
- **Framework**: Vite 8 + React 19 (Single Page Application)
- **Build Command**: `npm run build` (`tsc -b && vite build`)
- **Output Directory**: `dist`
- **Root Directory**: `./` (Project Root)
- **Required Environment Variables**: None
- **Discovered Problem**: Direct URL navigation or page refreshes on nested client-side routes (`/services`, `/about`, `/contact`) resulted in Vercel returning a 404 NOT_FOUND error because Vercel looked for server-side static files corresponding to those paths.
- **Fix Applied**: Created `vercel.json` in project root with SPA rewrite rule `{"source": "/(.*)", "destination": "/index.html"}` to direct all non-file route traffic to `index.html`.
- **Future Deployment Notes**: When deploying updates to Vercel, ensure Vercel framework preset is set to Vite with build command `npm run build` and output directory `dist`.

## Next Task
Next task: implement About or Gallery page using the established design system and reference website.

