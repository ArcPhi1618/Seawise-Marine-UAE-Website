import React from 'react';
import { PageId } from '../types';
import { QUALITATIVE_PILLARS, MARITIME_IMAGES, CORE_VALUES } from '../data/maritimeData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  Cpu, 
  TrendingDown, 
  Layers, 
  Ship,
  Compass
} from 'lucide-react';

interface WhySeawiseViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: () => void;
}

export const WhySeawiseView: React.FC<WhySeawiseViewProps> = ({ 
  onNavigate, 
  onRequestConsultation 
}) => {
  const edgeAttributes = [
    {
      title: 'Technical Knowledge',
      desc: 'Formulated by licensed Marine Engineers with in-depth understanding of main propulsion, auxiliary machinery, automation, and electrical distribution.',
    },
    {
      title: 'Sea-Going Experience',
      desc: 'Direct experience on commercial vessels under heavy weather, tight bunkering schedules, and international sea passages.',
    },
    {
      title: 'Commercial Understanding',
      desc: 'Appreciation of charter parties, off-hire penalties, demurrage risks, and the imperative for on-schedule voyage completion.',
    },
    {
      title: 'Operational Discipline',
      desc: 'Systematic maintenance regimes, statutory class compliance, and continuous safety audits minimizing operational surprises.',
    },
    {
      title: 'Responsive Support',
      desc: 'Direct access to senior decision-makers ready to authorize interventions without bureaucratic delays.',
    },
    {
      title: 'Practical Problem Solving',
      desc: 'Hands-on troubleshooting focused on engineering root-causes rather than superficial component replacements.',
    },
    {
      title: 'Cost-Conscious Decision Making',
      desc: 'Prudent technical spending designed to protect long-term vessel residual value while controlling unnecessary OPEX.',
    },
    {
      title: 'Safety-Focused Management',
      desc: 'Uncompromising adherence to international ISM, ISPS, and MLC frameworks to ensure zero harm to people, vessel, and environment.',
    },
  ];

  return (
    <div className="bg-[#0E1013] text-neutral-100 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={MARITIME_IMAGES.tankerSea} 
            alt="Commercial tanker ship at sea" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013] via-[#0E1013]/90 to-[#0E1013]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-300">
                Institutional Distinction
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-wider leading-tight mb-6">
              Why Choose Seawise Marine
            </h1>
            <p className="text-xl text-neutral-200 font-display font-bold uppercase tracking-wide mb-4">
              Experience That Understands the Vessel.
            </p>
            <p className="text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
              We are not simply a service vendor. We are a dependable maritime partner combining practical sea-going experience, technical knowledge, and commercial discipline.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE DUALITY: FROM ENGINE ROOM TO BOARDROOM */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14161A] border border-neutral-800 p-8 lg:p-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
              Operational Perspective
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mt-2">
              From the Engine Room to the Boardroom
            </h2>
            <p className="text-sm text-neutral-400 mt-3">
              Understanding both the physical realities of vessel machinery and the financial imperatives of ship ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Engine Room Column */}
            <div className="bg-[#0E1013] border border-neutral-800 p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-tech font-bold text-neutral-400 uppercase tracking-wider">THE ENGINE ROOM</span>
                <Cpu className="w-4 h-4 text-neutral-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">Technical Realities of Operation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Vessels operate in severe, unforgiving marine environments. Main propulsion engines, auxiliary generators, ballast systems, and cargo gear experience continuous thermal and mechanical stress. 
              </p>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Practical understanding of running hours & preventative maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Direct diagnostic capability without third-party delay</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Respect for onboard crew welfare, safety, and operational limits</span>
                </li>
              </ul>
            </div>

            {/* The Boardroom Column */}
            <div className="bg-[#0E1013] border border-neutral-800 p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-tech font-bold text-neutral-400 uppercase tracking-wider">THE BOARDROOM</span>
                <Scale className="w-4 h-4 text-neutral-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">Commercial Pressures of Ownership</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ship owners and operators face fluctuating freight markets, bunker price volatility, stringent environmental regulations, and zero tolerance for vessel off-hire or detention.
              </p>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Prudent CAPEX and OPEX planning without compromising asset safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Protection of charter party terms and commercial reputation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Long-term capital asset preservation and high survey compliance</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. EIGHT INTEGRATED ATTRIBUTES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
            Pillars of Reliability
          </span>
          <h2 className="font-display text-3xl font-bold text-white uppercase tracking-wider mt-2">
            Integrated Strengths Under One Management
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edgeAttributes.map((attr, idx) => (
            <div 
              key={attr.title}
              className="bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-500 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-tech text-xs text-neutral-400 font-bold block mb-2">
                  ATTRIBUTE 0{idx + 1}
                </span>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {attr.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {attr.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800">
                <span className="w-2 h-2 bg-neutral-500 inline-block" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUE PROPOSITION SUMMARY (QUALITATIVE) */}
      <section className="py-20 bg-[#121418] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
              Client Assurance
            </span>
            <h2 className="font-display text-3xl font-bold text-white uppercase tracking-wider mt-2">
              Our Value Proposition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUALITATIVE_PILLARS.map((item) => (
              <div key={item.title} className="bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-600 transition-colors">
                <span className="text-[11px] font-tech text-neutral-400 uppercase font-bold tracking-wider block mb-1">
                  {item.highlight}
                </span>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 bg-[#0B0C0E] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
              Connect with a Maritime Partner That Understands Your Vessels
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Experienced at sea. Professional ashore. Ready to protect your assets.
            </p>
          </div>
          <button
            onClick={onRequestConsultation}
            className="px-6 py-3 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap border border-neutral-300"
          >
            Request a Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
