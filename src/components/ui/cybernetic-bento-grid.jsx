import React, { useEffect, useRef } from 'react';

// Reusable BentoItem component
const BentoItem = ({ className, children }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={`bento-item ${className}`}>
      {children}
    </div>
  );
};

// Main Component
export const CyberneticBentoGrid = () => {
  return (
    <div className="main-container">
      <div className="w-full max-w-6xl z-10 mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-8">Everything 12 apps used to do. In one place.</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          One platform replaces your theme, page builder, photo tool, upsell cart and chatbot apps. Build stores faster. Squeeze more revenue out of every visit.
        </p>

        <div className="bento-grid">
          {/* Card 1: Générateur de boutique IA */}
          <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">AI Store Generator</h2>
              <p className="mt-2 text-muted-foreground">
                Stop losing weekends fighting Shopify. Paste a product URL and get a fully built, conversion-optimized store in under 3 minutes. Translation: 10 product tests this week instead of 2.
              </p>
            </div>
            <div className="mt-4 h-[650px] bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/images/theme.png" 
                alt="AI Store Generator"
                className="w-full h-full object-cover"
              />
            </div>
          </BentoItem>

          {/* Card 2: Image Produit IA */}
          <BentoItem>
            <div className="mb-4 h-32 bg-muted rounded-lg overflow-hidden">
              <img 
                src="/images/ai_photo.jpg" 
                alt="AI Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-foreground">AI Product Photos</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              No photographer. No editing. No supplier shots that scream AliExpress. Studio-grade product images, ready for your store and your ads.
            </p>
          </BentoItem>

          {/* Card 3: Bundles */}
          <BentoItem>
            <div className="mb-4 h-32 bg-muted rounded-lg overflow-hidden">
              <img 
                src="/images/bundle.png" 
                alt="Bundles"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-foreground">Bundle Upsells</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Add a $19 bundle on top of every $39 sale. Native to your store from day one. No extra app, no monthly fee, no broken integration.
            </p>
          </BentoItem>

          {/* Card 4: Panier optimisé upselle */}
          <BentoItem>
            <div className="mb-4 h-32 bg-muted rounded-lg overflow-hidden">
              <img 
                src="/images/cart.png" 
                alt="Optimized Upsell Cart"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-foreground">High-Converting Upsell Cart</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Turn every cart into a second sale. Personalized upsells, urgency timers and one-click adds, native to your store. The cart top operators pay $79/month for. Included.
            </p>
          </BentoItem>

          {/* Card 6: Thème Premium */}
          <BentoItem>
            <div className="mb-4 h-32 bg-muted rounded-lg overflow-hidden">
              <img 
                src="/images/premium.png" 
                alt="Premium Theme"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-foreground">Premium Theme · Included</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              A premium theme built to convert, designed by operators who've sold millions. No $250 theme to buy. No designer to hire. Just a store that looks like a brand.
            </p>
          </BentoItem>

          {/* Card 5: Chatbot IA */}
          <BentoItem className="md:col-span-2">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">24/7 AI Sales Chatbot</h2>
                <p className="mt-2 text-muted-foreground text-sm">
                  An AI agent that answers questions, kills objections and recommends upsells around the clock. The salesperson you can't afford, working every weekend and every holiday while you sleep.
                </p>
              </div>
              <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/images/chatbot.png" 
                  alt="AI Chatbot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BentoItem>
        </div>
      </div>
    </div>
  );
};

