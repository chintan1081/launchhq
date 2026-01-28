import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Hero Section 1 - Centered with Badge
function HeroSection1() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM ONLINE • V2.4.0
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            The operating system for{" "}
            <span className="text-muted-foreground/50">planetary preservation.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            We decode bio-acoustic signals using proprietary neural networks to map,
            monitor, and protect ecosystem biodiversity in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Start Monitoring
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Read the Manifesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Section 2 - Left aligned with image
function HeroSection2() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm w-fit">
              <Sparkles className="h-4 w-4 text-accent" />
              New: AI-Powered Analytics
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Build faster,
              <br />
              ship smarter.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              The all-in-one platform for modern development teams. 
              Streamline your workflow and deliver exceptional products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg">Get Started Free</Button>
              <Button size="lg" variant="ghost">
                View Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-background/50 border border-border/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroFiles1: BlockFile[] = [
  {
    name: "hero-section.tsx",
    path: "components/blocks/hero-section.tsx",
    content: `import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM ONLINE • V2.4.0
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            The operating system for{" "}
            <span className="text-muted-foreground/50">planetary preservation.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            We decode bio-acoustic signals using proprietary neural networks to map,
            monitor, and protect ecosystem biodiversity in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Start Monitoring
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Read the Manifesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
  {
    name: "page.tsx",
    path: "app/hero/page.tsx",
    content: `import { HeroSection } from "@/components/blocks/hero-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}`,
  },
];

const heroFiles2: BlockFile[] = [
  {
    name: "hero-section-2.tsx",
    path: "components/blocks/hero-section-2.tsx",
    content: `import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection2() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm w-fit">
              <Sparkles className="h-4 w-4 text-accent" />
              New: AI-Powered Analytics
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Build faster,
              <br />
              ship smarter.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              The all-in-one platform for modern development teams. 
              Streamline your workflow and deliver exceptional products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg">Get Started Free</Button>
              <Button size="lg" variant="ghost">
                View Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-background/50 border border-border/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function HeroBlockShowcase() {
  return (
    <BlockPage
      title="Hero Section"
      description="Eye-catching hero sections for landing pages."
    >
      <BlockPreview
        title="Hero 01 - Centered"
        description="Clean centered hero with status badge and dual CTA buttons"
        files={heroFiles1}
        installCommand="npx shadcn add hero-section-01"
      >
        <HeroSection1 />
      </BlockPreview>

      <BlockPreview
        title="Hero 02 - Split Layout"
        description="Two-column hero with content on left and visual on right"
        files={heroFiles2}
        installCommand="npx shadcn add hero-section-02"
      >
        <HeroSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
