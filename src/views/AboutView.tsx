import React from 'react';
import { PageId } from '../types';
import { MARITIME_IMAGES, CORE_VALUES } from '../data/maritimeData';
import { 
  Anchor, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Award, 
  CheckCircle, 
  Users, 
  Ship, 
  ArrowDownRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onRequestConsultation }) => {
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
    <div className="bg-[#060B18] text-slate-100 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src={MARITIME_IMAGES.cargoVessel} 
            alt="Cargo vessel underway" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/90 to-[#060B18]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-300">
                About Seawise Marine
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Maritime Experience.{' '}
              <span className="text-slate-300 block">Professional Management.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              A UAE-based maritime enterprise specializing in Ship Management, Maritime Trading, and Marine Services. 
              Led and supported by experienced Marine Engineers, Captains, and maritime professionals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE INTRODUCTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
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
            <div className="p-5 bg-[#091228] border-l-4 border-slate-400 rounded-r-sm text-slate-200">
              <span className="text-xs font-tech font-bold uppercase tracking-wider text-slate-300 block mb-1">
                Our Corporate Commitment:
              </span>
              <p className="text-sm font-semibold italic text-white">
                &ldquo;To protect our clients’ assets, support safe and efficient vessel operations, and build long-term partnerships based on professionalism, integrity, and trust.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src={MARITIME_IMAGES.tankerSea} 
                alt="Commercial tanker operating at sea"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#070D1E]/90 backdrop-blur-md p-4 rounded-sm border border-slate-700">
                <span className="text-[10px] font-tech text-slate-300 uppercase block">STRATEGIC DISCIPLINE</span>
                <span className="text-xs font-bold text-white">Pragmatic Shore Superintendence</span>
                <p className="text-[11px] text-slate-400 mt-1">Bridging engineering realities with commercial charter-party compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & OUR MISSION */}
      <section className="py-20 bg-[#081024] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-[#0B1530] border border-slate-800 p-8 rounded-sm hover:border-slate-600 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300 block mb-2">
                Strategic Horizon
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                OUR VISION
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To become a trusted and respected maritime partner, recognized for professional ship management, reliable marine trading, and quality maritime services—driven by the expertise of experienced Marine Engineers, Captains, and maritime professionals.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#0B1530] border border-slate-800 p-8 rounded-sm hover:border-slate-600 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300 block mb-2">
                Operational Purpose
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                OUR MISSION
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To deliver safe, reliable, efficient, and cost-effective maritime solutions through professional ship management, responsible trading, and responsive marine services.
              </p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                We combine practical sea-going experience, technical knowledge, operational discipline, and modern management practices to help our clients protect their vessels, optimize performance, control costs, and achieve long-term success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL TIMELINE / VISUAL NARRATIVE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-slate-500"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
              Operational Continuum
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Our Professional Narrative
          </h2>
          <p className="text-base text-slate-400">
            How practical sea-going competence translates systematically into lasting value for ship owners and operators.
          </p>
        </div>

        {/* Narrative Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {narrativeSteps.map((item, idx) => (
            <div 
              key={item.step}
              className="bg-[#080F22] border border-slate-800 p-6 rounded-sm flex flex-col justify-between hover:border-slate-600 transition-colors relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-tech text-xs font-bold text-slate-400">
                    PHASE {item.step}
                  </span>
                  {idx < narrativeSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                  )}
                </div>

                <h4 className="font-heading text-lg font-bold text-white mb-1">
                  {item.phase}
                </h4>
                <span className="text-[11px] font-tech text-slate-400 block mb-3 font-semibold">
                  {item.subtitle}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <span className="w-full block h-0.5 bg-slate-700 group-hover:bg-slate-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA STRIP */}
      <section className="py-16 bg-[#040814] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Speak Directly with Our Maritime Leadership
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with experienced Marine Engineers and Master Mariners to discuss your fleet requirements.
            </p>
          </div>
          <button
            onClick={onRequestConsultation}
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Request a Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
