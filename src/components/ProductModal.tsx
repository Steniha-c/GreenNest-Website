import { Product } from '../types';
import { X, Sparkles, Shield, Recycle, Check, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A2E20]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl border border-[#D5E0D5] max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E6EDE6]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5D8262]">
              Material & Marketing Audit
            </span>
            <span className="text-xs text-[#7A8C7C]">· Fictional Spec</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5D6F61] hover:text-[#1A2E20] hover:bg-[#F4F7F4] rounded-lg transition-colors cursor-pointer"
            aria-label="Close product inspector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-baseline justify-between">
              <h2 id="modal-product-title" className="font-editorial text-2xl font-bold text-[#1A2E20]">
                {product.name}
              </h2>
              <span className="font-mono text-lg font-bold text-[#3C5440] tabular-nums">
                ${product.fictionalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#5D6F61] mt-0.5">{product.subtitle}</p>
            <p className="text-sm text-[#435447] mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Sourced Materials Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#1A2E20] uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#3C5440]" />
              <span>Traceable Bill of Materials</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {product.materials.map((mat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#F4F7F4] border border-[#DEE5DC] text-xs text-[#354538] flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 text-[#5D8262] shrink-0" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle & Circularity */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#1A2E20] uppercase tracking-wider flex items-center gap-1.5">
              <Recycle className="w-3.5 h-3.5 text-[#3C5440]" />
              <span>Circularity & End-of-Life</span>
            </h4>
            <div className="p-3 rounded-lg bg-[#FAF8F4] border border-[#EAE6DF] text-xs text-[#435447] leading-relaxed">
              {product.lifecycle}
            </div>
          </div>

          {/* Campaign Strategy Context */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#1A2E20] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#3C5440]" />
              <span>Role in AI Email Campaign</span>
            </h4>
            <div className="p-3 rounded-lg bg-[#EDF3ED] border border-[#C8DAC8] text-xs text-[#1E3022] leading-relaxed">
              {product.campaignRole}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#FAF8F4] border-t border-[#E6EDE6] flex items-center justify-between gap-4">
          <span className="text-[11px] text-[#7A8C7C]">
            Educational Demonstration · No checkout available
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#435447] hover:text-[#1A2E20] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1A2E20] hover:bg-[#2C4434] rounded-lg transition-colors cursor-pointer"
            >
              <span>Add to Sample Bag</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
