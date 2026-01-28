import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Loader2 } from "lucide-react";

export default function SpinnerShowcase() {
  return (
    <ComponentPage
      title="Spinner"
      description="Loading indicators for asynchronous operations."
    >
      <ComponentPreview
        title="Basic Spinner"
        description="Simple loading spinner"
        code={`<Loader2 className="h-6 w-6 animate-spin" />`}
      >
        <div className="flex gap-8 items-center">
          <Loader2 className="h-6 w-6 animate-spin" />
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <Loader2 className="h-10 w-10 animate-spin text-secondary" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Spinner Sizes"
        description="Different spinner sizes"
        code={`<Loader2 className="h-4 w-4 animate-spin" />
<Loader2 className="h-6 w-6 animate-spin" />
<Loader2 className="h-8 w-8 animate-spin" />
<Loader2 className="h-12 w-12 animate-spin" />`}
      >
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-12 w-12 animate-spin" />
            <span className="text-xs text-muted-foreground">XLarge</span>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Custom Spinners"
        description="Different spinner styles"
        code={`<div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />`}
      >
        <div className="flex gap-8 items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-secondary" />
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-accent" />
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
            <div className="absolute inset-2 rounded-full bg-primary" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading States"
        description="Spinners with loading text"
        code={`<div className="flex items-center gap-2">
  <Loader2 className="h-4 w-4 animate-spin" />
  <span>Loading...</span>
</div>`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Loading...</span>
          </div>
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-sm text-primary">Saving changes...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-foreground" />
            <span className="text-sm">Processing...</span>
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
