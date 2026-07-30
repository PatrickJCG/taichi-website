import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCatalog } from '../components/organisms/ProductCatalog';
import { ContactSection } from '../components/organisms/ContactSection';
import type { Product } from '../data/mockProducts';

export interface ProductsPageProps {
  inquiryItems: Product[];
  onToggleInquiry: (product: Product) => void;
  onRemoveInquiryItem: (productId: string) => void;
  onClearInquiry?: () => void;
}

/**
 * Full product catalog page at /products.
 *
 * Includes the full product catalog and Contact Our Technical Team section.
 * Reads ?function=<category> or ?species=<category> from the URL on mount.
 */
export const ProductsPage: React.FC<ProductsPageProps> = ({
  inquiryItems,
  onToggleInquiry,
  onRemoveInquiryItem,
  onClearInquiry,
}) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const funcParam    = searchParams.get('function');
    const speciesParam = searchParams.get('species');

    if (funcParam) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new CustomEvent('filter-function', { detail: funcParam }));
      }, 80);
      return () => clearTimeout(timer);
    }

    if (speciesParam) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new CustomEvent('filter-species', { detail: speciesParam }));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  // Scroll to top when this page first loads (unless hash specified)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return (
    <>
      <ProductCatalog
        inquiryItems={inquiryItems}
        onToggleInquiry={onToggleInquiry}
      />
      <ContactSection
        inquiryItems={inquiryItems}
        onRemoveInquiryItem={onRemoveInquiryItem}
        onClearInquiry={onClearInquiry}
      />
    </>
  );
};
