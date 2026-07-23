import React from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/organisms/Hero';
import { CompanySection } from '../components/organisms/CompanySection';
import { ProductPreview } from '../components/organisms/ProductPreview';
import { AboutSection } from '../components/organisms/AboutSection';
import { NewsSection } from '../components/organisms/NewsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import type { Product } from '../data/mockProducts';

export interface HomePageProps {
  inquiryItems: Product[];
  onToggleInquiry: (product: Product) => void;
  onRemoveInquiryItem: (productId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  inquiryItems,
  onToggleInquiry,
  onRemoveInquiryItem,
}) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 120);
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      {/* 1. Hero carousel */}
      <Hero />

      {/* 2. Our Company intro + stats (anchor: #about) */}
      <CompanySection />

      {/* 3. Curated product preview — Specialty Products first, 6 cards, "View All" CTA */}
      <ProductPreview inquiryItems={inquiryItems} onToggleInquiry={onToggleInquiry} />

      {/* 4. Remaining About content: Mandate, Mission, Values, Timeline, Quality */}
      <AboutSection />

      {/* 5. News & Updates */}
      <NewsSection />

      {/* 6. Contact */}
      <ContactSection inquiryItems={inquiryItems} onRemoveInquiryItem={onRemoveInquiryItem} />
    </>
  );
};
