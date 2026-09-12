import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/maritimeData';
import { 
  Anchor, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  Ship, 
  PackageCheck, 
  Wrench, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onNavigate, 
  onRequestConsultation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = [
    'ship-management', 
    'maritime-trading', 
    'marine-services'
  ].includes(currentPage);

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060B18]/95 backdrop-blur-md py-3.5 border-b border-slate-800/80 shadow-xl shadow-black/40' 
          : 'bg-gradient-to-b from-[#060B18]/95 via-[#060B18]/80 to-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-12 h-12 shrink-0 rounded-sm bg-gradient-to-br from-slate-800 to-[#0F1E46] border border-slate-700/60 flex items-center justify-center text-slate-200 group-hover:border-blue-400/50 group-hover:text-blue-300 transition-all shadow-sm overflow-hidden">
              <img 
                src="/img/logo.jpg" 
                alt="SEAWISE MARINE Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="w-full h-full items-center justify-center">
                <Anchor className="w-5 h-5 text-slate-200" strokeWidth={2.2} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-wider text-white">
                  {BRAND_INFO.name}
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                {BRAND_INFO.subtitle}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-home"
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm cursor-pointer ${
                currentPage === 'home'
                  ? 'text-white bg-slate-800/60 border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              Home
            </button>

            <button
              id="nav-about"
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm cursor-pointer ${
                currentPage === 'about'
                  ? 'text-white bg-slate-800/60 border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-menu"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm cursor-pointer ${
                  isServicesActive
                    ? 'text-white bg-slate-800/60 border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#0B132B] border border-slate-700/80 rounded-md shadow-2xl p-2 backdrop-blur-xl">
                    <button
                      id="dropdown-ship-management"
                      onClick={() => handleLinkClick('ship-management')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-sm text-left transition-colors cursor-pointer ${
                        currentPage === 'ship-management' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      <Ship className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wide">Ship Management</div>
                        <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Technical, safety, crew & maintenance solutions
                        </div>
                      </div>
                    </button>

                    <button
                      id="dropdown-maritime-trading"
                      onClick={() => handleLinkClick('maritime-trading')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-sm text-left transition-colors cursor-pointer ${
                        currentPage === 'maritime-trading' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      <PackageCheck className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wide">Maritime Trading</div>
                        <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Marine equipment, machinery components & spares
                        </div>
                      </div>
                    </button>

                    <button
                      id="dropdown-marine-services"
                      onClick={() => handleLinkClick('marine-services')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-sm text-left transition-colors cursor-pointer ${
                        currentPage === 'marine-services' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      <Wrench className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wide">Marine Services</div>
                        <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Consultancy, surveys, condition audits & port support
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Direct links removed in favor of Services dropdown */}

            <button
              id="nav-why-seawise"
              onClick={() => handleLinkClick('why-seawise')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm cursor-pointer ${
                currentPage === 'why-seawise'
                  ? 'text-white bg-slate-800/60 border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              Why Seawise
            </button>

            <button
              id="nav-contact"
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-white bg-slate-800/60 border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={onRequestConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-lg hover:shadow-slate-200/10 cursor-pointer border border-slate-200"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>












      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          <div className="py-2 border-b border-slate-800/80 mb-2">
            <p className="text-[11px] font-tech text-slate-400 uppercase tracking-widest">
              Navigation Menu
            </p>
          </div>

          <button
            onClick={() => handleLinkClick('home')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold tracking-wide rounded-sm ${
              currentPage === 'home' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleLinkClick('about')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold tracking-wide rounded-sm ${
              currentPage === 'about' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            About Us
          </button>

          <div className="pt-1 pb-1">
            <p className="px-3 py-1 text-[10px] font-tech font-bold uppercase tracking-widest text-slate-400">
              Core Divisions
            </p>
            <button
              onClick={() => handleLinkClick('ship-management')}
              className={`w-full text-left pl-6 pr-3 py-2 text-sm font-medium rounded-sm ${
                currentPage === 'ship-management' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/40'
              }`}
            >
              Ship Management
            </button>
            <button
              onClick={() => handleLinkClick('maritime-trading')}
              className={`w-full text-left pl-6 pr-3 py-2 text-sm font-medium rounded-sm ${
                currentPage === 'maritime-trading' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/40'
              }`}
            >
              Maritime Trading
            </button>
            <button
              onClick={() => handleLinkClick('marine-services')}
              className={`w-full text-left pl-6 pr-3 py-2 text-sm font-medium rounded-sm ${
                currentPage === 'marine-services' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/40'
              }`}
            >
              Marine Services
            </button>
          </div>

          <button
            onClick={() => handleLinkClick('why-seawise')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold tracking-wide rounded-sm ${
              currentPage === 'why-seawise' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            Why Seawise Marine
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold tracking-wide rounded-sm ${
              currentPage === 'contact' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            Contact
          </button>

          
          
        </div>
      )}
    </header>
  );
};
