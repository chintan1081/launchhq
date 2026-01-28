import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";

function LogoCloudSection1() {
  const logos = ["Vercel", "Stripe", "GitHub", "Notion", "Linear", "Figma"];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCloudSection2() {
  const logos = ["Acme Inc", "TechCorp", "Innovate", "DevFlow", "CloudBase", "DataSync"];

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold mb-2">Backed by the best</h3>
          <p className="text-muted-foreground">
            Join 500+ companies already using our platform
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 rounded-lg border border-border/50 bg-background text-muted-foreground font-medium hover:border-border transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logoFiles1: BlockFile[] = [
  {
    name: "logo-cloud.tsx",
    path: "components/blocks/logo-cloud.tsx",
    content: `const logos = ["Vercel", "Stripe", "GitHub", "Notion", "Linear", "Figma"];

export function LogoCloud() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

const logoFiles2: BlockFile[] = [
  {
    name: "logo-cloud-grid.tsx",
    path: "components/blocks/logo-cloud-grid.tsx",
    content: `const logos = ["Acme Inc", "TechCorp", "Innovate", "DevFlow", "CloudBase", "DataSync"];

export function LogoCloudGrid() {
  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold mb-2">Backed by the best</h3>
          <p className="text-muted-foreground">
            Join 500+ companies already using our platform
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 rounded-lg border border-border/50 bg-background text-muted-foreground font-medium hover:border-border transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function LogoCloudBlockShowcase() {
  return (
    <BlockPage
      title="Logo Cloud"
      description="Display partner and client logos to build trust."
    >
      <BlockPreview
        title="Logo Cloud 01 - Simple"
        description="Inline logo display with hover effects"
        files={logoFiles1}
        installCommand="npx shadcn add logo-cloud-01"
      >
        <LogoCloudSection1 />
      </BlockPreview>

      <BlockPreview
        title="Logo Cloud 02 - Grid"
        description="Logo grid with card containers"
        files={logoFiles2}
        installCommand="npx shadcn add logo-cloud-02"
      >
        <LogoCloudSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
