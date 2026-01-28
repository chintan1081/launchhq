import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonShowcase() {
  return (
    <ComponentPage
      title="Skeleton"
      description="A placeholder preview of your content before the data gets loaded."
    >
      <ComponentPreview
        title="Basic Skeleton"
        description="Simple skeleton shapes"
        code={`<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-12 w-12 rounded-full" />`}
      >
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Card Skeleton"
        description="Skeleton for card content"
        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Content Skeleton"
        description="Skeleton for article or blog content"
        code={`<div className="space-y-4">
  <Skeleton className="h-[200px] w-full" />
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-2/3" />
</div>`}
      >
        <div className="space-y-4 max-w-md">
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <Skeleton className="h-6 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Table Skeleton"
        description="Skeleton for table rows"
        code={`{[1, 2, 3].map((i) => (
  <div key={i} className="flex gap-4">
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
))}`}
      >
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          ))}
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
