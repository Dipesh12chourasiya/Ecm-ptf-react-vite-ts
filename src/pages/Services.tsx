import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Box,
  Search,
  Megaphone,
  TrendingUp,
  Palette,
  FileCheck,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock,
  Headphones,
  Award,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

interface SupportItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    title: 'Listings Services & Onboarding',
    description:
      'Complete onboarding support on Amazon, Flipkart, and Meesho. From initial account verification to catalog setup, we ensure smooth and rapid marketplace launches.',
    icon: Box,
    tags: ['Account Setup', 'Cataloging', 'Multi-Platform'],
  },
  {
    title: 'Listing Optimization',
    description:
      'We optimize product listings with high-volume search keywords, engaging titles, bullet points, and high-converting descriptions for higher organic rankings.',
    icon: Search,
    tags: ['SEO', 'Keyword Research', 'Higher Rankings'],
  },
  {
    title: 'Ads & Sales Growth',
    description:
      'We run targeted advertising campaigns on Amazon, Flipkart, and Meesho to maximize visibility, increase qualified buyer traffic, and deliver superior return on ad spend (RoAS).',
    icon: Megaphone,
    tags: ['PPC Ads', 'ROI Boost', 'Campaign Management'],
  },
  {
    title: 'FBA Related Support',
    description:
      'End-to-end FBA management including inventory preparation, barcode labeling, warehouse shipment creation, and stock planning to scale hassle-free.',
    icon: TrendingUp,
    tags: ['FBA Prep', 'Inventory Planning', 'Logistics'],
  },
  {
    title: 'Images & Graphic Design',
    description:
      'Design engaging infographics, main images, and A+ Content / Premium A+ Content to showcase your brand professionally and drive conversions.',
    icon: Palette,
    tags: ['Infographics', 'A+ Content', 'Visual Branding'],
  },
  {
    title: 'Brand Store & Legal Services',
    description:
      'Quick and hassle-free GST registration, brand registry, and trademark filing services to keep your business secure and legally compliant.',
    icon: FileCheck,
    tags: ['GST Registration', 'Trademark', 'Brand Registry'],
  },
  {
    title: 'Account Health & Compliance',
    description:
      'Proactive monitoring of order defect rates (ODR), late dispatch rates, policy notifications, and defect disputes to ensure your seller accounts stay in good standing.',
    icon: ShieldCheck,
    tags: ['Account Health', 'Policy Compliance', 'Defect Care'],
  },
  {
    title: 'Pricing & Buy Box Strategy',
    description:
      'Competitor price benchmarking, buy box win strategies, and strategic deal participation across lightning deals and seasonal sales to maximize profit margins.',
    icon: ShoppingBag,
    tags: ['Buy Box', 'Pricing Strategy', 'Deal Optimization'],
  },
];

const processSteps: ProcessItem[] = [
  {
    step: '01',
    title: 'Free Catalog & Store Audit',
    description:
      'We inspect your active listings, keyword indexing, pricing, and advertising campaigns to identify immediate sales growth opportunities.',
  },
  {
    step: '02',
    title: 'Setup & SEO Optimization',
    description:
      'We rewrite product titles, structure bullet points, optimize backend search terms, and refine visual assets to maximize organic traffic.',
  },
  {
    step: '03',
    title: 'Targeted Ad Scaling',
    description:
      'We launch and optimize performance advertising campaigns across Amazon, Flipkart, and Meesho to drive profitable buyer traffic.',
  },
  {
    step: '04',
    title: 'Dedicated Support & Reporting',
    description:
      'Your dedicated account manager monitors daily account health, refines bids, and delivers transparent weekly performance reports.',
  },
];

const supportHighlights: SupportItem[] = [
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'A single dedicated point of contact who knows your catalog inside out.',
  },
  {
    icon: Clock,
    title: 'Weekly Performance Reports',
    description: 'Clear, transparent reports tracking sales growth, ad spend, and TACoS.',
  },
  {
    icon: Award,
    title: 'Multi-Marketplace Specialization',
    description: 'Cross-platform expertise spanning Amazon, Flipkart, and Meesho.',
  },
];

const ServicesHero = () => (
  <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
    <div
      className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4">
        Our Services
      </span>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
        Complete E-commerce Solutions for Your Business
      </h1>

      <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
        Ecomprime Handlers helps sellers manage and grow across major marketplaces including Amazon, Flipkart, and Meesho with complete operational and growth support.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/25"
        >
          <span>Request Free Audit</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <a
          href="tel:+919302757694"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700"
        >
          <Phone className="w-4 h-4 text-amber-400" aria-hidden="true" />
          <span>Call +91-9302757694</span>
        </a>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => (
  <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        subtitle="Full-Service Catalog"
        title="Specialized Marketplace Solutions"
        description="From listing creation to high-converting PPC campaigns and legal GST/brand registration—we handle everything so you can focus on inventory."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const ServicesProcess = () => (
  <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        subtitle="How We Work"
        title="Simple 4-Step Growth Process"
        description="A structured, transparent roadmap from initial catalog analysis to continuous marketplace scaling."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {processSteps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-slate-200 relative overflow-hidden flex flex-col justify-between"
          >
            <span
              className="text-4xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none select-none"
              aria-hidden="true"
            >
              {item.step}
            </span>

            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">
                {item.step}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-600">
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Structured Delivery</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportHighlights.map((sup, idx) => {
          const Icon = sup.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {sup.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sup.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      <Navbar />

      <main className="flex-1">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />

        {/* CTA INQUIRY SECTION (REUSED CTASECTION) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
