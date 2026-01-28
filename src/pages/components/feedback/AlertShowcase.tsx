import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

export default function AlertShowcase() {
  return (
    <ComponentPage
      title="Alert"
      description="Displays a callout for user attention."
    >
      <ComponentPreview
        title="Default Alert"
        description="Basic alert with title and description"
        code={`<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-lg">
          <Info className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </ComponentPreview>

      <ComponentPreview
        title="Alert Variants"
        description="Different alert styles for various contexts"
        code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>`}
      >
        <div className="space-y-4 max-w-lg">
          <Alert className="border-green-500/50 text-green-500 [&>svg]:text-green-500">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription className="text-green-500/80">
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-500/50 text-yellow-500 [&>svg]:text-yellow-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription className="text-yellow-500/80">
              Your session will expire in 5 minutes.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-500/50 text-blue-500 [&>svg]:text-blue-500">
            <Info className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription className="text-blue-500/80">
              A new software update is available.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Filled Alerts"
        description="Alerts with filled backgrounds"
        code={`<Alert className="bg-green-500/10 border-green-500/20">`}
      >
        <div className="space-y-4 max-w-lg">
          <Alert className="bg-green-500/10 border-green-500/20 text-green-500 [&>svg]:text-green-500">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription className="text-green-500/80">
              Operation completed successfully.
            </AlertDescription>
          </Alert>

          <Alert className="bg-destructive/10 border-destructive/20 text-destructive [&>svg]:text-destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription className="text-destructive/80">
              Failed to process your request.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
