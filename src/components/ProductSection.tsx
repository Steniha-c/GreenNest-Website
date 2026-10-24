import { useState } from 'react';
import { Product } from '../types';
import { FEATURED_PRODUCTS } from '../data/products';
import { Info, Plus, Sparkles, Check, PackageCheck } from 'lucide-react';

interface ProductSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  recentlyAddedId: string | null;
}

export default function ProductSection({ onSelectProduct, onAddToCart, recentlyAddedId }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'on-the-go' | 'kitchen' | 'home-care'>('all');

  const filteredProducts = activeCategory === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="featured-products" className="py-20 bg-[#FBF9F5] border-b border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6EDE6]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3C5440] uppercase tracking-wider">
              <span>Fictional Sustainable Goods</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#7A8C7C]">Educational Example Only</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A2E20] tracking-tight">
              Crafted to endure. Mindfully sourced.
            </h2>
            <p className="text-sm sm:text-base text-[#435447] leading-relaxed">
              Every item featured here represents the fictional eco-friendly product catalog used to test our 5-stage automated marketing sequence. Prices and specifications are educational samples.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EAEFE9] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#1A2E20] shadow-xs'
                  : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              All Goods
            </button>
            <button
              onClick={() => setActiveCategory('on-the-go')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'on-the-go'
                  ? 'bg-white text-[#1A2E20] shadow-xs'
                  : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              On-The-Go
            </button>
            <button
              onClick={() => setActiveCategory('kitchen')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'kitchen'
                  ? 'bg-white text-[#1A2E20] shadow-xs'
                  : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              Zero-Waste Kitchen
            </button>
            <button
              onClick={() => setActiveCategory('home-care')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'home-care'
                  ? 'bg-white text-[#1A2E20] shadow-xs'
                  : 'text-[#435447] hover:text-[#1A2E20]'
              }`}
            >
              Home Care
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredProducts.map((product) => {
            const isRecentlyAdded = recentlyAddedId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E6EDE6] hover:border-[#C4D6C4] transition-all hover:shadow-md p-6 relative overflow-hidden"
              >
                {/* Visual Top Fallback Canvas with botanical artwork */}
                <div className="relative aspect-4/3 rounded-xl bg-gradient-to-br from-[#F4F7F4] via-[#ECEEE8] to-[#E5E9E2] border border-[#DEE5DC] flex flex-col items-center justify-center p-6 text-center overflow-hidden mb-5">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3C5440_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Decorative organic icon symbol */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-xs transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${product.colorAccent}15`, color: product.colorAccent }}
                  >
                    <PackageCheck className="w-7 h-7" />
                  </div>

                  <span className="font-editorial text-lg font-semibold text-[#1A2E20] tracking-tight">
                    {product.name}
                  </span>
                  <span className="text-xs text-[#5D6F61] mt-1 max-w-[220px]">
                    {product.subtitle}
                  </span>

                  {/* Fictional Tag watermark badge */}
                  <div className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-[#5D6F61] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-[#DEE5DC]">
                    Educational Spec
                  </div>
                </div>

                {/* Content Area */}
                <div className="space-y-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="text-xs text-[#5D8262] font-semibold tracking-wide uppercase">
                        {product.category.replace('-', ' ')}
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-base font-bold text-[#1A2E20] tabular-nums">
                          ${product.fictionalPrice.toFixed(2)}
                        </span>
                        <span className="text-[10px] text-[#7A8C7C] block -mt-0.5">
                          Fictional Price
                        </span>
                      </div>
                    </div>

                    <h3 className="font-editorial text-xl font-bold text-[#1A2E20] group-hover:text-[#3C5440] transition-colors mt-1">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#435447] leading-relaxed line-clamp-2 mt-1.5">
                      {product.description}
                    </p>
                  </div>

                  {/* Material Audit Snippet */}
                  <div className="pt-3 border-t border-[#F0F4F0] space-y-1.5">
                    <div className="text-[11px] font-medium text-[#556658]">
                      <strong>Eco Metric:</strong> {product.impactMetric}
                    </div>
                    <div className="text-[11px] text-[#7A8C7C] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#5D8262] shrink-0" />
                      <span className="truncate">{product.campaignRole}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1A2E20] bg-[#F4F7F4] hover:bg-[#E6EDE6] border border-[#DEE5DC] rounded-xl transition-colors cursor-pointer"
                      aria-label={`Inspect material lifecycle for ${product.name}`}
                    >
                      <Info className="w-3.5 h-3.5 text-[#3C5440]" />
                      <span>Inspect Audit</span>
                    </button>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                        isRecentlyAdded
                          ? 'bg-[#3C5440] text-white'
                          : 'bg-[#1A2E20] hover:bg-[#2C4434] text-white'
                      }`}
                      aria-label={`Add ${product.name} to educational demonstration bag`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transparent Educational Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-[#F4F7F4] border border-[#DEE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#435447]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#3C5440] shrink-0" />
            <span>
              <strong>Zero Commercial Processing:</strong> This bag does not initiate checkout, take payment, or store personal addresses. It exists purely to demonstrate product positioning within the AI marketing sequence.
            </span>
          </div>
          <a
            href="#campaign-showcase"
            className="text-[#1A2E20] font-semibold hover:underline whitespace-nowrap"
          >
            See Email 3 Product Pitch →
          </a>
        </div>

      </div>
    </section>
  );
}
