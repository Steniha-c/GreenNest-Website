import { SustainabilityTip } from '../types';

export const SUSTAINABILITY_TIPS: SustainabilityTip[] = [
  {
    id: 'tip-broth-bag',
    number: '01',
    category: 'kitchen',
    title: 'The Sub-Zero Freezer Broth Bag',
    timeCommitment: '2 minutes per cooking session',
    difficulty: 'Beginner',
    carbonImpact: '~14 kg CO2e saved per household annually',
    actionGuide: [
      'Keep a reusable silicone or glass container in your freezer labeled "Stock Scrap".',
      'Toss in washed carrot peels, celery leaves, onion skins, mushroom stems, and herb sprigs.',
      'When the container fills, cover scraps with 2 liters of water in a pot, add a bay leaf, and simmer gently for 45 minutes.',
      'Strain through a fine mesh sieve. Use immediately as savory vegetable bouillon or freeze in ice trays.'
    ],
    whyItMatters: 'Food waste in landfills generates methane, a greenhouse gas 28x more potent than carbon dioxide. Repurposing clean culinary trimmings eliminates packaging waste from store-bought cartons while maximizing nutrient yield.'
  },
  {
    id: 'tip-cold-wash',
    number: '02',
    category: 'laundry',
    title: 'Cold-Water Laundry Standard',
    timeCommitment: '0 additional minutes (just twist the dial to 20°C/Cold)',
    difficulty: 'Beginner',
    carbonImpact: '~320 kg CO2e avoided each year',
    actionGuide: [
      'Set everyday washing machine wash cycles to cold (20°C to 30°C).',
      'Use modern plant-based liquid enzymes formulated specifically for cold water activation.',
      'Reserve warm cycles exclusively for sanitizing bedding or cloth diapers during sickness.',
      'Line-dry garments on a wooden drying rack whenever weather allows, preserving elastic fibers.'
    ],
    whyItMatters: 'Up to 90% of electricity drawn by modern washing machines is spent heating water. Cold washing protects vibrant clothing dyes, eliminates thermal fabric shrinking, and dramatically lowers utility bills.'
  },
  {
    id: 'tip-pause-rule',
    number: '03',
    category: 'daily',
    title: 'The 48-Hour Intentional Purchase Pause',
    timeCommitment: '48 hours of patience',
    difficulty: 'Beginner',
    carbonImpact: 'Prevents 60%+ of impulse return shipping emissions',
    actionGuide: [
      'When shopping online, bookmark desired non-essential items on an analog notepad rather than instant checkout.',
      'Wait 48 full hours before revisiting the item.',
      'Ask: Do I already own an item that performs 80% of this function? Will I use this at least 30 times?',
      'If the answer is no, discard the note with gratitude.'
    ],
    whyItMatters: 'E-commerce return logistics generate over 16 million metric tons of CO2 annually in transport and packaging. Intentional delay interrupts the neuromarketing dopamine impulse, fostering mindful relationship with belongings.'
  },
  {
    id: 'tip-beeswax-diy',
    number: '04',
    category: 'kitchen',
    title: 'Plastic-Free Food Storage with Beeswax Wraps',
    timeCommitment: '10 seconds per wrap',
    difficulty: 'Intermediate',
    carbonImpact: 'Replaces ~400 meters of petroleum cling film',
    actionGuide: [
      'Use warm hands to mold wraps around cut avocados, lemon halves, sourdough heels, and ceramic salad bowls.',
      'Wash gently with cool water and mild castile soap; avoid hot water to preserve the beeswax seal.',
      'Air dry on a dish drying rack. Store rolled in a kitchen drawer.',
      'Refresh annually by placing between parchment sheets and warming with an iron or low oven.'
    ],
    whyItMatters: 'Standard polyvinylidene chloride (PVC) cling film cannot be recycled and leaches plasticizers into fatty foods. Beeswax wraps are naturally antimicrobial, breathable, and 100% garden-compostable.'
  },
  {
    id: 'tip-bulk-pantry',
    number: '05',
    category: 'circular',
    title: 'Tare-Weight Bulk Pantry Shopping',
    timeCommitment: '15 minutes of pantry prep',
    difficulty: 'Intermediate',
    carbonImpact: 'Eliminates ~50 single-use plastic pouches yearly',
    actionGuide: [
      'Save clean glass jars (pasta sauce, nut butter, pickles).',
      'Weigh empty jars on a kitchen scale and write the tare weight on the lid with a grease pencil.',
      'Refill grains, oats, lentils, coffee beans, and dried fruit at local bulk refill stations.',
      'Cashiers deduct the container tare weight at checkout so you only pay for the contents.'
    ],
    whyItMatters: 'Pre-packaged supermarket food relies heavily on multi-layer flexible plastic pouches that are incinerated or sent to landfills. Glass jar refill systems create an enduring closed-loop home pantry.'
  },
  {
    id: 'tip-microfiber-catch',
    number: '06',
    category: 'laundry',
    title: 'Microplastic Catching for Synthetic Activewear',
    timeCommitment: '1 minute per wash load',
    difficulty: 'Intermediate',
    carbonImpact: 'Blocks up to 90% of microplastics from marine waterways',
    actionGuide: [
      'Wash synthetic gym garments, fleece jackets, and polyester activewear inside a micro-filter washing bag.',
      'Wash full loads to reduce friction between fabrics.',
      'After each wash, wipe collected microfibers from the bag rim and dispose in dry household trash (never rinse down the sink drain).',
      'Opt for natural fibers (organic cotton, linen, hemp, merino) for future wardrobe additions.'
    ],
    whyItMatters: 'A single cycle of synthetic laundry sheds up to 700,000 microscopic plastic fibers that bypass wastewater treatment plants and enter aquatic food chains.'
  }
];
