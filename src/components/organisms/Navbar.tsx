import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../atoms';

export interface NavbarProps {
  inquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ inquiryCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation Links: Product Catalog is second to Home
  const navLinks: { name: string; href: string; to?: string; sectionId: string }[] = [
    { name: 'Home',            href: '/',         sectionId: 'home' },
    { name: 'Product Catalog', href: '/products', to: '/products', sectionId: 'products' },
    { name: 'About Us',        href: '#about',    sectionId: 'about' },
    { name: 'News & Updates',  href: '/news',     to: '/news', sectionId: 'news' },
    { name: 'Contact',         href: '#contact',  sectionId: 'contact' },
  ];

  // Track active page / section in the window
  useEffect(() => {
    if (location.pathname === '/products') {
      setActiveSection('products');
      return;
    }
    if (location.pathname.startsWith('/news')) {
      setActiveSection('news');
      return;
    }

    if (location.pathname === '/') {
      const handleScroll = () => {
        if (window.scrollY < 180) {
          setActiveSection('home');
          return;
        }

        const sections = [
          { id: 'products', el: document.getElementById('products') },
          { id: 'company',  el: document.getElementById('company') },
          { id: 'about',    el: document.getElementById('about') },
          { id: 'news',     el: document.getElementById('news') },
          { id: 'contact',  el: document.getElementById('contact') },
        ];

        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.el) {
            const top = section.el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleHomeClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    if (href === '/') {
      handleHomeClick(e);
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (location.pathname === '/' && element) {
        const offset = window.innerWidth < 640 ? 70 : 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        navigate('/' + href);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 rounded-lg"
              aria-label="Tai Chi Newtech Inc. — Return to home"
            >
              <img
                src="/images/logo.png"
                alt="Tai Chi Newtech Inc. — Explore | Research | Sustain"
                className="h-9 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                const linkClass = [
                  'relative font-bold text-sm transition-all duration-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer select-none',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2',
                  isActive
                    ? 'text-teal-900 bg-teal-50/90 border border-teal-200/80 font-extrabold shadow-sm'
                    : 'text-slate-700 hover:text-teal-800 hover:bg-slate-50',
                ].join(' ');

                const underline = isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 rounded-full shadow-[0_0_8px_rgba(13,148,136,0.6)]" />
                );

                if (link.to) {
                  return (
                    <Link key={link.name} to={link.to} aria-current={isActive ? 'page' : undefined} className={linkClass}>
                      <span>{link.name}</span>
                      {underline}
                    </Link>
                  );
                }
                if (link.href === '/') {
                  return (
                    <Link key={link.name} to="/" onClick={handleHomeClick} aria-current={isActive ? 'page' : undefined} className={linkClass}>
                      <span>{link.name}</span>
                      {underline}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={linkClass}
                  >
                    <span>{link.name}</span>
                    {underline}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
              >
                Inquire Now {inquiryCount > 0 && `(${inquiryCount})`}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-slate-900 p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Semi-Transparent Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Floating Dropdown Drawer */}
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[64px] sm:top-[80px] inset-x-0 bg-white/98 backdrop-blur-xl border-b border-slate-200/90 shadow-2xl z-40 px-5 pt-3 pb-6 space-y-2 lg:hidden max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                const mobileLinkClass = [
                  'flex items-center font-bold text-base py-3 px-4 transition-all rounded-xl min-h-[44px]',
                  'focus-visible:ring-2 focus-visible:ring-teal-600 outline-none',
                  isActive
                    ? 'text-teal-900 bg-teal-50 border border-teal-200/80 font-extrabold shadow-sm'
                    : 'text-slate-700 hover:text-teal-800 hover:bg-slate-50',
                ].join(' ');
                const dot = isActive && <span className="w-2.5 h-2.5 rounded-full bg-teal-600 mr-2.5 shrink-0 shadow-sm" aria-hidden />;

                if (link.to) {
                  return (
                    <Link key={link.name} to={link.to} onClick={() => setIsOpen(false)} aria-current={isActive ? 'page' : undefined} className={mobileLinkClass}>
                      {dot}{link.name}
                    </Link>
                  );
                }
                if (link.href === '/') {
                  return (
                    <Link
                      key={link.name}
                      to="/"
                      onClick={(e) => handleHomeClick(e)}
                      aria-current={isActive ? 'page' : undefined}
                      className={mobileLinkClass}
                    >
                      {dot}{link.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={mobileLinkClass}
                  >
                    {dot}{link.name}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-100">
                <Button
                  href="#contact"
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                >
                  Inquire Now {inquiryCount > 0 && `(${inquiryCount})`}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
