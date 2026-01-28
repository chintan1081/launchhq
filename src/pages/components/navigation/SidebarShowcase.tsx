import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Button } from "@/components/ui/button";
import { Home, Settings, Users, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SidebarShowcase() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Users", active: false },
    { icon: FileText, label: "Documents", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <ComponentPage
      title="Sidebar"
      description="A collapsible sidebar navigation component."
    >
      <ComponentPreview
        title="Basic Sidebar"
        description="Vertical navigation sidebar"
        code={`<aside className="w-64 border-r p-4">
  <nav className="space-y-2">
    <a className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10">
      <Home className="h-4 w-4" />
      Dashboard
    </a>
  </nav>
</aside>`}
      >
        <aside className="w-64 border rounded-lg p-4 bg-card">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </ComponentPreview>

      <ComponentPreview
        title="Collapsible Sidebar"
        description="Sidebar that can be collapsed to icons only"
        code={`const [collapsed, setCollapsed] = useState(false);

<aside className={cn("border-r transition-all", collapsed ? "w-16" : "w-64")}>
  <button onClick={() => setCollapsed(!collapsed)}>
    {collapsed ? <ChevronRight /> : <ChevronLeft />}
  </button>
  <nav>
    {items.map(item => (
      <a key={item.label}>
        <item.icon />
        {!collapsed && <span>{item.label}</span>}
      </a>
    ))}
  </nav>
</aside>`}
      >
        <aside
          className={cn(
            "border rounded-lg p-4 bg-card transition-all duration-300",
            collapsed ? "w-16" : "w-64"
          )}
        >
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </a>
            ))}
          </nav>
        </aside>
      </ComponentPreview>
    </ComponentPage>
  );
}
