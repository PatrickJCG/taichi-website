import React from 'react';
import type { Product } from '../../data/mockProducts';
import { Check, Plus, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge, Button } from '../atoms';

export interface ProductCardProps {
  product: Product;
  dark?: boolean;
  isAddedToInquiry: boolean;
  onToggleInquiry: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  dark = false, 
  isAddedToInquiry, 
  onToggleInquiry 
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.018 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'rounded-2xl overflow-hidden flex flex-col h-full group relative',
        dark
          // Glassmorphism dark card — higher contrast on deep teal-forest bg
          ? 'bg-white/10 backdrop-blur-xl border border-white/18 hover:border-teal-300/60 shadow-xl shadow-black/30 hover:shadow-teal-500/20'
          : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-teal-200/80',
        'transition-all duration-300',
      ].join(' ')}
    >
      {/* Gradient shimmer overlay on dark cards */}
      {dark && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/8 via-transparent to-emerald-500/5 pointer-events-none" />
      )}

      {/* Image & Badge */}
      <div className={`relative h-48 overflow-hidden ${dark ? 'bg-slate-800/60' : 'bg-slate-100'}`}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Gradient overlay for dark mode */}
        {dark && <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />}
        
        {/* Top-left: Product Badge */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="productBadge"
            icon={<span className="w-1.5 h-1.5 rounded-full bg-brand-teal-600 animate-pulse" />}
          >
            {product.badge}
          </Badge>
        </div>
        
        {/* Top-right: Species Category pill */}
        {product.category && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-100 backdrop-blur-md border border-white/15 shadow-sm">
              {product.category}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">

        {/* Function Category Tag (Product Type) */}
        <div className="mb-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-brand-amber-500/15 border border-brand-amber-400/30 text-amber-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {product.functionCategory}
          </span>
        </div>

        {/* Title */}
        <h3 className={[
          'text-xl font-bold tracking-tight font-heading mb-1 transition-colors duration-200',
          dark ? 'text-white group-hover:text-teal-300' : 'text-slate-800 group-hover:text-brand-teal-700',
        ].join(' ')}>
          {product.title}
        </h3>

        {/* Species & Function Badges */}
        {product.speciesTags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-2.5">
            {product.speciesTags.map((tag, idx) => {
              const isGreen = idx % 2 === 0;
              return (
                <Badge
                  key={idx}
                  variant={isGreen ? 'speciesGreen' : 'speciesBlue'}
                  icon={
                    isGreen
                      ? <CheckCircle2 className="w-3 h-3 text-brand-teal-700" />
                      : <Info className="w-3 h-3 text-slate-500" />
                  }
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        )}

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 flex-grow ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {product.description}
        </p>

        {/* Action Button */}
        <Button
          variant={isAddedToInquiry ? "primary" : "secondary"}
          fullWidth
          onClick={() => onToggleInquiry(product)}
          icon={
            isAddedToInquiry 
              ? <Check className="w-4 h-4" /> 
              : <Plus className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          }
          className={
            isAddedToInquiry
              ? '!bg-amber-600 !border-amber-500 !text-white hover:!bg-amber-700 hover:!border-amber-600 hover:!text-white shadow-md'
              : dark
                ? '!bg-teal-500/20 !border-teal-400/40 !text-teal-200 hover:!bg-teal-600 hover:!text-white hover:!border-teal-500 hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-200'
                : '!bg-teal-50 !text-teal-800 !border-teal-200 hover:!bg-teal-700 hover:!text-white hover:!border-teal-700 shadow-md transition-all duration-200'
          }
        >
          {isAddedToInquiry ? "Added to Inquiry" : "Add to Inquiry"}
        </Button>

      </div>
    </motion.div>
  );
};
