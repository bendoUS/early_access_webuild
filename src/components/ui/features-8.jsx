import { Card, CardContent } from '@/components/ui/card'

export function Features() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-8">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-foreground">
            Nos fonctionnalités
          </h2>
          <p className="text-muted-foreground">
            Tout ce dont vous avez besoin pour créer et optimiser votre boutique Shopify
          </p>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            {/* Card 1: Générateur de boutique IA */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-3">
              <CardContent className="relative m-auto size-fit pt-6 w-full">
                <div className="relative flex h-48 w-full items-center justify-center mb-6 rounded-lg overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
                    alt="Générateur de boutique IA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold text-foreground">Générateur de boutique IA</h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Choisissez jusqu'à 20 produits et créez une boutique complète en quelques minutes avec l'intelligence artificielle.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Image Produit IA */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-3">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square w-full items-center justify-center mb-6 rounded-lg overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=400&fit=crop" 
                    alt="Image Produit IA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-foreground">Image Produit IA</h2>
                  <p className="text-muted-foreground">
                    Photos produit générées par IA pour augmenter la qualité et les ventes de votre boutique.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Bundles */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square w-full items-center justify-center mb-6 rounded-lg overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop" 
                    alt="Bundles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-foreground">Bundles</h2>
                  <p className="text-muted-foreground">
                    Créez des bundles de produits intelligents pour augmenter la valeur moyenne de vos commandes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Panier optimisé upselle */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square w-full items-center justify-center mb-6 rounded-lg overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1555529669-2269763671c0?w=400&h=400&fit=crop" 
                    alt="Panier optimisé upselle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-foreground">Panier optimisé upselle</h2>
                  <p className="text-muted-foreground">
                    Ajoutez des upsells stratégiques au panier et une assurance livraison pour maximiser vos revenus.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Chatbot IA */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-2">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-6">
                  <div className="relative mx-auto flex aspect-square w-full items-center justify-center rounded-lg overflow-hidden bg-muted mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1531746790731-6c085f6603ec?w=300&h=300&fit=crop" 
                      alt="Chatbot IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-foreground">Chatbot IA</h2>
                    <p className="text-muted-foreground">
                      Assistez vos clients 24/7 avec un chatbot intelligent qui répond à leurs questions et booste vos conversions.
                    </p>
                  </div>
                </div>
                <div className="rounded-tl-lg relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6 flex items-center justify-center">
                  <div className="relative w-full h-full aspect-square rounded-lg overflow-hidden bg-muted">
                    <img 
                      src="https://images.unsplash.com/photo-1531746790731-6c085f6603ec?w=300&h=300&fit=crop" 
                      alt="Chatbot IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
