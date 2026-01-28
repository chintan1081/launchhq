import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";

export default function ToastShowcase() {
  const { toast } = useToast();

  return (
    <ComponentPage
      title="Toast"
      description="A succinct message that is displayed temporarily."
    >
      <ComponentPreview
        title="Basic Toasts"
        description="Simple toast notifications"
        code={`const { toast } = useToast();

toast({
  title: "Success",
  description: "Your changes have been saved.",
});`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Notification",
                description: "This is a default toast message.",
              })
            }
          >
            Show Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Success!",
                description: "Your changes have been saved successfully.",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again.",
              })
            }
          >
            Error Toast
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sonner Toasts"
        description="Alternative toast using Sonner library"
        code={`import { toast } from "sonner";

toast.success("Success message");
toast.error("Error message");
toast.info("Info message");`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => sonnerToast.success("Your file has been uploaded!")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.error("Failed to save changes.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.info("New update available.")}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.warning("Your session will expire soon.")}
          >
            Warning
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Toast with Action"
        description="Toast with an action button"
        code={`toast({
  title: "Scheduled",
  description: "Meeting scheduled for Friday.",
  action: <Button variant="outline" size="sm">Undo</Button>,
});`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast({
              title: "Meeting Scheduled",
              description: "Friday, February 10, 2024 at 5:00 PM",
              action: (
                <Button variant="outline" size="sm">
                  Undo
                </Button>
              ),
            })
          }
        >
          Schedule Meeting
        </Button>
      </ComponentPreview>
    </ComponentPage>
  );
}
