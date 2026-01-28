import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Zap, Shield, Globe, Layers, Code, Sparkles } from "lucide-react";

function FeaturesSection1() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with edge computing and smart caching strategies.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security with end-to-end encryption.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with automatic scaling and load balancing.",
    },
    {
      icon: Layers,
      title: "Modular Design",
      description: "Composable architecture that grows with your needs.",
    },
    {
      icon: Code,
      title: "Developer First",
      description: "APIs and SDKs designed for exceptional developer experience.",
    },
    {
      icon: Sparkles,
      title: "AI Powered",
      description: "Smart automation and insights powered by machine learning.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete toolkit designed to help you build, deploy, and scale your applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection2() {
  const features = [
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Push your code and watch it go live in seconds, not minutes.",
    },
    {
      icon: Shield,
      title: "Built-in Security",
      description: "SSL, DDoS protection, and security headers out of the box.",
    },
    {
      icon: Globe,
      title: "Edge Network",
      description: "Content delivered from the edge location closest to your users.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for modern teams
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've thought through every detail to make your development workflow seamless.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted border border-border/50 overflow-hidden">
              <div className="h-8 bg-muted border-b border-border/50 flex items-center px-4 gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="h-4 bg-foreground/10 rounded w-3/4" />
                  <div className="h-4 bg-foreground/10 rounded w-1/2" />
                  <div className="h-4 bg-foreground/10 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const featuresFiles1: BlockFile[] = [
  {
    name: "features-section.tsx",
    path: "components/blocks/features-section.tsx",
    content: `import { Zap, Shield, Globe, Layers, Code, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with edge computing and smart caching strategies.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with end-to-end encryption.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with automatic scaling and load balancing.",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Composable architecture that grows with your needs.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "APIs and SDKs designed for exceptional developer experience.",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description: "Smart automation and insights powered by machine learning.",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete toolkit designed to help you build, deploy, and scale your applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

const featuresFiles2: BlockFile[] = [
  {
    name: "features-section-2.tsx",
    path: "components/blocks/features-section-2.tsx",
    content: `import { Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Push your code and watch it go live in seconds, not minutes.",
  },
  {
    icon: Shield,
    title: "Built-in Security",
    description: "SSL, DDoS protection, and security headers out of the box.",
  },
  {
    icon: Globe,
    title: "Edge Network",
    description: "Content delivered from the edge location closest to your users.",
  },
];

export function FeaturesSection2() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for modern teams
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've thought through every detail to make your development workflow seamless.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted border border-border/50 overflow-hidden">
              <div className="h-8 bg-muted border-b border-border/50 flex items-center px-4 gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="h-4 bg-foreground/10 rounded w-3/4" />
                  <div className="h-4 bg-foreground/10 rounded w-1/2" />
                  <div className="h-4 bg-foreground/10 rounded w-5/6" />
                </div>
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

export default function FeaturesBlockShowcase() {
  return (
    <BlockPage
      title="Features Section"
      description="Showcase your product features with these versatile layouts."
    >
      <BlockPreview
        title="Features 01 - Grid"
        description="Six-column feature grid with icons and descriptions"
        files={featuresFiles1}
        installCommand="npx shadcn add features-01"
      >
        <FeaturesSection1 />
      </BlockPreview>

      <BlockPreview
        title="Features 02 - Split"
        description="Two-column layout with stacked features and visual"
        files={featuresFiles2}
        installCommand="npx shadcn add features-02"
      >
        <FeaturesSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
