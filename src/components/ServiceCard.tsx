import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  tags,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-5">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
