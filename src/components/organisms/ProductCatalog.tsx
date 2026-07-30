import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_CATEGORIES, MOCK_FUNCTION_CATEGORIES, MOCK_PRODUCTS } from '../../data/mockProducts';
import type { Product } from '../../data/mockProducts';
import { ProductCard, ScannableMetricsTable } from '../molecules';
import {
  PawPrint,
  Sparkles,
  RotateCcw,
  SearchX,
  Search,
  X,
  Bird,
  Fish,
  ShieldCheck,
  FlaskConical,
  Boxes,
  Grid as GridIcon,
  Send,
} from 'lucide-react';

// ─── Swine SVG Icon ──────────────────────────────────────────────────────────
const SwineIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 11c0-3.867-3.133-7-7-7a7 7 0 0 0-7 7c0 2.87 1.73 5.335 4.2 6.42L8.5 20.5a1 1 0 0 0 1.4 1.3l1.8-1.8a7.02 7.02 0 0 0 4.6 0l1.8 1.8a1 1 0 0 0 1.4-1.3l-.7-3.08A7.006 7.006 0 0 0 19 11z" />
    <circle cx="10" cy="10" r="1" />
    <circle cx="14" cy="10" r="1" />
    <ellipse cx="12" cy="13" rx="2" ry="1.2" />
  </svg>
);

const getCategoryIcon = (category: string) => {
  const norm = category.toLowerCase();
  if (norm.includes('swine'))       return <SwineIcon    className="w-4 h-4 text-emerald-600" />;
  if (norm.includes('poultry'))     return <Bird         className="w-4 h-4 text-teal-600" />;
  if (norm.includes('pet'))         return <PawPrint     className="w-4 h-4 text-emerald-700" />;
  if (norm.includes('aqua'))        return <Fish         className="w-4 h-4 text-cyan-600" />;
  if (norm.includes('functional'))  return <ShieldCheck  className="w-4 h-4 text-emerald-600" />;
  if (norm.includes('nutritional')) return <FlaskConical className="w-4 h-4 text-teal-600" />;
  if (norm.includes('specialty'))   return <Sparkles     className="w-4 h-4 text-amber-500" />;
  if (norm.includes('commodity'))   return <Boxes        className="w-4 h-4 text-slate-600" />;
  return <GridIcon className="w-4 h-4 text-slate-500" />;
};

type FilterMode = 'function' | 'species' | 'combined';

export interface ProductCatalogProps {
  inquiryItems: Product[];
  onToggleInquiry: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  inquiryItems,
  onToggleInquiry,
}) => {
  const [filterMode, setFilterMode] = useState<FilterMode>('function');
  const [activeSpecies, setActiveSpecies] = useState('All');
  const [activeFunction, setActiveFunction] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleFilterSpecies = (e: Event) => {
      const spec = (e as CustomEvent).detail;
      setActiveSpecies(spec);
      setFilterMode('species');
      scrollToProducts();
    };

    const handleFilterFunction = (e: Event) => {
      const func = (e as CustomEvent).detail;
      setActiveFunction(func);
      setFilterMode('function');
      scrollToProducts();
    };

    const scrollToProducts = () => {
      const target = document.getElementById('products');
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    window.addEventListener('filter-species', handleFilterSpecies);
    window.addEventListener('filter-function', handleFilterFunction);
    return () => {
      window.removeEventListener('filter-species', handleFilterSpecies);
      window.removeEventListener('filter-function', handleFilterFunction);
    };
  }, []);

  const speciesOptions = ['All', ...MOCK_CATEGORIES];
  const functionOptions = ['All', ...MOCK_FUNCTION_CATEGORIES];

  // Filtering Logic
  const filtered = MOCK_PRODUCTS.filter(product => {
    const matchesSearch =
      searchQuery === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.speciesTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpecies = activeSpecies === 'All' || product.category === activeSpecies;
    const matchesFunction = activeFunction === 'All' || product.functionCategory === activeFunction;

    if (!matchesSearch) return false;
    if (filterMode === 'species') return matchesSpecies;
    if (filterMode === 'function') return matchesFunction;
    return matchesSpecies && matchesFunction;
  });

  const isFiltered = activeSpecies !== 'All' || activeFunction !== 'All' || searchQuery !== '';

  const resetFilters = () => {
    setActiveSpecies('All');
    setActiveFunction('All');
    setSearchQuery('');
  };

  const getSpeciesCount = (spec: string) => {
    if (spec === 'All') return MOCK_PRODUCTS.length;
    return MOCK_PRODUCTS.filter(p => p.category === spec).length;
  };

  const getFunctionCount = (func: string) => {
    if (func === 'All') return MOCK_PRODUCTS.length;
    return MOCK_PRODUCTS.filter(p => p.functionCategory === func).length;
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden py-20 sm:py-24 border-b border-slate-200/80"
      style={{
        background:
          'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 45%, #ECFDF5 100%)',
      }}
    >
      {/* ── Top Subtle Glow Divider ─────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

      {/* ── Bio-Science Feed Additive SVG Background Pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="feedAdditivePatternCatalog" width="60" height="60" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#feedAdditivePatternCatalog)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── PRODUCT CATALOG HERO HEADER DESIGN BANNER ── */}
        <div className="mb-12 text-center relative max-w-4xl mx-auto space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950 text-teal-200 border border-teal-700/60 text-xs font-extrabold uppercase tracking-widest shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Product Catalog & Formulations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight max-w-3xl mx-auto">
            Precision Animal <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-900">Feed Additives</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Science-backed premix formulations crafted for high efficacy, biosecurity, and species-specific performance across livestock and aquaculture.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600 rounded-full mx-auto shadow-sm pt-0.5" />
        </div>

        {/* ── BALANCED MINIMALISTIC CATALOG FILTER PANEL ── */}
        <div className="relative rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-200/90 bg-white mb-14 space-y-5 overflow-hidden">
          
          <div className="relative z-10 space-y-4">
            
            {/* Top Control Bar: Search Input + Mode Tabs + Reset */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Minimalist Search Bar */}
              <div className="flex-1 max-w-xl relative">
                <div className="relative">
                  <Search className="w-4 h-4 text-teal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search formulations by name, ingredient, or species..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 text-slate-800 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Minimalist Mode Selector Tabs & Reset */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-1 bg-slate-100 rounded-xl flex items-center gap-1 border border-slate-200/90 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setFilterMode('function')}
                    className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                      filterMode === 'function'
                        ? 'bg-teal-700 text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    By Function
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterMode('species')}
                    className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                      filterMode === 'species'
                        ? 'bg-teal-700 text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    By Species
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterMode('combined')}
                    className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                      filterMode === 'combined'
                        ? 'bg-teal-700 text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    All
                  </button>
                </div>

                {isFiltered && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer active:scale-95 shadow-sm"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-teal-700" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Pill Buttons */}
            {(filterMode === 'function' || filterMode === 'combined') && (
              <div className="flex flex-wrap gap-2.5 pt-2">
                {functionOptions.map(func => {
                  const isActive = activeFunction === func;
                  const count = getFunctionCount(func);
                  return (
                    <button
                      type="button"
                      key={`minimal-func-${func}`}
                      onClick={() => setActiveFunction(func)}
                      className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                        isActive
                          ? 'bg-teal-700 hover:bg-teal-800 text-white font-bold shadow-sm border border-teal-700'
                          : 'bg-slate-50 hover:bg-teal-50/70 text-slate-700 border border-slate-200/90 hover:border-teal-300 shadow-sm hover:text-teal-900'
                      }`}
                    >
                      {getCategoryIcon(func)}
                      <span>{func === 'All' ? 'All Functions' : func}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                          isActive
                            ? 'bg-white/20 text-white font-bold'
                            : 'bg-slate-200/80 text-slate-600 border border-slate-300/50'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {(filterMode === 'species' || filterMode === 'combined') && (
              <div className="flex flex-wrap gap-2.5 pt-2">
                {speciesOptions.map(cat => {
                  const isActive = activeSpecies === cat;
                  const count = getSpeciesCount(cat);
                  return (
                    <button
                      type="button"
                      key={`minimal-spec-${cat}`}
                      onClick={() => setActiveSpecies(cat)}
                      className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                        isActive
                          ? 'bg-teal-700 hover:bg-teal-800 text-white font-bold shadow-sm border border-teal-700'
                          : 'bg-slate-50 hover:bg-teal-50/70 text-slate-700 border border-slate-200/90 hover:border-teal-300 shadow-sm hover:text-teal-900'
                      }`}
                    >
                      {getCategoryIcon(cat)}
                      <span>{cat === 'All' ? 'All Species' : cat}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                          isActive
                            ? 'bg-white/20 text-white font-bold'
                            : 'bg-slate-200/80 text-slate-600 border border-slate-300/50'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-slate-600 font-medium flex items-center gap-2">
                <span>Showing <strong className="text-teal-900 font-extrabold text-sm">{filtered.length}</strong> of{' '}
                <strong className="text-slate-900 font-bold">{MOCK_PRODUCTS.length}</strong> formulations</span>
                {isFiltered && (
                  <span className="font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                    Active Filter
                  </span>
                )}
              </div>
              {inquiryItems.length > 0 && (
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold transition-all text-xs cursor-pointer shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{inquiryItems.length} Products in Inquiry List</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ── WIDER PRODUCT CARDS GRID ──────────────────────────────── */}
        {filtered.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
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
        ) : (
          /* Empty Search / Filter State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto my-8"
          >
            <SearchX className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No Formulations Found
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              No feed additives match your current search criteria. Try clearing your search query or selecting a different category.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-colors shadow-md"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All Formulations</span>
            </button>
          </motion.div>
        )}

        {/* ── Performance Benchmarks Table ────────────────────────── */}
        <div className="pt-16 mt-16 border-t border-slate-200">
          <ScannableMetricsTable />
        </div>

      </div>
    </section>
  );
};
