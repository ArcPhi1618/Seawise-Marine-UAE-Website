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
          ? 'bg-[#0E1013]/98 backdrop-blur-md py-2.5 sm:py-3 border-b border-neutral-800 shadow-2xl shadow-black/60' 
          : 'bg-[#0E1013]/95 backdrop-blur-sm py-3.5 sm:py-4 border-b border-neutral-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Framed Box Emblem (matching the reference style) */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >

            {/* Logo */}
            <div className="flex items-center justify-center shrink-0">
              <img 
                src="img/Seawise Marine UAE Logo.png" 
                alt="Seawise Marine UAE Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            {/* Signature Framed Emblem Box */}
            <div className="border border-neutral-300/70 group-hover:border-white px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#14161A] transition-all shadow-md">
              <div className="font-display font-bold text-base sm:text-xl tracking-[0.22em] text-white uppercase leading-tight">
                SEAWISE
              </div>
              <div className="text-[8px] sm:text-[9.5px] font-sans font-medium tracking-[0.24em] text-neutral-300 uppercase leading-none mt-0.5">
                MARINE SERVICES
              </div>
            </div>
          </button>

          {/* Desktop Navigation with Wide-Tracked Uppercase Typography */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-home"
              onClick={() => handleLinkClick('home')}
              className={`px-3.5 py-1.5 text-[11px] xl:text-xs font-display font-bold tracking-[0.2em] uppercase transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'text-white border border-neutral-400/80 bg-neutral-800/50'
                  : 'text-neutral-300 hover:text-white hover:border-neutral-700/60 border border-transparent'
              }`}
            >
              Home
            </button>

            <button
              id="nav-about"
              onClick={() => handleLinkClick('about')}
              className={`px-3.5 py-1.5 text-[11px] xl:text-xs font-display font-bold tracking-[0.2em] uppercase transition-all cursor-pointer ${
                currentPage === 'about'
                  ? 'text-white border border-neutral-400/80 bg-neutral-800/50'
                  : 'text-neutral-300 hover:text-white hover:border-neutral-700/60 border border-transparent'
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
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] xl:text-xs font-display font-bold tracking-[0.2em] uppercase transition-all cursor-pointer ${
                  isServicesActive
                    ? 'text-white border border-neutral-400/80 bg-neutral-800/50'
                    : 'text-neutral-300 hover:text-white hover:border-neutral-700/60 border border-transparent'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-neutral-300' : 'text-neutral-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#121418] border border-neutral-700 rounded-none shadow-2xl p-2 backdrop-blur-xl">
                    <button
                      id="dropdown-ship-management"
                      onClick={() => handleLinkClick('ship-management')}
                      className={`w-full flex items-start gap-3 p-2.5 text-left transition-colors cursor-pointer border border-transparent ${
                        currentPage === 'ship-management' ? 'bg-neutral-800 text-white border-neutral-600' : 'text-neutral-300 hover:bg-neutral-800/70 hover:text-white'
                      }`}
                    >
                      <Ship className="w-4 h-4 mt-0.5 text-neutral-200 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wider uppercase font-display">Ship Management</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                          Technical, safety, crew & maintenance solutions
                        </div>
                      </div>
                    </button>

                    <button
                      id="dropdown-maritime-trading"
                      onClick={() => handleLinkClick('maritime-trading')}
                      className={`w-full flex items-start gap-3 p-2.5 text-left transition-colors cursor-pointer border border-transparent ${
                        currentPage === 'maritime-trading' ? 'bg-neutral-800 text-white border-neutral-600' : 'text-neutral-300 hover:bg-neutral-800/70 hover:text-white'
                      }`}
                    >
                      <PackageCheck className="w-4 h-4 mt-0.5 text-neutral-200 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wider uppercase font-display">Maritime Trading</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                          Marine equipment, machinery components & spares
                        </div>
                      </div>
                    </button>

                    <button
                      id="dropdown-marine-services"
                      onClick={() => handleLinkClick('marine-services')}
                      className={`w-full flex items-start gap-3 p-2.5 text-left transition-colors cursor-pointer border border-transparent ${
                        currentPage === 'marine-services' ? 'bg-neutral-800 text-white border-neutral-600' : 'text-neutral-300 hover:bg-neutral-800/70 hover:text-white'
                      }`}
                    >
                      <Wrench className="w-4 h-4 mt-0.5 text-neutral-200 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wider uppercase font-display">Marine Services</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                          Consultancy, surveys, condition audits & port support
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-contact"
              onClick={() => handleLinkClick('contact')}
              className={`px-3.5 py-1.5 text-[11px] xl:text-xs font-display font-bold tracking-[0.2em] uppercase transition-all cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-white border border-neutral-400/80 bg-neutral-800/50'
                  : 'text-neutral-300 hover:text-white hover:border-neutral-700/60 border border-transparent'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Header Action Button (Clean Framed Button) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={onRequestConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] rounded-none transition-all shadow-md hover:shadow-lg cursor-pointer border border-neutral-300"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle (Clean 3-line minimalist icon like reference) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Styled with the 2x2 wide-tracked bold uppercase layout like reference) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E1013] border-b border-neutral-800 px-6 pt-4 pb-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Reference-style 2-column bold navigation grid */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-4 border-b border-neutral-800 text-center">
            <button
              onClick={() => handleLinkClick('home')}
              className={`py-3 font-display font-bold text-sm tracking-[0.25em] uppercase border transition-colors ${
                currentPage === 'home' 
                  ? 'border-neutral-400 bg-neutral-800 text-white' 
                  : 'border-neutral-800/80 text-white hover:border-neutral-600'
              }`}
            >
              HOME
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`py-3 font-display font-bold text-sm tracking-[0.25em] uppercase border transition-colors ${
                currentPage === 'about' 
                  ? 'border-neutral-400 bg-neutral-800 text-white' 
                  : 'border-neutral-800/80 text-white hover:border-neutral-600'
              }`}
            >
              ABOUT
            </button>

            <button
              onClick={() => handleLinkClick('ship-management')}
              className={`py-3 font-display font-bold text-sm tracking-[0.25em] uppercase border transition-colors ${
                isServicesActive 
                  ? 'border-neutral-400 bg-neutral-800 text-white' 
                  : 'border-neutral-800/80 text-white hover:border-neutral-600'
              }`}
            >
              SERVICES
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`py-3 font-display font-bold text-sm tracking-[0.25em] uppercase border transition-colors ${
                currentPage === 'contact' 
                  ? 'border-neutral-400 bg-neutral-800 text-white' 
                  : 'border-neutral-800/80 text-white hover:border-neutral-600'
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Core Divisions Sub-list */}
          <div className="pt-4 pb-2 space-y-1 text-left">
            <p className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-400 mb-2">
              Divisions
            </p>
            <button
              onClick={() => handleLinkClick('ship-management')}
              className="w-full text-left px-3 py-2 text-xs font-display font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-800/60 uppercase"
            >
              • Ship Management
            </button>
            <button
              onClick={() => handleLinkClick('maritime-trading')}
              className="w-full text-left px-3 py-2 text-xs font-display font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-800/60 uppercase"
            >
              • Maritime Trading
            </button>
            <button
              onClick={() => handleLinkClick('marine-services')}
              className="w-full text-left px-3 py-2 text-xs font-display font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-800/60 uppercase"
            >
              • Marine Services
            </button>
          </div>

          {/* Consultation CTA button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full py-3 bg-white text-neutral-950 font-display font-bold text-xs uppercase tracking-[0.2em] border border-neutral-300"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
