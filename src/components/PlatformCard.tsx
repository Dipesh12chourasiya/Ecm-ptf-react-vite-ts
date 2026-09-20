import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlatformCardProps {
  name: string;
  badge: string;
  badgeBg: string;
  description: string;
  features: string[];
}

export const PlatformCard = ({
  name,
  badge,
  badgeBg,
  description,
  features,
}: PlatformCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
      {/* Top Accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${badgeBg}`} />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeBg} text-white shadow-2xs uppercase tracking-wider`}>
            {badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
          {name}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        <ul className="space-y-2.5 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors"
        >
          <span>Explore Platform Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PlatformCard;
