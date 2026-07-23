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
    className="relative py-24 bg-white border-b border-slate-200/60 overflow-hidden bg-grid-pattern"
  >
    {/* ── Ambient orbs ────────────────────────────────────────── */}
    <div className="absolute top-10 left-10 w-96 h-96 bg-brand-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-forest-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-float-slow" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: header + company description ─────────────────── */}
        <div className="lg:col-span-6 space-y-6">
          <SectionHeader
            align="left"
            tag="Our Company"
            title="Tai Chi Newtech Inc."
            description="A Life Science Company committed to the Balance of Nature through precision feed additives."
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-4 text-slate-600 text-base leading-relaxed"
          >
            <p>
              Our operation started in <strong>2016</strong> pioneering the distribution of novel,
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
            <ul className="pt-2 space-y-2">
              {[
                'Safe, cost-effective, and pro-environmental products',
                'Research-backed formulations with field-validated efficacy',
                'Technical service extensions and customized premix solutions',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-600 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Right: stats grid ───────────────────────────────────── */}
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
            />
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);
