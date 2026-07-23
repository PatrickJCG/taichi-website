import React from 'react';
import { motion } from 'framer-motion';

export interface QualityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  certCode?: string;  // e.g. "ISO 22000:2018" — rendered as amber mono badge
  delay?: number;
}

export const QualityCard: React.FC<QualityCardProps> = ({
  title,
  description,
  icon,
  certCode,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-teal-200/80 transition-all duration-300 flex flex-col group"
    >
      {/* Cert code pill — amber monospace */}
      {certCode && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-amber-50 border border-brand-amber-300/60 text-brand-amber-800 cert-code text-xs">
            {certCode}
          </span>
        </div>
      )}

      {/* Icon container — gradient background */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal-50 to-brand-forest-50 border border-brand-teal-100/70 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-brand-teal-700 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
