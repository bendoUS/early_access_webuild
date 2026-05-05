import React from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { trackCTA, trackWaitlistSubmit } from '@/utils/analytics';

const DOMAIN_RE = /^(?=.{4,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;

// Strip protocol, leading @, paths, query, trailing slash. Lowercase.
function normalizeStoreUrl(raw) {
  return raw
    .trim()
    .replace(/^@/, '')
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .split(/[\/?#]/)[0]
    .toLowerCase();
}

function isValidDomain(host) {
  return DOMAIN_RE.test(host);
}

export function WaitlistModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    shopifyUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  // Configuration Google Sheets - URL du script Google Apps Script
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Réinitialiser l'erreur quand l'utilisateur modifie le formulaire
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Configuration Google Sheets manquante. Vérifiez vos variables d\'environnement.');
      setError('Configuration manquante. Veuillez contacter le support.');
      setIsSubmitting(false);
      return;
    }

    const normalizedStore = normalizeStoreUrl(formData.shopifyUrl);
    if (!isValidDomain(normalizedStore)) {
      setError('Enter a valid store URL (e.g. yourstore.myshopify.com or yourbrand.com).');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        shopifyUrl: normalizedStore,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      trackWaitlistSubmit({
        shopifyUrl: normalizedStore,
        email: formData.email,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setOpen(false);
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          shopifyUrl: '',
        });
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      setError('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
    if (isOpen) {
      trackCTA('waitlist_modal_open');
    }
  };

  return (
    <Modal open={open} onOpenChange={handleOpenChange}>
      <ModalTrigger asChild onClick={() => trackCTA('waitlist_button_click')}>
        {children}
      </ModalTrigger>
      <ModalContent className="md:max-w-md">
        <ModalHeader className="items-center py-10">
          <Mail className="size-9 text-primary" />
          <div className="flex flex-col items-center space-y-1">
            <ModalTitle className="text-2xl font-semibold">
              Get early access
            </ModalTitle>
            <ModalDescription className="text-muted-foreground text-center text-sm">
              Reserved for active Shopify operators. Lock founder pricing for life. Gone at public launch.
            </ModalDescription>
          </div>
        </ModalHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <ModalBody className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="shopifyUrl">Your Shopify store URL</Label>
                <Input
                  id="shopifyUrl"
                  type="text"
                  placeholder="yourstore.myshopify.com"
                  value={formData.shopifyUrl}
                  onChange={(e) => handleChange('shopifyUrl', e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Claim my early access seat'}
              </Button>
            </ModalFooter>
          </form>
        ) : (
          <ModalBody className="space-y-6">
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="size-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">You're in.</h3>
                <p className="text-sm text-muted-foreground">
                  Welcome to WeBuild early access. Watch your inbox. Your access link is on the way.
                </p>
              </div>
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
