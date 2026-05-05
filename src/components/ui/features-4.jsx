import { Calendar, DollarSign, Snowflake, XCircle } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Des semaines à tout préparer",
      description: "La création d'une boutique prend des semaines, voire des mois. Vous perdez du temps précieux.",
    },
    {
      icon: DollarSign,
      title: "Budget qui explose (2000€+)",
      description: "Développeurs, designers, intégrations... Les coûts s'accumulent rapidement sans garantie de résultat.",
    },
    {
      icon: Snowflake,
      title: "Votre idée refroidit",
      description: "Plus le temps passe, plus votre motivation diminue. Votre projet perd de son élan initial.",
    },
    {
      icon: XCircle,
      title: "Premier test raté",
      description: "Votre première version est souvent décevante. Il faut repartir de zéro ou accepter un compromis.",
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-foreground">
            Vous perdez du temps et des opportunités
          </h2>
          <p className="text-muted-foreground">
            Chaque jour qui passe = chance en moins
          </p>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-4 border-border">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-primary" />
                  <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



