import React from 'react';
import { motion } from 'framer-motion';

export interface QualityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  certCode?: string;
  delay?: number;
  dark?: boolean;
}

export const QualityCard: React.FC<QualityCardProps> = ({
  title,
  description,
  icon,
  certCode,
  delay = 0,
  dark = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={[
        'rounded-2xl p-6 transition-all duration-300 flex flex-col group relative overflow-hidden',
        dark
          ? 'bg-slate-900/80 border border-teal-500/30 backdrop-blur-xl shadow-xl hover:border-teal-400/60'
          : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-teal-200/80',
      ].join(' ')}
    >
      {/* Cert code pill */}
      {certCode && (
        <div className="mb-3">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
              dark
                ? 'bg-amber-500/20 border border-amber-400/40 text-amber-300'
                : 'bg-brand-amber-50 border border-brand-amber-300/60 text-brand-amber-800'
            }`}
          >
            {certCode}
          </span>
        </div>
      )}

      {/* Icon + Title header in one line */}
      <div className="flex items-center gap-3.5 mb-3">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm ${
            dark
              ? 'bg-teal-500/20 border border-teal-400/40 text-teal-300'
              : 'bg-gradient-to-br from-brand-teal-50 to-brand-forest-50 border border-brand-teal-100/70'
          }`}
        >
          {icon}
        </div>

        <h3
          className={`text-base sm:text-lg font-bold font-heading transition-colors duration-200 ${
            dark ? 'text-white group-hover:text-teal-300' : 'text-slate-900 group-hover:text-brand-teal-700'
          }`}
        >
          {title}
        </h3>
      </div>
      <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300 font-medium' : 'text-slate-600'}`}>
        {description}
      </p>
    </motion.div>
  );
};
