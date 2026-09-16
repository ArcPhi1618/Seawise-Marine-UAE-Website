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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
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
    <div className="bg-[#0E1013] text-neutral-100 selection:bg-neutral-700 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        {...sectionAnimation}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden maritime-grid"
      >
        {/* Cinematic Maritime Background Image with Multi-layer Matte Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={MARITIME_IMAGES.heroShip} 
            alt="Commercial container vessel at sea"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:hover:scale-100 filter brightness-90"
            loading="eager"
          />
          {/* Multi-layered dark matte overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013] via-[#0E1013]/90 to-[#14161A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-transparent to-[#0E1013]/85" />
          <div className="absolute inset-0 bg-[#0E1013]/40" />
        </div>

        {/* Technical Linework Accents */}
        <div className="absolute inset-0 z-10 pointer-events-none border-x border-neutral-800/50 max-w-7xl mx-auto" />

        {/* Hero Content Box */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">

            {/* Primary Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[0.04em] uppercase leading-[1.12] mb-6">
              Professional & Solutions-Focused Options
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
              Professional ship management, maritime trading, and marine services built on practical sea-going experience, technical expertise, and operational discipline.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#core-services"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.2em] rounded-none shadow-xl transition-all hover:translate-y-[-1px] cursor-pointer border border-neutral-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#14161A] hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.2em] rounded-none border border-neutral-700 transition-all cursor-pointer"
              >
                <span>Contact Seawise Marine</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 2. INTRODUCTION SECTION */}
      <motion.section 
        {...sectionAnimation}
        className="py-20 lg:py-28 bg-[#121418] border-y border-neutral-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-neutral-500"></span>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                  SEAWISE MARINE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider leading-tight">
                Practical Maritime Expertise.{' '}
                <span className="text-neutral-400 block">Reliable Solutions.</span>
              </h2>
              <div className="h-0.5 w-16 bg-neutral-400 mt-2"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base">
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
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-white hover:text-neutral-200 border-b border-neutral-400 pb-1 hover:border-white transition-all cursor-pointer"
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
        className="py-24 bg-[#0E1013] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-neutral-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
              Our Maritime Expertise
            </h2>
            <p className="text-base text-neutral-400">
              Integrated maritime solutions built around safety, reliability, technical knowledge, and operational efficiency.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SERVICE 01 — SHIP MANAGEMENT */}
            <div className="bg-[#14161A] border border-neutral-800 rounded-none p-7 flex flex-col justify-between hover:border-neutral-500 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                  <span className="font-tech text-xs font-bold text-neutral-400 tracking-wider">
                    01 — DIVISION
                  </span>
                  <div className="w-9 h-9 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                    <Ship className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-[0.16em] text-white mb-3">
                  SHIP MANAGEMENT
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  Professional management solutions designed to maintain vessel safety, reliability, compliance, and operational efficiency.
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] font-tech text-neutral-400 uppercase tracking-wider block font-semibold">
                    Core Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Technical Ship Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Marine & Safety Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Crew Management & Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Planned Maintenance Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Procurement & Spares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Dry-Docking & Repair Coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Vessel Inspections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Port & Operational Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Documentation & Compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Emergency & Technical Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onNavigate('ship-management')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.16em] border border-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Explore Ship Management</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* SERVICE 02 — MARITIME TRADING */}
            <div className="bg-[#14161A] border border-neutral-800 rounded-none p-7 flex flex-col justify-between hover:border-neutral-500 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                  <span className="font-tech text-xs font-bold text-neutral-400 tracking-wider">
                    02 — DIVISION
                  </span>
                  <div className="w-9 h-9 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                    <PackageCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-[0.16em] text-white mb-3">
                  MARITIME TRADING
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  Reliable sourcing and supply solutions for the marine industry, ensuring continuous vessel operational readiness.
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] font-tech text-neutral-400 uppercase tracking-wider block font-semibold">
                    Core Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Marine Equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Ship Spare Parts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Engine & Machinery Components</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Deck & Safety Equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Marine Consumables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Technical Supplies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Ship Stores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Procurement & Supply Coordination</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onNavigate('maritime-trading')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.16em] border border-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Explore Maritime Trading</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* SERVICE 03 — MARINE SERVICES */}
            <div className="bg-[#14161A] border border-neutral-800 rounded-none p-7 flex flex-col justify-between hover:border-neutral-500 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                  <span className="font-tech text-xs font-bold text-neutral-400 tracking-wider">
                    03 — DIVISION
                  </span>
                  <div className="w-9 h-9 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-[0.16em] text-white mb-3">
                  MARINE SERVICES
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  Practical technical and operational support delivered by experienced maritime professionals for complex vessel challenges.
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] font-tech text-neutral-400 uppercase tracking-wider block font-semibold">
                    Core Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Marine Consultancy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Technical Consultancy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Vessel Condition Assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Pre-Purchase Vessel Inspection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Repair & Maintenance Coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Troubleshooting & Technical Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Port Services Coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-500"></span>
                      <span>Marine Project Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onNavigate('marine-services')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.16em] border border-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Explore Marine Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. PROFESSIONAL PROMISE SECTION */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 bg-[#121418] border-y border-neutral-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Large Typography & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700">
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-300">
                  Operational Foundation
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider leading-[1.15]">
                Experienced at Sea.{' '}
                <span className="block text-neutral-400">
                  Professional Ashore.
                </span>
              </h2>

              <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
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
                <div className="p-3.5 bg-[#16181E] border border-neutral-800">
                  <div className="text-xs font-tech font-bold text-neutral-300 uppercase tracking-wider">Sea-Going Knowledge</div>
                  <p className="text-xs text-neutral-400 mt-1">Deep insight into main engines, machinery spaces & bridge watchkeeping.</p>
                </div>
                <div className="p-3.5 bg-[#16181E] border border-neutral-800">
                  <div className="text-xs font-tech font-bold text-neutral-300 uppercase tracking-wider">Shore Superintendence</div>
                  <p className="text-xs text-neutral-400 mt-1">Commercial discipline, cost prudence & class statutory management.</p>
                </div>
              </div>
            </div>

            {/* Right Col: Genuine Marine Engineering Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-neutral-700 overflow-hidden shadow-2xl">
                <img 
                  src={MARITIME_IMAGES.engineMachinery} 
                  alt="Marine diesel machinery space and engineering inspection"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-transparent to-transparent opacity-80" />
                
                {/* Tech Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#14161A]/95 backdrop-blur-md border border-neutral-700 p-3.5">
                  <div className="flex items-center justify-between text-xs font-tech text-neutral-300">
                    <span className="font-semibold text-white uppercase tracking-wider">ENGINEERING DISCIPLINE</span>
                    <span className="text-neutral-400">TECH-SPEC: 01-MACH</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
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
        className="py-24 bg-[#0E1013] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-neutral-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                Guiding Tenets
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
              Our Core Values
            </h2>
            <p className="text-base text-neutral-400">
              The principles that guide every decision, service, and client relationship.
            </p>
          </div>

          {/* Grid of Seven Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={val.title}
                className={`bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-500 transition-all ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-5 text-neutral-200">
                  {renderValueIcon(val.iconName)}
                </div>
                <h3 className="font-display text-base font-bold text-white tracking-wider uppercase mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
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
        className="py-24 bg-[#121418] border-t border-neutral-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-neutral-500"></span>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                  Operational Advantage
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider">
                Why Choose Seawise Marine
              </h2>

              <p className="text-xl font-display text-neutral-200 font-bold uppercase tracking-wide">
                Experience That Understands the Vessel.
              </p>

              <div className="p-4 bg-neutral-900 border border-neutral-700 text-neutral-300">
                <span className="font-tech text-xs font-bold text-white uppercase tracking-wider block mb-1">
                  Core Perspective:
                </span>
                <p className="text-sm font-medium italic text-neutral-200">
                  &ldquo;From the engine room to the boardroom.&rdquo;
                </p>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  We understand both the technical realities of vessel operation and the commercial pressures faced by ship owners and operators.
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
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
                  <div key={item} className="flex items-center gap-2.5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('why-seawise')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.18em] border border-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Learn More About Our Edge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Technical Visual Split showing Bridge + Machinery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden border border-neutral-700">
                  <img 
                    src={MARITIME_IMAGES.bridgeConsole} 
                    alt="Ship bridge navigation console"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-tech text-white font-semibold uppercase tracking-wider">
                    THE BRIDGE • NAVIGATION
                  </div>
                </div>

                <div className="relative overflow-hidden border border-neutral-700">
                  <img 
                    src={MARITIME_IMAGES.marineEngineer} 
                    alt="Marine engineer technical inspection"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-tech text-white font-semibold uppercase tracking-wider">
                    THE ENGINE ROOM • MACHINERY
                  </div>
                </div>
              </div>

              <div className="bg-[#14161A] border border-neutral-800 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-tech text-neutral-400 uppercase tracking-widest">Dual Competence</span>
                  <span className="text-xs font-tech text-white uppercase tracking-wider">TECH & COMMERCIAL</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Decisions made ashore directly impact safety, voyage speed, fuel efficiency, and OPEX. We ensure every decision reflects the reality experienced at sea.
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 7. VALUE PROPOSITION */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 bg-[#0E1013] border-t border-neutral-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-neutral-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                Institutional Tenets
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
              Value Proposition
            </h2>
            <p className="text-base text-neutral-400">
              Clear commitments defined by professional competence rather than arbitrary metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITATIVE_PILLARS.map((pillar) => (
              <div 
                key={pillar.title}
                className="bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-500 transition-colors"
              >
                <span className="text-xs font-tech text-neutral-400 uppercase tracking-wider block mb-1">
                  {pillar.highlight}
                </span>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Quick Action Tile */}
            <div className="bg-[#181A20] border border-neutral-700 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-tech text-white uppercase tracking-widest block mb-1">
                  Consultation
                </span>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-2">
                  Direct Maritime Liaison
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Connect with our team regarding your vessel technical management, procurement, or marine inspection needs.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onRequestConsultation()}
                  className="w-full py-2.5 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer border border-neutral-300"
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
        className="py-16 bg-[#0B0C0E] border-t border-neutral-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#14161A] border border-neutral-700 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-left">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-300">
                Partner with Seawise Marine
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                Protecting Assets. Ensuring Compliance. Optimizing Vessel Performance.
              </h3>
              <p className="text-sm text-neutral-400">
                Whether you operate bulk carriers, tankers, container vessels, or specialized marine craft, we provide disciplined technical stewardship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => onRequestConsultation()}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] transition-all cursor-pointer text-center border border-neutral-300"
              >
                Request a Consultation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold uppercase tracking-[0.18em] border border-neutral-700 transition-all cursor-pointer text-center"
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
