import { useState } from 'react';
import { WORKFLOW_STAGES, WORKFLOW_SIMULATION_STEPS } from '../data/workflow';
import {
  Workflow,
  Sheet,
  FileCode2,
  Mail,
  Play,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function AutomationWorkflow() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentSimStep, setCurrentSimStep] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeStage = WORKFLOW_STAGES[selectedStageIndex];

  const runSimulation = () => {
    setIsSimulating(true);
    setCurrentSimStep(1);

    const timer1 = setTimeout(() => setCurrentSimStep(2), 1200);
    const timer2 = setTimeout(() => setCurrentSimStep(3), 2400);
    const timer3 = setTimeout(() => {
      setCurrentSimStep(4);
      setIsSimulating(false);
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const resetSimulation = () => {
    setCurrentSimStep(0);
    setIsSimulating(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeStage.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="automation-workflow" className="py-20 bg-[#F4F7F4] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-[#5D8262]" />
            <span>Architecture & Execution Pipeline</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#7A8C7C]">Google Workspace Triad</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
            Google Sheets → Apps Script → Gmail Drafts
          </h2>
          <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
            A transparent, serverless marketing automation pipeline. Subscriber data stays inside your private Google Workspace, and every AI-templated message is staged in Gmail Drafts for human editorial sign-off before dispatch.
          </p>
        </div>

        {/* 3-Step Architectural Flow Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-[#3C5440] shadow-sm ring-1 ring-[#3C5440]'
                    : 'bg-[#FAFBF9] border-[#DCE5DC] hover:border-[#ADC7AD]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[11px] font-mono text-[#5D8262] uppercase tracking-wider">
                    {stage.badge}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#E6EDE6] flex items-center justify-center text-[#1A2E20]">
                    {idx === 0 && <Sheet className="w-4 h-4 text-[#3C5440]" />}
                    {idx === 1 && <FileCode2 className="w-4 h-4 text-[#3C5440]" />}
                    {idx === 2 && <Mail className="w-4 h-4 text-[#3C5440]" />}
                  </div>
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#1A2E20]">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#5D6F61] mt-1">{stage.tool}</p>
                
                {/* Visual arrow connector on desktop */}
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#D5E0D5] text-[#5D8262] flex items-center justify-center shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive & Code Inspector Box */}
        <div className="bg-white rounded-2xl border border-[#D5E0D5] shadow-xs overflow-hidden">
          
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Stage Technical Documentation */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase text-[#5D8262] font-semibold">
                  Stage 0{selectedStageIndex + 1} Deep Dive
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#1A2E20] mt-1">
                  {activeStage.title}
                </h3>
                <p className="text-xs text-[#7A8C7C] font-medium">{activeStage.tool}</p>
              </div>

              <p className="text-sm text-[#435447] leading-relaxed">
                {activeStage.description}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F4F7F4] border border-[#DEE5DC]">
                  <span className="font-bold text-[#1A2E20] block mb-0.5">Technical Implementation:</span>
                  <span className="text-[#556658]">{activeStage.technicalRole}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DF]">
                  <span className="font-bold text-[#1A2E20] block mb-0.5">Input Data Ingestion:</span>
                  <span className="text-[#556658] font-mono text-[11px]">{activeStage.inputData}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DF]">
                  <span className="font-bold text-[#1A2E20] block mb-0.5">Output Data Payload:</span>
                  <span className="text-[#556658] font-mono text-[11px]">{activeStage.outputData}</span>
                </div>
              </div>
            </div>

            {/* Right: Code Viewer */}
            <div className="lg:col-span-7 bg-[#1A2E20] text-[#E6EDE6] rounded-xl overflow-hidden shadow-inner flex flex-col">
              <div className="px-4 py-3 bg-[#132218] border-b border-[#253A2A] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono text-[11px] text-[#A2BAA5]">Code.gs (Apps Script Engine)</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#E6EDE6] hover:text-white bg-[#253A2A] hover:bg-[#344E3A] rounded transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Snippet'}</span>
                </button>
              </div>

              <div className="p-4 sm:p-5 overflow-x-auto max-h-[380px] font-mono text-xs leading-relaxed text-[#D0DED0]">
                <pre>{activeStage.codeSnippet}</pre>
              </div>

              <div className="px-4 py-2.5 bg-[#132218] border-t border-[#253A2A] text-[11px] text-[#7A9E7F] flex items-center justify-between">
                <span>Language: Google Apps Script (V8 Runtime)</span>
                <span>Permission Scope: Sheets, GmailDrafts</span>
              </div>
            </div>

          </div>

          {/* Interactive Simulation Console */}
          <div className="border-t border-[#E6EDE6] bg-[#FAF8F4] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#3C5440] font-semibold">
                  Interactive Simulator
                </span>
                <h4 className="font-editorial text-xl font-bold text-[#1A2E20]">
                  Simulate the Automation Pipeline in Real-Time
                </h4>
                <p className="text-xs text-[#5D6F61] mt-0.5">
                  Walk through the automated lifecycle from Google Sheets row ingestion to Gmail Draft generation.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {currentSimStep > 0 && (
                  <button
                    onClick={resetSimulation}
                    className="p-2 text-[#5D6F61] hover:text-[#1A2E20] hover:bg-white rounded-lg transition-colors cursor-pointer"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1A2E20] hover:bg-[#2C4434] rounded-lg transition-colors cursor-pointer disabled:opacity-60"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? 'Executing Pipeline...' : 'Run Simulation'}</span>
                </button>
              </div>
            </div>

            {/* Simulation Steps Output */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {WORKFLOW_SIMULATION_STEPS.map((s) => {
                const isPassed = currentSimStep >= s.step;
                const isCurrent = currentSimStep === s.step;

                return (
                  <div
                    key={s.step}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-white border-[#3C5440] shadow-sm ring-1 ring-[#3C5440]'
                        : isPassed
                        ? 'bg-white border-[#D5E0D5]'
                        : 'bg-[#F2F0EB]/60 border-[#E2DED6] opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono font-bold text-[#5D8262]">Phase 0{s.step}</span>
                      {isPassed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3C5440]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#C4D0C4]" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-[#1A2E20] leading-snug">{s.title}</p>
                    <p className="text-[11px] text-[#556658] mt-1.5 leading-relaxed line-clamp-3">
                      {isPassed ? s.detail : 'Pending prior step execution...'}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Safety Guarantee Callout */}
            <div className="p-4 rounded-xl bg-[#EDF3ED] border border-[#C8DAC8] flex items-center justify-between gap-4 text-xs text-[#2A4430]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#3C5440] shrink-0" />
                <span>
                  <strong>Zero-Spam Architecture:</strong> Using <code className="bg-white/80 px-1 py-0.5 rounded font-mono">GmailApp.createDraft()</code> instead of <code className="bg-white/80 px-1 py-0.5 rounded font-mono">GmailApp.sendEmail()</code> ensures that human editors retain 100% control before any message reaches a real customer.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
