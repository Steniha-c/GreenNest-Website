import { EthicalPrinciple } from '../types';

export const ETHICAL_PRINCIPLES: EthicalPrinciple[] = [
  {
    id: 'honesty',
    number: '01',
    title: 'Honesty & Radical Authenticity',
    corePledge: 'Zero greenwashing, zero hallucinated claims, and zero artificial artisan personas.',
    explanation: 'Responsible AI marketing requires complete truthfulness about what products are made of, where they originate, and how AI was used. We never claim vague carbon-negative certifications without third-party proof, nor do we present AI-drafted messages as spontaneous personal notes from a fictional craftsperson.',
    whatWeDo: [
      'Disclose full materials bill of materials (BOM) on all product listings',
      'Clearly label educational capstone samples and fictional promotions',
      'Adhere to FTC Green Guides for honest environmental marketing'
    ],
    whatWeAvoid: [
      'Vague buzzwords like "eco-friendly" without verifiable lifecycle context',
      'Fabricated customer reviews or hallucinated five-star ratings',
      'Pretending an automated email was hand-typed by a founder in real-time'
    ]
  },
  {
    id: 'consent',
    number: '02',
    title: 'Explicit & Informed Consent',
    corePledge: 'Subscribers choose to join with clear knowledge of frequency, purpose, and content.',
    explanation: 'We practice strict double opt-in verification. A subscriber never finds themselves on our list through pre-checked checkout boxes, scraped directory records, or co-registration traps. They know upfront that we send 1 to 2 calm emails per week.',
    whatWeDo: [
      'Provide clear, explicit checkboxes with plain language explaining frequency',
      'Confirm email subscriptions via double opt-in before sending campaigns',
      'Allow subscribers to choose their specific interest streams (tips vs products)'
    ],
    whatWeAvoid: [
      'Pre-checked agreement boxes or hidden opt-ins buried in Terms of Service',
      'Purchasing email lists or sharing subscriber databases with data brokers',
      'Auto-enrolling users into promotional sequences without explicit request'
    ]
  },
  {
    id: 'privacy',
    number: '03',
    title: 'Privacy & Data Minimization',
    corePledge: 'We only hold what is necessary to deliver the email, and we never monetize your data.',
    explanation: 'Data privacy is treated as a fundamental human right. Our Google Sheets backend stores only a first name, email address, and campaign stage index. We prohibit cross-site fingerprinting pixels, third-party advertising retargeting beacons, and behavioral data harvesting.',
    whatWeDo: [
      'Strictly minimize collected data fields to First Name and Email',
      'Maintain data exclusively in private, authenticated Google Workspace sheets',
      'Ensure automatic data purging upon subscriber unsubscription'
    ],
    whatWeAvoid: [
      'Third-party advertising tracking pixels (e.g. Meta Pixel, TikTok tracker)',
      'Cross-site fingerprinting, IP geolocation stalking, or browsing trackers',
      'Selling, leasing, or exchanging subscriber contact details with external parties'
    ]
  },
  {
    id: 'no-false-urgency',
    number: '04',
    title: 'No False Urgency or Manipulation',
    corePledge: 'Zero countdown timers, zero fake stock warnings, and zero fear-based persuasion.',
    explanation: 'Dark marketing patterns exploit human cognitive vulnerabilities through manufactured panic ("Only 2 left at this price!", "Sale vanishes in 12 minutes!"). At GreenNest, our educational codes never expire, our inventory claims are grounded in reality, and we encourage subscribers to pause and reflect before buying.',
    whatWeDo: [
      'Offer promotions without artificial expiration countdown clocks',
      'Encourage a 48-hour pause before acquiring non-essential items',
      'Use serene, objective copywriting that respects emotional calm'
    ],
    whatWeAvoid: [
      'Flashing red countdown clocks or ticking JavaScript timers in emails',
      'Fake low-stock alerts or simulated "14 people looking at this item" tickers',
      'Guilt-tripping exit-intent modals ("No, I hate saving the planet")'
    ]
  },
  {
    id: 'unsubscribe-rights',
    number: '05',
    title: 'Frictionless Unsubscribe Rights',
    corePledge: 'One click to leave. No password required, no surveys, and no guilt trips.',
    explanation: 'Leaving a community should be just as effortless as joining. Every single email sent from GreenNest contains a prominent, high-contrast one-click unsubscribe link in both the preview header and footer. Opt-out requests are processed immediately without multi-step questionnaires or 10-day waiting delays.',
    whatWeDo: [
      'Prominently render one-click unsubscribe links in every email template',
      'Honor opt-out requests instantaneously in our Google Sheets backend',
      'Offer granular frequency controls (Weekly, Monthly, or 90-Day Pause)'
    ],
    whatWeAvoid: [
      'Hiding unsubscribe links in microscopic font or faint grey-on-white text',
      'Requiring subscribers to log in or enter a password to manage preferences',
      'Manipulative retention questionnaires before processing the unsubscribe'
    ]
  }
];
