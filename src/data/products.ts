import { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'flask-750',
    name: 'PureStream Thermal Canteen',
    subtitle: '750ml Recycled Stainless Steel & Organic Bamboo',
    category: 'on-the-go',
    fictionalPrice: 32.0,
    materials: ['90% Post-Consumer Recycled 18/8 Steel', 'FSC-Certified Moso Bamboo Cap', 'Food-Grade Silicone Seal'],
    impactMetric: 'Eliminates ~160 single-use plastic bottles per year',
    description: 'Double-walled vacuum insulation keeping cold drinks icy for 24h and tea piping hot for 12h. Free of BPA, BPS, and synthetic interior linings.',
    lifecycle: 'Designed for a lifetime of daily refills; steel core is 100% infinitely recyclable at end of life.',
    campaignRole: 'Marquee product in Email 3 (Product Intro) and featured in Email 4 (Educational Welcome Promotion).',
    colorAccent: '#5D8262'
  },
  {
    id: 'linen-tote',
    name: 'Heirloom Flax Market Tote',
    subtitle: '100% Unbleached French Linen with Box-Stitched Handles',
    category: 'on-the-go',
    fictionalPrice: 24.0,
    materials: ['GOTS-Certified Organic French Flax', 'Zero Chemical Bleaches', 'Oeko-Tex Vegetable Inks'],
    impactMetric: 'Replaces ~300 petroleum grocery sacks over 3 years',
    description: 'Generously proportioned for weekly farmers market hauls, bakery sourdough, and work essentials. Naturally antimicrobial and softens with every wash.',
    lifecycle: 'Completely biodegradable and home-compostable after decades of reuse.',
    campaignRole: 'Hero bundle pairing with PureStream Flask in Email 3.',
    colorAccent: '#8B7355'
  },
  {
    id: 'bamboo-cutlery',
    name: 'Nomad Bamboo Utensil Roll',
    subtitle: 'Compact 5-Piece Hand-Carved Travel Cutlery',
    category: 'on-the-go',
    fictionalPrice: 16.0,
    materials: ['Sustainably Harvested Bamboo', 'Organic Cotton Canvas Pouch', 'Natural Coconut Oil Finish'],
    impactMetric: 'Diverts over 240 disposable takeout forks and spoons annually',
    description: 'Includes hand-shaped fork, knife, soup spoon, chopsticks, and a plant-fiber straw with a coconut-bristle cleaning wand.',
    lifecycle: 'Crafted without synthetic adhesives or lacquers; 100% backyard compostable.',
    campaignRole: 'Educational entry-level swap highlighted in Email 2 (Sustainability Tips).',
    colorAccent: '#6C8352'
  },
  {
    id: 'beeswax-wraps',
    name: 'Botanical Beeswax Food Wraps',
    subtitle: 'Set of 3 Breathable Multi-Size Food Preservers',
    category: 'kitchen',
    fictionalPrice: 18.0,
    materials: ['Organic Cotton Muslin', 'Ethical Local Beeswax', 'Cold-Pressed Jojoba Oil', 'Pine Damar Tree Resin'],
    impactMetric: 'Saves 35+ rolls of disposable plastic cling wrap',
    description: 'Molds easily with the warmth of your palms over avocados, cheeses, bread loaves, and ceramic bowls. Washable in cold water and reusable for up to a year.',
    lifecycle: 'Re-waxable with our DIY bar, or fully compostable in your garden bin.',
    campaignRole: 'Recommended in the Email 2 zero-waste kitchen guide.',
    colorAccent: '#C99D5A'
  },
  {
    id: 'dish-brush-trio',
    name: 'Castile & Coconut Pot Scrubber Trio',
    subtitle: 'Plant-Fibre Brushes with Replaceable Heads',
    category: 'kitchen',
    fictionalPrice: 14.0,
    materials: ['Untreated European Beechwood', 'Tampico Agave Fibers', 'Coconut Husk Coir'],
    impactMetric: 'Prevents microplastics shed from synthetic polyurethane sponges',
    description: 'Ergonomic solid wood handles paired with coarse and medium natural bristles. Tough on burnt cast-iron pans yet gentle on glazed porcelain.',
    lifecycle: 'Brush heads are unlacquered and 100% compostable; handles endure for years.',
    campaignRole: 'Showcased in Email 3 as a low-cost, high-impact kitchen swap.',
    colorAccent: '#7D6348'
  },
  {
    id: 'amber-dispensers',
    name: 'Apothecary Amber Glass Dispenser Duo',
    subtitle: '500ml Heavyweight Bottles with Brass Pumps',
    category: 'home-care',
    fictionalPrice: 22.0,
    materials: ['Lead-Free Recycled Amber Glass', 'Solid Brushed Brass Pump Core', 'Non-Toxic Silicone Bumper Base'],
    impactMetric: 'Enables bulk liquid soap refills, eliminating 24 single-use pump jugs yearly',
    description: 'UV-protective amber glass safeguards natural plant essential oils from oxidation. Adds warm, minimalist apothecary charm to sink countertops.',
    lifecycle: 'Infinitely recyclable glass vessel with modular, repairable pump springs.',
    campaignRole: 'Referenced in Email 5 (Thank You & Long-term Habit Building).',
    colorAccent: '#A66B38'
  }
];
