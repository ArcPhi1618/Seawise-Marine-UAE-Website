import React from 'react';
import { X, Anchor } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Ship Management',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#070D1E] border border-slate-700 rounded-sm shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#091228]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <Anchor className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="font-heading text-base font-bold text-white uppercase tracking-wider">
                Request a Maritime Consultation
              </h3>
              <p className="text-[11px] font-tech text-slate-400">
                SEAWISE MARINE • Technical & Commercial Operations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <div className="mb-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with our marine engineers and captains. Submit your vessel parameters or operational requirements below for a prompt, technically-grounded consultation.
            </p>
          </div>

          <InquiryForm 
            initialService={defaultService} 
            onSuccessClose={onClose}
            isCompact={true}
          />
        </div>
      </div>
    </div>
  );
};
