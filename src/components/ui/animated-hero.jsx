import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WaitlistModal } from "@/components/ui/waitlist-modal";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => [
      "in 5 minutes.",
      "powered by AI.",
      "conversion-ready.",
      "with upsells built-in.",
      "with +30-50% AOV.",
      "without 12 apps.",
      "without a $250 theme.",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative min-h-[80vh] flex items-center justify-center">
      <BackgroundBeams />
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-8 lg:py-12 items-center justify-center flex-col">
          <div className="px-4">
            <WaitlistModal>
              <Button variant="secondary" size="sm" className="gap-2 text-xs md:text-sm md:gap-4">
                <span className="hidden md:inline">Early access is live · Limited seats this wave</span>
                <span className="md:hidden">Early access is live</span>
                <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </WaitlistModal>
          </div>

          <div className="flex gap-4 flex-col items-center w-full max-w-5xl">
            <h1 className="text-3xl md:text-7xl max-w-5xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Turn any product idea into a Shopify store that actually sells,</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-4xl text-center px-4">
              WeBuild is the AI copilot for dropshipping operators. Paste an AliExpress URL and get a branded store, AI product photos, built-in bundles, an upsell cart and a 24/7 chatbot. No theme to buy. No apps to glue together. No 48-hour weekend lost.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <WaitlistModal>
              <Button size="lg" className="gap-4">
                Claim your early access seat <MoveRight className="w-4 h-4" />
              </Button>
            </WaitlistModal>
            <p className="text-xs text-muted-foreground text-center px-4">
              Lock in founder pricing for life. This rate disappears at public launch.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero };
