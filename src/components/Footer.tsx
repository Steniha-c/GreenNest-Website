import { ShieldAlert, Leaf } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A2E20] text-[#D0DED0] pt-16 pb-12 border-t border-[#253A2A]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-editorial text-2xl font-bold tracking-tight text-white block">
              GreenNest
            </span>
            <p className="text-xs text-[#ADC7AD] italic font-editorial text-sm">
              "Small choices. A greener tomorrow."
            </p>
            <p className="text-xs text-[#A2BAA5] leading-relaxed max-w-sm">
              A fictional eco-friendly lifestyle brand and AI Email Marketing capstone project exploring transparent automated customer lifecycles and human-in-the-loop email staging.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block font-mono text-[11px] mb-3">
              Capstone Sections
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('featured-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Reusable Goods (Educational)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sustainability-tips')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sustainability Micro-Habits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('campaign-showcase')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5-Email Campaign Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('ab-testing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Subject Line A/B Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('automation-workflow')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sheets → Apps Script → Drafts Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('ethical-ai')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Responsible AI Principles
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Governance */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block font-mono text-[11px] mb-3">
              Academic Stewardship
            </span>
            <p className="text-[#A2BAA5] leading-relaxed">
              Designed as an educational demonstration of AI marketing workflows. Zero real billing, zero newsletter tracking cookies, and zero personal data ingestion.
            </p>
            <div className="pt-2 text-[11px] text-[#86A88B]">
              Created for Capstone Portfolio Examination.
            </div>
          </div>

        </div>

        {/* Educational Project Disclaimer Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#142419] border border-[#2B4331] flex flex-col sm:flex-row items-start sm:items-center gap-3.5 text-xs text-[#ADC7AD]">
          <ShieldAlert className="w-5 h-5 text-[#8CB88F] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-white">Educational Capstone Project Notice:</strong> GreenNest is a fictional brand created exclusively for academic and portfolio demonstration of AI-powered email marketing workflows. Products, prices, and promotions are conceptual examples. No real transactions, personal data collection, or commercial activities occur on this site.
          </p>
        </div>

        {/* Bottom Copyright & Zero-Pill Unboxed Links */}
        <div className="pt-6 border-t border-[#253A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9E7F]">
          <p>© 2026 GreenNest Capstone Project. All fictional brand rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Academic Demonstration</span>
            <span aria-hidden="true">·</span>
            <span>Ethical AI Framework</span>
            <span aria-hidden="true">·</span>
            <span>Google Workspace Stack</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
