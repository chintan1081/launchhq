import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  ChevronRight,
  Layout,
  Megaphone,
  Users,
  Lock,
  Settings,
  Sparkles,
  CreditCard,
  MessageSquare,
  Image,
  FileText,
  Mail,
  Menu,
  AlertTriangle,
  Cookie,
  Layers,
  Globe,
  Briefcase,
  HelpCircle,
  UserPlus,
  KeyRound,
  ShieldCheck,
  Smartphone,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const blockCategories = [
  {
    name: "Marketing",
    icon: Megaphone,
    slug: "marketing",
    blocks: [
      { name: "Hero Section", slug: "hero", icon: Sparkles },
      { name: "Features", slug: "features", icon: Layout },
      { name: "Pricing", slug: "pricing", icon: CreditCard },
      { name: "Testimonials", slug: "testimonials", icon: MessageSquare },
      { name: "Social Proof", slug: "social-proof", icon: Users },
      { name: "CTA Section", slug: "cta", icon: Megaphone },
      { name: "Logo Cloud", slug: "logo-cloud", icon: Globe },
      { name: "FAQ", slug: "faq", icon: HelpCircle },
    ],
  },
  {
    name: "Pages",
    icon: FileText,
    slug: "pages",
    blocks: [
      { name: "About Us", slug: "about", icon: FileText },
      { name: "Contact Us", slug: "contact", icon: Mail },
      { name: "Portfolio", slug: "portfolio", icon: Briefcase },
      { name: "Team", slug: "team", icon: Users },
      { name: "Gallery", slug: "gallery", icon: Image },
    ],
  },
  {
    name: "Authentication",
    icon: Lock,
    slug: "auth",
    blocks: [
      { name: "Login", slug: "login", icon: LogIn },
      { name: "Register", slug: "register", icon: UserPlus },
      { name: "Forgot Password", slug: "forgot-password", icon: KeyRound },
      { name: "Reset Password", slug: "reset-password", icon: KeyRound },
      { name: "Verify Email", slug: "verify-email", icon: Mail },
      { name: "Two Factor Auth", slug: "two-factor", icon: ShieldCheck },
    ],
  },
  {
    name: "Utilities",
    icon: Settings,
    slug: "utilities",
    blocks: [
      { name: "Navbar", slug: "navbar", icon: Menu },
      { name: "Footer", slug: "footer", icon: Layers },
      { name: "Error Page", slug: "error", icon: AlertTriangle },
      { name: "Cookies Consent", slug: "cookies", icon: Cookie },
      { name: "App Integration", slug: "integration", icon: Smartphone },
      { name: "Compare", slug: "compare", icon: Layers },
    ],
  },
];

interface BlockSidebarProps {
  className?: string;
}

function SidebarContent() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    blockCategories.map((c) => c.slug)
  );

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const filteredCategories = blockCategories
    .map((category) => ({
      ...category,
      blocks: category.blocks.filter((block) =>
        block.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.blocks.length > 0);

  return (
    <div className="flex h-full flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search blocks..."
            className="pl-9 bg-muted/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 pb-4">
          {filteredCategories.map((category) => (
            <div key={category.slug}>
              <button
                onClick={() => toggleCategory(category.slug)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform",
                    expandedCategories.includes(category.slug) && "rotate-90"
                  )}
                />
              </button>

              {expandedCategories.includes(category.slug) && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.blocks.map((block) => {
                    const href = `/blocks/${category.slug}/${block.slug}`;
                    const isActive = location.pathname === href;

                    return (
                      <Link
                        key={block.slug}
                        to={href}
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <block.icon className="h-4 w-4" />
                        {block.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function BlockSidebar({ className }: BlockSidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex w-64 flex-col border-r border-border/40 bg-card/50",
          className
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
