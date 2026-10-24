import { useState } from 'react';
import { SUSTAINABILITY_TIPS } from '../data/sustainabilityTips';
import { Leaf, Check, Sparkles, CheckCircle2, BookmarkPlus } from 'lucide-react';

export default function SustainabilityTips() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'kitchen' | 'laundry' | 'daily' | 'circular'>('all');
  const [practicedTips, setPracticedTips] = useState<Record<string, boolean>>({});

  const togglePractice = (id: string) => {
    setPracticedTips(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredTips = activeCategory === 'all'
    ? SUSTAINABILITY_TIPS
    : SUSTAINABILITY_TIPS.filter(t => t.category === activeCategory);

  const practicedCount = Object.values(practicedTips).filter(Boolean).length;

  return (
    <section id="sustainability-tips" className="py-20 bg-[#FBF9F5] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6EDE6]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-[#5D8262]" />
              <span>Accessible Zero-Waste Habits</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#7A8C7C]">Featured in Email 2</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
              Quiet Habits for a Lighter Footprint
            </h2>
            <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
              Sustainable living begins with what is already in our homes. These field-tested micro-habits require little or no financial investment and directly form the educational core of our Email 2 campaign.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EAEFE9] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all' ? 'bg-white text-[#1A2E20] shadow-xs' : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              All Habits
            </button>
            <button
              onClick={() => setActiveCategory('kitchen')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'kitchen' ? 'bg-white text-[#1A2E20] shadow-xs' : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              Kitchen
            </button>
            <button
              onClick={() => setActiveCategory('laundry')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'laundry' ? 'bg-white text-[#1A2E20] shadow-xs' : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              Laundry
            </button>
            <button
              onClick={() => setActiveCategory('daily')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'daily' ? 'bg-white text-[#1A2E20] shadow-xs' : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              Daily Pause
            </button>
            <button
              onClick={() => setActiveCategory('circular')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'circular' ? 'bg-white text-[#1A2E20] shadow-xs' : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              Circular Living
            </button>
          </div>
        </div>

        {/* Counter Strip */}
        <div className="pt-6 pb-2 flex items-center justify-between text-xs text-[#5D6F61]">
          <span>Showing {filteredTips.length} actionable guides</span>
          <span className="font-medium text-[#1A2E20]">
            Your Practice Tracker: <strong className="text-[#3C5440] font-mono tabular-nums">{practicedCount}</strong> of {SUSTAINABILITY_TIPS.length} habits adopted
          </span>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredTips.map((tip) => {
            const isPracticed = practicedTips[tip.id];

            return (
              <div
                key={tip.id}
                className="bg-white rounded-2xl border border-[#E6EDE6] hover:border-[#C4D6C4] transition-all p-6 flex flex-col justify-between space-y-5 shadow-xs"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#5D8262] uppercase tracking-wider">
                      Habit {tip.number}
                    </span>
                    <span className="text-[11px] font-medium text-[#7A8C7C] bg-[#FAF8F4] px-2.5 py-0.5 rounded-full border border-[#EAE6DF]">
                      {tip.difficulty}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#1A2E20]">
                    {tip.title}
                  </h3>

                  <p className="text-xs text-[#556658] leading-relaxed">
                    {tip.whyItMatters}
                  </p>

                  {/* Step Action Guide */}
                  <div className="space-y-2 pt-2 border-t border-[#F0F4F0]">
                    <span className="text-[11px] font-bold text-[#1A2E20] uppercase tracking-wider block">
                      Implementation Steps:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#435447]">
                      {tip.actionGuide.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="font-mono text-[#5D8262] font-semibold text-[11px] mt-0.5">
                            {sIdx + 1}.
                          </span>
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footnote & Interactive Habit Toggle */}
                <div className="pt-4 border-t border-[#F0F4F0] flex items-center justify-between gap-3">
                  <div className="text-[11px] text-[#5D8262] font-medium">
                    {tip.carbonImpact}
                  </div>

                  <button
                    onClick={() => togglePractice(tip.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isPracticed
                        ? 'bg-[#3C5440] text-white'
                        : 'bg-[#F4F7F4] hover:bg-[#E6EDE6] text-[#1A2E20] border border-[#DEE5DC]'
                    }`}
                  >
                    {isPracticed ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Practiced</span>
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="w-3.5 h-3.5 text-[#5D8262]" />
                        <span>I Do This</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
