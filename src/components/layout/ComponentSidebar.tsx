import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  FormInput,
  LayoutGrid,
  Navigation,
  Bell,
  ChevronRight,
  TextCursorInput,
  SquareCheck,
  ToggleLeft,
  Calendar,
  Upload,
  Sliders,
  KeyRound,
  Table2,
  BarChart3,
  Badge,
  Users,
  Loader2,
  MessageSquare,
  AlertCircle,
  Layers,
  Menu,
  Footprints,
  ListOrdered,
  PanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const componentCategories = [
  {
    name: "Form Components",
    icon: FormInput,
    slug: "forms",
    components: [
      { name: "Text Input", slug: "text-input", icon: TextCursorInput },
      { name: "Textarea", slug: "textarea", icon: FormInput },
      { name: "Select", slug: "select", icon: LayoutGrid },
      { name: "Checkbox", slug: "checkbox", icon: SquareCheck },
      { name: "Radio Group", slug: "radio-group", icon: SquareCheck },
      { name: "Switch", slug: "switch", icon: ToggleLeft },
      { name: "Date Picker", slug: "date-picker", icon: Calendar },
      { name: "File Upload", slug: "file-upload", icon: Upload },
      { name: "Slider", slug: "slider", icon: Sliders },
      { name: "OTP Input", slug: "otp-input", icon: KeyRound },
    ],
  },
  {
    name: "Data Display",
    icon: LayoutGrid,
    slug: "data-display",
    components: [
      { name: "Card", slug: "card", icon: Layers },
      { name: "Table", slug: "table", icon: Table2 },
      { name: "Data Grid", slug: "data-grid", icon: LayoutGrid },
      { name: "Stats Card", slug: "stats-card", icon: BarChart3 },
      { name: "Badge", slug: "badge", icon: Badge },
      { name: "Avatar", slug: "avatar", icon: Users },
      { name: "Progress", slug: "progress", icon: Loader2 },
      { name: "Charts", slug: "charts", icon: BarChart3 },
    ],
  },
  {
    name: "Navigation",
    icon: Navigation,
    slug: "navigation",
    components: [
      { name: "Navbar", slug: "navbar", icon: Menu },
      { name: "Sidebar", slug: "sidebar", icon: PanelLeft },
      { name: "Tabs", slug: "tabs", icon: LayoutGrid },
      { name: "Breadcrumbs", slug: "breadcrumbs", icon: Footprints },
      { name: "Pagination", slug: "pagination", icon: ListOrdered },
      { name: "Steps", slug: "steps", icon: ListOrdered },
      { name: "Nav Menu", slug: "nav-menu", icon: Menu },
    ],
  },
  {
    name: "Feedback",
    icon: Bell,
    slug: "feedback",
    components: [
      { name: "Toast", slug: "toast", icon: MessageSquare },
      { name: "Alert", slug: "alert", icon: AlertCircle },
      { name: "Dialog", slug: "dialog", icon: Layers },
      { name: "Sheet", slug: "sheet", icon: PanelLeft },
      { name: "Tooltip", slug: "tooltip", icon: MessageSquare },
      { name: "Popover", slug: "popover", icon: Layers },
      { name: "Spinner", slug: "spinner", icon: Loader2 },
      { name: "Skeleton", slug: "skeleton", icon: Layers },
      { name: "Alert Dialog", slug: "alert-dialog", icon: AlertCircle },
      { name: "Hover Card", slug: "hover-card", icon: Layers },
    ],
  },
];

interface ComponentSidebarProps {
  className?: string;
}

function SidebarContent() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    componentCategories.map((c) => c.slug)
  );

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const filteredCategories = componentCategories
    .map((category) => ({
      ...category,
      components: category.components.filter((component) =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.components.length > 0);

  return (
    <div className="flex h-full flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search components..."
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
                  {category.components.map((component) => {
                    const href = `/components/${category.slug}/${component.slug}`;
                    const isActive = location.pathname === href;

                    return (
                      <Link
                        key={component.slug}
                        to={href}
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <component.icon className="h-4 w-4" />
                        {component.name}
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

export function ComponentSidebar({ className }: ComponentSidebarProps) {
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
            className="lg:hidden fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full gradient-primary text-white shadow-lg"
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

export { componentCategories };
