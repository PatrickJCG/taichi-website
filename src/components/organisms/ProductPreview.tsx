import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import type { Product } from '../../data/mockProducts';
import { SectionHeader } from '../atoms';
import { ProductCard } from '../molecules';

// ─── Config ───────────────────────────────────────────────────────────────────
/** Number of cards to show in the preview grid. */
const PREVIEW_LIMIT = 6;

/** Priority order for function categories in the preview. */
const CATEGORY_PRIORITY = [
  'Specialty Products',
  'Functional Feed Additives',
  'Nutritional Feed Additives',
  'Commodity Products',
];

/** Sort products so Specialty Products appear first, then follow CATEGORY_PRIORITY. */
function getSortedPreviewProducts(): Product[] {
  return [...MOCK_PRODUCTS].sort((a, b) => {
    const aRank = CATEGORY_PRIORITY.indexOf(a.functionCategory);
    const bRank = CATEGORY_PRIORITY.indexOf(b.functionCategory);
    const aOrder = aRank === -1 ? CATEGORY_PRIORITY.length : aRank;
    const bOrder = bRank === -1 ? CATEGORY_PRIORITY.length : bRank;
    return aOrder - bOrder;
  });
}

// ─── Props ────────────────────────────────────────────────────────────────────
export interface ProductPreviewProps {
  inquiryItems: Product[];
  onToggleInquiry: (product: Product) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
export const ProductPreview: React.FC<ProductPreviewProps> = ({
  inquiryItems,
  onToggleInquiry,
}) => {
  const previewProducts = getSortedPreviewProducts().slice(0, PREVIEW_LIMIT);
  const totalCount = MOCK_PRODUCTS.length;
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden border-b border-teal-900/60"
      style={{
        background:
          'linear-gradient(160deg, #071520 0%, #083D32 22%, #0D5E4E 42%, #0A4035 62%, #06231D 80%, #071520 100%)',
      }}
    >
      {/* ── Background decorations ─────────────────────────────── */}
      {/* Diagonal accent band */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(110deg, transparent 0%, rgba(13,148,136,0.10) 35%, rgba(45,106,79,0.08) 55%, transparent 80%)',
        }}
        aria-hidden
      />
      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(94,234,212,0.06) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(94,234,212,0.06) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      {/* Glow orbs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(13,148,136,0.40) 0%, rgba(15,118,110,0.18) 45%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(45,106,79,0.35) 0%, rgba(26,74,53,0.16) 45%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Section Header */}
        <SectionHeader
          tag="Featured Products"
          title="Our Product Portfolio"
          description="Precision-engineered feed additive solutions spanning specialty bioactives, functional additives, nutritional premixes, and commodity ingredients."
          className="mb-12
            [&_.section-tag]:bg-teal-400/15
            [&_.section-tag]:text-teal-200
            [&_.section-tag]:border-teal-400/40
            [&_.section-tag]:backdrop-blur-sm
            [&_h2]:text-white
            [&_h2]:drop-shadow-lg
            [&_p]:text-slate-200
            [&_span]:bg-gradient-to-r
            [&_span]:from-teal-400
            [&_span]:to-emerald-400"
        />

        {/* ── Product grid ─────────────────────────────────────── */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {previewProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
                transition={{
                  duration: 0.48,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              >
                <ProductCard
                  product={product}
                  dark
                  isAddedToInquiry={inquiryItems.some(item => item.id === product.id)}
                  onToggleInquiry={onToggleInquiry}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View All CTA ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Divider lines flanking the CTA */}
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent to-teal-400/30" />

          <div className="text-center space-y-3">
            <p className="text-slate-300 text-sm">
              Showing <span className="font-bold text-teal-300">{PREVIEW_LIMIT}</span> of{' '}
              <span className="font-bold text-slate-200">{totalCount}</span> products
            </p>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base text-white
                bg-gradient-to-r from-teal-600 to-emerald-600
                hover:from-teal-500 hover:to-emerald-500
                shadow-lg shadow-teal-600/30 hover:shadow-teal-500/40
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Sparkles className="w-4 h-4" />
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="hidden sm:block h-px flex-1 bg-gradient-to-l from-transparent to-teal-400/30" />
        </motion.div>

      </div>
    </section>
  );
};
