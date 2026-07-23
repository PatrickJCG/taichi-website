import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Bird, PawPrint, Fish, ShieldCheck, FlaskConical, Sparkles, Boxes } from 'lucide-react';

export interface CategoryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  layoutId?: string;
  count?: number;
}

// Swine Pig Icon SVG Component
const SwineIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 11c0-3.867-3.133-7-7-7a7 7 0 0 0-7 7c0 2.87 1.73 5.335 4.2 6.42L8.5 20.5a1 1 0 0 0 1.4 1.3l1.8-1.8a7.02 7.02 0 0 0 4.6 0l1.8 1.8a1 1 0 0 0 1.4-1.3l-.7-3.08A7.006 7.006 0 0 0 19 11z" />
    <circle cx="10" cy="10" r="1" />
    <circle cx="14" cy="10" r="1" />
    <ellipse cx="12" cy="13" rx="2" ry="1.2" />
  </svg>
);

export const CategoryTab: React.FC<CategoryTabProps> = ({
  label,
  isActive,
  onClick,
  layoutId = "activeCatalogTab",
  count
}) => {
  const getCategoryIcon = (category: string) => {
    const norm = category.toLowerCase();
    if (norm.includes('swine'))       return <SwineIcon    className="w-4 h-4" />;
    if (norm.includes('poultry'))     return <Bird         className="w-4 h-4" />;
    if (norm.includes('pet'))         return <PawPrint     className="w-4 h-4" />;
    if (norm.includes('aqua'))        return <Fish         className="w-4 h-4" />;
    if (norm.includes('functional'))  return <ShieldCheck  className="w-4 h-4 text-emerald-400" />;
    if (norm.includes('nutritional')) return <FlaskConical className="w-4 h-4 text-teal-400" />;
    if (norm.includes('specialty'))   return <Sparkles     className="w-4 h-4 text-amber-400" />;
    if (norm.includes('commodity'))   return <Boxes        className="w-4 h-4 text-cyan-400" />;
    return <Grid className="w-4 h-4" />;
  };

  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      className={[
        'relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold',
        'transition-all duration-200 flex items-center gap-2',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        isActive
          // Active: solid gradient pill
          ? 'text-white shadow-md'
          // Inactive: glassmorphism dark pill
          : [
              'text-slate-300 hover:text-white',
              'bg-white/8 hover:bg-white/14',
              'border border-white/12 hover:border-teal-400/50',
              'backdrop-blur-sm',
            ].join(' '),
      ].join(' ')}
    >
      {/* Active pill background */}
      {isActive && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #0D9488 0%, #059669 100%)',
            boxShadow: '0 0 20px -4px rgba(13,148,136,0.7), 0 4px 12px -2px rgba(13,148,136,0.4)',
          }}
          transition={{ type: "spring", stiffness: 450, damping: 35 }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {getCategoryIcon(label)}
        <span>{label}</span>
        {count !== undefined && (
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            isActive ? 'bg-white/25 text-white' : 'bg-white/10 text-slate-300'
          }`}>
            {count}
          </span>
        )}
      </span>
    </button>
  );
};
