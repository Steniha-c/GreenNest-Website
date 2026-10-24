import { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function EducationalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1A2E20] text-[#E6EDE6] text-xs py-2 px-4 border-b border-[#2C4434] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <AlertCircle className="w-3.5 h-3.5 text-[#ADC7AD] shrink-0" aria-hidden="true" />
          <p className="truncate">
            <strong className="font-semibold text-white">Capstone Project Showcase:</strong> GreenNest is a fictional brand demonstrating AI Email Marketing automation. All products, prices, and promotions are educational examples.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#ADC7AD] hover:text-white transition-colors p-0.5 rounded shrink-0 focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Dismiss educational disclaimer banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
