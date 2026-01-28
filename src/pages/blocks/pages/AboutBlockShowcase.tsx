import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";

function AboutSection1() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're building the future of development
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, we set out to create tools that empower developers to build faster and ship with confidence. Today, we serve thousands of teams worldwide.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is simple: remove the barriers between ideas and production. We believe every developer deserves access to world-class infrastructure without the complexity.
            </p>
            <Button size="lg">Join Our Team</Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted border border-border/50 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Team Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection2() {
  const values = [
    { title: "Innovation First", description: "We push boundaries and challenge the status quo." },
    { title: "User Obsessed", description: "Every decision starts with our users in mind." },
    { title: "Ship Fast", description: "We move quickly and iterate based on feedback." },
    { title: "Stay Humble", description: "We're always learning and improving." },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const aboutFiles1: BlockFile[] = [
  {
    name: "about-hero.tsx",
    path: "components/blocks/about-hero.tsx",
    content: `import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're building the future of development
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, we set out to create tools that empower developers to build faster and ship with confidence. Today, we serve thousands of teams worldwide.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is simple: remove the barriers between ideas and production. We believe every developer deserves access to world-class infrastructure without the complexity.
            </p>
            <Button size="lg">Join Our Team</Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted border border-border/50 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Team Photo
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

const aboutFiles2: BlockFile[] = [
  {
    name: "about-values.tsx",
    path: "components/blocks/about-values.tsx",
    content: `const values = [
  { title: "Innovation First", description: "We push boundaries and challenge the status quo." },
  { title: "User Obsessed", description: "Every decision starts with our users in mind." },
  { title: "Ship Fast", description: "We move quickly and iterate based on feedback." },
  { title: "Stay Humble", description: "We're always learning and improving." },
];

export function AboutValues() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function AboutBlockShowcase() {
  return (
    <BlockPage
      title="About Us"
      description="About page sections to tell your company story."
    >
      <BlockPreview
        title="About 01 - Hero"
        description="Split layout with content and image"
        files={aboutFiles1}
        installCommand="npx shadcn add about-01"
      >
        <AboutSection1 />
      </BlockPreview>

      <BlockPreview
        title="About 02 - Values"
        description="Company values grid section"
        files={aboutFiles2}
        installCommand="npx shadcn add about-02"
      >
        <AboutSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
