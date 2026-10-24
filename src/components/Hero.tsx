import { ArrowRight, Leaf, ShieldCheck, MailCheck, Workflow, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreCampaign: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onExploreCampaign, onExploreProducts }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E6EDE6]">
      {/* Subtle organic background gradient accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E6EDE6]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#EDE5D8]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-[#5D8262]" />
              <span>Eco-Lifestyle Brand & AI Marketing Capstone</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-bold text-[#1A2E20] tracking-tight text-balance">
              Small choices. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#3C5440]">A greener tomorrow.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#435447] leading-relaxed max-w-2xl font-normal">
              GreenNest is a fictional sustainable lifestyle brand and an AI Email Marketing capstone project. Discover how human-in-the-loop automation, Google Workspace pipelines, and ethical AI craft deep subscriber trust without aggressive sales pressure or manufactured urgency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCampaign}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A2E20] hover:bg-[#2C4434] rounded-xl transition-all shadow-sm hover:shadow focus-visible:outline-2 focus-visible:outline-[#1A2E20] cursor-pointer"
              >
                <span>Inspect 5-Email Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1A2E20] bg-[#EAEFE9] hover:bg-[#DCE6DA] border border-[#C8DAC8] rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
              >
                <span>Browse Reusable Goods</span>
              </button>
            </div>

            {/* Quick Editorial Metadata strip */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#5D6F61]">
              <span className="font-medium text-[#243328]">Capstone Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Google Sheets State</span>
              <span aria-hidden="true">·</span>
              <span>Apps Script Triggers</span>
              <span aria-hidden="true">·</span>
              <span>Gmail Drafts Staging</span>
              <span aria-hidden="true">·</span>
              <span>Zero Fake Urgency</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#EAEFEA] via-[#F4F6F2] to-[#ECE7DD] border border-[#D5E0D5] p-6 sm:p-8 shadow-sm">
              {/* Botanical badge header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#D5E0D5]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#3C5440] text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-base font-semibold text-[#1A2E20] leading-tight">
                      Automated Eco-Sequence
                    </h3>
                    <p className="text-xs text-[#5D6F61]">5-Stage Responsible Lifecycle</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#3C5440] bg-[#D8E6D8] px-2.5 py-1 rounded-md">
                  Active Blueprint
                </span>
              </div>

              {/* Sequence Flow Timeline in Hero */}
              <div className="py-5 space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E0E8E0] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#1A2E20] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1A2E20] truncate">Welcome & Value Pledge</span>
                      <span className="text-[11px] text-[#5D8262] font-mono">Day 0</span>
                    </div>
                    <p className="text-xs text-[#556658] mt-0.5 line-clamp-1">
                      Double opt-in confirmation & 12-swap field guide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E0E8E0] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#3C5440] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1A2E20] truncate">Sustainability Tips</span>
                      <span className="text-[11px] text-[#5D8262] font-mono">Day 2</span>
                    </div>
                    <p className="text-xs text-[#556658] mt-0.5 line-clamp-1">
                      Pure education: cold washing & freezer broth habits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E0E8E0] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#5D8262] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1A2E20] truncate">Product Introduction</span>
                      <span className="text-[11px] text-[#5D8262] font-mono">Day 5</span>
                    </div>
                    <p className="text-xs text-[#556658] mt-0.5 line-clamp-1">
                      PureStream Canteen & Heirloom Linen Tote transparency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E0E8E0] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#82694D] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1A2E20] truncate">Calm 15% Welcome Blessing</span>
                      <span className="text-[11px] text-[#5D8262] font-mono">Day 8</span>
                    </div>
                    <p className="text-xs text-[#556658] mt-0.5 line-clamp-1">
                      No ticking countdown clocks. Fictional code: GREEN15.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E0E8E0] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#4A3B2C] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1A2E20] truncate">Thank You & Reflection</span>
                      <span className="text-[11px] text-[#5D8262] font-mono">Day 14</span>
                    </div>
                    <p className="text-xs text-[#556658] mt-0.5 line-clamp-1">
                      Subscriber cadence preference control & impact audit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safe Staging Banner */}
              <div className="pt-3 border-t border-[#D5E0D5] flex items-center justify-between text-xs text-[#435447]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#3C5440]" />
                  Human-in-the-Loop Safe Staging
                </span>
                <span className="text-[#6D8070]">Gmail Drafts</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Feature Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-[#E6EDE6] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A2E20]">
              <MailCheck className="w-4 h-4 text-[#3C5440]" />
              <span>5-Stage Email Sequence</span>
            </div>
            <p className="text-xs text-[#556658] leading-relaxed">
              Meticulously crafted copy with responsive HTML & plain-text parity.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A2E20]">
              <Workflow className="w-4 h-4 text-[#3C5440]" />
              <span>Google Workspace Engine</span>
            </div>
            <p className="text-xs text-[#556658] leading-relaxed">
              Google Sheets state, Apps Script cron, and Gmail Drafts staging.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A2E20]">
              <ShieldCheck className="w-4 h-4 text-[#3C5440]" />
              <span>Responsible AI Charter</span>
            </div>
            <p className="text-xs text-[#556658] leading-relaxed">
              Zero fake countdown timers, full materials audit, and true 1-click opt-out.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A2E20]">
              <Leaf className="w-4 h-4 text-[#3C5440]" />
              <span>Educational Examples</span>
            </div>
            <p className="text-xs text-[#556658] leading-relaxed">
              Zero real billing, zero telemetry harvesting, 100% academic transparency.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
