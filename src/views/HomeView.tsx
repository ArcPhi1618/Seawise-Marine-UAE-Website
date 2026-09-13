import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { 
  BRAND_INFO,
  MARITIME_IMAGES, 
  CORE_VALUES, 
  QUALITATIVE_PILLARS, 
  CONTACT_INFO_PLACEHOLDERS 
} from '../data/maritimeData';
import { 
  ArrowRight, 
  Ship, 
  PackageCheck, 
  Wrench, 
  ShieldCheck, 
  Compass, 
  Scale, 
  Anchor, 
  Gauge, 
  Waves, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Navigation,
  Crosshair
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: (service?: string) => void;
}

const sectionAnimation = {
  initial: { opacity: 0, x: 35 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  style: { willChange: 'transform, opacity' }
};

const renderValueIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    case 'Compass':
      return <Compass className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    case 'Scale':
      return <Scale className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    case 'Anchor':
      return <Anchor className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    case 'Gauge':
      return <Gauge className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    case 'Waves':
      return <Waves className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
    default:
      return <Compass className="w-5 h-5 text-slate-300" strokeWidth={1.8} />;
  }
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onRequestConsultation }) => {
  return (
    <div className="bg-[#060B18] text-slate-100 selection:bg-slate-700 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        {...sectionAnimation}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden maritime-grid"
      >
        {/* Cinematic Maritime Background Image with Multi-layer Navy Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={MARITIME_IMAGES.heroShip} 
            alt="Commercial container vessel at sea"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:hover:scale-100 filter brightness-90"
            loading="eager"
          />
          {/* Multi-layered dark navy overlays for maximum corporate contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/90 to-[#081226]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-[#060B18]/85" />
          <div className="absolute inset-0 bg-[#060B18]/45" />
        </div>

        {/* Technical Linework & Coordinates Accents */}
        <div className="absolute inset-0 z-10 pointer-events-none border-x border-slate-800/40 max-w-7xl mx-auto">
          <div className="absolute bottom-10 left-4 hidden lg:block text-[10px] font-tech text-slate-300">
             ---
          </div>
        </div>

        {/* Hero Content Box */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
        
            {/* Primary Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6">
              Professional & Solutions-Focused Options
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              Professional ship management, maritime trading, and marine services built on practical sea-going experience, technical expertise, and operational discipline.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#core-services"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm shadow-xl transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-700 transition-all cursor-pointer"
              >
                <span>Contact Seawise Marine</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Technical Sub-strip: Core Pillars */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs font-tech text-slate-400 uppercase tracking-wider">Division 01</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 font-heading">Ship Management</span>
              </div>
              <div>
                <span className="block text-xs font-tech text-slate-400 uppercase tracking-wider">Division 02</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 font-heading">Maritime Trading</span>
              </div>
              <div>
                <span className="block text-xs font-tech text-slate-400 uppercase tracking-wider">Division 03</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 font-heading">Marine Services</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. INTRODUCTION SECTION */}
      <motion.section 
        {...sectionAnimation}
        className="py-20 lg:py-28 bg-[#091124] border-y border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-slate-500"></span>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
                  SEAWISE MARINE
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Practical Maritime Expertise.{' '}
                <span className="text-slate-300 block">Reliable Solutions.</span>
              </h2>
              <div className="h-1 w-16 bg-slate-400 mt-2"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
              <p>
                <strong className="text-white font-semibold">Seawise Marine</strong> is a professional maritime company specializing in Ship Management, Maritime Trading, and Marine Services.
              </p>
              <p>
                Led and supported by experienced Marine Engineers, Captains, and maritime professionals, we provide practical, reliable, and cost-effective solutions to ship owners, operators, and maritime businesses.
              </p>
              <p>
                We combine practical sea-going experience, technical knowledge, operational discipline, and modern management practices to help our clients protect their vessels, optimize performance, control costs, and achieve long-term success.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold font-tech uppercase tracking-wider text-white hover:text-slate-200 border-b-2 border-slate-400 pb-1 hover:border-white transition-all cursor-pointer"
                >
                  <span>Discover Seawise Marine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 3. THREE CORE SERVICES */}
      <motion.section 
        {...sectionAnimation}
        id="core-services" 
        className="py-24 bg-[#060B18] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-slate-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Our Maritime Expertise
            </h2>
            <p className="text-base text-slate-400">
              Integrated maritime solutions built around safety, reliability, technical knowledge, and operational efficiency.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SERVICE 01 — SHIP MANAGEMENT */}
            <div className="bg-[#0A1227] border border-slate-800 rounded-sm p-7 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="font-tech text-xs font-bold text-slate-400 tracking-wider">
                    01 — DIVISION
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                    <Ship className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  SHIP MANAGEMENT
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Professional management solutions designed to maintain vessel safety, reliability, compliance, and operational efficiency.
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] font-tech text-slate-400 uppercase tracking-wider block font-semibold">
                    Core Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Technical Ship Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Marine & Safety Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Crew Management & Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Planned Maintenance Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Procurement & Spares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Dry-Docking & Repair Coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Vessel Inspections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Port & Operational Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Documentation & Compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Emergency & Technical Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('ship-management')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Explore Ship Management</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* SERVICE 02 — MARITIME TRADING */}
            <div className="bg-[#0A1227] border border-slate-800 rounded-sm p-7 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="font-tech text-xs font-bold text-slate-400 tracking-wider">
                    02 — DIVISION
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                    <PackageCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  MARITIME TRADING
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Reliable sourcing and supply solutions for the marine industry, ensuring continuous vessel operational readiness.
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] font-tech text-slate-400 uppercase tracking-wider block font-semibold">
                    Core Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Marine Equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Ship Spare Parts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Engine & Machinery Components</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Deck & Safety Equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Marine Consumables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Technical Supplies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Ship Stores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Procurement & Supply Coordination</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('maritime-trading')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Explore Maritime Trading</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* SERVICE 03 — MARINE SERVICES */}
            <div className="bg-[#0A1227] border border-slate-800 rounded-sm p-7 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="font-tech text-xs font-bold text-slate-400 tracking-wider">
                    03 — DIVISION
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  MARINE SERVICES
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Practical technical and operational support delivered by experienced maritime professionals for complex vessel challenges.
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] font-tech text-slate-400 uppercase tracking-wider block font-semibold">
                    Core Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Marine Consultancy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Technical Consultancy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Vessel Condition Assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Pre-Purchase Vessel Inspection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Repair & Maintenance Coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Troubleshooting & Technical Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Port Services Coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span>Marine Project Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('marine-services')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Explore Marine Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. PROFESSIONAL PROMISE SECTION */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 bg-[#050A17] border-y border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Large Typography & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700/80 rounded-sm">
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-300">
                  Operational Foundation
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Experienced at Sea.{' '}
                <span className="block text-slate-200">
                  Professional Ashore.
                </span>
              </h2>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  At Seawise Marine, we believe effective ship management starts with people who understand vessels from the inside out.
                </p>
                <p>
                  Our foundation is built on the knowledge and experience of Marine Engineers, Captains, and maritime professionals who understand the realities of vessel operations, machinery, maintenance, safety, crew, ports, and commercial pressures.
                </p>
                <p>
                  We bring that experience ashore to make better decisions, respond faster, and provide practical solutions to our clients.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="p-3.5 bg-[#091228] border border-slate-800 rounded-sm">
                  <div className="text-xs font-tech font-bold text-slate-300 uppercase">Sea-Going Knowledge</div>
                  <p className="text-xs text-slate-400 mt-1">Deep insight into main engines, machinery spaces & bridge watchkeeping.</p>
                </div>
                <div className="p-3.5 bg-[#091228] border border-slate-800 rounded-sm">
                  <div className="text-xs font-tech font-bold text-slate-300 uppercase">Shore Superintendence</div>
                  <p className="text-xs text-slate-400 mt-1">Commercial discipline, cost prudence & class statutory management.</p>
                </div>
              </div>
            </div>

            {/* Right Col: Genuine Marine Engineering Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-slate-700/80 shadow-2xl">
                <img 
                  src={MARITIME_IMAGES.engineMachinery} 
                  alt="Marine diesel machinery space and engineering inspection"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-80" />
                
                {/* Tech Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#091228]/90 backdrop-blur-md border border-slate-700 p-3 rounded-sm">
                  <div className="flex items-center justify-between text-xs font-tech text-slate-300">
                    <span className="font-semibold text-white">ENGINEERING DISCIPLINE</span>
                    <span>TECH-SPEC: 01-MACH</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Direct oversight by licensed Chief Engineers across propulsion & auxiliary systems.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 5. CORE VALUES (Grid of 7 Values) */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 bg-[#070D1E] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-slate-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
                Guiding Tenets
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-base text-slate-400">
              The principles that guide every decision, service, and client relationship.
            </p>
          </div>

          {/* Grid of Seven Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={val.title}
                className={`bg-[#0A132C] border border-slate-800 rounded-sm p-6 hover:border-slate-600 transition-all ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-700 flex items-center justify-center mb-5">
                  {renderValueIcon(val.iconName)}
                </div>
                <h3 className="font-heading text-base font-bold text-white tracking-wider mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. WHY SEAWISE MARINE */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 bg-[#060B18] border-t border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-slate-500"></span>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
                  Operational Advantage
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why Choose Seawise Marine
              </h2>

              <p className="text-xl font-heading text-slate-200 font-semibold">
                Experience That Understands the Vessel.
              </p>

              <div className="p-4 bg-slate-900/80 border border-slate-700 rounded-sm text-slate-300">
                <span className="font-tech text-xs font-bold text-white uppercase tracking-wider block mb-1">
                  Core Perspective:
                </span>
                <p className="text-sm font-medium italic text-slate-200">
                  &ldquo;From the engine room to the boardroom.&rdquo;
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  We understand both the technical realities of vessel operation and the commercial pressures faced by ship owners and operators.
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Seawise Marine is not simply a service provider, but a dependable maritime partner combining:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Technical knowledge',
                  'Sea-going experience',
                  'Commercial understanding',
                  'Operational discipline',
                  'Responsive support',
                  'Practical problem solving',
                  'Cost-conscious decision making',
                  'Safety-focused management',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('why-seawise')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Learn More About Our Edge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Technical Visual Split showing Bridge + Machinery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-sm overflow-hidden border border-slate-800">
                  <img 
                    src={MARITIME_IMAGES.bridgeConsole} 
                    alt="Ship bridge navigation console"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-tech text-white font-semibold">
                    THE BRIDGE • NAVIGATION
                  </div>
                </div>

                <div className="relative rounded-sm overflow-hidden border border-slate-800">
                  <img 
                    src={MARITIME_IMAGES.marineEngineer} 
                    alt="Marine engineer technical inspection"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-tech text-white font-semibold">
                    THE ENGINE ROOM • MACHINERY
                  </div>
                </div>
              </div>

              <div className="bg-[#0A1227] border border-slate-800 p-5 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-tech text-slate-400 uppercase">Dual Competence</span>
                  <span className="text-xs font-tech text-white">TECH & COMMERCIAL</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Decisions made ashore directly impact safety, voyage speed, fuel efficiency, and OPEX. We ensure every decision reflects the reality experienced at sea.
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 7. VALUE PROPOSITION (Qualitative Statements, No Fake Stats) */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 bg-[#081024] border-t border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-slate-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
                Institutional Tenets
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Value Proposition
            </h2>
            <p className="text-base text-slate-400">
              Clear commitments defined by professional competence rather than arbitrary metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITATIVE_PILLARS.map((pillar) => (
              <div 
                key={pillar.title}
                className="bg-[#0B1530] border border-slate-800 p-6 rounded-sm hover:border-slate-600 transition-colors"
              >
                <span className="text-xs font-tech text-slate-400 uppercase tracking-wider block mb-1">
                  {pillar.highlight}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Quick Action Tile */}
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-tech text-white uppercase tracking-wider block mb-1">
                  Consultation
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Direct Maritime Liaison
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connect with our team regarding your vessel technical management, procurement, or marine inspection needs.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onRequestConsultation()}
                  className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 8. PRE-FOOTER CTA STRIP */}
      <motion.section 
        {...sectionAnimation}
        className="py-16 bg-[#040814] border-t border-slate-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A142D] border border-slate-700/80 rounded-sm p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-left">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-300">
                Partner with Seawise Marine
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Protecting Assets. Ensuring Compliance. Optimizing Vessel Performance.
              </h3>
              <p className="text-sm text-slate-400">
                Whether you operate bulk carriers, tankers, container vessels, or specialized marine craft, we provide disciplined technical stewardship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => onRequestConsultation()}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer text-center"
              >
                Request a Consultation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-700 transition-all cursor-pointer text-center"
              >
                Direct Inquiry
              </button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
