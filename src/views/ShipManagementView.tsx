import React from 'react';
import { PageId } from '../types';
import { 
  SHIP_MANAGEMENT_SERVICES, 
  APPROACH_STEPS, 
  MARITIME_IMAGES 
} from '../data/maritimeData';
import { 
  Ship, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Settings, 
  Users, 
  Wrench, 
  Package, 
  Anchor, 
  Search, 
  FileText, 
  AlertTriangle 
} from 'lucide-react';

interface ShipManagementViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: (service?: string) => void;
}

const getServiceIcon = (index: number) => {
  switch (index) {
    case 0: return <Settings className="w-5 h-5 text-slate-300" />;
    case 1: return <ShieldCheck className="w-5 h-5 text-slate-300" />;
    case 2: return <Users className="w-5 h-5 text-slate-300" />;
    case 3: return <Wrench className="w-5 h-5 text-slate-300" />;
    case 4: return <Package className="w-5 h-5 text-slate-300" />;
    case 5: return <Anchor className="w-5 h-5 text-slate-300" />;
    case 6: return <Search className="w-5 h-5 text-slate-300" />;
    case 7: return <Ship className="w-5 h-5 text-slate-300" />;
    case 8: return <FileText className="w-5 h-5 text-slate-300" />;
    case 9: return <AlertTriangle className="w-5 h-5 text-slate-300" />;
    default: return <Ship className="w-5 h-5 text-slate-300" />;
  }
};

export const ShipManagementView: React.FC<ShipManagementViewProps> = ({ 
  onNavigate, 
  onRequestConsultation 
}) => {
  return (
    <div className="bg-[#0E1013] text-neutral-100 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={MARITIME_IMAGES.dryDocking} 
            alt="Ship dry dock maintenance and technical overhaul" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013] via-[#0E1013]/90 to-[#0E1013]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-300">
                Core Division 01
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-wider leading-tight mb-6">
              Ship Management
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light mb-8">
              Professional management solutions designed to maintain vessel safety, reliability, compliance, and operational efficiency.
            </p>

            <button
              onClick={() => onRequestConsultation('Ship Management')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] hover:bg-neutral-200 transition-colors cursor-pointer border border-neutral-300"
            >
              <span>Discuss Your Vessel Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. 10 INDIVIDUAL SERVICE CARDS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-neutral-500"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
              Technical Capabilities
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
            Comprehensive Management Scope
          </h2>
          <p className="text-base text-neutral-400">
            Engineered to safeguard physical assets, maintain regulatory class standing, and optimize OPEX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHIP_MANAGEMENT_SERVICES.map((srv, index) => (
            <div 
              key={srv.id}
              className="bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <span className="text-[11px] font-tech text-neutral-400 font-bold tracking-wider uppercase">
                    SERVICE {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                    {getServiceIcon(index)}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-neutral-200 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {srv.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {srv.keyPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <button
                  onClick={() => onRequestConsultation(`Ship Management: ${srv.title}`)}
                  className="text-xs font-tech font-bold text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for Vessel</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR APPROACH (5 STEPS) */}
      <section className="py-24 bg-[#121418] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-neutral-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                Methodology
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-4">
              Our Approach
            </h2>
            <p className="text-base text-neutral-400">
              How Seawise Marine applies technical and operational knowledge throughout the vessel management lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {APPROACH_STEPS.map((step) => (
              <div 
                key={step.step}
                className="bg-[#14161A] border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-500 transition-colors"
              >
                <div>
                  <span className="font-tech text-xs font-bold text-neutral-400 block mb-2">
                    STEP {step.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 text-[11px] font-tech text-neutral-300">
                  <span className="text-neutral-400 block text-[10px]">DELIVERABLE:</span>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-16 bg-[#0B0C0E] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
              Ready to Discuss Your Vessel Requirements?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Our technical superintendents are available to evaluate your vessel’s scope of work.
            </p>
          </div>
          <button
            onClick={() => onRequestConsultation('Ship Management')}
            className="px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap border border-neutral-300"
          >
            Discuss Your Vessel Requirements
          </button>
        </div>
      </section>

    </div>
  );
};
