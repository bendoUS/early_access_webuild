import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Step 1",
    content: (
      <div>
        <p className="text-foreground text-base md:text-lg font-normal mb-6">
          Find a winning product on AliExpress and copy the product URL.
        </p>
        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4">
          <img
            src="/images/ali1.png"
            alt="AliExpress Product"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-72 w-full shadow-lg relative z-10"
          />
          <img
            src="/images/ali2.png"
            alt="Product URL"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-72 w-full shadow-lg relative md:relative -mt-2 md:mt-0 z-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <p className="text-foreground text-base md:text-lg font-normal mb-6">
          Paste the URL into WeBuild. We auto-pull title, photos, variants and pricing. Cleaned up and ready to brand.
        </p>
        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4">
          <img
            src="/images/webuild_url1.png"
            alt="Webuild Interface"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-72 w-full shadow-lg relative z-10"
          />
          <div className="hidden md:block"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <p className="text-foreground text-base md:text-lg font-normal mb-6">
          Our AI builds your full store in 2 minutes: branded design, copy, AI product photos, upsells, cart and chatbot. All wired to convert from click one.
        </p>
        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4">
          <img
            src="/images/webuild_url2.png"
            alt="AI Creation"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-72 w-full shadow-lg relative z-10"
          />
          <img
            src="/images/site.png"
            alt="Generated Store"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-72 w-full shadow-lg relative md:relative -mt-2 md:mt-0 z-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Step 4",
    content: (
      <div>
        <p className="text-foreground text-base md:text-lg font-normal mb-6">
          Push traffic. Your store is live, optimized and ready to print revenue from day one. Test winners faster than your competitors can launch one.
        </p>
        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4">
          <img
            src="/images/dash1.png"
            alt="Ready Store"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-64 w-full shadow-lg relative z-10"
          />
          <img
            src="/images/dash2.png"
            alt="Sales"
            className="rounded-lg object-cover h-40 md:h-56 lg:h-64 w-full shadow-lg relative md:relative -mt-2 md:mt-0 z-0"
          />
        </div>
      </div>
    ),
  },
];

function TimelineSection() {
  return (
    <section id="roadmap" className="w-full bg-background">
      <Timeline data={timelineData} />
    </section>
  );
}

export { TimelineSection };
