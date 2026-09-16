import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO, CONTACT_INFO_PLACEHOLDERS } from '../data/maritimeData';
import { Anchor, Mail, Phone, MapPin, ArrowUpRight, Compass, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestConsultation }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
  };

  return (
    <footer id="main-footer" className="bg-[#0A0B0E] text-neutral-300 border-t border-neutral-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="flex items-center gap-3">
                <img 
                  src="img/Seawise Marine UAE Logo.png" 
                  alt="Seawise Marine UAE Logo" 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
                {/* Framed Emblem Box in Footer */}
                <div className="border border-neutral-400/60 px-4 py-2 bg-[#121418] inline-block shadow-md">
                  <div className="font-display font-bold text-lg tracking-[0.22em] text-white uppercase leading-tight">
                    SEAWISE
                  </div>
                  <div className="text-[8.5px] font-sans font-medium tracking-[0.24em] text-neutral-400 uppercase leading-none mt-0.5">
                    MARINE SERVICES
                  </div>
                </div>
              </div>
              <p className="text-[11px] font-tech tracking-widest text-neutral-400 uppercase mt-2.5">
                {BRAND_INFO.subtitle}
              </p>
            </div>

            <p className="text-base font-display font-medium text-neutral-200 italic border-l border-neutral-700 pl-3.5">
              &ldquo;{BRAND_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {BRAND_INFO.businessDescription}
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.18em] border border-neutral-700 transition-colors cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-display text-xs uppercase tracking-wider"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-display text-xs uppercase tracking-wider"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('why-seawise')} 
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-display text-xs uppercase tracking-wider"
                >
                  Why Seawise Marine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-display text-xs uppercase tracking-wider"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
              Our Core Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('ship-management')} 
                  className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group cursor-pointer w-full text-left font-display text-xs uppercase tracking-wider"
                >
                  <span>Ship Management</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('maritime-trading')} 
                  className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group cursor-pointer w-full text-left font-display text-xs uppercase tracking-wider"
                >
                  <span>Maritime Trading</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('marine-services')} 
                  className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group cursor-pointer w-full text-left font-display text-xs uppercase tracking-wider"
                >
                  <span>Marine Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-neutral-400 leading-relaxed bg-[#121418] p-3.5 border border-neutral-800">
              <span className="font-semibold text-neutral-200">Technical Scope:</span> Full lifecycle vessel engineering, spare parts logistics, condition assessments & dry-dock oversight.
            </div>
          </div>

          {/* Col 4: Corporate Contact Details (Placeholders) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Headquarters</span>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO_PLACEHOLDERS.hub}</p>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO_PLACEHOLDERS.jurisdiction}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Inquiries</span>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO_PLACEHOLDERS.inquiriesEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Operations Line</span>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO_PLACEHOLDERS.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p>© Seawise Marine. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Operating in accordance with International Maritime Standards</span>
            <span className="hidden md:inline-block text-neutral-700">•</span>
            <span className="text-neutral-400">UAE Commercial Regulations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
