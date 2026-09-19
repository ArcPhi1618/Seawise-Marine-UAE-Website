import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { Send, CheckCircle2, Copy, Check, FileText, Ship, AlertCircle } from 'lucide-react';

interface InquiryFormProps {
  initialService?: string;
  onSuccessClose?: () => void;
  isCompact?: boolean;
  isFlat?: boolean;
}

const SERVICE_OPTIONS = [
  'Ship Management',
  'Maritime Trading',
  'Marine Services',
  'Marine Consultancy',
  'Vessel Inspection',
  'Spare Parts / Equipment',
  'Other',
];

export const InquiryForm: React.FC<InquiryFormProps> = ({ 
  initialService = 'Ship Management', 
  onSuccessClose,
  isCompact = false,
  isFlat = false
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    firstName: '',
    lastName: '',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: initialService,
    vesselProject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const resolvedName = (formData.fullName.trim() || `${formData.firstName || ''} ${formData.lastName || ''}`.trim());

    if (!resolvedName || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Business Email, Message).');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate professional inquiry receipt generation
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `SWM-INQ-${randomCode}`;
      setReferenceNumber(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resolvedDisplayName = formData.fullName.trim() || `${formData.firstName || ''} ${formData.lastName || ''}`.trim();

  const handleCopyDetails = () => {
    const summary = `SEAWISE MARINE INQUIRY
Reference: ${referenceNumber}
Name: ${formData.fullName}
Company: ${formData.company || 'Not Specified'}
Email: ${formData.email}
Phone: ${formData.phone || 'Not Specified'}
Service: ${formData.serviceRequired}
Vessel/Project: ${formData.vesselProject || 'N/A'}
Message: ${formData.message}`;

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceRequired: initialService,
      vesselProject: '',
      message: '',
    });
    if (onSuccessClose) onSuccessClose();
  };

  if (submitted) {
    return (
      <div className="bg-[#14161A] border border-neutral-800 p-6 sm:p-8 text-center text-neutral-200">
        <div className="w-14 h-14 mx-auto rounded-full bg-neutral-900 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="inline-block px-2.5 py-1 text-[10px] font-tech font-bold uppercase tracking-widest bg-emerald-950/40 text-emerald-400 border border-emerald-800/60 mb-3">
          Inquiry Successfully Dispatched
        </span>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-2">
          Thank You, {formData.fullName}
        </h3>

        <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6 font-light">
          Your maritime inquiry has been logged into our operations queue. Our Marine Superintendents or Commercial Desk will evaluate your vessel specifications and respond promptly.
        </p>

        {/* Reference Box */}
        <div className="bg-neutral-900 border border-neutral-800 p-4 max-w-md mx-auto text-left mb-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3">
            <span className="text-xs font-tech text-neutral-400 uppercase tracking-wider">Inquiry Reference</span>
            <span className="text-xs font-tech font-bold text-white">{referenceNumber}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-neutral-400 block">Service:</span>
              <span className="text-neutral-200 font-medium">{formData.serviceRequired}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Vessel / Project:</span>
              <span className="text-neutral-200 font-medium">{formData.vesselProject || 'General Inquiry'}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={handleCopyDetails}
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display uppercase tracking-wider border border-neutral-700 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
          </button>
          
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-display font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer border border-neutral-300"
          >
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={isFlat ? "text-neutral-200" : "bg-[#14161A] border border-neutral-800 p-6 sm:p-8 text-neutral-200 shadow-xl"}
    >
      {errorMessage && (
        <div className="mb-6 p-3 bg-rose-950/40 border border-rose-800/80 flex items-center gap-2.5 text-xs text-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 2-Column Inputs matching reference layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 mb-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-xs font-medium text-neutral-300 mb-1.5">
            First name <span className="text-neutral-400">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder=""
            value={formData.firstName || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Last name <span className="text-neutral-400">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder=""
            value={formData.lastName || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Business email <span className="text-neutral-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Phone / Contact */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Contact number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+971 -- --- ----"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
          />
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="serviceRequired" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Service required <span className="text-neutral-400">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-neutral-900/80 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-neutral-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Company Name / Vessel */}
        <div>
          <label htmlFor="company" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Company name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder=""
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      {/* Vessel / Project Identifier */}
      <div className="mb-4">
        <label htmlFor="vesselProject" className="block text-xs font-medium text-neutral-300 mb-1.5">
          Vessel / Project identifier
        </label>
        <input
          id="vesselProject"
          name="vesselProject"
          type="text"
          placeholder="e.g. Bulk Carrier 55k DWT / IMO 9xxxxxx"
          value={formData.vesselProject}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1.5">
          Scope / Inquiry details <span className="text-neutral-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={isCompact ? 3 : 4}
          required
          placeholder="Please describe your vessel parameters, required spare parts, machinery specifications, dry-dock timeline, or operational needs..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-neutral-900/60 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 resize-y"
        />
      </div>

      {/* Form Submission Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
        <div className="text-[11px] font-tech text-neutral-400 flex items-center gap-2">
          <Ship className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>Professional confidentiality guaranteed under maritime standards.</span>
        </div>

        <button
          id="submit-inquiry-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-display font-bold uppercase tracking-[0.18em] transition-all cursor-pointer disabled:opacity-50 border border-neutral-300 shadow-sm"
        >
          {isSubmitting ? (
            <span>Processing Dispatch...</span>
          ) : (
            <>
              <span>Send Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
