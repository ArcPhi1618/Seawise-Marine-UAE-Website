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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0E1013] border border-neutral-800 shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#14161A]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300">
              <Anchor className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="font-display text-base font-bold text-white uppercase tracking-wider">
                Request a Maritime Consultation
              </h3>
              <p className="text-[11px] font-tech text-neutral-400">
                SEAWISE MARINE • Technical & Commercial Operations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto bg-[#0E1013]">
          <div className="mb-4">
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
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
