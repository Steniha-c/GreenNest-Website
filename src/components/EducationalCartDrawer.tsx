import { useState } from 'react';
import { Product } from '../types';
import { X, Trash2, Tag, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface EducationalCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: Product; quantity: number }[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function EducationalCartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart
}: EducationalCartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.fictionalPrice * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.15 : 0;
  const total = Math.max(0, subtotal - discount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'GREEN15') {
      setPromoApplied(true);
    } else {
      setPromoError('Try the educational code GREEN15 from Email 4.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1A2E20]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl border-l border-[#D5E0D5]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E6EDE6] bg-[#FAF8F4]">
          <div className="flex items-center gap-2">
            <h2 id="cart-drawer-title" className="font-editorial text-xl font-bold text-[#1A2E20]">
              Educational Demonstration Bag
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5D6F61] hover:text-[#1A2E20] hover:bg-[#EAEFE9] rounded-lg transition-colors cursor-pointer"
            aria-label="Close educational demonstration bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Educational Notice Banner */}
        <div className="bg-[#EDF3ED] px-5 py-3 border-b border-[#D5E0D5] flex items-start gap-2.5 text-xs text-[#2A4430]">
          <ShieldAlert className="w-4 h-4 text-[#3C5440] shrink-0 mt-0.5" />
          <p>
            <strong>Educational Demonstration Only:</strong> This bag does not accept payments or process orders. Fictional prices demonstrate product positioning and discount logic.
          </p>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#5D6F61]">
              <div className="w-12 h-12 rounded-full bg-[#F4F7F4] flex items-center justify-center mb-3">
                <Tag className="w-6 h-6 text-[#ADC7AD]" />
              </div>
              <p className="font-editorial text-lg font-semibold text-[#1A2E20]">Your sample bag is empty</p>
              <p className="text-xs text-[#7A8C7C] mt-1 max-w-xs">
                Browse our fictional sustainable goods to test how products integrate into the email campaign.
              </p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#E6EDE6] bg-[#FAFBF9]"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-editorial text-sm font-semibold text-[#1A2E20] truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#7A8C7C] mt-0.5 truncate">{product.subtitle}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <span className="font-mono font-medium text-[#1A2E20] tabular-nums">
                      ${product.fictionalPrice.toFixed(2)}
                    </span>
                    <span className="text-[#A2B3A3]">× {quantity}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(product.id)}
                  className="p-1.5 text-[#8A9C8C] hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  aria-label={`Remove ${product.name} from sample bag`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Promo Input */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E6EDE6] bg-[#FAF8F4] space-y-4">
            {/* Promo Code Test */}
            <form onSubmit={handleApplyPromo} className="space-y-1.5">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Code GREEN15 (Email 4)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs uppercase bg-white border border-[#D5E0D5] rounded-lg focus:outline-none focus:border-[#3C5440] font-mono"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#3C5440] hover:bg-[#2A4430] rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <p className="text-xs text-[#2A4430] flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#3C5440]" />
                  <span>Educational 15% discount applied (from Email 4 campaign).</span>
                </p>
              )}
              {promoError && (
                <p className="text-xs text-red-600">{promoError}</p>
              )}
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#435447] pt-2 border-t border-[#E6EDE6]">
              <div className="flex justify-between">
                <span>Fictional Subtotal</span>
                <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-[#2A4430] font-medium">
                  <span>Educational 15% Discount</span>
                  <span className="font-mono tabular-nums">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#1A2E20] pt-1.5 border-t border-[#E6EDE6]">
                <span>Demonstration Total</span>
                <span className="font-mono tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Simulated Checkout Button */}
            <div className="space-y-2 pt-2">
              <div className="p-3 rounded-lg bg-[#EAEFE9] text-center text-xs text-[#3C5440] font-medium">
                <Sparkles className="w-3.5 h-3.5 inline-block mr-1 text-[#5D8262]" />
                Simulated demonstration: Checkout is disabled by design.
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#7A8C7C] hover:text-[#1A2E20] underline cursor-pointer"
                >
                  Clear Bag
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1A2E20] rounded-lg hover:bg-[#2C4434] transition-colors cursor-pointer"
                >
                  Done Inspecting
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
