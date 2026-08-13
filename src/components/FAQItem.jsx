import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900 pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fade-in">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
