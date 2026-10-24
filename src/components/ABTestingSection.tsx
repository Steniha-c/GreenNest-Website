import { useState } from 'react';
import { AB_TEST_CAMPAIGNS } from '../data/abTesting';
import { FlaskConical, Clock, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ABTestingSection() {
  const [selectedCampaignId, setSelectedCampaignId] = useState(AB_TEST_CAMPAIGNS[0].campaignId);
  const [userPrediction, setUserPrediction] = useState<Record<string, 'A' | 'B'>>({});

  const activeTest = AB_TEST_CAMPAIGNS.find(c => c.campaignId === selectedCampaignId) || AB_TEST_CAMPAIGNS[0];

  const handlePredict = (variant: 'A' | 'B') => {
    setUserPrediction(prev => ({
      ...prev,
      [activeTest.campaignId]: variant
    }));
  };

  return (
    <section id="ab-testing" className="py-20 bg-[#FBF9F5] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
            <FlaskConical className="w-3.5 h-3.5 text-[#5D8262]" />
            <span>Subject-Line A/B Testing Lab</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#7A8C7C]">Scientific Evaluation</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
            Scientific Subject Line Testing
          </h2>
          <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
            In responsible marketing, copywriting hypotheses must be tested with rigorous statistical discipline rather than intuition. In accordance with honest evaluation practices, our test dashboard strictly reports empirical status without invented figures.
          </p>
        </div>

        {/* Campaign Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
          {AB_TEST_CAMPAIGNS.map((item) => (
            <button
              key={item.campaignId}
              onClick={() => setSelectedCampaignId(item.campaignId)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                selectedCampaignId === item.campaignId
                  ? 'bg-[#1A2E20] text-white border-[#1A2E20] shadow-xs'
                  : 'bg-white text-[#435447] border-[#DCE5DC] hover:border-[#ADC7AD]'
              }`}
            >
              {item.campaignName.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Main Test Card */}
        <div className="bg-white rounded-2xl border border-[#D5E0D5] p-6 sm:p-8 shadow-xs space-y-8">
          
          {/* Top Test Meta & Strict Status Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6EDE6]">
            <div>
              <span className="text-xs font-mono uppercase text-[#5D8262] font-semibold">Active Experiment</span>
              <h3 className="font-editorial text-2xl font-bold text-[#1A2E20]">
                {activeTest.campaignName}
              </h3>
              <p className="text-xs text-[#5D6F61] mt-1">{activeTest.rationale}</p>
            </div>

            {/* Mandatory "Awaiting real feedback" badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EB] border border-[#E8DCBE] text-xs font-semibold text-[#8C6D23] self-start sm:self-auto">
              <Clock className="w-4 h-4 text-[#C99D5A]" />
              <span>Awaiting real feedback</span>
            </div>
          </div>

          {/* Side-by-Side Variant Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Variant A */}
            <div className="p-6 rounded-xl border border-[#DEE5DC] bg-[#FAFBF9] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#3C5440] uppercase px-2.5 py-1 rounded bg-[#E6EDE6]">
                    Variant A (Control / Direct)
                  </span>
                  <span className="text-xs text-[#5D6F61]">{activeTest.variantA.angle}</span>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E6EDE6] shadow-2xs">
                  <span className="text-[11px] uppercase font-mono text-[#7A8C7C] block mb-1">Subject Line</span>
                  <p className="text-sm font-semibold text-[#1A2E20] leading-snug">
                    "{activeTest.variantA.subject}"
                  </p>
                </div>

                <div className="text-xs text-[#435447] space-y-1">
                  <strong>Hypothesis:</strong>
                  <p className="text-[#556658] leading-relaxed">{activeTest.variantA.hypothesis}</p>
                </div>
              </div>

              {/* Status metric placeholder */}
              <div className="pt-4 border-t border-[#EAEFE9] flex items-center justify-between">
                <span className="text-xs text-[#7A8C7C]">Open Rate Data:</span>
                <span className="font-mono text-xs font-medium text-[#8C6D23] bg-[#FAF5EB] px-2 py-0.5 rounded">
                  Awaiting real feedback
                </span>
              </div>

              {/* Educational Prediction Button */}
              <button
                onClick={() => handlePredict('A')}
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  userPrediction[activeTest.campaignId] === 'A'
                    ? 'bg-[#3C5440] text-white border-[#3C5440]'
                    : 'bg-white hover:bg-[#F4F7F4] text-[#1A2E20] border-[#D5E0D5]'
                }`}
              >
                {userPrediction[activeTest.campaignId] === 'A'
                  ? '✓ You Predicted Variant A'
                  : 'Predict Variant A Would Win'}
              </button>
            </div>

            {/* Variant B */}
            <div className="p-6 rounded-xl border border-[#DEE5DC] bg-[#FAFBF9] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#78644A] uppercase px-2.5 py-1 rounded bg-[#EFE9E0]">
                    Variant B (Challenger / Story)
                  </span>
                  <span className="text-xs text-[#5D6F61]">{activeTest.variantB.angle}</span>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E6EDE6] shadow-2xs">
                  <span className="text-[11px] uppercase font-mono text-[#7A8C7C] block mb-1">Subject Line</span>
                  <p className="text-sm font-semibold text-[#1A2E20] leading-snug">
                    "{activeTest.variantB.subject}"
                  </p>
                </div>

                <div className="text-xs text-[#435447] space-y-1">
                  <strong>Hypothesis:</strong>
                  <p className="text-[#556658] leading-relaxed">{activeTest.variantB.hypothesis}</p>
                </div>
              </div>

              {/* Status metric placeholder */}
              <div className="pt-4 border-t border-[#EAEFE9] flex items-center justify-between">
                <span className="text-xs text-[#7A8C7C]">Open Rate Data:</span>
                <span className="font-mono text-xs font-medium text-[#8C6D23] bg-[#FAF5EB] px-2 py-0.5 rounded">
                  Awaiting real feedback
                </span>
              </div>

              {/* Educational Prediction Button */}
              <button
                onClick={() => handlePredict('B')}
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  userPrediction[activeTest.campaignId] === 'B'
                    ? 'bg-[#78644A] text-white border-[#78644A]'
                    : 'bg-white hover:bg-[#F4F7F4] text-[#1A2E20] border-[#D5E0D5]'
                }`}
              >
                {userPrediction[activeTest.campaignId] === 'B'
                  ? '✓ You Predicted Variant B'
                  : 'Predict Variant B Would Win'}
              </button>
            </div>

          </div>

          {/* Test Framework Parameters Strip */}
          <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#EAE6DF] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="font-semibold text-[#1A2E20] block">Sample Size Benchmark:</span>
              <span className="text-[#5D6F61]">{activeTest.sampleSizeTarget}</span>
            </div>
            <div>
              <span className="font-semibold text-[#1A2E20] block">Significance Threshold:</span>
              <span className="text-[#5D6F61]">p &lt; 0.05 (95% Confidence Interval)</span>
            </div>
            <div>
              <span className="font-semibold text-[#1A2E20] block">Statistical Integrity:</span>
              <span className="text-[#5D6F61]">No synthetic percentages or fabricated votes</span>
            </div>
          </div>

          {/* Scientific Disclaimer */}
          <div className="flex items-start gap-2.5 text-xs text-[#5D6F61] pt-2">
            <AlertCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
            <p>
              <strong>Academic Integrity Notice:</strong> Unlike marketing demos that populate random percentages (e.g. "Variant A won with 48.2% opens"), GreenNest displays <em>“Awaiting real feedback”</em> until live subscriber telemetry is connected via Google Sheets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
