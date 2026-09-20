import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  TrendingUp,
  Award,
  Users,
  Search,
  Megaphone,
  Box,
  FileCheck,
  Palette,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import PlatformCard from '../components/PlatformCard';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

export const Home = () => {
  const platforms = [
    {
      name: 'Amazon Account Management',
      badge: 'Amazon Specialist',
      badgeBg: 'bg-amber-600',
      description:
        'Ecomprime Handlers helps you rank higher and sell more on Amazon with expert listing, ads, and complete account care.',
      features: [
        'Amazon Storefront Setup & Onboarding',
        'Keyword-rich Product Listing & SEO',
        'Amazon PPC Campaign & ROI Optimization',
        'FBA Prep, Labeling & Shipment Management',
        'Basic A+ & Premium A+ Content Design',
      ],
    },
    {
      name: 'Flipkart Growth Management',
      badge: 'Flipkart Partner',
      badgeBg: 'bg-blue-600',
      description:
        'Boost your Flipkart sales effortlessly—Ecomprime Handlers manages setup, campaigns, cataloging, and sales growth.',
      features: [
        'Flipkart Seller Onboarding & Account Verification',
        'Category Mapping & Catalog Upload',
        'Flipkart PLA Advertising & Promotions',
        'Order Fulfillment & Express Listing Setup',
        'Account Health & Performance Monitoring',
      ],
    },
    {
      name: 'Meesho Cataloging & Sales',
      badge: 'Meesho Expert',
      badgeBg: 'bg-pink-600',
      description:
        'Sell smarter on Meesho with Ecomprime Handlers—easy cataloging, order growth, and hassle-free dedicated support.',
      features: [
        'Rapid Meesho Catalog Upload & Mapping',
        'Competitive Pricing & Profitability Setup',
        'Meesho Advertisement & Smart Ads Boost',
        'Return & Dispute Minimization Strategy',
        'Hassle-free Order Growth Support',
      ],
    },
  ];

  const services = [
    {
      title: 'Listings Services & Onboarding',
      description:
        'Complete onboarding support on Amazon, Flipkart, and Meesho. From account creation to catalog setup, we make the process simple and professional.',
      icon: Box,
      tags: ['Account Setup', 'Cataloging', 'Multi-Platform'],
    },
    {
      title: 'Listing Optimization',
      description:
        'We optimize product listings with high-volume keywords, engaging titles, bullet points, and high-converting descriptions for higher search rankings.',
      icon: Search,
      tags: ['SEO', 'Keyword Research', 'Higher Rankings'],
    },
    {
      title: 'Ads & Sales Growth',
      description:
        'We run targeted advertising campaigns on Amazon, Flipkart, and Meesho to maximize visibility, increase traffic, and deliver superior return on ad spend (ROI).',
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
  ];

  const stats = [
    { label: 'Active Sellers Managed', value: '100+' },
    { label: 'Major E-commerce Platforms', value: '3+' },
    { label: 'Catalog Listings Created', value: '10,000+' },
    { label: 'Client Satisfaction Rate', value: '99%' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      <main className="grow">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-amber-500/10 via-white to-slate-50 py-16 sm:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>E-Commerce Service Provider</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Ecomprime <span className="text-amber-600">Handlers</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 leading-snug">
                  "Your store, our strategy — profits made simple."
                </p>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We help sellers boost their online business with expert account management, smart marketing, and guaranteed sales growth across <strong className="text-slate-900 font-semibold">Amazon</strong>, <strong className="text-slate-900 font-semibold">Flipkart</strong>, <strong className="text-slate-900 font-semibold">Meesho</strong>, and more.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-base transition-all shadow-md hover:shadow-lg hover:shadow-amber-500/20"
                  >
                    <span>Grow Your Sales Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-300 transition-colors shadow-2xs"
                  >
                    <span>View All Services</span>
                  </Link>
                </div>

                {/* Hero Feature Pills */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Amazon Managed Services</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Flipkart Campaign Care</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-pink-600" />
                    <span>Meesho Sales Boost</span>
                  </div>
                </div>
              </div>

              {/* Hero Image/Card Visual */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-2xl shadow-sm">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-lg">Ecomprime Handlers</h2>
                      <p className="text-xs text-slate-500 font-medium">Complete Store Growth Partner</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Proven Sales Growth</h3>
                        <p className="text-xs text-slate-600">Over 100+ sellers trust us for cataloging, PPC ads, and ranking boost.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Full Account Care</h3>
                        <p className="text-xs text-slate-600">From setup to daily inventory, listing SEO, and policy compliance.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <Users className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Dedicated Support</h3>
                        <p className="text-xs text-slate-600">Direct phone support, weekly performance reviews, transparent reports.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Base: Jabalpur, MP</span>
                    <span className="text-amber-600">Mon - Sat: 9 AM - 6 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARKETPLACES SECTION */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="Major Platforms Covered"
              title="Scale Your Brand Across India's Top Marketplaces"
              description="We deliver customized, end-to-end account management optimized specifically for Amazon, Flipkart, and Meesho algorithms."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, idx) => (
                <PlatformCard key={idx} {...platform} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES HIGHLIGHT SECTION */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="What We Offer"
              title="Complete E-Commerce Solutions Under One Roof"
              description="From listing creation to high-converting PPC campaigns and legal GST/brand registration—we handle everything so you can focus on inventory."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
              >
                <span>View Comprehensive Service Details</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA INQUIRY SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
