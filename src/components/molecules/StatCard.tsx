import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

export interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  dark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  sublabel,
  icon,
  dark = true,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'p-6 rounded-2xl text-center transition-all duration-300 group relative overflow-hidden',
        dark
          ? 'bg-slate-900/80 border border-teal-500/30 backdrop-blur-xl shadow-xl hover:border-teal-400/60 hover:shadow-teal-500/20'
          : 'gradient-border-card bg-white shadow-sm hover:shadow-teal-glow',
      ].join(' ')}
    >
      {/* Ambient background glow */}
      {dark && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-emerald-500/5 pointer-events-none" />
      )}

      {/* Optional icon */}
      {icon && (
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
            dark
              ? 'bg-teal-500/20 border border-teal-400/30 text-teal-300'
              : 'bg-brand-teal-50 border border-brand-teal-100'
          }`}
        >
          {icon}
        </div>
      )}

      {/* Animated counter value */}
      <div className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading leading-none text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 drop-shadow-md">
        <AnimatedCounter value={value} duration={2.0} />
      </div>

      {/* Primary label */}
      <div className={`text-sm font-extrabold mt-3 leading-snug ${dark ? 'text-white' : 'text-slate-700'}`}>
        {label}
      </div>

      {/* Optional sub-label */}
      {sublabel && (
        <div className={`text-xs mt-1 font-semibold ${dark ? 'text-teal-200/90' : 'text-slate-400'}`}>
          {sublabel}
        </div>
      )}
    </motion.div>
  );
};
