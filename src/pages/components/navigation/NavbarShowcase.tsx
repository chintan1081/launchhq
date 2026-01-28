import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, Bell, User, Sparkles } from "lucide-react";

export default function NavbarShowcase() {
  return (
    <ComponentPage
      title="Navbar"
      description="A responsive navigation header component."
    >
      <ComponentPreview
        title="Basic Navbar"
        description="Simple navbar with logo and navigation links"
        code={`<nav className="flex items-center justify-between px-6 py-4 border-b">
  <div className="flex items-center gap-2">
    <Sparkles className="h-6 w-6" />
    <span className="font-bold">Brand</span>
  </div>
  <div className="flex gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`}
      >
        <nav className="flex items-center justify-between px-6 py-4 border rounded-lg bg-card">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">Brand</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </ComponentPreview>

      <ComponentPreview
        title="Navbar with Search"
        description="Navbar with search input and action buttons"
        code={`<nav className="flex items-center justify-between">
  <span className="font-bold">Brand</span>
  <Input placeholder="Search..." className="max-w-sm" />
  <div className="flex gap-2">
    <Button size="icon"><Bell /></Button>
    <Button size="icon"><User /></Button>
  </div>
</nav>`}
      >
        <nav className="flex items-center justify-between px-6 py-4 border rounded-lg bg-card gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold hidden sm:block">Brand</span>
          </div>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </ComponentPreview>

      <ComponentPreview
        title="Glass Navbar"
        description="Transparent navbar with glass effect"
        code={`<nav className="glass border-border/50">`}
      >
        <nav className="flex items-center justify-between px-6 py-4 rounded-lg glass border-border/50">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">Brand</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          </div>
          <Button className="gradient-primary text-white">Get Started</Button>
        </nav>
      </ComponentPreview>
    </ComponentPage>
  );
}
