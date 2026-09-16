import React, { useState } from 'react';
import { PageId } from '../types';
import { MARITIME_TRADING_ITEMS, MARITIME_IMAGES } from '../data/maritimeData';
import { 
  PackageCheck, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  Boxes, 
  FileCheck, 
  Cpu, 
  Ship, 
  Wrench, 
  Search,
  Filter
} from 'lucide-react';

interface MaritimeTradingViewProps {
  onNavigate: (page: PageId) => void;
  onRequestConsultation: (service?: string) => void;
}

export const MaritimeTradingView: React.FC<MaritimeTradingViewProps> = ({ 
  onNavigate, 
  onRequestConsultation 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = MARITIME_TRADING_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0E1013] text-neutral-100 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={MARITIME_IMAGES.portTerminal} 
            alt="Port terminal container operations and maritime logistics" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013] via-[#0E1013]/90 to-[#0E1013]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 mb-4">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-300">
                Core Division 02
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-wider leading-tight mb-6">
              Maritime Trading
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light mb-8">
              Reliable sourcing and supply solutions for the marine industry.
            </p>

            <button
              onClick={() => onRequestConsultation('Maritime Trading: General Supply')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] hover:bg-neutral-200 transition-colors cursor-pointer border border-neutral-300"
            >
              <span>Submit a Supply Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PROCUREMENT PILLARS VISUAL */}
      <section className="py-16 bg-[#121418] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
              Procurement Philosophy
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-2">
              Reliable Sourcing. Technical Understanding. Responsive Coordination.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#14161A] border border-neutral-800 p-6">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-4">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2">
                Reliable Sourcing
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Diligent identification of genuine, OEM-grade equipment and precision parts matching exact maker specifications and drawing references.
              </p>
            </div>

            <div className="bg-[#14161A] border border-neutral-800 p-6">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2">
                Technical Understanding
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Reviewed directly by Marine Engineers to eliminate part misidentification, incorrect tolerances, or incompatible material grades.
              </p>
            </div>

            <div className="bg-[#14161A] border border-neutral-800 p-6">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2">
                Responsive Coordination
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Prompt quotation cycles, clear logistics updates, and synchronized delivery to vessel anchorage or berth during narrow port call windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPLY CATEGORIES (8 ITEMS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-neutral-500"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-300">
                Supply Portfolio
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider">
              Marine Trading Portfolio
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Comprehensive sourcing across mechanical, electrical, deck, and safety scopes.
            </p>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search components or stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 bg-neutral-900 border border-neutral-700 text-xs text-white focus:outline-none focus:border-neutral-500 placeholder:text-neutral-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.title}
              className="bg-[#14161A] border border-neutral-800 p-6 hover:border-neutral-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-neutral-400 bg-neutral-900 px-2 py-0.5 border border-neutral-800">
                    {item.tag}
                  </span>
                  <span className="text-xs font-tech text-neutral-400 font-bold">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2 group-hover:text-neutral-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <button
                  onClick={() => onRequestConsultation(`Trading Inquiry: ${item.title}`)}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-tech font-bold uppercase tracking-wider border border-neutral-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request RFQ</span>
                  <ArrowRight className="w-3 h-3 text-neutral-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCUREMENT PROCESS FLOW */}
      <section className="py-20 bg-[#121418] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-neutral-400">
              Transparent Execution
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-2">
              Structured Supply Chain Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-[#14161A] border border-neutral-800">
              <span className="font-tech text-xs text-neutral-400 font-bold block mb-2">STAGE 01</span>
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-2">Requisition Review</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Technical validation of part numbers, equipment serials, maker manuals, and urgency level.
              </p>
            </div>

            <div className="p-5 bg-[#14161A] border border-neutral-800">
              <span className="font-tech text-xs text-neutral-400 font-bold block mb-2">STAGE 02</span>
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-2">Sourcing & Quotation</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Transparent price quotations detailing availability, class certificates (if required), and lead times.
              </p>
            </div>

            <div className="p-5 bg-[#14161A] border border-neutral-800">
              <span className="font-tech text-xs text-neutral-400 font-bold block mb-2">STAGE 03</span>
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-2">Quality Inspection</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Pre-dispatch verification of dimensional tolerances, packaging integrity, and shipping documents.
              </p>
            </div>

            <div className="p-5 bg-[#14161A] border border-neutral-800">
              <span className="font-tech text-xs text-neutral-400 font-bold block mb-2">STAGE 04</span>
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-2">Port/Berth Delivery</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Hands-on liaison with vessel agent and port authorities to ensure prompt handover onboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 bg-[#0B0C0E] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
              Need Machinery Spares or Technical Stores?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Send your vessel requisition or maker part numbers for an expedited RFQ.
            </p>
          </div>
          <button
            onClick={() => onRequestConsultation('Maritime Trading: Requisition')}
            className="px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-display font-bold uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap border border-neutral-300"
          >
            Submit a Supply Inquiry
          </button>
        </div>
      </section>

    </div>
  );
};
