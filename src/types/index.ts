export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'on-the-go' | 'kitchen' | 'home-care';
  fictionalPrice: number;
  materials: string[];
  impactMetric: string;
  description: string;
  lifecycle: string;
  campaignRole: string; // How this product is leveraged in the AI email campaign
  colorAccent: string;
}

export interface EmailCampaign {
  id: string;
  stepNumber: number;
  sendDelay: string;
  phase: string;
  title: string;
  subjectLineA: string;
  subjectLineB: string;
  preheader: string;
  targetObjective: string;
  aiPromptSnippet: string;
  plainText: string;
  htmlBody: string;
  ethicalChecks: string[];
}

export interface ABTestVariant {
  campaignId: string;
  campaignName: string;
  variantA: {
    subject: string;
    hypothesis: string;
    angle: string;
  };
  variantB: {
    subject: string;
    hypothesis: string;
    angle: string;
  };
  sampleSizeTarget: string;
  status: 'Awaiting real feedback';
  rationale: string;
}

export interface WorkflowStage {
  id: string;
  title: string;
  tool: string;
  badge: string;
  description: string;
  technicalRole: string;
  codeSnippet: string;
  inputData: string;
  outputData: string;
}

export interface EthicalPrinciple {
  id: string;
  number: string;
  title: string;
  corePledge: string;
  explanation: string;
  whatWeDo: string[];
  whatWeAvoid: string[];
}

export interface SustainabilityTip {
  id: string;
  number: string;
  category: 'daily' | 'kitchen' | 'laundry' | 'circular';
  title: string;
  timeCommitment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  carbonImpact: string;
  actionGuide: string[];
  whyItMatters: string;
}
