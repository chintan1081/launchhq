import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Separator } from "@/components/ui/separator";
import { Twitter, Github, Linkedin } from "lucide-react";

function FooterSection1() {
  const links = {
    Product: ["Features", "Pricing", "Changelog", "Documentation"],
    Company: ["About", "Careers", "Blog", "Press"],
    Resources: ["Community", "Contact", "Support", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "License"],
  };

  return (
    <footer className="w-full border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xl mb-4">Logo</div>
            <p className="text-sm text-muted-foreground mb-4">
              Building the future of development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerFiles1: BlockFile[] = [
  {
    name: "footer.tsx",
    path: "components/blocks/footer.tsx",
    content: `import { Separator } from "@/components/ui/separator";
import { Twitter, Github, Linkedin } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Documentation"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Community", "Contact", "Support", "Status"],
  Legal: ["Privacy", "Terms", "Cookies", "License"],
};

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xl mb-4">Logo</div>
            <p className="text-sm text-muted-foreground mb-4">
              Building the future of development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`,
  },
];

export default function FooterBlockShowcase() {
  return (
    <BlockPage
      title="Footer"
      description="Website footer components."
    >
      <BlockPreview
        title="Footer 01 - Links Grid"
        description="Multi-column footer with links and social"
        files={footerFiles1}
        installCommand="npx shadcn add footer-01"
      >
        <FooterSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
