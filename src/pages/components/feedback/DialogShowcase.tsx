import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogShowcase() {
  return (
    <ComponentPage
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window."
    >
      <ComponentPreview
        title="Basic Dialog"
        description="Simple dialog with title and description"
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Welcome to LaunchHQ</DialogTitle>
              <DialogDescription>
                This is a basic dialog component. It can be used to display
                important information or collect user input.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Dialogs are great for focusing user attention on a specific task
                or piece of information.
              </p>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="button" className="gradient-primary text-white">
                Continue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <ComponentPreview
        title="Form Dialog"
        description="Dialog with form inputs"
        code={`<DialogContent>
  <DialogHeader>
    <DialogTitle>Edit Profile</DialogTitle>
  </DialogHeader>
  <div className="grid gap-4 py-4">
    <div className="grid gap-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
    </div>
  </div>
  <DialogFooter>
    <Button type="submit">Save changes</Button>
  </DialogFooter>
</DialogContent>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@johndoe" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="gradient-primary text-white">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <ComponentPreview
        title="Scrollable Dialog"
        description="Dialog with scrollable content"
        code={`<DialogContent className="max-h-[80vh] overflow-y-auto">`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Terms of Service</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>
                Please read our terms of service carefully.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-[300px] overflow-y-auto py-4 pr-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-medium mb-2">Section {i}</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline">
                Decline
              </Button>
              <Button type="button" className="gradient-primary text-white">
                Accept
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>
    </ComponentPage>
  );
}
