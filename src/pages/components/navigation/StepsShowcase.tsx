import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Account", status: "complete" },
  { id: 2, name: "Profile", status: "current" },
  { id: 3, name: "Review", status: "upcoming" },
  { id: 4, name: "Complete", status: "upcoming" },
];

export default function StepsShowcase() {
  return (
    <ComponentPage
      title="Steps"
      description="A component for showing progress through a sequence of steps."
    >
      <ComponentPreview
        title="Horizontal Steps"
        description="Step indicator in horizontal layout"
        code={`<div className="flex items-center">
  {steps.map((step, index) => (
    <div key={step.id} className="flex items-center">
      <div className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full",
        step.status === "complete" && "bg-primary text-white",
        step.status === "current" && "border-2 border-primary text-primary",
        step.status === "upcoming" && "border-2 border-muted text-muted-foreground"
      )}>
        {step.status === "complete" ? <Check /> : step.id}
      </div>
      {index < steps.length - 1 && <div className="w-12 h-0.5 bg-muted" />}
    </div>
  ))}
</div>`}
      >
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full font-medium transition-colors",
                    step.status === "complete" && "gradient-primary text-white",
                    step.status === "current" && "border-2 border-primary text-primary",
                    step.status === "upcoming" && "border-2 border-muted text-muted-foreground"
                  )}
                >
                  {step.status === "complete" ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-sm",
                    step.status === "current" ? "font-medium text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-16 h-0.5 mx-2",
                    step.status === "complete" ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Vertical Steps"
        description="Step indicator in vertical layout"
        code={`<div className="flex flex-col">
  {steps.map((step, index) => (
    <div key={step.id} className="flex">
      <div className="flex flex-col items-center">
        <div className="rounded-full h-10 w-10">...</div>
        {index < steps.length - 1 && <div className="w-0.5 h-8 bg-muted" />}
      </div>
      <div className="ml-4">
        <p className="font-medium">{step.name}</p>
      </div>
    </div>
  ))}
</div>`}
      >
        <div className="flex flex-col max-w-md">
          {steps.map((step, index) => (
            <div key={step.id} className="flex">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full font-medium",
                    step.status === "complete" && "gradient-primary text-white",
                    step.status === "current" && "border-2 border-primary text-primary",
                    step.status === "upcoming" && "border-2 border-muted text-muted-foreground"
                  )}
                >
                  {step.status === "complete" ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-0.5 h-12",
                      step.status === "complete" ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
              <div className="ml-4 pb-12">
                <p
                  className={cn(
                    "font-medium",
                    step.status === "upcoming" && "text-muted-foreground"
                  )}
                >
                  {step.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {step.status === "complete" && "Completed"}
                  {step.status === "current" && "In progress"}
                  {step.status === "upcoming" && "Not started"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
