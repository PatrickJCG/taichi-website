import React from 'react';
import type { NewsArticle } from '../../data/mockProducts';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '../atoms';

export interface NewsCardProps {
  article: NewsArticle;
  delay?: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.015 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-teal-200/80 transition-shadow duration-300 flex flex-col h-full group"
    >
      {/* Image & Category Tag */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="speciesBlue">
            {article.category}
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
          <Calendar className="w-3.5 h-3.5 text-brand-teal-600" />
          <span>{article.date}</span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-teal-700 transition-colors duration-200 font-heading mb-3 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">
          {article.summary}
        </p>

        <a
          href="#news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700 group-hover:text-brand-teal-800 transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </motion.article>
  );
};
