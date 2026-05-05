import React from 'react';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaitlistModal } from '@/components/ui/waitlist-modal';
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo/logo.png" 
                alt="Webuild" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              The AI copilot for dropshipping operators. Build, test and scale Shopify stores without the apps, the theme or the lost weekend.
            </p>
            <WaitlistModal>
              <Button variant="outline" size="sm" className="gap-2">
                Get early access <MoveRight className="w-4 h-4" />
              </Button>
            </WaitlistModal>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  What's inside
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Free tools
                </Link>
              </li>
              <li>
                <Link to="/#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Launch in 5 minutes
                </Link>
              </li>
              <li>
                <Link to="/#comparison" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  WeBuild vs. DIY stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/getwebuild" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:hello@getwebuildai.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@getwebuildai.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  -
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Webuild. All rights reserved.
          </p>
          <div className="flex gap-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Legal Notice
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Legal Notice</AlertDialogTitle>
                  <AlertDialogDescription className="text-left space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Publisher</h4>
                      <p className="text-sm">The website webuild.com is published by Webuild, a company in the process of incorporation.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Hosting</h4>
                      <p className="text-sm">The site is hosted by our secure cloud services.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Intellectual Property</h4>
                      <p className="text-sm">All site content (text, images, videos, logos) is protected by copyright and belongs to Webuild or its partners.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Liability</h4>
                      <p className="text-sm">Webuild cannot be held liable for direct or indirect damage resulting from the use of the site.</p>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Terms
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Terms of Use</AlertDialogTitle>
                  <AlertDialogDescription className="text-left space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Acceptance of Terms</h4>
                      <p className="text-sm">Use of Webuild implies full and complete acceptance of these terms of use.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Service</h4>
                      <p className="text-sm">Webuild is a SaaS platform for creating and optimizing Shopify stores using artificial intelligence.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. User Obligations</h4>
                      <p className="text-sm">The user agrees to use the service in accordance with its purpose and not to infringe on the rights of third parties.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Availability</h4>
                      <p className="text-sm">Webuild strives to ensure service availability 24/7, but cannot guarantee absolute availability due to technical constraints.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">5. Modification of Terms</h4>
                      <p className="text-sm">Webuild reserves the right to modify these terms at any time. Modifications take effect upon publication.</p>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
