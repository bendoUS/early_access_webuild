import { Check, X, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/ui/waitlist-modal";

function Pricing() {
  return (
    <div className="w-full py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Comparison</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              WeBuild vs. the duct-taped Shopify stack
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              The math operators run before they switch. One stack, one fee, one weekend back.
            </p>
          </div>
          <div className="grid text-left w-full grid-cols-1 lg:grid-cols-2 divide-x divide-border pt-12 max-w-4xl mx-auto">
            {/* Webuild Column */}
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-primary/20 border-2 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-2">WeBuild</h3>
              <Badge className="w-fit mb-4">Early access</Badge>
              <p className="text-sm text-muted-foreground mb-8">
                The all-in-one stack that builds, optimizes and sells. In minutes, not weekends.
              </p>

              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Live store in under 5 minutes</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Premium converting theme included ($250 value)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Bundles, upsells and cart, native (no apps)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">AI product photos and copy in every store</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">24/7 AI sales chatbot included</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Bandwidth to test 10+ products a week</p>
                </div>
              </div>

              <WaitlistModal>
                <Button className="gap-4 mt-8 w-full">
                  Claim early access <MoveRight className="w-4 h-4" />
                </Button>
              </WaitlistModal>
            </div>

            {/* Autres Column */}
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <h3 className="text-2xl font-semibold text-foreground mb-2">The DIY stack</h3>
              <div className="h-6 mb-4"></div>
              <p className="text-sm text-muted-foreground mb-8">
                Cobbling together 12 apps and a $250 theme on a Sunday.
              </p>

              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Lose 48 hours building one store manually</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">$250+ for a premium theme that still needs work</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">$50 to $150 a month in app subscriptions</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Slow stores, broken app conflicts, ugly checkout</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Bandwidth to test 1 or 2 products per month</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Random copy, generic images, low conversions</p>
                </div>
              </div>

              <Button variant="outline" className="gap-4 mt-8" disabled>
                Slow and expensive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
