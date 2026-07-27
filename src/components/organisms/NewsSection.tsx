import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_NEWS } from '../../data/mockProducts';
import { SectionHeader, Button } from '../atoms';
import { NewsCard } from '../molecules';
import { ArrowRight } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="news" className="relative py-20 bg-white border-b border-slate-200/60 overflow-hidden bg-grid-pattern">
      {/* Ambient glow animations */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-brand-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-float-reverse" aria-hidden />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-brand-forest-500/8  rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <SectionHeader
          tag="News & Updates"
          title="Latest Research, Events & Industry Updates"
          description="Stay informed on Tai Chi Newtech's latest scientific breakthroughs, regulatory milestones, and global industry presence."
          className="mb-16"
        />

        {/* 3 News Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS.slice(0, 3).map((article, idx) => (
            <NewsCard key={article.id} article={article} delay={idx * 0.1} />
          ))}
        </div>

        {/* View All Updates CTA */}
        <div className="flex justify-center mt-12">
          <Button
            variant="ghost"
            href="/news"
            onClick={(e) => {
              e.preventDefault();
              navigate('/news');
            }}
            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />}
            className="group !text-brand-teal-700 hover:!bg-brand-teal-50 border border-brand-teal-200/60 hover:border-brand-teal-300 font-bold"
          >
            View All Updates
          </Button>
        </div>

      </div>
    </section>
  );
};

