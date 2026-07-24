import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MOCK_COMPARISON_DATA, type ComparisonRow } from '../../data/mockProducts';
import { FlaskConical, TrendingUp, Heart, Scale, Award } from 'lucide-react';

// ── Helper: render a metric cell with the right pill class ────────────────

const MetricCell: React.FC<{ data: ComparisonRow['fcrImprovement'] | ComparisonRow['avgDailyGain'] | ComparisonRow['gutHealthScore'] | ComparisonRow['doseRate'] }> = ({ data }) => {
  const pillClass =
    data.tier === 'best' ? 'metric-pill-best' :
    data.tier === 'std'  ? 'metric-pill-std'  :
    'metric-pill-info';

  return (
    <td className="metrics-table-cell">
      <span className={pillClass}>{data.value}</span>
    </td>
  );
};

// ── Column header definitions ─────────────────────────────────────────────

const COLUMNS = [
  { key: 'fcrImprovement', label: 'FCR Improvement', sublabel: 'vs. control', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  { key: 'avgDailyGain',   label: 'Avg. Daily Gain',  sublabel: 'vs. control', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  { key: 'gutHealthScore', label: 'Gut Health Score',  sublabel: 'out of 10',  icon: <Heart className="w-3.5 h-3.5" /> },
  { key: 'doseRate',       label: 'Dose Rate',         sublabel: 'inclusion',  icon: <Scale className="w-3.5 h-3.5" /> },
  { key: 'certifications', label: 'Certifications',    sublabel: 'standards',  icon: <Award className="w-3.5 h-3.5" /> },
] as const;

// ── Row animation variants ────────────────────────────────────────────────

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

// ── Main Component ────────────────────────────────────────────────────────

export const ScannableMetricsTable: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Section intro */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-200 text-xs font-bold uppercase tracking-widest">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Scannable Science</span>
          </div>
          <p className="text-sm text-slate-400 italic">
            Field-trial benchmarks · ISO-verified data · Per-species efficacy
          </p>
        </div>
        <div className="sm:hidden text-xs text-teal-300/80 font-medium flex items-center gap-1">
          <span>← Swipe table →</span>
        </div>
      </div>

      {/* Scrollable table wrapper */}
      <div className="metrics-table-wrapper">
        <table className="metrics-table" role="table" aria-label="Species efficacy comparison table">
          <thead>
            <tr>
              {/* Sticky species column header */}
              <th className="col-sticky" scope="col" style={{ textAlign: 'left' }}>
                Species
              </th>
              {COLUMNS.map((col) => (
                <th key={col.key} scope="col">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1.5 justify-center">
                      {col.icon}
                      <span>{col.label}</span>
                    </div>
                    <span style={{ opacity: 0.6, fontSize: '0.65rem', fontWeight: 400, textTransform: 'none', letterSpacing: '0' }}>
                      {col.sublabel}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_COMPARISON_DATA.map((row, idx) => (
              <motion.tr
                key={row.species}
                custom={idx}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {/* Sticky species name cell */}
                <td className="col-sticky" style={{ textAlign: 'left' }}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl leading-none" role="img" aria-hidden="true">
                      {row.icon}
                    </span>
                    <div>
                      {/* text-slate-100: bright white-ish — readable on dark teal row */}
                      <div className="font-bold text-slate-100 text-sm">{row.species}</div>
                    </div>
                  </div>
                </td>

                {/* FCR */}
                <MetricCell data={row.fcrImprovement} />

                {/* ADG */}
                <MetricCell data={row.avgDailyGain} />

                {/* Gut Health */}
                <MetricCell data={row.gutHealthScore} />

                {/* Dose Rate */}
                <MetricCell data={row.doseRate} />

                {/* Certifications — plain text, light on dark bg */}
                <td>
                  <span className="text-xs text-slate-300 font-medium leading-snug">
                    {row.certifications}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer disclaimer — light text on dark bg */}
      <p className="mt-3 text-xs text-slate-400 italic leading-relaxed">
        * Data sourced from controlled field trials (n &ge; 500 animals per group, &ge; 90 days duration). FCR &amp; ADG improvements are relative to unsupplemented control groups under equivalent husbandry conditions. Individual results may vary.
      </p>
    </motion.div>
  );
};
