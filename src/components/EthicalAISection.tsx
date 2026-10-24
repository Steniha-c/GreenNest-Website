import { useState } from 'react';
import { ETHICAL_PRINCIPLES } from '../data/ethicalPrinciples';
import { ShieldCheck, Check, X, HeartHandshake, EyeOff, Ban, KeyRound } from 'lucide-react';

export default function EthicalAISection() {
  const [activePrincipleId, setActivePrincipleId] = useState(ETHICAL_PRINCIPLES[0].id);

  const activePrinciple = ETHICAL_PRINCIPLES.find(p => p.id === activePrincipleId) || ETHICAL_PRINCIPLES[0];

  return (
    <section id="ethical-ai" className="py-20 bg-[#FBF9F5] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5D8262]" />
            <span>Responsible AI Charter</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#7A8C7C]">Ethical Marketing Standards</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
            AI Marketing Without Deception or Exploitation
          </h2>
          <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
            AI in marketing should serve human autonomy, not exploit psychological biases. GreenNest is anchored in five inviolable principles designed to protect subscriber dignity and foster genuine environmental awareness.
          </p>
        </div>

        {/* 5 Principle Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-8">
          {ETHICAL_PRINCIPLES.map((principle) => {
            const isSelected = activePrincipleId === principle.id;

            return (
              <button
                key={principle.id}
                onClick={() => setActivePrincipleId(principle.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-[#3C5440] shadow-sm ring-1 ring-[#3C5440]'
                    : 'bg-[#FAFBF9] border-[#DCE5DC] hover:border-[#ADC7AD]'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#5D8262] block mb-1">
                  Principle {principle.number}
                </span>
                <h3 className="font-editorial text-sm font-bold text-[#1A2E20] line-clamp-1">
                  {principle.title.split('&')[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-[#D5E0D5] p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Header of Active Principle */}
          <div className="space-y-3 pb-6 border-b border-[#E6EDE6]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#5D8262] bg-[#E6EDE6] px-2.5 py-1 rounded-md font-semibold">
                Principle {activePrinciple.number}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A2E20]">
                {activePrinciple.title}
              </h3>
            </div>
            <p className="text-base text-[#243328] font-medium leading-snug">
              "{activePrinciple.corePledge}"
            </p>
            <p className="text-sm text-[#435447] leading-relaxed max-w-3xl">
              {activePrinciple.explanation}
            </p>
          </div>

          {/* Side by side: What We Do vs Dark Patterns We Reject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1: What We Do */}
            <div className="p-6 rounded-xl bg-[#F4F7F4] border border-[#D5E0D5] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A2E20] uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#3C5440]" />
                <span>What GreenNest Implements</span>
              </div>
              <ul className="space-y-3">
                {activePrinciple.whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#354538]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3C5440] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Dark Patterns Rejected */}
            <div className="p-6 rounded-xl bg-[#FAF6F6] border border-[#EED7D7] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C2B2B] uppercase tracking-wider">
                <Ban className="w-4 h-4 text-[#A83232]" />
                <span>Industry Dark Patterns We Prohibit</span>
              </div>
              <ul className="space-y-3">
                {activePrinciple.whatWeAvoid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C3232]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A83232] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* FTC & Ethical Marketing Alignment Footnote */}
          <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#EAE6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#5D6F61]">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#3C5440] shrink-0" />
              <span>
                Engineered in compliance with the FTC Green Guides, GDPR right to be forgotten, and CAN-SPAM direct opt-out mandates.
              </span>
            </div>
            <a
              href="#project-overview"
              className="text-[#1A2E20] font-semibold hover:underline shrink-0"
            >
              Inspect Capstone Tech Stack →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
