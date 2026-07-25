import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import { PageLayout } from './components/organisms/PageLayout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import type { Product } from './data/mockProducts';

export function App() {
  const [inquiryItems, setInquiryItems] = useState<Product[]>([]);

  const handleToggleInquiry = (product: Product) => {
    setInquiryItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      return exists
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product];
    });
  };

  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* ── Home page (/): all sections except the full catalog ── */}
        <Route
          path="/"
          element={
            <PageLayout inquiryCount={inquiryItems.length}>
              <HomePage
                inquiryItems={inquiryItems}
                onToggleInquiry={handleToggleInquiry}
                onRemoveInquiryItem={handleRemoveInquiryItem}
              />
            </PageLayout>
          }
        />

        {/* ── Products page (/products): full filterable catalog ── */}
        <Route
          path="/products"
          element={
            <PageLayout inquiryCount={inquiryItems.length}>
              <ProductsPage
                inquiryItems={inquiryItems}
                onToggleInquiry={handleToggleInquiry}
                onRemoveInquiryItem={handleRemoveInquiryItem}
              />
            </PageLayout>
          }
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
