import React from 'react';
import { PageId } from '../types';
import { CONTACT_INFO_PLACEHOLDERS } from '../data/maritimeData';
import { Anchor, Mail, Phone, MapPin, ArrowUpRight, Compass, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestConsultation }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#040814] text-slate-300 border-t border-slate-800/80">
      {/* Top Banner / Corporate Credentials strip */}
      <div className="border-b border-slate-800/60 bg-[#060B18]/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wider uppercase">
              UAE Maritime Operations Desk: Continuous Standby
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Coordinates: {CONTACT_INFO_PLACEHOLDERS.coordinates}</span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-block">Arabian Gulf Maritime Sector</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-slate-800 to-[#0F1E46] border border-slate-700/60 flex items-center justify-center text-slate-200">
                <Anchor className="w-5 h-5 text-slate-200" strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-wider text-white">
                  SEAWISE MARINE
                </span>
                <p className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                  Ship Management • Maritime Trading • Marine Services
                </p>
              </div>
            </div>

            <p className="text-base font-heading font-semibold text-slate-200 italic border-l-2 border-slate-600 pl-3.5">
              &ldquo;Experienced at Sea. Professional Ashore.&rdquo;
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A professional maritime company specializing in Ship Management, Maritime Trading, and Marine Services. 
              Led and supported by experienced Marine Engineers, Captains, and maritime professionals.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase tracking-wider rounded-sm border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('why-seawise')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Why Seawise Marine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Our Core Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('ship-management')} 
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group cursor-pointer w-full text-left"
                >
                  <span>Ship Management</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('maritime-trading')} 
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group cursor-pointer w-full text-left"
                >
                  <span>Maritime Trading</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('marine-services')} 
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group cursor-pointer w-full text-left"
                >
                  <span>Marine Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded border border-slate-800/80">
              <span className="font-semibold text-slate-300">Technical Scope:</span> Full lifecycle vessel engineering, spare parts logistics, condition assessments & dry-dock oversight.
            </div>
          </div>

          {/* Col 4: Corporate Contact Details (Placeholders) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Headquarters</span>
                  <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.hub}</p>
                  <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.jurisdiction}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Inquiries</span>
                  <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.inquiriesEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Operations Line</span>
                  <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Restrained Operational Standards */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© Seawise Marine. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Operating in accordance with International Maritime Standards</span>
            <span className="hidden md:inline-block text-slate-700">•</span>
            <span className="text-slate-400">UAE Commercial Regulations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
