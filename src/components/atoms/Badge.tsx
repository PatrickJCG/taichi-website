import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sectionTag' | 'productBadge' | 'speciesGreen' | 'speciesBlue' | 'certBadge' | 'metricTag';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sectionTag',
  className = '',
  icon
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 font-semibold transition-all duration-200';

  const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
    // Section label pills — teal
    sectionTag:   'text-xs uppercase tracking-widest bg-brand-teal-50 text-brand-teal-800 px-3.5 py-1 rounded-full border border-brand-teal-200/70 shadow-sm',
    // Product card header badge — white glassmorphism
    productBadge: 'text-xs bg-white/95 backdrop-blur-md text-brand-teal-900 px-3 py-1 rounded-full border border-brand-teal-100/80 shadow-sm',
    // Species tag — forest green (primary)
    speciesGreen: 'text-xs bg-brand-teal-50/70 text-brand-teal-800 px-2.5 py-1 rounded-md border border-brand-teal-200/60',
    // Species tag — slate (secondary / info)
    speciesBlue:  'text-xs bg-slate-100/80 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70',
    // Certification badge — warm amber/gold (ISO, FAMI-QS, GMP+)
    certBadge:    'text-xs bg-brand-amber-50 text-brand-amber-800 px-3 py-1 rounded-full border border-brand-amber-300/60 shadow-sm font-bold tracking-wide',
    // Efficacy metric tag — forest green, monospace numerals
    metricTag:    'text-xs bg-brand-forest-50 text-brand-forest-700 px-2.5 py-1 rounded-md border border-brand-forest-200/60 font-mono',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
};
