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
      id="products"
      className="relative overflow-hidden py-20 border-b border-slate-200/80"
      style={{
        background:
          'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 45%, #ECFDF5 100%)',
      }}
    >
      {/* ── Top Subtle Glow Divider ─────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

      {/* ── Bio-Science Feed Additive Subtle SVG Background Pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden" aria-hidden="true">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="feedAdditivePatternHome" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 30 0 L 60 17.32 L 60 51.96 L 30 69.28 L 0 51.96 L 0 17.32 Z"
                fill="none"
                stroke="rgba(13, 148, 136, 0.12)"
                strokeWidth="1"
              />
              <circle cx="30" cy="0" r="2.5" fill="rgba(5, 150, 105, 0.18)" />
              <circle cx="60" cy="17.32" r="2" fill="rgba(13, 148, 136, 0.15)" />
              <circle cx="0" cy="17.32" r="2" fill="rgba(13, 148, 136, 0.15)" />
              <circle cx="30" cy="34.64" r="3" fill="rgba(16, 185, 129, 0.22)" />
              <line x1="30" y1="0" x2="30" y2="34.64" stroke="rgba(13, 148, 136, 0.1)" strokeWidth="0.8" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#feedAdditivePatternHome)" />
        </svg>
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Section Header */}
        <SectionHeader
          tag="Product Catalog"
          title="Precision Animal Feed Additives"
          description="Precision-engineered feed additive formulations spanning specialty bioactives, functional acidifiers, nutritional premixes, and commodity ingredients."
          align="center"
          className="mb-12"
        />

        {/* ── Product grid (identical cards as catalog page) ───────────────── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-14">
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
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              >
                <ProductCard
                  product={product}
                  dark={false}
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
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent to-teal-500/30" />

          <div className="text-center space-y-3">
            <p className="text-slate-600 text-xs font-semibold">
              Showing <span className="font-extrabold text-teal-800">{PREVIEW_LIMIT}</span> of{' '}
              <span className="font-extrabold text-slate-900">{totalCount}</span> feed formulations
            </p>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-extrabold text-sm text-white
                bg-gradient-to-r from-teal-700 to-emerald-700
                hover:from-teal-800 hover:to-emerald-800
                shadow-lg shadow-teal-700/25 hover:shadow-teal-700/40
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Explore Full Product Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="hidden sm:block h-px flex-1 bg-gradient-to-l from-transparent to-teal-500/30" />
        </motion.div>

      </div>
    </section>
  );
};
