import { Button } from "@/components/ui/button";
import { ChevronDown, MoveRight } from "lucide-react";
import { WaitlistModal } from "@/components/ui/waitlist-modal";
import { Link } from "react-router-dom";

function Header() {
  const freeToolsSections = [
    {
      title: "Growth",
      items: [{ label: "Growth Score", to: "/tools/growth-score" }],
    },
    {
      title: "Marketing",
      items: [
        { label: "Ad copy generator", to: "/tools/ad-copy-generator" },
        { label: "Discount copy generator", to: "/tools/discount-copy-generator" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "FAQ generator", to: "/tools/faq-generator" },
        { label: "Store policy generator", to: "/tools/store-policy-generator" },
      ],
    },
  ];

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Link to="/" aria-label="Webuild home">
                  <img 
                    src="/logo/logo.png" 
                    alt="Webuild" 
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-6">
            <Link to="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              What's inside
            </Link>

            <div className="relative group">
              <Link
                to="/tools"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-haspopup="menu"
                aria-label="Free operator tools"
              >
                Free tools <ChevronDown className="w-4 h-4 opacity-80" />
              </Link>

              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity"
                role="menu"
              >
                <div className="w-[640px] rounded-xl border border-border bg-background shadow-lg p-5">
                  <div className="grid grid-cols-3 gap-6">
                    {freeToolsSections.map((section) => (
                      <div key={section.title} className="min-w-0">
                        <div className="text-xs font-semibold tracking-wide text-foreground/80 uppercase mb-3">
                          {section.title}
                        </div>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                role="menuitem"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      Sharp little tools to help you move faster. Free. No signup.
                    </p>
                    <Link to="/tools" className="text-xs font-medium text-foreground hover:underline">
                      See all free tools
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Launch in 5 minutes
            </Link>
            <Link to="/#comparison" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              WeBuild vs. DIY stack
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <WaitlistModal>
              <Button size="sm" className="gap-2">
                Get early access <MoveRight className="w-4 h-4" />
              </Button>
            </WaitlistModal>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };

