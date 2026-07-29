import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, ChevronRight, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleFunctionClick = (funcCategory: string) => {
    navigate(`/products?function=${encodeURIComponent(funcCategory)}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative text-slate-300 overflow-hidden border-t border-teal-500/25"
      style={{
        background:
          'linear-gradient(180deg, #030d12 0%, #051914 40%, #030d12 100%)',
      }}
    >
      {/* ── Glowing Header Accent Line ──────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent shadow-[0_0_15px_rgba(45,212,191,0.5)]" />

      {/* ── Background Subtle Ambient Orbs ──────────────────────── */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(13,148,136,0.3) 0%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-12">

        {/* ── Pre-Footer Banner ─────────────────────────────────── */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-teal-950/60 to-slate-900/90 border border-teal-500/30 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-heading">
              Global Feed Additive Solutions
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              Pioneering Sustainable Animal Nutrition Worldwide
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Safe, high-efficacy feed additives tailored for swine, poultry, aquaculture, pets, and ruminants.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white text-sm font-bold shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 transition-all duration-200"
            >
              <span>Contact Technical Team</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── Main Footer Columns ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-500/20">

          {/* Column 1: Brand & Overview (LG: 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              className="inline-block group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-lg"
            >
              <img
                src="/images/logo-dark.png"
                alt="Tai Chi Newtech Inc. — Explore | Research | Sustain"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated to research-backed, pro-environmental feed additive innovations. Headquartered in the Philippines and empowering global animal production efficiency.
            </p>

            {/* Quality & Certification Standards */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Certified Quality Standards</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['ISO 22000', 'FAMI-QS', 'GMP+', 'ISO 9001', 'FDA', 'Halal'].map(cert => (
                  <span
                    key={cert}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-teal-950/80 border border-teal-500/30 text-teal-300 shadow-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Products & Categories (LG: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-heading flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Products & Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleFunctionClick('Functional Feed Additives')}
                  className="hover:text-teal-300 transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>Functional Feed Additives</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFunctionClick('Nutritional Feed Additives')}
                  className="hover:text-teal-300 transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>Nutritional Feed Additives</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFunctionClick('Specialty Products')}
                  className="hover:text-teal-300 transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>Specialty Products</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFunctionClick('Commodity Products')}
                  className="hover:text-teal-300 transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>Commodity Products</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links (LG: 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-heading flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/#about" className="hover:text-teal-300 transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>About Tai Chi</span>
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-teal-300 transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>Our Research</span>
                </Link>
              </li>
              <li>
                <Link to="/#news" className="hover:text-teal-300 transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>News & Updates</span>
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-teal-300 transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500/70 group-hover:text-teal-300 transition-colors" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details (LG: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-heading flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Global HQ
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <p className="leading-snug text-slate-300">
                  Office Center 05K Berthaphil Clark Center,<br />
                  Clark Freeport Zone, Pampanga, Philippines
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="mailto:feedback@taichinewtech.com"
                  className="text-slate-200 hover:text-teal-300 transition-colors duration-200 font-medium"
                >
                  feedback@taichinewtech.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="tel:+6345499850"
                  className="text-slate-200 hover:text-teal-300 transition-colors duration-200 font-medium"
                >
                  (045) 499-8508 / 499-8494
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ───────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <p>© {currentYear} Tai Chi Newtech Inc. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Cookie Preferences
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-300 hover:text-white hover:bg-teal-900 transition-all duration-200 ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
