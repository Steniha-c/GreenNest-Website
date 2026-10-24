import { EmailCampaign } from '../types';

export const EMAIL_CAMPAIGNS: EmailCampaign[] = [
  {
    id: 'email-1-welcome',
    stepNumber: 1,
    sendDelay: 'Immediately (0 min post double opt-in)',
    phase: 'Orientation & Alignment',
    title: 'Email 1: Welcome & Value Pledge',
    subjectLineA: 'Welcome to GreenNest · Our simple pledge to you',
    subjectLineB: 'Small choices start today (plus your eco-guide)',
    preheader: 'No spam, no manufactured urgency. Just honest ways to live a little lighter.',
    targetObjective: 'Confirm opt-in with authentic warmth, establish email rhythm (1-2 calm emails/week), deliver immediate zero-waste guide, and highlight 1-click unsubscribe autonomy.',
    aiPromptSnippet: `System: You are an ethical copywriter for GreenNest, a conscious eco-lifestyle brand.
Tone: Warm, grounded, serene, deeply respectful of the reader's attention.
Constraints: Ban all aggressive sales pitches, fake countdowns, or hype. Emphasize mindful consumption, our 100% transparent materials pledge, and reinforce that they can unsubscribe anytime with one click.
Goal: Welcome subscriber {{subscriber.firstName}} and share our philosophy: "Small choices. A greener tomorrow."`,
    plainText: `Hi {{subscriber.firstName}},

Thank you for choosing to share a small corner of your inbox with GreenNest.

We know your attention is precious. Here is our promise to you:
- We will never overwhelm your inbox (expect 1–2 thoughtful notes a week).
- We will never fabricate fake scarcity or "flash sale" panic.
- Every product we craft is made from 100% traceable, non-toxic, plastic-free materials designed to outlast trends.

To get started on your journey, we put together a pocket field guide: "12 Gentle Swaps for a Low-Waste Home":
https://greennest.example/guide-download

If your journey ever leads in another direction, you can leave at any time with a single tap of the link below.

With care and gratitude,
The GreenNest Collective
"Small choices. A greener tomorrow."

[Preferences] · [Unsubscribe with one click] · [Fictional Educational Project]`,
    htmlBody: `
<div style="background-color: #FBF9F5; padding: 32px 16px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #243328; line-height: 1.6;">
  <table align="center" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E6EDE6; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
    <tr>
      <td style="background-color: #1A2E20; padding: 32px 28px; text-align: center; color: #FFFFFF;">
        <span style="font-family: 'Fraunces', Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; display: inline-block;">GreenNest</span>
        <p style="margin: 6px 0 0; font-size: 13px; color: #ADC7AD; letter-spacing: 0.05em; text-transform: uppercase;">Small choices. A greener tomorrow.</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <h2 style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; color: #1A2E20; margin: 0 0 16px; font-weight: 600;">Welcome to our quiet corner of the web, {{subscriber.firstName}}.</h2>
        <p style="font-size: 15px; color: #435447; margin: 0 0 20px;">
          Thank you for trusting us with your inbox. In a digital world filled with artificial urgency and relentless notifications, we want GreenNest to feel like a slow breath of fresh mountain air.
        </p>
        <div style="background-color: #F4F7F4; border-radius: 12px; padding: 20px 24px; margin: 24px 0;">
          <p style="font-size: 14px; font-weight: 600; color: #1A2E20; margin: 0 0 10px;">Our 3-point pledge to you:</p>
          <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #435447; line-height: 1.7;">
            <li><strong>Gentle cadence:</strong> 1 or 2 thoughtful emails per week—never inbox stuffing.</li>
            <li><strong>Honest transparency:</strong> Full lifecycle tracing, zero greenwashing, and no fake countdown timers.</li>
            <li><strong>Respectful autonomy:</strong> A clear, one-click unsubscribe in every single message.</li>
          </ul>
        </div>
        <p style="font-size: 15px; color: #435447; margin: 0 0 28px;">
          We believe sustainable living isn’t about rigid perfection—it’s about millions of us making imperfect, mindful choices each morning.
        </p>
        <div style="text-align: center; margin: 32px 0;">
          <a href="#sustainability-tips" style="background-color: #3C5440; color: #FFFFFF; text-decoration: none; padding: 13px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-block;">
            Download Your Free 12-Swap Field Guide
          </a>
        </div>
        <p style="font-size: 13px; color: #6C7E70; margin: 24px 0 0; font-style: italic;">
          Warmly,<br />The GreenNest Team
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #FAF8F4; padding: 24px 32px; border-top: 1px solid #EAE6DF; font-size: 12px; color: #78857A; text-align: center;">
        <p style="margin: 0 0 8px;"><strong>Educational Project Notice:</strong> This message is part of an AI Marketing Capstone Demonstration.</p>
        <p style="margin: 0 0 8px;">GreenNest · 104 Willow St, Fictional Eco-Haven · You received this because you opted in.</p>
        <p style="margin: 0;">
          <a href="#" style="color: #3C5440; text-decoration: underline;">Update Preferences</a> · 
          <a href="#" style="color: #3C5440; text-decoration: underline;">Unsubscribe with 1 Click</a> · 
          <a href="#" style="color: #3C5440; text-decoration: underline;">Privacy Policy</a>
        </p>
      </td>
    </tr>
  </table>
</div>
    `,
    ethicalChecks: [
      'Double opt-in verification confirmed prior to sending',
      'No false scarcity or aggressive product upsell in the welcome note',
      'One-click unsubscribe prominently situated in both header & footer',
      'Zero third-party tracking pixels or fingerprinting scripts'
    ]
  },
  {
    id: 'email-2-tips',
    stepNumber: 2,
    sendDelay: 'Day 2 (48 hours after Welcome)',
    phase: 'Value-First Nurture',
    title: 'Email 2: Sustainability Tips & Micro-Habits',
    subjectLineA: '3 small swaps for a lighter footprint this week',
    subjectLineB: 'Zero-waste living without the overwhelm: 3 quiet habits',
    preheader: 'Practical adjustments for your kitchen, morning coffee, and laundry routine.',
    targetObjective: 'Deliver pure educational value with zero product promotion. Build authentic authority and reader trust before any commercial touchpoints.',
    aiPromptSnippet: `System: GreenNest Educational Content Architect.
Objective: Write an educational sustainability newsletter focusing on low-barrier zero-waste habits.
Requirements:
1. Provide 3 high-impact micro-habits that cost $0 to adopt.
2. Emphasize accessible changes (e.g. food scrap broth, cold water laundry, mindful purchase pause).
3. Do not push any store products for sale in this email. Let the value stand alone.`,
    plainText: `Hi {{subscriber.firstName}},

When people think about "going green," it often feels daunting—like an all-or-nothing test.

At GreenNest, we believe the greenest product is almost always the one you already own. Here are three high-impact micro-habits you can experiment with this week at zero cost:

1. The "Sub-Zero" Broth Bag:
Keep a freezer container for onion peels, carrot tops, and celery ends. When full, simmer with water and herbs for 45 minutes to create rich homemade vegetable broth.
Impact: Eliminates food packaging waste and cuts household food scrap volume by ~25%.

2. Wash in Cold Water:
Roughly 75% to 90% of the energy your washing machine consumes goes purely toward heating water. Switching to cold saves power and prolongs clothing fibers.
Impact: Cuts laundry emissions by up to 300 kg CO2 per household annually.

3. The 48-Hour Wishlist Rule:
Before purchasing any non-perishable item online, write it on an analog index card for 48 hours. If the genuine need remains after two days, proceed. 65% of impulse buys dissolve upon pause.

Have an eco-habit you love? Hit reply and tell us—we read every response.

Thoughtfully yours,
Maya from GreenNest
"Small choices. A greener tomorrow."

[Preferences] · [Unsubscribe with one click] · [Fictional Educational Project]`,
    htmlBody: `
<div style="background-color: #FBF9F5; padding: 32px 16px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #243328; line-height: 1.6;">
  <table align="center" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E6EDE6; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
    <tr>
      <td style="background-color: #3C5440; padding: 24px 28px; text-align: center; color: #FFFFFF;">
        <span style="font-family: 'Fraunces', Georgia, serif; font-size: 20px; font-weight: 600; display: inline-block;">GreenNest Field Notes</span>
        <p style="margin: 4px 0 0; font-size: 12px; color: #D0DED0;">Issue #01 · Weekly Mindful Living</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <span style="font-size: 12px; font-weight: 600; color: #5D8262; text-transform: uppercase; letter-spacing: 0.05em;">Pure Education · Zero Sales Pitch</span>
        <h2 style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; color: #1A2E20; margin: 8px 0 16px; font-weight: 600;">The greenest swap is often what you already have.</h2>
        <p style="font-size: 15px; color: #435447; margin: 0 0 24px;">
          Hi {{subscriber.firstName}}, living sustainably isn't about buying a whole new collection of beige items. It’s about building gentle habits that honor our resources. Try these three simple rituals:
        </p>

        <!-- Tip 1 -->
        <div style="border-left: 3px solid #5D8262; padding-left: 16px; margin: 0 0 20px;">
          <h3 style="font-size: 16px; color: #1A2E20; margin: 0 0 4px; font-weight: 600;">01. The "Sub-Zero" Broth Bag</h3>
          <p style="font-size: 14px; color: #435447; margin: 0 0 6px;">
            Save vegetable peelings, parsley stems, and garlic skins in a freezer container. When filled, simmer for 40 minutes for nutrient-rich, zero-cost culinary stock.
          </p>
          <span style="font-size: 12px; color: #5D8262; font-weight: 500;">Est. Impact: Diverts ~12 kg food waste per household yearly</span>
        </div>

        <!-- Tip 2 -->
        <div style="border-left: 3px solid #5D8262; padding-left: 16px; margin: 0 0 20px;">
          <h3 style="font-size: 16px; color: #1A2E20; margin: 0 0 4px; font-weight: 600;">02. The Cold-Wash Standard</h3>
          <p style="font-size: 14px; color: #435447; margin: 0 0 6px;">
            Up to 90% of electricity consumed by laundry machines is spent boiling heating coils. Cold cycles clean everyday apparel just as thoroughly while protecting fibers.
          </p>
          <span style="font-size: 12px; color: #5D8262; font-weight: 500;">Est. Impact: Reduces appliance CO2 emissions by up to 75%</span>
        </div>

        <!-- Tip 3 -->
        <div style="border-left: 3px solid #5D8262; padding-left: 16px; margin: 0 0 24px;">
          <h3 style="font-size: 16px; color: #1A2E20; margin: 0 0 4px; font-weight: 600;">03. The 48-Hour Wishlist Rule</h3>
          <p style="font-size: 14px; color: #435447; margin: 0 0 6px;">
            Whenever you feel the urge to purchase something non-essential, pause for 48 hours. Intentional cooling prevents modern digital dopamine loops.
          </p>
          <span style="font-size: 12px; color: #5D8262; font-weight: 500;">Est. Impact: Dissolves over 60% of impulse acquisitions</span>
        </div>

        <div style="background-color: #FAF8F4; border-radius: 8px; padding: 16px; text-align: center; margin: 28px 0 0;">
          <p style="font-size: 13px; color: #556658; margin: 0;">
            Which habit resonates most with your current routine? Reply to this email and let us know—we read each note.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #FAF8F4; padding: 20px 32px; border-top: 1px solid #EAE6DF; font-size: 12px; color: #78857A; text-align: center;">
        <p style="margin: 0 0 6px;">GreenNest AI Marketing Capstone Project · Purely Educational Demonstration</p>
        <p style="margin: 0;">
          <a href="#" style="color: #3C5440; text-decoration: underline;">One-Click Unsubscribe</a> · 
          <a href="#" style="color: #3C5440; text-decoration: underline;">Email Preferences</a>
        </p>
      </td>
    </tr>
  </table>
</div>
    `,
    ethicalChecks: [
      '100% educational content with no hidden conversion hooks',
      'No tracking user reply sentiment without permission',
      'Encourages conscious reduction rather than buying new products',
      'Affirms user autonomy to unsubscribe easily'
    ]
  },
  {
    id: 'email-3-product',
    stepNumber: 3,
    sendDelay: 'Day 5 (3 days after Tips)',
    phase: 'Considered Introduction',
    title: 'Email 3: Sustainable Product Introduction',
    subjectLineA: 'Crafted to outlast: Meet the PureStream Thermal Canteen',
    subjectLineB: 'Why we spent 14 months designing one water bottle',
    preheader: 'Full material traceability, zero plastic linings, and repairable parts.',
    targetObjective: 'Present educational flagship items with complete supply chain transparency, lifecycle analysis, and honest material sourcing. Fictional educational pricing clearly signposted.',
    aiPromptSnippet: `System: Copywriter for GreenNest Sustainable Goods.
Task: Write Email 3 introducing our PureStream Thermal Canteen and Heirloom Linen Market Tote.
Guidance:
1. Focus on durability and repairability rather than seasonal trends.
2. Provide material breakdown (90% recycled steel, bamboo cap, non-toxic seals).
3. Clearly label prices as educational example prices ($32 & $24).
4. Strictly avoid high-pressure sales verbs like "Grab yours now" or "Selling fast".`,
    plainText: `Hi {{subscriber.firstName}},

When we set out to craft essentials for GreenNest, our first principle was simple: if an item cannot last a decade of daily use, it shouldn't exist.

Today, we'd like to introduce two everyday companions we built from the ground up:

1. The PureStream Thermal Canteen (Fictional Educational Example: $32)
- Body: 90% post-consumer recycled 18/8 food-grade stainless steel.
- Cap: Solid FSC-certified Moso bamboo with a replaceable silicone seal.
- Insulation: Double-walled vacuum chamber (24h cold, 12h hot).
- No BPA, no plastic threading, no toxic inner coating.

2. Heirloom French Linen Market Tote (Fictional Educational Example: $24)
- 100% GOTS-certified organic unbleached flax.
- Box-stitched handles rated for 20+ kg of market produce.
- 100% biodegradable and compostable at end of life.

Read our complete Lifecycle & Material Audit:
https://greennest.example/transparency-audit

Only buy what you genuinely need and plan to use for years to come.

Warmly,
The GreenNest Workshop
"Small choices. A greener tomorrow."

[Preferences] · [Unsubscribe with one click] · [Fictional Educational Project]`,
    htmlBody: `
<div style="background-color: #FBF9F5; padding: 32px 16px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #243328; line-height: 1.6;">
  <table align="center" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E6EDE6; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
    <tr>
      <td style="background-color: #1A2E20; padding: 28px; text-align: center; color: #FFFFFF;">
        <span style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600;">GreenNest Crafts</span>
        <p style="margin: 4px 0 0; font-size: 12px; color: #ADC7AD; letter-spacing: 0.05em; text-transform: uppercase;">Radical Material Traceability</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <span style="font-size: 11px; font-weight: 600; color: #5D8262; text-transform: uppercase; letter-spacing: 0.06em;">Educational Product Profile</span>
        <h2 style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; color: #1A2E20; margin: 8px 0 16px; font-weight: 600;">Designed to be used 10,000 times, not once.</h2>
        <p style="font-size: 15px; color: #435447; margin: 0 0 24px;">
          Hi {{subscriber.firstName}}, when we create a physical item, our goal is to design something you’ll pass down rather than throw away. Here is an honest look at our flagship vessels:
        </p>

        <!-- Product Card 1 -->
        <div style="border: 1px solid #E6EDE6; border-radius: 12px; padding: 20px; margin: 0 0 20px; background-color: #FAFBF9;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
            <h3 style="font-size: 16px; font-weight: 700; color: #1A2E20; margin: 0;">PureStream Thermal Canteen</h3>
            <span style="font-size: 13px; font-weight: 600; color: #5D8262;">$32.00 (Fictional)</span>
          </div>
          <p style="font-size: 13px; color: #556658; margin: 0 0 12px;">
            Double-walled vacuum insulated canteen made with 90% recycled food-grade stainless steel and an unlacquered Moso bamboo cap.
          </p>
          <div style="font-size: 12px; color: #3C5440; background-color: #EDF3ED; padding: 8px 12px; border-radius: 6px;">
            <strong>Material Audit:</strong> Steel core (indefinitely recyclable) · Natural bamboo (FSC) · Food-grade silicone gasket.
          </div>
        </div>

        <!-- Product Card 2 -->
        <div style="border: 1px solid #E6EDE6; border-radius: 12px; padding: 20px; margin: 0 0 24px; background-color: #FAFBF9;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
            <h3 style="font-size: 16px; font-weight: 700; color: #1A2E20; margin: 0;">Heirloom Flax Market Tote</h3>
            <span style="font-size: 13px; font-weight: 600; color: #5D8262;">$24.00 (Fictional)</span>
          </div>
          <p style="font-size: 13px; color: #556658; margin: 0 0 12px;">
            GOTS-certified heavy organic French linen with cross-reinforced handles. Carries 20+ kg of market goods and softens gracefully with each wash.
          </p>
          <div style="font-size: 12px; color: #3C5440; background-color: #EDF3ED; padding: 8px 12px; border-radius: 6px;">
            <strong>Lifecycle:</strong> 100% biodegradable and home-compostable after decades of reuse.
          </div>
        </div>

        <div style="text-align: center; margin: 28px 0 16px;">
          <a href="#featured-products" style="background-color: #3C5440; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-block;">
            Inspect Educational Products Catalog
          </a>
        </div>
        <p style="font-size: 12px; color: #78857A; text-align: center; margin: 0;">
          *Reminder: GreenNest is an educational demonstration project. No actual sales are processed.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #FAF8F4; padding: 20px 32px; border-top: 1px solid #EAE6DF; font-size: 12px; color: #78857A; text-align: center;">
        <p style="margin: 0 0 6px;">GreenNest AI Marketing Capstone Project</p>
        <p style="margin: 0;">
          <a href="#" style="color: #3C5440; text-decoration: underline;">One-Click Unsubscribe</a> · 
          <a href="#" style="color: #3C5440; text-decoration: underline;">Preferences</a>
        </p>
      </td>
    </tr>
  </table>
</div>
    `,
    ethicalChecks: [
      'Clear fictional price and educational demonstration tags',
      'No artificial "limited batch" claims or FOMO language',
      'Comprehensive material sourcing and repairability details provided',
      'Reminder that buying nothing is better than buying unneeded items'
    ]
  },
  {
    id: 'email-4-promotion',
    stepNumber: 4,
    sendDelay: 'Day 8 (3 days after Product Intro)',
    phase: 'Ethical Incentive',
    title: 'Email 4: Fictional Discount Promotion',
    subjectLineA: 'A calm welcome gift: 15% off your first sustainable order',
    subjectLineB: 'GreenNest welcome: 15% off with code GREEN15 (no hurry, no rush)',
    preheader: 'Take your time. An educational 15% gesture with zero artificial expiration timers.',
    targetObjective: 'Demonstrate how an ethical e-commerce brand can offer a welcome incentive without predatory countdown clocks, fake stock counters, or panic-inducing sales language.',
    aiPromptSnippet: `System: Responsible Marketing Strategist.
Goal: Draft a promotional email offering 15% educational discount (code: GREEN15).
Mandatory Ethical Directives:
1. Prohibit fake urgency (no "Expires in 2 hours!" or "Almost out of stock!").
2. Encourage subscribers to reflect before using the coupon.
3. Explicitly state the coupon is valid whenever they are ready.
4. Highlight that this promotion is a fictional educational sample.`,
    plainText: `Hi {{subscriber.firstName}},

If you've been considering replacing worn-out single-use kitchen or travel goods with our durable alternatives, we'd like to share a small welcome token:

Code: GREEN15
Value: 15% off any item in our educational catalog
Validity: Never expires. Take all the time you need.

Unlike standard e-commerce emails, you won't see a ticking countdown clock here. We don't believe in pressuring anyone into purchasing things they don't truly need or love.

When and if the timing is right for your home, the code will be waiting for you.

Explore our educational collection:
https://greennest.example/products

With warmth,
The GreenNest Team
"Small choices. A greener tomorrow."

[Preferences] · [Unsubscribe with one click] · [Fictional Educational Project]`,
    htmlBody: `
<div style="background-color: #FBF9F5; padding: 32px 16px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #243328; line-height: 1.6;">
  <table align="center" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E6EDE6; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
    <tr>
      <td style="background-color: #5D8262; padding: 28px; text-align: center; color: #FFFFFF;">
        <span style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600;">A Mindful Welcome</span>
        <p style="margin: 4px 0 0; font-size: 12px; color: #E6EDE6; letter-spacing: 0.05em; text-transform: uppercase;">No Countdown Clocks · No False Rush</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <span style="font-size: 11px; font-weight: 600; color: #5D8262; text-transform: uppercase; letter-spacing: 0.06em;">Fictional Educational Promotion</span>
        <h2 style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; color: #1A2E20; margin: 8px 0 16px; font-weight: 600;">A quiet blessing whenever you're ready, {{subscriber.firstName}}.</h2>
        <p style="font-size: 15px; color: #435447; margin: 0 0 20px;">
          Most retail brands send promotional emails with giant flashing clocks shouting that you have 47 minutes left to buy. We reject that philosophy entirely.
        </p>
        <p style="font-size: 15px; color: #435447; margin: 0 0 24px;">
          If and when you genuinely need to replace disposable items in your kitchen or backpack, please feel welcome to enjoy this educational welcome gesture:
        </p>

        <!-- Promotion Voucher Box -->
        <div style="background-color: #FAF8F4; border: 1.5px dashed #adc7ad; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0;">
          <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #5D8262; font-weight: 600; display: block; margin-bottom: 6px;">Fictional Educational Code</span>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 700; color: #1A2E20; letter-spacing: 0.1em; margin-bottom: 8px;">
            GREEN15
          </div>
          <p style="font-size: 14px; color: #3C5440; margin: 0 0 4px; font-weight: 600;">15% Off Any Educational Sample Item</p>
          <p style="font-size: 12px; color: #78857A; margin: 0;">No expiration date. No artificial scarcity. Use at your own calm pace.</p>
        </div>

        <div style="background-color: #F4F7F4; border-radius: 8px; padding: 14px 18px; margin: 20px 0 28px;">
          <p style="font-size: 13px; color: #435447; margin: 0; line-height: 1.5;">
            <strong>Ethical Marketing Note:</strong> In our automated Google Sheets workflow, promotions are throttled so subscribers only receive one gentle discount offer during their onboarding sequence.
          </p>
        </div>

        <div style="text-align: center; margin: 24px 0;">
          <a href="#featured-products" style="background-color: #3C5440; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-block;">
            Browse Educational Catalog
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #FAF8F4; padding: 20px 32px; border-top: 1px solid #EAE6DF; font-size: 12px; color: #78857A; text-align: center;">
        <p style="margin: 0 0 6px;">GreenNest AI Marketing Capstone Project · Fictional Educational Promotion</p>
        <p style="margin: 0;">
          <a href="#" style="color: #3C5440; text-decoration: underline;">One-Click Unsubscribe</a> · 
          <a href="#" style="color: #3C5440; text-decoration: underline;">Preferences</a>
        </p>
      </td>
    </tr>
  </table>
</div>
    `,
    ethicalChecks: [
      'Strictly prohibited fake countdown clocks and artificial stock counters',
      'Code clearly tagged as a fictional educational example',
      'Explicit affirmation that there is no hurry to purchase',
      'One-click unsubscribe easily accessible without survey barriers'
    ]
  },
  {
    id: 'email-5-thankyou',
    stepNumber: 5,
    sendDelay: 'Day 14 (6 days after Promotion)',
    phase: 'Long-Term Relationship',
    title: 'Email 5: Thank You & Impact Reflection',
    subjectLineA: 'Thank you for being part of the circle · Your footprint matters',
    subjectLineB: 'Two weeks of quiet habits together: Thank you',
    preheader: 'Reflecting on our first two weeks together and looking forward.',
    targetObjective: 'Complete the 5-email onboarding sequence with deep gratitude, celebrate the subscriber’s participation in low-waste living, invite community dialogue, and offer a clear choice of email frequency going forward.',
    aiPromptSnippet: `System: GreenNest Community & Sustainability Guide.
Task: Compose Email 5, the concluding email of our initial 5-stage onboarding cycle.
Objectives:
1. Express authentic gratitude for their mindful time and attention.
2. Summarize the collective eco-philosophy: small daily habits create lasting generational impact.
3. Give the subscriber explicit control over future cadence (e.g. Monthly Digest vs Weekly Tips vs Sleep Mode).
4. Reiterate that no personal data is sold or shared.`,
    plainText: `Hi {{subscriber.firstName}},

It has been two weeks since you welcomed GreenNest into your inbox. We wanted to pause today simply to say thank you.

Whether you adopted the freezer broth bag, switched to cold laundry cycles, or simply paused before your last purchase, every conscious decision ripples outward.

You are now fully onboarded into our community. Moving forward, you can customize how often you hear from us:
- The Weekly Field Note (1 gentle habit per Sunday)
- The Monthly Circular (our curated longform digest)
- Pause for 90 days (take an inbox holiday)

Update your frequency preferences anytime:
https://greennest.example/manage-cadence

Thank you for being a thoughtful steward of our shared planet.

With deep gratitude,
Maya, Sam, and the GreenNest Team
"Small choices. A greener tomorrow."

[Preferences] · [Unsubscribe with one click] · [Fictional Educational Project]`,
    htmlBody: `
<div style="background-color: #FBF9F5; padding: 32px 16px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #243328; line-height: 1.6;">
  <table align="center" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E6EDE6; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
    <tr>
      <td style="background-color: #1A2E20; padding: 28px; text-align: center; color: #FFFFFF;">
        <span style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600;">With Gratitude</span>
        <p style="margin: 4px 0 0; font-size: 12px; color: #ADC7AD; letter-spacing: 0.05em; text-transform: uppercase;">Completing Our First Two Weeks</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <h2 style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; color: #1A2E20; margin: 0 0 16px; font-weight: 600;">Thank you for walking this path with us, {{subscriber.firstName}}.</h2>
        <p style="font-size: 15px; color: #435447; margin: 0 0 20px;">
          Over the past two weeks, you’ve explored our pledge, learned three zero-cost kitchen habits, inspected our sustainable materials, and received our quiet welcome token.
        </p>
        <p style="font-size: 15px; color: #435447; margin: 0 0 24px;">
          Today marks the conclusion of your onboarding sequence. From here on, you are in complete control of our relationship.
        </p>

        <!-- Cadence Control Card -->
        <div style="background-color: #F4F7F4; border-radius: 12px; padding: 22px; margin: 24px 0;">
          <p style="font-size: 14px; font-weight: 700; color: #1A2E20; margin: 0 0 12px;">Choose your ongoing email pace:</p>
          <div style="margin-bottom: 10px;">
            <span style="font-size: 13px; font-weight: 600; color: #3C5440;">🌿 Weekly Field Note</span>
            <span style="font-size: 13px; color: #556658; display: block;">One practical zero-waste habit every Sunday morning.</span>
          </div>
          <div style="margin-bottom: 10px;">
            <span style="font-size: 13px; font-weight: 600; color: #3C5440;">📜 Monthly Circular</span>
            <span style="font-size: 13px; color: #556658; display: block;">A slow, thoughtful summary of regenerative design and season recipes.</span>
          </div>
          <div>
            <span style="font-size: 13px; font-weight: 600; color: #3C5440;">☕ 90-Day Pause</span>
            <span style="font-size: 13px; color: #556658; display: block;">Need a break? Snooze emails with one click—no questions asked.</span>
          </div>
        </div>

        <p style="font-size: 15px; color: #435447; margin: 0 0 28px;">
          No matter how often we speak, thank you for making small choices that protect tomorrow.
        </p>
        <div style="text-align: center; margin: 28px 0 12px;">
          <a href="#ethical-ai" style="background-color: #3C5440; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-block;">
            Review Our Ethical AI Charter
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #FAF8F4; padding: 20px 32px; border-top: 1px solid #EAE6DF; font-size: 12px; color: #78857A; text-align: center;">
        <p style="margin: 0 0 6px;">GreenNest AI Marketing Capstone Project · Final Campaign Sequence Email</p>
        <p style="margin: 0;">
          <a href="#" style="color: #3C5440; text-decoration: underline;">One-Click Unsubscribe</a> · 
          <a href="#" style="color: #3C5440; text-decoration: underline;">Frequency Control</a>
        </p>
      </td>
    </tr>
  </table>
</div>
    `,
    ethicalChecks: [
      'Explicit ongoing cadence control offered to subscriber',
      'Provides option for a 90-day pause instead of binary disconnect',
      'Zero commercial hard-sell in the relationship-closing email',
      'Prominent one-click unsubscribe honoring user privacy rights'
    ]
  }
];
