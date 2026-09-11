import React from 'react';
import { PageId } from '../types';
import { CONTACT_INFO_PLACEHOLDERS, MARITIME_IMAGES } from '../data/maritimeData';
import { InquiryForm } from '../components/InquiryForm';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Compass, 
  ShieldCheck, 
  Crosshair, 
  Building2,
  Ship
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#060B18] text-slate-100 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={MARITIME_IMAGES.portTerminal} 
            alt="Commercial port and UAE maritime hub" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/90 to-[#060B18]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-300">
                Corporate Liaison
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Let’s Discuss Your Maritime Requirements.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Whether you require ship management support, marine equipment and spare parts, technical consultancy, vessel inspection, or operational assistance, our team is ready to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT MAIN SECTION: FORM + DETAILS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Col: Contact Form (Takes 7 columns on desktop) */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="text-xs font-tech font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Direct Transmission
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                Submit Formal Inquiry
              </h3>
            </div>

            <InquiryForm />
          </div>

          {/* Right Col: Maritime Operations Desk & Headquarters (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operational Coordinates Box */}
            <div className="bg-[#091228] border border-slate-800 rounded-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-tech font-bold text-slate-300 uppercase tracking-wider">
                  Operational Hub & Base
                </span>
                <span className="text-[10px] font-tech bg-slate-800 text-slate-300 px-2 py-0.5 rounded-xs">
                  UAE
                </span>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-white font-semibold block text-xs uppercase font-tech">Location Placeholder</span>
                    <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.hub}</p>
                    <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.jurisdiction}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Crosshair className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-white font-semibold block text-xs uppercase font-tech">Maritime Coordinates</span>
                    <p className="text-xs text-slate-400 font-tech">{CONTACT_INFO_PLACEHOLDERS.coordinates}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-white font-semibold block text-xs uppercase font-tech">Working Hours & Standby</span>
                    <p className="text-xs text-slate-400">{CONTACT_INFO_PLACEHOLDERS.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Inquiries */}
            <div className="bg-[#091228] border border-slate-800 rounded-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-tech font-bold text-slate-300 uppercase tracking-wider">
                  Division Contacts
                </span>
                <span className="text-[10px] font-tech text-slate-400">PLACEHOLDERS</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xs">
                  <span className="font-tech font-bold text-slate-300 block mb-1">
                    Ship Management & Technical Superintendence
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{CONTACT_INFO_PLACEHOLDERS.techEmail}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xs">
                  <span className="font-tech font-bold text-slate-300 block mb-1">
                    Maritime Trading & Parts Procurement
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{CONTACT_INFO_PLACEHOLDERS.tradingEmail}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xs">
                  <span className="font-tech font-bold text-slate-300 block mb-1">
                    General Commercial Inquiries & Operations Desk
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{CONTACT_INFO_PLACEHOLDERS.inquiriesEmail}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{CONTACT_INFO_PLACEHOLDERS.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality & Non-Disclosure Notice */}
            <div className="p-4 bg-[#070D1E] border border-slate-800 rounded-sm">
              <div className="flex items-center gap-2 text-xs font-tech text-slate-300 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-slate-300" />
                <span>Commercial & Technical Confidentiality</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All vessel specifications, condition assessment reports, dry-dock scopes, and trading pricing remain strictly confidential under standard maritime conventions.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
