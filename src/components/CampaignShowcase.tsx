import { useState } from 'react';
import { EMAIL_CAMPAIGNS } from '../data/emails';
import {
  Mail,
  Smartphone,
  Monitor,
  FileText,
  Code2,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function CampaignShowcase() {
  const [activeEmailIndex, setActiveEmailIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile' | 'plain' | 'prompt'>('desktop');
  const [copied, setCopied] = useState(false);

  const currentEmail = EMAIL_CAMPAIGNS[activeEmailIndex];

  const handleCopy = () => {
    const textToCopy = viewMode === 'prompt'
      ? currentEmail.aiPromptSnippet
      : currentEmail.plainText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="campaign-showcase" className="py-20 bg-[#F4F7F4] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#5D8262]" />
            <span>Interactive Capstone Artifact</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#7A8C7C]">5-Stage AI Campaign Sequence</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
            The Five-Email Lifecycle Showcase
          </h2>
          <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
            Inspect each stage of our automated eco-lifestyle sequence. Toggle between desktop rendering, responsive mobile preview, raw plain-text parity, and the underlying AI generation prompts.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-8">
          {EMAIL_CAMPAIGNS.map((email, idx) => {
            const isActive = activeEmailIndex === idx;
            return (
              <button
                key={email.id}
                onClick={() => setActiveEmailIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-[#3C5440] shadow-sm ring-1 ring-[#3C5440]'
                    : 'bg-[#FAFBF9] border-[#DCE5DC] hover:border-[#ADC7AD] text-[#556658]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className={`font-mono font-bold ${isActive ? 'text-[#3C5440]' : 'text-[#7A8C7C]'}`}>
                    Step 0{email.stepNumber}
                  </span>
                  <span className="text-[11px] text-[#7A8C7C] font-mono">{email.sendDelay.split(' ')[0]}</span>
                </div>
                <h3 className={`font-editorial text-sm font-bold line-clamp-1 ${isActive ? 'text-[#1A2E20]' : 'text-[#354538]'}`}>
                  {email.title.split(':')[1]?.trim() || email.title}
                </h3>
                <p className="text-[11px] text-[#7A8C7C] mt-1 line-clamp-1">{email.phase}</p>
              </button>
            );
          })}
        </div>

        {/* Showcase Canvas & Inspector Area */}
        <div className="bg-white rounded-2xl border border-[#D5E0D5] shadow-xs overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 border-b border-[#E6EDE6] bg-[#FAF8F4] flex flex-wrap items-center justify-between gap-4">
            
            {/* Left: Email metadata & timing */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1A2E20] font-editorial text-base">
                  {currentEmail.title}
                </span>
                <span className="text-xs text-[#5D8262] bg-[#E6EDE6] px-2 py-0.5 rounded font-mono">
                  {currentEmail.sendDelay}
                </span>
              </div>
              <p className="text-xs text-[#5D6F61] max-w-xl">
                <strong>Objective:</strong> {currentEmail.targetObjective}
              </p>
            </div>

            {/* Right: Viewport mode switcher & copy action */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-1 bg-[#EAEFE9] rounded-lg text-xs font-medium text-[#435447]">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'desktop' ? 'bg-white text-[#1A2E20] shadow-xs' : 'hover:text-[#1A2E20]'
                  }`}
                  aria-label="Desktop email preview"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'mobile' ? 'bg-white text-[#1A2E20] shadow-xs' : 'hover:text-[#1A2E20]'
                  }`}
                  aria-label="Mobile iPhone preview"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Mobile</span>
                </button>
                <button
                  onClick={() => setViewMode('plain')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'plain' ? 'bg-white text-[#1A2E20] shadow-xs' : 'hover:text-[#1A2E20]'
                  }`}
                  aria-label="Plain text fallback"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Plain Text</span>
                </button>
                <button
                  onClick={() => setViewMode('prompt')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'prompt' ? 'bg-white text-[#1A2E20] shadow-xs' : 'hover:text-[#1A2E20]'
                  }`}
                  aria-label="AI Prompt and system constraints"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">AI Prompt</span>
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1A2E20] bg-white hover:bg-[#F4F7F4] border border-[#D5E0D5] rounded-lg transition-colors cursor-pointer"
                title="Copy current email text or prompt"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Email Subject Line Bar */}
          <div className="px-6 py-3.5 bg-white border-b border-[#E6EDE6] grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#3C5440] uppercase font-mono tracking-wider shrink-0 mt-0.5">
                Variant A:
              </span>
              <span className="text-[#1A2E20] font-medium">{currentEmail.subjectLineA}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#78644A] uppercase font-mono tracking-wider shrink-0 mt-0.5">
                Variant B:
              </span>
              <span className="text-[#1A2E20] font-medium">{currentEmail.subjectLineB}</span>
            </div>
          </div>

          {/* Preheader Bar */}
          <div className="px-6 py-2.5 bg-[#FAFBF9] border-b border-[#E6EDE6] text-xs text-[#5D6F61] flex items-center gap-2">
            <span className="font-semibold text-[#243328] uppercase font-mono text-[10px]">Preheader:</span>
            <span className="italic">{currentEmail.preheader}</span>
          </div>

          {/* Main Content Viewer depending on viewMode */}
          <div className="p-6 sm:p-10 bg-[#EFEFEF] min-h-[500px] flex items-center justify-center">
            
            {/* 1. Desktop Mode */}
            {viewMode === 'desktop' && (
              <div className="w-full max-w-[620px] bg-white rounded-xl shadow-lg border border-[#D5DCD5] overflow-hidden">
                {/* Simulated Email Client Titlebar */}
                <div className="bg-[#E6ECE6] px-4 py-2 border-b border-[#D5DCD5] flex items-center justify-between text-xs text-[#5D6F61]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-[#435447]">From: hello@greennest.example</span>
                  </div>
                  <span className="font-mono text-[11px]">Desktop Render</span>
                </div>
                <div
                  className="overflow-y-auto max-h-[640px]"
                  dangerouslySetInnerHTML={{ __html: currentEmail.htmlBody }}
                />
              </div>
            )}

            {/* 2. Mobile Mode (iPhone Simulation) */}
            {viewMode === 'mobile' && (
              <div className="w-full max-w-[360px] bg-[#1A2E20] p-3 rounded-[36px] shadow-2xl border-4 border-[#2C4434]">
                {/* Speaker pill notch */}
                <div className="w-28 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#333] inline-block" />
                </div>
                {/* Phone screen */}
                <div className="bg-white rounded-[26px] overflow-hidden max-h-[580px] overflow-y-auto">
                  <div className="bg-[#1A2E20] px-4 py-2 text-[10px] text-white flex justify-between">
                    <span>9:41 AM</span>
                    <span>GreenNest Mobile Mail</span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: currentEmail.htmlBody }}
                  />
                </div>
              </div>
            )}

            {/* 3. Plain Text Mode */}
            {viewMode === 'plain' && (
              <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-[#D5E0D5] p-6 font-mono text-xs text-[#243328] whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto">
                {currentEmail.plainText}
              </div>
            )}

            {/* 4. AI Prompt & Generation Notes */}
            {viewMode === 'prompt' && (
              <div className="w-full max-w-2xl bg-[#1A2E20] text-[#DCE6DC] rounded-xl shadow-md p-6 font-mono text-xs leading-relaxed max-h-[600px] overflow-y-auto space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 pb-2 border-b border-[#2C4434]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold">System Prompt & Contextual Constraints</span>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-[#EAEFEA]">
                  {currentEmail.aiPromptSnippet}
                </pre>
                <div className="pt-3 border-t border-[#2C4434] text-[11px] text-[#ADC7AD]">
                  <strong>Human-in-the-Loop Safeguard:</strong> This prompt executes server-side within Google Apps Script or Cloud Run and outputs draft copy directly into Gmail Drafts for editor sign-off.
                </div>
              </div>
            )}

          </div>

          {/* Ethical Checks Verified Strip */}
          <div className="p-5 bg-[#FAF8F4] border-t border-[#E6EDE6]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1A2E20] uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-[#3C5440]" />
              <span>Ethical Checks Passed for Step 0{currentEmail.stepNumber}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentEmail.ethicalChecks.map((check, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[#435447] bg-white p-2.5 rounded-lg border border-[#E6EDE6]"
                >
                  <Check className="w-3.5 h-3.5 text-[#5D8262] shrink-0 mt-0.5" />
                  <span className="leading-tight">{check}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
