import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function NavbarSection1() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-bold text-xl">Logo</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
          
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Products</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <div className="flex gap-2 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
                <Button size="sm" className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const navbarFiles1: BlockFile[] = [
  {
    name: "navbar.tsx",
    path: "components/blocks/navbar.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-bold text-xl">Logo</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
          
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Products</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <div className="flex gap-2 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
                <Button size="sm" className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}`,
  },
];

export default function NavbarBlockShowcase() {
  return (
    <BlockPage
      title="Navbar"
      description="Navigation bar components."
    >
      <BlockPreview
        title="Navbar 01 - Simple"
        description="Responsive navbar with mobile menu"
        files={navbarFiles1}
        installCommand="npx shadcn add navbar-01"
      >
        <NavbarSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
