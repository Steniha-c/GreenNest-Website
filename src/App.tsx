import { useState } from 'react';
import { Product } from './types';
import EducationalBanner from './components/EducationalBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import SustainabilityTips from './components/SustainabilityTips';
import AboutSection from './components/AboutSection';
import CampaignShowcase from './components/CampaignShowcase';
import ABTestingSection from './components/ABTestingSection';
import AutomationWorkflow from './components/AutomationWorkflow';
import EthicalAISection from './components/EthicalAISection';
import ProjectOverview from './components/ProjectOverview';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import EducationalCartDrawer from './components/EducationalCartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 1500);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#243328] selection:bg-[#D5E5D5] selection:text-[#1A2E20]">
      {/* 1. Educational Disclaimer Top Banner */}
      <EducationalBanner />

      {/* 2. Top Bar Navigation (Strict 3-Zone Contract) */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      <main className="flex-1">
        {/* 3. Hero Section with Tagline */}
        <Hero
          onExploreCampaign={() => scrollTo('campaign-showcase')}
          onExploreProducts={() => scrollTo('featured-products')}
        />

        {/* 4. Featured Reusable Products with Educational Prices */}
        <ProductSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          recentlyAddedId={recentlyAddedId}
        />

        {/* 5. Sustainability Tips & Low-Waste Habits */}
        <SustainabilityTips />

        {/* 6. About GreenNest: Eco Brand Narrative + Capstone Mission */}
        <AboutSection />

        {/* 7. 5-Email Campaign Showcase */}
        <CampaignShowcase />

        {/* 8. Subject-Line A/B Testing Section ("Awaiting real feedback") */}
        <ABTestingSection />

        {/* 9. Automation Workflow: Google Sheets → Apps Script → Gmail Drafts */}
        <AutomationWorkflow />

        {/* 10. Responsible AI & Ethical Marketing Principles */}
        <EthicalAISection />

        {/* 11. Project Overview, Tools Used & How to Edit/Publish Guide */}
        <ProjectOverview />
      </main>

      {/* 12. Footer with Educational Disclaimer */}
      <Footer />

      {/* Modal: Deep Material & Lifecycle Inspection */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Drawer: Educational Bag & Fictional Coupon Verification */}
      <EducationalCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
