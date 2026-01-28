import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

function CTASection1() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection2() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get early access
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be the first to know when we launch new features. No spam, just updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background"
              />
              <Button className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ctaFiles1: BlockFile[] = [
  {
    name: "cta-section.tsx",
    path: "components/blocks/cta-section.tsx",
    content: `import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

const ctaFiles2: BlockFile[] = [
  {
    name: "cta-newsletter.tsx",
    path: "components/blocks/cta-newsletter.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTANewsletter() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get early access
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be the first to know when we launch new features. No spam, just updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background"
              />
              <Button className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function CTABlockShowcase() {
  return (
    <BlockPage
      title="CTA Section"
      description="Call-to-action sections to convert your visitors."
    >
      <BlockPreview
        title="CTA 01 - Centered"
        description="Centered CTA with dual buttons"
        files={ctaFiles1}
        installCommand="npx shadcn add cta-01"
      >
        <CTASection1 />
      </BlockPreview>

      <BlockPreview
        title="CTA 02 - Newsletter"
        description="Email capture with card background"
        files={ctaFiles2}
        installCommand="npx shadcn add cta-02"
      >
        <CTASection2 />
      </BlockPreview>
    </BlockPage>
  );
}
