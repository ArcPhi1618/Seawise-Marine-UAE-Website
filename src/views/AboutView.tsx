import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { MARITIME_IMAGES, CORE_VALUES, QUALITATIVE_PILLARS } from '../data/maritimeData';

const sectionAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  style: { willChange: 'transform, opacity' }
};
import { 
  Anchor, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Award, 
  CheckCircle, 
  CheckCircle2,
  Users, 
  Ship, 
  ArrowDownRight,
  TrendingUp,
  Cpu,
  Scale
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onRequestConsultation }) => {
  useEffect(() => {
    if (window.location.hash === '#why-seawise') {
      const el = document.getElementById('why-seawise');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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

  const narrativeSteps = [
    {
      step: '01',
      phase: 'Experience',
      subtitle: 'Sea-Going Mastery',
      desc: 'Formed by Marine Engineers and Captains who have stood navigational watches and operated high-pressure propulsion plants across international oceans.',
    },
    {
      step: '02',
      phase: 'Technical Knowledge',
      subtitle: 'Engineering Precision',
      desc: 'Deep mastery of naval architecture, marine machinery systems, class society rules, SOLAS, and flag state statutory frameworks.',
    },
    {
      step: '03',
      phase: 'Operational Discipline',
      subtitle: 'Structured Processes',
      desc: 'Rigorous application of preventive maintenance systems, safe management procedures, and uncompromising budgetary oversight.',
    },
    {
      step: '04',
      phase: 'Reliable Solutions',
      subtitle: 'Tangible Execution',
      desc: 'Dependable vessel availability, rapid port turnaround, proactive risk mitigation, and high-standard marine supplies.',
    },
    {
      step: '05',
      phase: 'Long-Term Partnerships',
      subtitle: 'Enduring Trust',
      desc: 'Protecting capital assets and growing enduring commercial relationships founded on integrity, transparency, and technical reliability.',
    },
  ];

  return (
    <div className="bg-[#0E1013] text-neutral-100 min-h-screen pt-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO */}
      <motion.section 
        {...sectionAnimation}
        className="relative py-16 lg:py-24 border-b border-neutral-800 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={MARITIME_IMAGES.cargoVessel} 
            alt="Cargo vessel underway" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013] via-[#0E1013]/90 to-[#0E1013]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-300">
                About Seawise Marine
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-wider leading-tight mb-6">
              Maritime Experience.{' '}
              <span className="text-neutral-400 block">Professional Management.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              A UAE-based maritime enterprise specializing in Ship Management, Maritime Trading, and Marine Services. 
              Led and supported by experienced Marine Engineers, Captains, and maritime professionals.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 2. CORPORATE INTRODUCTION */}
      <motion.section 
        {...sectionAnimation}
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              Grounded in the Realities of Vessel Operations
            </h2>

            <p>
              Seawise Marine is a professional maritime company specializing in <strong className="text-white">Ship Management</strong>, <strong className="text-white">Maritime Trading</strong>, and <strong className="text-white">Marine Services</strong>.
            </p>

            <p>
              Led and supported by experienced Marine Engineers, Captains, and maritime professionals, we provide practical, reliable, and cost-effective solutions to ship owners, operators, and maritime businesses.
            </p>

            <p>
              We combine practical sea-going experience, technical knowledge, operational discipline, and modern management practices to help our clients protect their vessels, optimize performance, control costs, and achieve long-term success.
            </p>

            {/* Corporate Commitment Callout */}
            <div className="p-5 bg-[#14161A] border-l-2 border-neutral-400 border-y border-r border-neutral-800 text-neutral-200">
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                Our Corporate Commitment:
              </span>
              <p className="text-sm font-medium italic text-neutral-100">
                &ldquo;To protect our clients’ assets, support safe and efficient vessel operations, and build long-term partnerships based on professionalism, integrity, and trust.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border border-neutral-700 overflow-hidden shadow-2xl">
              <img 
                src={MARITIME_IMAGES.tankerSea} 
                alt="Commercial tanker operating at sea"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#14161A]/95 backdrop-blur-md p-4 border border-neutral-700">
                <span className="text-[10px] font-tech text-neutral-400 uppercase tracking-wider block">STRATEGIC DISCIPLINE</span>
                <span className="text-xs font-display font-bold uppercase tracking-wider text-white">Pragmatic Shore Superintendence</span>
                <p className="text-[11px] text-neutral-400 mt-1">Bridging engineering realities with commercial charter-party compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. OUR VISION & OUR MISSION */}
      <motion.section 
        {...sectionAnimation}
        className="py-20 bg-[#121418] border-y border-neutral-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-[#16181E] border border-neutral-800 p-8 hover:border-neutral-500 transition-colors">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400 block mb-2">
                Strategic Horizon
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                OUR VISION
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                To become a trusted and respected maritime partner, recognized for professional ship management, reliable marine trading, and quality maritime services—driven by the expertise of experienced Marine Engineers, Captains, and maritime professionals.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#16181E] border border-neutral-800 p-8 hover:border-neutral-500 transition-colors">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400 block mb-2">
                Operational Purpose
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                OUR MISSION
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                To deliver safe, reliable, efficient, and cost-effective maritime solutions through professional ship management, responsible trading, and responsive marine services.
              </p>
              <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                We combine practical sea-going experience, technical knowledge, operational discipline, and modern management practices to help our clients protect their vessels, optimize performance, control costs, and achieve long-term success.
              </p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. PROFESSIONAL TIMELINE / VISUAL NARRATIVE */}
      <motion.section 
        {...sectionAnimation}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-neutral-500"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
              Operational Continuum
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
            Our Professional Narrative
          </h2>
          <p className="text-base text-neutral-400">
            How practical sea-going competence translates systematically into lasting value for ship owners and operators.
          </p>
        </div>

        {/* Narrative Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {narrativeSteps.map((item, idx) => (
            <div 
              key={item.step}
              className="bg-[#14161A] border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-500 transition-colors relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-tech text-xs font-bold text-neutral-400">
                    PHASE {item.step}
                  </span>
                  {idx < narrativeSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-neutral-600 hidden md:block" />
                  )}
                </div>

                <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-1">
                  {item.phase}
                </h4>
                <span className="text-[11px] font-tech text-neutral-400 block mb-3 font-semibold uppercase tracking-wider">
                  {item.subtitle}
                </span>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <span className="w-full block h-0.5 bg-neutral-700 group-hover:bg-neutral-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. WHY CHOOSE SEAWISE MARINE */}
      <motion.section 
        {...sectionAnimation}
        id="why-seawise" 
        className="py-24 bg-[#121418] border-t border-neutral-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-neutral-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                Institutional Distinction
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
              Why Choose Seawise Marine
            </h2>
            <p className="text-xl text-neutral-200 font-display font-bold uppercase tracking-wide mb-3">
              Experience That Understands the Vessel.
            </p>
            <p className="text-base text-neutral-300 leading-relaxed">
              We are not simply a service vendor. We are a dependable maritime partner combining practical sea-going experience, technical knowledge, and commercial discipline.
            </p>
          </div>

          {/* From the Engine Room to the Boardroom */}
          <div className="bg-[#14161A] border border-neutral-800 p-8 lg:p-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
                Operational Perspective
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-2">
                From the Engine Room to the Boardroom
              </h3>
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
                <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Technical Realities of Operation</h4>
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
                <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Commercial Pressures of Ownership</h4>
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

          {/* Integrated Strengths Under One Management */}
          <div className="mb-16">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
                Pillars of Reliability
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-2">
                Integrated Strengths Under One Management
              </h3>
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
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-2">
                      {attr.title}
                    </h4>
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
          </div>

          {/* Value Proposition */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
                Client Assurance
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-2">
                Our Value Proposition
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {QUALITATIVE_PILLARS.map((item) => (
                <div key={item.title} className="bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-600 transition-colors">
                  <span className="text-[11px] font-tech text-neutral-400 uppercase font-bold tracking-wider block mb-1">
                    {item.highlight}
                  </span>
                  <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* 6. CTA STRIP */}
      <motion.section 
        {...sectionAnimation}
        className="py-16 bg-[#0B0C0E] border-t border-neutral-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Speak Directly with Our Maritime Leadership
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Connect with experienced Marine Engineers and Master Mariners to discuss your fleet requirements.
            </p>
          </div>
          <button
            onClick={onRequestConsultation}
            className="px-6 py-3 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap border border-neutral-300"
          >
            Request a Consultation
          </button>
        </div>
      </motion.section>

    </div>
  );
};
