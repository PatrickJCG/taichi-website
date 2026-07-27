import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleFunctionClick = (funcCategory: string) => {
    navigate(`/products?function=${encodeURIComponent(funcCategory)}`);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal-500 rounded-lg">
              <img
                src="/images/logo-dark.png"
                alt="Tai Chi Newtech Inc. — Explore | Research | Sustain"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Safe, innovative, and pro-environmental feed additive solutions for swine, poultry, aquaculture, pets, and ruminants. Pioneered in the Philippines and expanding globally.
            </p>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleFunctionClick('Functional Feed Additives')}
                  className="hover:text-brand-teal-400 transition-colors duration-200 text-left"
                >
                  Functional Feed Additives
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFunctionClick('Nutritional Feed Additives')}
                  className="hover:text-brand-teal-400 transition-colors duration-200 text-left"
                >
                  Nutritional Feed Additives
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFunctionClick('Specialty Products')}
                  className="hover:text-brand-teal-400 transition-colors duration-200 text-left"
                >
                  Specialty Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFunctionClick('Commodity Products')}
                  className="hover:text-brand-teal-400 transition-colors duration-200 text-left"
                >
                  Commodity Products
                </button>
              </li>
            </ul>

            {/* Certifications strip moved under products */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Product Standards</span>
              <div className="flex flex-wrap gap-1.5">
                {['ISO 22000', 'FAMI-QS', 'GMP+', 'ISO 9001', 'FDA', 'Halal'].map(cert => (
                  <span key={cert} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-amber-500/10 border border-brand-amber-500/20 text-brand-amber-400 whitespace-nowrap">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#about"   className="hover:text-brand-teal-400 transition-colors duration-200">About Tai Chi</Link></li>
              <li><Link to="/#about"   className="hover:text-brand-teal-400 transition-colors duration-200">Our Agenda</Link></li>
              <li><Link to="/#news"    className="hover:text-brand-teal-400 transition-colors duration-200">News & Expansion</Link></li>
              <li><Link to="/#contact" className="hover:text-brand-teal-400 transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Address & Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Contact</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Office Center 05K Berthaphil Clark Center,<br />
              Clark Freeport Zone, Pampanga, Philippines<br />
              <a href="mailto:feedback@taichinewtech.com" className="hover:text-brand-teal-400 transition-colors duration-200">
                feedback@taichinewtech.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Tai Chi Newtech Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
