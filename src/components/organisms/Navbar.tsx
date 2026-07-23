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

  const navLinks: { name: string; href: string; to?: string }[] = [
    { name: "Home",            href: "/"         },
    { name: "About Us",        href: "#about"    },
    { name: "Product Catalog", href: "/products", to: "/products" },
    { name: "News & Updates",  href: "#news"     },
    { name: "Contact",         href: "#contact"  },
  ];

  // Track active section via IntersectionObserver for aria-current
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('products');
      return;
    }
    const hashLinks = navLinks.filter(l => l.href.startsWith('#'));
    const sections = hashLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href === '/') {
      handleHomeClick(e);
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (location.pathname === '/' && element) {
        const offset = 80;
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal-500 rounded-lg"
            aria-label="Tai Chi Newtech Inc. — Return to home"
          >
            <img
              src="/logo.png"
              alt="Tai Chi Newtech Inc. — Explore | Research | Sustain"
              className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.startsWith('#') ? link.href.replace('#', '') : link.href.replace('/', '') || 'home';
              const isActive = activeSection === sectionId;
              const linkClass = [
                'font-semibold text-sm transition-colors duration-300 relative py-1 group',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 focus-visible:ring-offset-2 rounded-sm',
                isActive ? 'text-brand-teal-700' : 'text-slate-600 hover:text-brand-teal-700',
              ].join(' ');
              const underlineClass = [
                'absolute bottom-0 left-0 h-0.5 bg-brand-teal-600 transition-all duration-300 ease-out rounded-full',
                isActive ? 'w-full' : 'w-0 group-hover:w-full',
              ].join(' ');

              // Router-based links (absolute paths like /products)
              if (link.to) {
                return (
                  <Link key={link.name} to={link.to} aria-current={isActive ? 'page' : undefined} className={linkClass}>
                    <span>{link.name}</span>
                    <span className={underlineClass} />
                  </Link>
                );
              }
              if (link.href === '/') {
                return (
                  <Link key={link.name} to="/" onClick={handleHomeClick} aria-current={isActive ? 'page' : undefined} className={linkClass}>
                    <span>{link.name}</span>
                    <span className={underlineClass} />
                  </Link>
                );
              }
              // Hash anchor links (same-page section scrolling or cross-page navigation)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={linkClass}
                >
                  <span>{link.name}</span>
                  <span className={underlineClass} />
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.startsWith('#') ? link.href.replace('#', '') : link.href.replace('/', '') || 'home';
              const isActive = activeSection === sectionId;
              const mobileLinkClass = [
                'flex items-center font-medium text-base py-2 transition-all rounded-lg px-2',
                'focus-visible:ring-2 focus-visible:ring-brand-teal-500 focus-visible:ring-offset-1 outline-none',
                isActive ? 'text-brand-teal-700 bg-brand-teal-50 pl-3' : 'text-slate-700 hover:text-brand-teal-700 hover:pl-3',
              ].join(' ');
              const dot = isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-600 mr-2" aria-hidden />;

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
                    onClick={(e) => {
                      setIsOpen(false);
                      handleHomeClick(e);
                    }}
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
                  onClick={(e) => {
                    setIsOpen(false);
                    handleAnchorClick(e, link.href);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={mobileLinkClass}
                >
                  {dot}{link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <Button
                href="#contact"
                variant="primary"
                fullWidth
                onClick={(e) => {
                  setIsOpen(false);
                  handleAnchorClick(e, '#contact');
                }}
              >
                Inquire Now {inquiryCount > 0 && `(${inquiryCount})`}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
