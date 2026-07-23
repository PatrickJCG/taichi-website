import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MOCK_CATEGORIES, MOCK_FUNCTION_CATEGORIES, MOCK_PRODUCTS } from '../../data/mockProducts';
import type { Product } from '../../data/mockProducts';
import { SectionHeader } from '../atoms';
import { CategoryTab, ProductCard, ScannableMetricsTable } from '../molecules';
import { PawPrint, Sparkles, SlidersHorizontal, RotateCcw, SearchX } from 'lucide-react';

// ─── Transparent Ball-and-Stick Molecular Model (SVG) ──────────────────────
interface MoleculeProps { rotate?: number; opacity?: number }

const MoleculeModel: React.FC<MoleculeProps> = ({ rotate = 0, opacity = 1 }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ transform: `rotate(${rotate}deg)`, opacity }}
    aria-hidden="true"
  >
    <defs>
      {/* Atom sphere gradients – 3-D glass look */}
      <radialGradient id="atTeal" cx="32%" cy="28%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#5EEAD4" stopOpacity="0.7" />
        <stop offset="75%" stopColor="#0D9488" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#0F766E" stopOpacity="0.8" />
      </radialGradient>
      <radialGradient id="atEm" cx="32%" cy="28%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#6EE7B7" stopOpacity="0.7" />
        <stop offset="75%" stopColor="#059669" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#047857" stopOpacity="0.8" />
      </radialGradient>
      <radialGradient id="atAmb" cx="32%" cy="28%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#FCD34D" stopOpacity="0.7" />
        <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.8" />
      </radialGradient>
      <radialGradient id="atGray" cx="32%" cy="28%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="40%" stopColor="#CBD5E1" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#64748B" stopOpacity="0.6" />
      </radialGradient>

      <linearGradient id="bondH" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#99F6E4" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="bondD" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#6EE7B7" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
      </linearGradient>

      <filter id="atomShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0D9488" floodOpacity="0.35" />
      </filter>
    </defs>

    {/* Bonds */}
    <line x1="200" y1="80" x2="270" y2="120" stroke="url(#bondH)" strokeWidth="9" strokeLinecap="round" />
    <line x1="270" y1="120" x2="270" y2="200" stroke="url(#bondH)" strokeWidth="9" strokeLinecap="round" />
    <line x1="270" y1="200" x2="200" y2="240" stroke="url(#bondH)" strokeWidth="9" strokeLinecap="round" />
    <line x1="200" y1="240" x2="130" y2="200" stroke="url(#bondH)" strokeWidth="9" strokeLinecap="round" />
    <line x1="130" y1="200" x2="130" y2="120" stroke="url(#bondH)" strokeWidth="9" strokeLinecap="round" />
    <line x1="130" y1="120" x2="200" y2="80" stroke="url(#bondH)" strokeWidth="9" strokeLinecap="round" />
    <line x1="200" y1="88" x2="263" y2="124" stroke="#ffffff" strokeWidth="3" strokeDasharray="7 5" opacity="0.55" />
    <line x1="263" y1="196" x2="200" y2="232" stroke="#ffffff" strokeWidth="3" strokeDasharray="7 5" opacity="0.55" />
    <line x1="137" y1="124" x2="137" y2="196" stroke="#ffffff" strokeWidth="3" strokeDasharray="7 5" opacity="0.55" />
    <line x1="200" y1="80" x2="200" y2="28" stroke="url(#bondD)" strokeWidth="9" strokeLinecap="round" />
    <line x1="270" y1="120" x2="330" y2="88" stroke="url(#bondD)" strokeWidth="9" strokeLinecap="round" />
    <line x1="270" y1="200" x2="330" y2="232" stroke="url(#bondD)" strokeWidth="9" strokeLinecap="round" />
    <line x1="130" y1="120" x2="70" y2="88" stroke="url(#bondD)" strokeWidth="9" strokeLinecap="round" />
    <line x1="200" y1="240" x2="200" y2="300" stroke="url(#bondD)" strokeWidth="9" strokeLinecap="round" />
    <line x1="130" y1="200" x2="70" y2="232" stroke="url(#bondD)" strokeWidth="9" strokeLinecap="round" />

    {/* Atoms */}
    <circle cx="200" cy="80" r="26" fill="url(#atTeal)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="270" cy="120" r="26" fill="url(#atTeal)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="270" cy="200" r="26" fill="url(#atTeal)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="200" cy="240" r="26" fill="url(#atTeal)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="130" cy="200" r="26" fill="url(#atTeal)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="130" cy="120" r="26" fill="url(#atTeal)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    {[[200, 80], [270, 120], [270, 200], [200, 240], [130, 200], [130, 120]].map(([cx, cy], i) => (
      <ellipse key={i} cx={cx - 8} cy={cy - 8} rx={8} ry={5} fill="white" opacity="0.7" transform={`rotate(-30,${cx - 8},${cy - 8})`} />
    ))}
    <circle cx="200" cy="28" r="20" fill="url(#atGray)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="330" cy="88" r="22" fill="url(#atAmb)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="330" cy="232" r="22" fill="url(#atEm)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="70" cy="88" r="22" fill="url(#atEm)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="200" cy="300" r="22" fill="url(#atAmb)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <circle cx="70" cy="232" r="18" fill="url(#atGray)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" filter="url(#atomShadow)" />
    <ellipse cx="192" cy="21" rx="6" ry="3.5" fill="white" opacity="0.72" />
    <ellipse cx="322" cy="81" rx="7" ry="4" fill="white" opacity="0.72" />
    <ellipse cx="322" cy="225" rx="7" ry="4" fill="white" opacity="0.72" />
    <ellipse cx="62" cy="81" rx="7" ry="4" fill="white" opacity="0.72" />
    <ellipse cx="192" cy="293" rx="7" ry="4" fill="white" opacity="0.72" />
    <text x="330" y="93" textAnchor="middle" fill="#78350F" fontSize="12" fontWeight="800" fontFamily="sans-serif" opacity="0.85">O</text>
    <text x="70" y="93" textAnchor="middle" fill="#064E3B" fontSize="12" fontWeight="800" fontFamily="sans-serif" opacity="0.85">N</text>
    <text x="330" y="237" textAnchor="middle" fill="#064E3B" fontSize="12" fontWeight="800" fontFamily="sans-serif" opacity="0.85">N</text>
    <text x="200" y="305" textAnchor="middle" fill="#78350F" fontSize="12" fontWeight="800" fontFamily="sans-serif" opacity="0.85">O</text>
    <text x="200" y="33" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="800" fontFamily="sans-serif" opacity="0.75">H</text>
  </svg>
);

type FilterMode = 'species' | 'function' | 'combined';

// ─── Main Component ────────────────────────────────────────────────────────
export interface ProductCatalogProps {
  inquiryItems: Product[];
  onToggleInquiry: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  inquiryItems,
  onToggleInquiry
}) => {
  const [filterMode, setFilterMode] = useState<FilterMode>('function');
  const [activeSpecies, setActiveSpecies] = useState('All');
  const [activeFunction, setActiveFunction] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFilter = (e: Event) => {
      const spec = (e as CustomEvent).detail;
      setActiveSpecies(spec);
      setFilterMode('species');
      const target = document.getElementById('products');
      if (target) {
        // Offset slightly to account for sticky navbar header
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const handleFilterFunction = (e: Event) => {
      const func = (e as CustomEvent).detail;
      setActiveFunction(func);
      setFilterMode('function');
      const target = document.getElementById('products');
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('filter-species', handleFilter);
    window.addEventListener('filter-function', handleFilterFunction);
    return () => {
      window.removeEventListener('filter-species', handleFilter);
      window.removeEventListener('filter-function', handleFilterFunction);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // Parallax transforms
  const mol1Y = useTransform(scrollYProgress, [0, 1], [-160, 160]);
  const mol2Y = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const mol1Rot = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const mol2Rot = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);



  const speciesOptions = ['All', ...MOCK_CATEGORIES];
  const functionOptions = ['All', ...MOCK_FUNCTION_CATEGORIES];

  // Multi-dimensional filtering logic
  const filtered = MOCK_PRODUCTS.filter(product => {
    const matchesSpecies = activeSpecies === 'All' || product.category === activeSpecies;
    const matchesFunction = activeFunction === 'All' || product.functionCategory === activeFunction;

    if (filterMode === 'species') return matchesSpecies;
    if (filterMode === 'function') return matchesFunction;
    return matchesSpecies && matchesFunction;
  });

  const isFiltered = activeSpecies !== 'All' || activeFunction !== 'All';

  const resetFilters = () => {
    setActiveSpecies('All');
    setActiveFunction('All');
  };

  // Helper count functions
  const getSpeciesCount = (spec: string) => {
    if (spec === 'All') return MOCK_PRODUCTS.length;
    return MOCK_PRODUCTS.filter(p => p.category === spec).length;
  };

  const getFunctionCount = (func: string) => {
    if (func === 'All') return MOCK_PRODUCTS.length;
    return MOCK_PRODUCTS.filter(p => p.functionCategory === func).length;
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden border-b border-teal-900/60"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #071520 0%, #083D32 22%, #0D5E4E 42%, #0A4035 62%, #06231D 80%, #071520 100%)',
      }}
    >
      {/* ── Diagonal accent band ──────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(110deg, transparent 0%, rgba(13,148,136,0.10) 35%, rgba(45,106,79,0.08) 55%, transparent 80%)'
        }}
        aria-hidden
      />

      {/* ── Line-grid overlay ──────────────────────── */}
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

      {/* ── Ambient glow orbs ───────────────────── */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full" style={{
          background: 'radial-gradient(circle, rgba(13,148,136,0.50) 0%, rgba(15,118,110,0.22) 45%, transparent 70%)'
        }} />
      </motion.div>

      <motion.div
        style={{ y: orb2Y }}
        className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full" style={{
          background: 'radial-gradient(circle, rgba(45,106,79,0.45) 0%, rgba(26,74,53,0.20) 45%, transparent 70%)'
        }} />
      </motion.div>

      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full" style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)'
        }} />
      </motion.div>

      {/* ── Parallax Molecule Models ───────────────── */}
      <motion.div
        style={{ y: mol1Y, rotate: mol1Rot }}
        className="absolute -top-16 -left-24 sm:-left-8 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] z-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-16 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)' }} />
        <MoleculeModel opacity={0.65} />
      </motion.div>

      <motion.div
        style={{ y: mol2Y, rotate: mol2Rot }}
        className="absolute -bottom-16 -right-24 sm:-right-8 w-[400px] h-[400px] sm:w-[540px] sm:h-[540px] z-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-16 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.20) 0%, rgba(13,148,136,0.20) 50%, transparent 70%)' }} />
        <MoleculeModel rotate={180} opacity={0.60} />
      </motion.div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Section Header */}
        <motion.div style={{ y: headerY }}>
          <SectionHeader
            tag="Product Catalog"
            title="Precision-Engineered Feed Additive Solutions"
            description="Science-backed premix formulations crafted for performance, safety, and species-specific efficacy."
            className="mb-10
              [&_.section-tag]:bg-teal-400/15
              [&_.section-tag]:text-teal              [&_.section-tag]:border-teal-400/40
              [&_.section-tag]:backdrop-blur-sm
              [&_h2]:text-white
              [&_h2]:drop-shadow-lg
              [&_p]:text-slate-200
              [&_span]:bg-gradient-to-r
              [&_span]:from-teal-400
              [&_span]:to-emerald-400"
          />
        </motion.div>

        {/* ── Filter Control Panel ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto mb-10 bg-slate-900/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">

          {/* Top Segmented Mode Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
              <SlidersHorizontal className="w-4 h-4 text-teal-400" />
              <span>Catalog Navigation</span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center p-1 bg-black/40 rounded-xl border border-white/10">
              <button
                onClick={() => setFilterMode('function')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filterMode === 'function'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
                  }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>By Function</span>
              </button>

              <button
                onClick={() => setFilterMode('species')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filterMode === 'species'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
                  }`}
              >
                <PawPrint className="w-3.5 h-3.5" />
                <span>By Species</span>
              </button>

              <button
                onClick={() => setFilterMode('combined')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filterMode === 'combined'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
                  }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Combined View</span>
              </button>
            </div>
          </div>

          {/* Category Filter Rows depending on Mode */}
          <div className="space-y-4">

            {/* Function Filter Row */}
            {(filterMode === 'function' || filterMode === 'combined') && (
              <div className="space-y-2">
                {filterMode === 'combined' && (
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Product Function / Type:</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products by function">
                  {functionOptions.map(func => (
                    <CategoryTab
                      key={`func-${func}`}
                      label={func === 'All' ? 'All Functions' : func}
                      isActive={activeFunction === func}
                      onClick={() => setActiveFunction(func)}
                      layoutId="activeFunctionTab"
                      count={getFunctionCount(func)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Species Filter Row */}
            {(filterMode === 'species' || filterMode === 'combined') && (
              <div className="space-y-2">
                {filterMode === 'combined' && (
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <PawPrint className="w-3.5 h-3.5 text-teal-400" />
                    <span>Target Species:</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products by species">
                  {speciesOptions.map(cat => (
                    <CategoryTab
                      key={`spec-${cat}`}
                      label={cat === 'All' ? 'All Species' : cat}
                      isActive={activeSpecies === cat}
                      onClick={() => setActiveSpecies(cat)}
                      layoutId="activeSpeciesTab"
                      count={getSpeciesCount(cat)}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Status Bar & Reset Option */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="text-slate-300">
              Showing <span className="font-bold text-teal-300">{filtered.length}</span> of <span className="font-bold text-slate-200">{MOCK_PRODUCTS.length}</span> products
              {isFiltered && (
                <span className="ml-2 text-amber-300 font-medium">
                  (Filtered by {activeSpecies !== 'All' ? activeSpecies : ''} {activeSpecies !== 'All' && activeFunction !== 'All' ? '·' : ''} {activeFunction !== 'All' ? activeFunction : ''})
                </span>
              )}
            </div>

            {isFiltered && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors font-medium text-xs"
              >
                <RotateCcw className="w-3 h-3 text-amber-400" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </div>

        {/* ── Product Grid ────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, idx) => {
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
                    transition={{ duration: 0.48, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  >
                    <ProductCard
                      product={product}
                      dark
                      isAddedToInquiry={inquiryItems.some(item => item.id === product.id)}
                      onToggleInquiry={onToggleInquiry}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Filter Result State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-6 bg-slate-900/40 rounded-2xl border border-white/10 max-w-lg mx-auto"
          >
            <SearchX className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Matching Products Found</h3>
            <p className="text-slate-300 text-sm mb-6">
              No products found matching <span className="text-amber-300 font-semibold">{activeSpecies}</span> in <span className="text-amber-300 font-semibold">{activeFunction}</span>. Try adjusting your filter selection.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm transition-colors shadow-lg shadow-teal-600/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Show All Products</span>
            </button>
          </motion.div>
        )}

        {/* ── Scannable Science: Performance Benchmarks ────────────────── */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <h2 className="sr-only">Performance Benchmarks</h2>
          <ScannableMetricsTable />
        </div>

      </div>
    </section>
  );
};
