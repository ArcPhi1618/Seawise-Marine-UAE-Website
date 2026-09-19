import React from 'react';
import { PageId } from '../types';
import { CONTACT_INFO_PLACEHOLDERS, MARITIME_IMAGES } from '../data/maritimeData';
import { InquiryForm } from '../components/InquiryForm';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-[#0E1013] text-neutral-100 min-h-screen pt-28 sm:pt-36 pb-24 overflow-hidden">
      {/* Subtle Atmospheric Texture */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-96 opacity-10 pointer-events-none z-0">
        <img 
          src={MARITIME_IMAGES.portTerminal} 
          alt="Maritime Terminal" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E1013]/70 to-[#0E1013]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Heading, Quick Links, and Form (Takes 7 columns on desktop) */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Main Heading & Intro */}
            <div className="mb-8">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-4">
                GET IN TOUCH
              </h1>
              <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
                We're ready to assist with your vessel operations, ship management, and maritime trading requirements.
              </p>
            </div>

            {/* Quick Assistance / Support Links */}
            <div className="mb-10 pb-8 border-b border-neutral-800/80">
              <h2 className="text-base font-bold text-white mb-2">
                Need Immediate Operational or Technical Assistance?
              </h2>
              <div className="space-y-1.5 text-sm">
                <div>
                  <a 
                    href={`mailto:${CONTACT_INFO_PLACEHOLDERS.techEmail}`}
                    className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors"
                  >
                    Email Marine Superintendents ({CONTACT_INFO_PLACEHOLDERS.techEmail})
                  </a>
                </div>
                <div>
                  <a 
                    href={`tel:${CONTACT_INFO_PLACEHOLDERS.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors"
                  >
                    Operations Desk ({CONTACT_INFO_PLACEHOLDERS.phone})
                  </a>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <div className="mb-6">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide mb-1">
                  General Inquiries
                </h2>
                <p className="text-sm text-neutral-400 font-light">
                  Complete the form below.
                </p>
              </div>

              {/* Minimalist 2-Column Form Fields */}
              <InquiryForm isFlat={true} />
            </div>
          </div>

          {/* Right Column: Corporate Headquarters & Regional Division Desks (Takes 5 columns on desktop) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-10 sm:space-y-12 lg:pt-3">
            
            {/* Block 2: United Arab Emirates Headquarters */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                United Arab Emirates Headquarters
              </h3>
              <div className="text-sm text-neutral-400 space-y-1 font-light leading-relaxed">
                <p className="text-neutral-300">UAE Maritime Operations Hub</p>
                <p>United Arab Emirates</p>
                <p className="pt-1.5">
                  <a 
                    href={`tel:${CONTACT_INFO_PLACEHOLDERS.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {CONTACT_INFO_PLACEHOLDERS.phone}
                  </a>
                </p>
                <p>
                  <a 
                    href={`mailto:${CONTACT_INFO_PLACEHOLDERS.inquiriesEmail}`}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {CONTACT_INFO_PLACEHOLDERS.inquiriesEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Block 3: Technical Superintendence & Ship Management */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Technical Superintendence Division
              </h3>
              <div className="text-sm text-neutral-400 space-y-1 font-light leading-relaxed">
                <p className="text-neutral-300">Marine Engineering & Fleet Operations</p>
                <p>Dry-dock Oversight & Vessel Condition Surveys</p>
                <p className="pt-1.5">
                  <a 
                    href={`mailto:${CONTACT_INFO_PLACEHOLDERS.techEmail}`}
                    className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors"
                  >
                    {CONTACT_INFO_PLACEHOLDERS.techEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Block 4: Maritime Trading & Procurement Desk */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Maritime Trading & Procurement Desk
              </h3>
              <div className="text-sm text-neutral-400 space-y-1 font-light leading-relaxed">
                <p className="text-neutral-300">OEM Machinery & Marine Spare Parts</p>
                <p>Global Port Logistics & Technical Sourcing</p>
                <p className="pt-1.5">
                  <a 
                    href={`mailto:${CONTACT_INFO_PLACEHOLDERS.tradingEmail}`}
                    className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors"
                  >
                    {CONTACT_INFO_PLACEHOLDERS.tradingEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Block 5: Duty Hours & Emergency Standby */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Duty Hours & Operational Standby
              </h3>
              <div className="text-sm text-neutral-400 space-y-1 font-light leading-relaxed">
                <p className="text-neutral-300">{CONTACT_INFO_PLACEHOLDERS.workingHours}</p>
                <p>24/7 Operations Emergency Standby</p>
                <p className="text-xs text-neutral-500 pt-2 font-light">
                  All vessel data and technical inquiries remain strictly confidential under standard maritime conventions.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
