import React from 'react';
import { PageId } from '../types';
import { MARINE_SERVICES_ITEMS, MARITIME_IMAGES } from '../data/maritimeData';
import { 
  Wrench, 
  ArrowRight, 
  Compass, 
  Cpu, 
  ClipboardCheck, 
  Search, 
  Activity, 
  Anchor, 
  Layers, 
  CheckCircle2,
  Ship
} from 'lucide-react';

interface MarineServicesViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: (service?: string) => void;
}

const renderServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return <Compass className="w-5 h-5 text-slate-300" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-slate-300" />;
    case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-slate-300" />;
    case 'Search': return <Search className="w-5 h-5 text-slate-300" />;
    case 'Tool': return <Wrench className="w-5 h-5 text-slate-300" />;
    case 'Activity': return <Activity className="w-5 h-5 text-slate-300" />;
    case 'Anchor': return <Anchor className="w-5 h-5 text-slate-300" />;
    case 'Layers': return <Layers className="w-5 h-5 text-slate-300" />;
    default: return <Wrench className="w-5 h-5 text-slate-300" />;
  }
};

export const MarineServicesView: React.FC<MarineServicesViewProps> = ({ 
  onNavigate, 
  onRequestConsultation 
}) => {
  return (
    <div className="bg-[#060B18] text-slate-100 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src={MARITIME_IMAGES.bridgeConsole} 
            alt="Marine engineering bridge operations and technical advisory" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/90 to-[#060B18]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-300">
                Core Division 03
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Marine Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Practical technical and operational support delivered by experienced maritime professionals.
            </p>

            <button
              onClick={() => onRequestConsultation('Marine Services: General Support')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-slate-100 transition-colors shadow-lg cursor-pointer"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. EIGHT SPECIALIZED SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-slate-500"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
              Field & Advisory Expertise
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Specialized Technical Support
          </h2>
          <p className="text-base text-slate-400">
            Targeted engineering and operational interventions for owners, charterers, and financial stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARINE_SERVICES_ITEMS.map((srv, index) => (
            <div 
              key={srv.title}
              className="bg-[#0A1227] border border-slate-800 rounded-sm p-6 hover:border-slate-600 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="w-8 h-8 rounded-sm bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {renderServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-tech text-slate-400 font-bold">
                    03.{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <button
                  onClick={() => onRequestConsultation(`Marine Services: ${srv.title}`)}
                  className="text-xs font-tech font-bold text-slate-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Support</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRACTICAL SOLUTIONS FOR REAL-WORLD VESSEL CHALLENGES */}
      <section className="py-24 bg-[#081024] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-slate-500"></span>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300">
                  Engineering Integrity
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Practical Solutions for Real-World Vessel Challenges
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Modern ship operations cannot rely on purely theoretical management. When machinery fails at sea or class survey deficiencies arise during a tight port call, solutions must be immediate, practical, and technically indisputable.
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                <strong className="text-white">Seawise Marine</strong> brings practical sea-going knowledge to shore-based technical and operational decisions. We evaluate vessel challenges through the combined lens of seasoned Chief Engineers who know how machinery operates under load, and Master Mariners who understand maritime law, heavy weather, and vessel safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#0B1530] border border-slate-800 rounded-sm">
                  <h4 className="text-xs font-tech font-bold text-white uppercase mb-1">Root-Cause Troubleshooting</h4>
                  <p className="text-xs text-slate-400">Direct technical diagnostic support that identifies true mechanical failures rather than treating superficial symptoms.</p>
                </div>
                <div className="p-4 bg-[#0B1530] border border-slate-800 rounded-sm">
                  <h4 className="text-xs font-tech font-bold text-white uppercase mb-1">Independent Condition Audits</h4>
                  <p className="text-xs text-slate-400">Clear, transparent evaluations for financiers and buyers with accurate estimates of required repair expenditure.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src={MARITIME_IMAGES.deckOperations} 
                  alt="Vessel inspection and marine survey"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#070D1E]/95 p-4 rounded-sm border border-slate-700">
                  <span className="text-[10px] font-tech text-slate-300 uppercase block">OPERATIONAL REALISM</span>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    &ldquo;Shore management that respects the physics of the engine room and the laws of the sea.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-16 bg-[#040814] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Facing a Complex Vessel Challenge?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Engage our marine consultants for unbiased, technically sound advice and on-site support.
            </p>
          </div>
          <button
            onClick={() => onRequestConsultation('Marine Services: Consultation')}
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Discuss Your Requirements
          </button>
        </div>
      </section>

    </div>
  );
};
