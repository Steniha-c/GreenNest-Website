import { Leaf, Sparkles, Compass, Heart, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about-greennest" className="py-20 bg-[#FAF8F4] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Capstone Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#5D8262]" />
              <span>Origins & Capstone Context</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
              A blueprint for conscious commerce & responsible AI.
            </h2>

            <p className="text-base text-[#435447] leading-relaxed">
              GreenNest was conceived to answer an urgent question: <em className="font-editorial text-[#1A2E20]">Can artificial intelligence build authentic human relationships in marketing without descending into spam, deceptive countdown clocks, or invasive behavioral tracking?</em>
            </p>

            <p className="text-sm text-[#435447] leading-relaxed">
              As a capstone project, GreenNest operates in two harmonious dimensions: it embodies a fictional lifestyle brand devoted to zero-waste home essentials, while serving as a real-world reference implementation of Google Workspace-powered email automation. Every campaign email, prompt directive, and spreadsheet trigger was architected to model respectful, consent-first communication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E6EDE6] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A2E20] uppercase font-mono">
                  <Leaf className="w-4 h-4 text-[#3C5440]" />
                  <span>The Fictional Brand</span>
                </div>
                <p className="text-xs text-[#556658] mt-1.5 leading-relaxed">
                  Mindfully designed reusable essentials—canteens, flax linen bags, beeswax wraps—celebrating durability over fast consumption.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6EDE6] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A2E20] uppercase font-mono">
                  <Sparkles className="w-4 h-4 text-[#3C5440]" />
                  <span>The Capstone Mission</span>
                </div>
                <p className="text-xs text-[#556658] mt-1.5 leading-relaxed">
                  Demonstrating a 5-email onboarding sequence powered by Google Sheets, Apps Script, and human-in-the-loop Gmail Draft staging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Guiding Pillars */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D5E0D5] p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-editorial text-xl font-bold text-[#1A2E20] pb-3 border-b border-[#E6EDE6]">
              Our Four Governing Pillars
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#3C5440] bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2E20]">Educational Primacy</h4>
                  <p className="text-xs text-[#556658] mt-0.5 leading-relaxed">
                    We educate before we ever suggest a product. The best ecological choice is caring for what you already possess.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#3C5440] bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2E20]">Human-in-the-Loop AI</h4>
                  <p className="text-xs text-[#556658] mt-0.5 leading-relaxed">
                    AI assists with drafting and formatting, but real human stewards retain the keys through Gmail Drafts staging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#3C5440] bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2E20]">Zero Manufactured Urgency</h4>
                  <p className="text-xs text-[#556658] mt-0.5 leading-relaxed">
                    No artificial timers, no flash sale anxiety, and no panic copy. Readers decide when and if they are ready.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#3C5440] bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0 mt-0.5">
                  04
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2E20]">Data Minimalist Stewardship</h4>
                  <p className="text-xs text-[#556658] mt-0.5 leading-relaxed">
                    We collect only what is strictly required to deliver the message. Zero third-party ad pixels or data brokers.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E6EDE6] text-center">
              <span className="font-editorial text-xs italic text-[#5D6F61]">
                "Small choices. A greener tomorrow."
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
