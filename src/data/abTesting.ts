import { ABTestVariant } from '../types';

export const AB_TEST_CAMPAIGNS: ABTestVariant[] = [
  {
    campaignId: 'email-1-welcome',
    campaignName: 'Email 1: Welcome & Value Pledge',
    variantA: {
      subject: 'Welcome to GreenNest · Our simple pledge to you',
      hypothesis: 'Direct, serene transparency creates long-term brand affinity and reassures privacy-conscious subscribers.',
      angle: 'Brand Value & Transparency'
    },
    variantB: {
      subject: 'Small choices start today (plus your eco-guide)',
      hypothesis: 'Focusing on actionable personal empowerment and the tangible immediate guide drives higher first-day opens.',
      angle: 'Action & Immediate Utility'
    },
    sampleSizeTarget: '500 subscribers / branch (1,000 total)',
    status: 'Awaiting real feedback',
    rationale: 'Testing whether value-first brand philosophy outperforms immediate utilitarian guide mentions during initial onboarding.'
  },
  {
    campaignId: 'email-2-tips',
    campaignName: 'Email 2: Sustainability Tips',
    variantA: {
      subject: '3 small swaps for a lighter footprint this week',
      hypothesis: 'Numbered tangible tips set clear, low-effort cognitive expectations.',
      angle: 'Quantified Micro-Habits'
    },
    variantB: {
      subject: 'Zero-waste living without the overwhelm: 3 quiet habits',
      hypothesis: 'Addressing emotional barrier ("overwhelm") directly resonates with people intimidated by standard zero-waste dogma.',
      angle: 'Emotional Reassurance & Simplicity'
    },
    sampleSizeTarget: '500 subscribers / branch (1,000 total)',
    status: 'Awaiting real feedback',
    rationale: 'Evaluating whether emotional reassurance of simplicity yields better engagement than straightforward numbered list framing.'
  },
  {
    campaignId: 'email-3-product',
    campaignName: 'Email 3: Product Introduction',
    variantA: {
      subject: 'Crafted to outlast: Meet the PureStream Thermal Canteen',
      hypothesis: 'Highlighting durability and craftsmanship signals premium longevity over disposable fast-consumer items.',
      angle: 'Longevity & Craftsmanship'
    },
    variantB: {
      subject: 'Why we spent 14 months designing one water bottle',
      hypothesis: 'Curiosity-inducing behind-the-scenes narrative entices subscribers interested in product design depth.',
      angle: 'Behind-the-Scenes Narrative'
    },
    sampleSizeTarget: '500 subscribers / branch (1,000 total)',
    status: 'Awaiting real feedback',
    rationale: 'Testing product feature longevity assertion versus engineering story curiosity.'
  },
  {
    campaignId: 'email-4-promotion',
    campaignName: 'Email 4: Fictional Discount Promotion',
    variantA: {
      subject: 'A calm welcome gift: 15% off your first sustainable order',
      hypothesis: 'Calm gifting phrasing avoids triggering aggressive promotional spam filters in reader minds.',
      angle: 'Gentle Gift Offering'
    },
    variantB: {
      subject: 'GreenNest welcome: 15% off with code GREEN15 (no hurry, no rush)',
      hypothesis: 'Explicitly including the code and stating "no rush" counters e-commerce panic fatigue.',
      angle: 'Transparent Code & Anti-Urgency'
    },
    sampleSizeTarget: '500 subscribers / branch (1,000 total)',
    status: 'Awaiting real feedback',
    rationale: 'Testing subtle gift framing against upfront coupon visibility paired with anti-urgency explicit assurance.'
  },
  {
    campaignId: 'email-5-thankyou',
    campaignName: 'Email 5: Thank You & Reflection',
    variantA: {
      subject: 'Thank you for being part of the circle · Your footprint matters',
      hypothesis: 'Affirming reader impact creates community belonging and validates their personal effort.',
      angle: 'Impact Validation & Community'
    },
    variantB: {
      subject: 'Two weeks of quiet habits together: Thank you',
      hypothesis: 'Temporal milestone reminder triggers reflection and signals closure of onboarding.',
      angle: 'Milestone Reflection'
    },
    sampleSizeTarget: '500 subscribers / branch (1,000 total)',
    status: 'Awaiting real feedback',
    rationale: 'Measuring community impact acknowledgement versus temporal journey milestone.'
  }
];
