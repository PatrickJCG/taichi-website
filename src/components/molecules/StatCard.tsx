import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

export interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, sublabel, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border-card bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-teal-glow transition-all duration-300 group"
    >
      {/* Optional icon */}
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-brand-teal-50 border border-brand-teal-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      {/* Animated counter value */}
      <div className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading stat-value-gradient leading-none">
        <AnimatedCounter value={value} duration={2.0} />
      </div>

      {/* Primary label */}
      <div className="text-sm font-semibold text-slate-700 mt-3 leading-snug">
        {label}
      </div>

      {/* Optional sub-label (units / context) */}
      {sublabel && (
        <div className="text-xs text-slate-400 mt-1 font-medium">
          {sublabel}
        </div>
      )}
    </motion.div>
  );
};
