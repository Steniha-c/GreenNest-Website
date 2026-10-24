import { useState } from 'react';
import {
  Code,
  Layers,
  Terminal,
  ExternalLink,
  BookOpen,
  CheckCircle,
  HelpCircle,
  UploadCloud,
  FileEdit,
  ShieldAlert
} from 'lucide-react';

export default function ProjectOverview() {
  const [activeTab, setActiveTab] = useState<'stack' | 'guide' | 'spec'>('stack');

  return (
    <section id="project-overview" className="py-20 bg-[#F4F7F4] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#5D8262]" />
            <span>Capstone Engineering & Guide</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#7A8C7C]">Project Specifications</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
            Project Overview & Tools Used
          </h2>
          <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
            Review the technical stack, capstone evaluation criteria, and step-by-step instructions for editing, configuring, and publishing this application.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pb-8">
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'stack'
                ? 'bg-[#1A2E20] text-white border-[#1A2E20] shadow-xs'
                : 'bg-white text-[#435447] border-[#DCE5DC] hover:border-[#ADC7AD]'
            }`}
          >
            Tools & Architecture
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'guide'
                ? 'bg-[#1A2E20] text-white border-[#1A2E20] shadow-xs'
                : 'bg-white text-[#435447] border-[#DCE5DC] hover:border-[#ADC7AD]'
            }`}
          >
            How to Edit & Publish
          </button>
          <button
            onClick={() => setActiveTab('spec')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'spec'
                ? 'bg-[#1A2E20] text-white border-[#1A2E20] shadow-xs'
                : 'bg-white text-[#435447] border-[#DCE5DC] hover:border-[#ADC7AD]'
            }`}
          >
            Deliverables Matrix
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-[#D5E0D5] p-6 sm:p-10 shadow-xs">
          
          {/* TAB 1: Tools & Stack */}
          {activeTab === 'stack' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#1A2E20]">
                  Core Technology Stack
                </h3>
                <p className="text-xs text-[#5D6F61] mt-1">
                  Selected for modern standards, zero vendor lock-in, and full Google Workspace compatibility.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Tool 1 */}
                <div className="p-5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A2E20]">
                    <span>React 19 + TypeScript</span>
                    <span className="text-[#5D8262] font-mono text-[11px]">Frontend</span>
                  </div>
                  <p className="text-xs text-[#556658] leading-relaxed">
                    Strict typed components, reactive email preview simulator, and modular data registries.
                  </p>
                </div>

                {/* Tool 2 */}
                <div className="p-5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A2E20]">
                    <span>Tailwind CSS v4</span>
                    <span className="text-[#5D8262] font-mono text-[11px]">Styling</span>
                  </div>
                  <p className="text-xs text-[#556658] leading-relaxed">
                    Custom earth-tone palette: sage green (#5D8262), forest green (#1A2E20), and warm cream (#FBF9F5).
                  </p>
                </div>

                {/* Tool 3 */}
                <div className="p-5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A2E20]">
                    <span>Google Sheets</span>
                    <span className="text-[#5D8262] font-mono text-[11px]">Data Hub</span>
                  </div>
                  <p className="text-xs text-[#556658] leading-relaxed">
                    Zero-maintenance tabular lead storage tracking opt-in timestamps, campaign stage, and A/B branches.
                  </p>
                </div>

                {/* Tool 4 */}
                <div className="p-5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A2E20]">
                    <span>Google Apps Script</span>
                    <span className="text-[#5D8262] font-mono text-[11px]">Serverless</span>
                  </div>
                  <p className="text-xs text-[#556658] leading-relaxed">
                    V8 engine time-driven cron triggers, template interpolation, and AI prompt orchestration.
                  </p>
                </div>

                {/* Tool 5 */}
                <div className="p-5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A2E20]">
                    <span>Gmail API / Drafts</span>
                    <span className="text-[#5D8262] font-mono text-[11px]">Safe Staging</span>
                  </div>
                  <p className="text-xs text-[#556658] leading-relaxed">
                    <code className="text-[11px] font-mono">GmailApp.createDraft()</code> provides safe human oversight prior to message dispatch.
                  </p>
                </div>

                {/* Tool 6 */}
                <div className="p-5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A2E20]">
                    <span>Google Gemini AI</span>
                    <span className="text-[#5D8262] font-mono text-[11px]">Content AI</span>
                  </div>
                  <p className="text-xs text-[#556658] leading-relaxed">
                    Contextual persona prompting, anti-greenwashing auditing, and accessible plain-text conversion.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: How to Edit & Publish Guide */}
          {activeTab === 'guide' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#1A2E20]">
                  How to Edit and Publish This Application
                </h3>
                <p className="text-xs text-[#5D6F61] mt-1">
                  Step-by-step workflow for modifying copy, testing automations, and deploying to production.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFBF9] border border-[#E6EDE6]">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2E20] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-[#1A2E20] flex items-center gap-2">
                      <FileEdit className="w-4 h-4 text-[#3C5440]" />
                      <span>Customizing Products & Email Copy</span>
                    </h4>
                    <p className="text-xs text-[#435447] leading-relaxed">
                      All products and campaigns live in structured TypeScript datasets:
                    </p>
                    <ul className="text-xs text-[#556658] space-y-1 font-mono pt-1">
                      <li>• Products & Prices: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E6EDE6]">/src/data/products.ts</code></li>
                      <li>• 5-Email Sequences: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E6EDE6]">/src/data/emails.ts</code></li>
                      <li>• A/B Test Hypotheses: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E6EDE6]">/src/data/abTesting.ts</code></li>
                      <li>• Automation Code: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E6EDE6]">/src/data/workflow.ts</code></li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFBF9] border border-[#E6EDE6]">
                  <div className="w-8 h-8 rounded-lg bg-[#3C5440] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-[#1A2E20] flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#3C5440]" />
                      <span>Connecting Live Google Workspace Automation</span>
                    </h4>
                    <p className="text-xs text-[#435447] leading-relaxed">
                      To connect your real Google Sheet to Gmail Drafts:
                    </p>
                    <ol className="text-xs text-[#556658] list-decimal list-inside space-y-1 pt-1">
                      <li>Create a new Google Sheet named <code className="font-mono bg-white px-1 rounded">GreenNest_Subscribers</code> with columns: ID, Name, Email, OptInDate, Step, Variant, Status.</li>
                      <li>Open <em>Extensions &gt; Apps Script</em> in Google Sheets and paste the code from our Automation Workflow section.</li>
                      <li>Run <code className="font-mono bg-white px-1 rounded">stageGmailDraft()</code> once to grant Gmail permissions.</li>
                      <li>Add a daily time-driven trigger to run <code className="font-mono bg-white px-1 rounded">processDailyCampaigns()</code> every morning at 9:00 AM.</li>
                    </ol>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFBF9] border border-[#E6EDE6]">
                  <div className="w-8 h-8 rounded-lg bg-[#5D8262] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-[#1A2E20] flex items-center gap-2">
                      <UploadCloud className="w-4 h-4 text-[#3C5440]" />
                      <span>Building and Deploying to Production</span>
                    </h4>
                    <p className="text-xs text-[#435447] leading-relaxed">
                      To verify and publish the application:
                    </p>
                    <div className="p-3 bg-[#1A2E20] text-[#DCE6DC] rounded-lg font-mono text-xs space-y-1">
                      <p># Build the optimized production bundle</p>
                      <p className="text-white font-bold">npm run build</p>
                    </div>
                    <p className="text-xs text-[#556658] pt-1">
                      The generated <code className="font-mono bg-white px-1 rounded">dist/</code> directory can be deployed directly to Google Cloud Run, Vercel, Netlify, or hosted through Google AI Studio Build.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: Deliverables Matrix */}
          {activeTab === 'spec' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#1A2E20]">
                  Capstone Deliverables Verification
                </h3>
                <p className="text-xs text-[#5D6F61] mt-1">
                  100% compliance audit against capstone project requirements.
                </p>
              </div>

              <div className="divide-y divide-[#E6EDE6] text-xs">
                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">1. Home Hero Tagline:</strong>
                      <span className="text-[#556658] block">“Small choices. A greener tomorrow.” prominently featured with aesthetic botanical styling.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">2. Featured Reusable Products:</strong>
                      <span className="text-[#556658] block">Fictional educational prices, material breakdowns, and lifecycle analysis clearly labeled.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">3. Sustainability Tips:</strong>
                      <span className="text-[#556658] block">Accessible zero-waste micro-habits with interactive checklist and carbon impact data.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">4. 5-Email Campaign Showcase:</strong>
                      <span className="text-[#556658] block">Welcome, Sustainability Tips, Product Intro, Fictional Discount, Thank You with Desktop/Mobile/Plain-Text/Prompt toggles.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">5. Subject-Line A/B Testing:</strong>
                      <span className="text-[#556658] block">Zero synthetic results or invented votes; strictly displays “Awaiting real feedback” until real telemetry is connected.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">6. Automation Workflow:</strong>
                      <span className="text-[#556658] block">Interactive Google Sheets → Google Apps Script → Gmail Drafts pipeline with live simulator and code viewer.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2E20]">7. Responsible AI & Ethics:</strong>
                      <span className="text-[#556658] block">Comprehensive charter for Honesty, Consent, Privacy, No False Urgency, and Frictionless Unsubscribe.</span>
                    </div>
                  </div>
                  <span className="text-[#3C5440] font-semibold bg-[#E6EDE6] px-2 py-0.5 rounded shrink-0">Implemented</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
