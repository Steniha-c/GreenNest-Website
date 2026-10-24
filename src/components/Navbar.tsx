import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCart, cartCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6EDE6] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-editorial text-2xl font-bold tracking-tight text-[#1A2E20] whitespace-nowrap shrink-0 hover:text-[#3C5440] transition-colors"
        >
          GreenNest
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#435447]">
          <button
            onClick={() => scrollToSection('featured-products')}
            className="hover:text-[#1A2E20] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('sustainability-tips')}
            className="hover:text-[#1A2E20] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
          >
            Eco Tips
          </button>
          <button
            onClick={() => scrollToSection('campaign-showcase')}
            className="hover:text-[#1A2E20] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
          >
            Email Campaign
          </button>
          <button
            onClick={() => scrollToSection('ab-testing')}
            className="hover:text-[#1A2E20] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
          >
            A/B Testing
          </button>
          <button
            onClick={() => scrollToSection('automation-workflow')}
            className="hover:text-[#1A2E20] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
          >
            Automation
          </button>
          <button
            onClick={() => scrollToSection('ethical-ai')}
            className="hover:text-[#1A2E20] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
          >
            Ethical AI
          </button>
        </nav>

        {/* Zone 3: 1 primary action & bag trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#243328] hover:text-[#1A2E20] hover:bg-[#E6EDE6]/60 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#3C5440] cursor-pointer"
            aria-label={`View educational sample bag (${cartCount} items)`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#3C5440] text-white text-[11px] font-semibold rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => scrollToSection('campaign-showcase')}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-[#1A2E20] hover:bg-[#2A4430] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A2E20] cursor-pointer"
          >
            Explore Campaign
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#243328] hover:bg-[#E6EDE6]/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6EDE6] bg-[#FBF9F5] px-6 py-4 space-y-3">
          <button
            onClick={() => scrollToSection('featured-products')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            Featured Products (Educational)
          </button>
          <button
            onClick={() => scrollToSection('sustainability-tips')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            Sustainability Tips
          </button>
          <button
            onClick={() => scrollToSection('about-greennest')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            About GreenNest
          </button>
          <button
            onClick={() => scrollToSection('campaign-showcase')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            5-Email Campaign Showcase
          </button>
          <button
            onClick={() => scrollToSection('ab-testing')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            A/B Subject Testing
          </button>
          <button
            onClick={() => scrollToSection('automation-workflow')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            Automation: Sheets → Apps Script → Drafts
          </button>
          <button
            onClick={() => scrollToSection('ethical-ai')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            Responsible AI & Principles
          </button>
          <button
            onClick={() => scrollToSection('project-overview')}
            className="block w-full text-left py-2 text-sm font-medium text-[#243328] hover:text-[#1A2E20]"
          >
            Project Overview & Tools
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('campaign-showcase')}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-[#1A2E20] rounded-lg"
            >
              Explore Campaign Showcase
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
