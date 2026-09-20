import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ShoppingBag,
  Award,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Layers,
  Sparkles,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Award,
    title: 'Marketplace Expertise',
    description:
      'In-depth mastery of Amazon, Flipkart, and Meesho search ranking algorithms, catalog standards, and platform advertising policies.',
    highlight: 'Multi-Marketplace Mastery',
  },
  {
    icon: Layers,
    title: 'Complete E-commerce Support',
    description:
      'From account onboarding, product listing, and A+ content to PPC advertising and GST/trademark registration—all under one roof.',
    highlight: 'End-to-End Solutions',
  },
  {
    icon: Target,
    title: 'Seller-focused Strategy',
    description:
      'Customized growth roadmaps built specifically around your brand, category dynamics, inventory levels, and profit margins.',
    highlight: 'Tailored Seller Roadmap',
  },
  {
    icon: TrendingUp,
    title: 'Growth-oriented Approach',
    description:
      'Data-driven campaign optimization and proactive account health management to deliver consistent, compounding sales increases.',
    highlight: 'Measurable ROI & RoAS',
  },
];

const statsData = [
  { value: '100+', label: 'Active Sellers Managed', detail: 'Across Amazon, Flipkart & Meesho' },
  { value: '10,000+', label: 'Listings Created & Optimized', detail: 'Keyword-rich SEO & indexing' },
  { value: '3x+', label: 'Average Sales Growth', detail: 'Consistent monthly scaling' },
  { value: '99%', label: 'Seller Satisfaction', detail: 'Dedicated support & reporting' },
];

export const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      <main className="grow">
        {/* HERO / HEADER */}
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
              About Us
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              About Ecomprime Handlers
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              "Your store, our strategy — profits made simple." We help Indian sellers unlock sustainable growth on Amazon, Flipkart, and Meesho through specialized management and marketing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/25"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700"
              >
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CORE OVERVIEW & BUILT FOR INDIAN SELLERS */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Overview Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
                  Our Background
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Empowering Indian E-Commerce Businesses to Succeed
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Ecomprime Handlers is an e-commerce service provider committed to helping Indian brands, manufacturers, and traders build thriving online storefronts. Headquartered in Jabalpur, Madhya Pradesh, our team combines hands-on marketplace know-how with modern growth techniques.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  We provide complete e-commerce solutions including onboarding, listing optimization, ads management, GST/brand/trademark registration, and creative A+ content. With our professional services, your products get higher visibility, faster sales growth, and you save valuable time while growing your business hassle-free.
                </p>

                <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Headquarters</h4>
                      <p className="text-xs text-slate-500">Jabalpur, Madhya Pradesh, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Business Hours</h4>
                      <p className="text-xs text-slate-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Built for Indian Sellers */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-bl-full pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg sm:text-xl">Built for Indian Sellers</h3>
                      <p className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
                        Tailored for Indian Market Realities
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Our services are specially designed to help Indian sellers with smooth onboarding, optimized listings, ad management, and brand registration—so you can grow faster in today’s e-commerce market.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 text-xs sm:text-sm">
                      <span className="font-medium text-slate-200">Amazon Managed Services</span>
                      <span className="text-amber-400 font-semibold">Storefront & PPC</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 text-xs sm:text-sm">
                      <span className="font-medium text-slate-200">Flipkart Growth Partner</span>
                      <span className="text-amber-400 font-semibold">Catalog & PLA Ads</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 text-xs sm:text-sm">
                      <span className="font-medium text-slate-200">Meesho Sales Specialist</span>
                      <span className="text-amber-400 font-semibold">Order Volume Boost</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Handling over 10,000+ SKU catalogs nationwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY 100+ SELLERS */}
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="Track Record"
              title="Trusted by 100+ Sellers"
              description="Over 100+ sellers rely on our professional onboarding, listing, and growth services to boost their visibility, increase sales, and build successful e-commerce businesses."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl font-black text-amber-600 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" />
                <span>Dedicated Account Managers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>100% Policy Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Transparent Weekly Reporting</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span>Compounding Sales Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="Our Advantages"
              title="Why Choose Us"
              description="We combine operational rigor with cutting-edge marketplace strategies to help your brand stand out and outrank competitors."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {whyChooseItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-5 border border-amber-200">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-amber-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
