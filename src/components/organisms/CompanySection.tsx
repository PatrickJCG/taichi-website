import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_STATS } from '../../data/mockProducts';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../atoms';
import { StatCard } from '../molecules';

// ─── Stat sublabels — one per MOCK_STATS entry ────────────────────────────
const STAT_SUBLABELS = [
  'Pioneered in the Philippines',
  'Southeast Asia & Global Expansions',
  'Certified Batch Quality',
  'Explore | Research | Sustain',
];

export const CompanySection: React.FC = () => (
  <section
    id="company"
    className="relative py-24 overflow-hidden border-t border-b border-teal-500/20"
    style={{
      background:
        'linear-gradient(165deg, #041319 0%, #062620 25%, #0A4337 55%, #072B23 80%, #041319 100%)',
    }}
  >
    {/* ── Top & Bottom Glowing Divider Lines ──────────────────── */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

    {/* ── Subtle Hexagon Bio-Tech Background Pattern Overlay ──── */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full opacity-20" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexGridPatternCompany" width="60" height="104" patternUnits="userSpaceOnUse">
            <path
              d="M 30 0 L 60 17.32 L 60 51.96 L 30 69.28 L 0 51.96 L 0 17.32 Z
                 M 30 104 L 60 86.68 L 60 51.96 M 0 51.96 L 0 86.68 L 30 104"
              fill="none"
              stroke="rgba(45, 212, 191, 0.12)"
              strokeWidth="0.8"
            />
            <circle cx="30" cy="0" r="1.5" fill="rgba(52, 211, 153, 0.25)" />
            <circle cx="60" cy="17.32" r="1.2" fill="rgba(45, 212, 191, 0.2)" />
            <circle cx="0" cy="17.32" r="1.2" fill="rgba(45, 212, 191, 0.2)" />
            <circle cx="60" cy="51.96" r="1.5" fill="rgba(52, 211, 153, 0.25)" />
            <circle cx="0" cy="51.96" r="1.5" fill="rgba(52, 211, 153, 0.25)" />
            <circle cx="30" cy="69.28" r="1.5" fill="rgba(45, 212, 191, 0.22)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGridPatternCompany)" />
      </svg>
    </div>

    {/* ── Radial Glow Orbs ─────────────────────────────────────── */}
    <div
      className="absolute top-0 left-10 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background:
          'radial-gradient(circle, rgba(13,148,136,0.30) 0%, rgba(15,118,110,0.10) 50%, transparent 70%)',
      }}
      aria-hidden
    />
    <div
      className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background:
          'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(5,150,105,0.08) 50%, transparent 70%)',
      }}
      aria-hidden
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: header + company description ─────────────────── */}
        <div className="lg:col-span-6 space-y-6">
          <SectionHeader
            align="left"
            tag="Our Company"
            title="Tai Chi Newtech Inc."
            description="A Life Science Company committed to the Balance of Nature through precision feed additives."
            className="[&_.section-tag]:bg-teal-500/20
              [&_.section-tag]:text-white
              [&_.section-tag]:font-extrabold
              [&_.section-tag]:border-teal-400/40
              [&_.section-tag]:backdrop-blur-md
              [&_h2]:text-white
              [&_h2]:drop-shadow-md
              [&_p]:text-slate-200
              [&_span]:from-teal-400
              [&_span]:to-emerald-400"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-4 text-slate-200 text-base leading-relaxed font-medium"
          >
            <p>
              Our operation started in <strong className="text-white font-extrabold">2016</strong> pioneering the distribution of novel,
              innovative, and cutting-edge feed additive products in the Philippines. Recognizing the
              need for safe, cost-effective, and pro-environmental farming solutions, we gradually
              expanded our footprint to Thailand, Vietnam, and Bangladesh.
            </p>
            <p>
              Today, Tai Chi Newtech Inc. is actively working on expansions in neighboring Southeast
              Asian nations like Indonesia and Malaysia, as well as global agribusiness markets
              including Turkey, Brazil, and South Africa.
            </p>
            <p>
              We collaborate with world-class, research-driven institutions and producers to partake
              in the sustainable growth of the animal industry, ensuring feed efficiency, gut health,
              and farm productivity are achieved in harmony.
            </p>

            {/* Key highlights */}
            <ul className="pt-2 space-y-2.5">
              {[
                'Safe, cost-effective, and pro-environmental products',
                'Research-backed formulations with field-validated efficacy',
                'Technical service extensions and customized premix solutions',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-100 font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Right: stats grid (Dark cards) ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-6 grid grid-cols-2 gap-6"
        >
          {MOCK_STATS.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              label={stat.label}
              sublabel={STAT_SUBLABELS[idx]}
              dark={true}
            />
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);
