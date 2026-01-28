import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export default function BadgeShowcase() {
  return (
    <ComponentPage
      title="Badge"
      description="Small status descriptors for UI elements."
    >
      <ComponentPreview
        title="Badge Variants"
        description="Different badge styles for various contexts"
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Gradient Badges"
        description="Custom gradient badges for emphasis"
        code={`<Badge className="gradient-primary text-white">Primary</Badge>
<Badge className="gradient-accent">Accent</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge className="gradient-primary text-white border-0">Premium</Badge>
          <Badge className="gradient-accent text-foreground border-0">New</Badge>
          <Badge className="gradient-coral text-white border-0">Hot</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Status Badges"
        description="Badges for showing status indicators"
        code={`<Badge className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
<Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Pending</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
            Active
          </Badge>
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20">
            Pending
          </Badge>
          <Badge className="bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20">
            Inactive
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20">
            In Progress
          </Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Dismissible Badges"
        description="Badges with close button for tag-like behavior"
        code={`<Badge className="pr-1">
  Tag
  <button className="ml-1 hover:bg-muted rounded-full p-0.5">
    <X className="h-3 w-3" />
  </button>
</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Tailwind", "Next.js"].map((tag) => (
            <Badge key={tag} variant="secondary" className="pr-1">
              {tag}
              <button className="ml-1 hover:bg-muted rounded-full p-0.5">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
