import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl my-12 relative overflow-hidden shadow-xl border border-slate-800">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4">
          Ready To Scale Your Sales?
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
          Your Store, Our Strategy — <br className="hidden sm:block" />
          <span className="text-amber-400">Profits Made Simple.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Join over 100+ Indian sellers leveraging our complete Amazon, Flipkart, and Meesho account management, listing optimization, and performance marketing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all shadow-lg hover:shadow-amber-500/25"
          >
            <span>Get Free Store Audit</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="tel:+919302757694"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base transition-colors border border-slate-700"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>+91-9302757694</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Dedicated Account Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Transparent Weekly Reports</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>No Hidden Costs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
