import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SheetShowcase() {
  return (
    <ComponentPage
      title="Sheet"
      description="A panel that slides in from the edge of the screen."
    >
      <ComponentPreview
        title="Sheet Positions"
        description="Sheets can slide from different edges"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      >
        <div className="flex flex-wrap gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the right.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the left.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the top.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the bottom.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Form Sheet"
        description="Sheet with form content"
        code={`<SheetContent>
  <SheetHeader>
    <SheetTitle>Edit Profile</SheetTitle>
  </SheetHeader>
  <div className="grid gap-4 py-4">
    <Label htmlFor="name">Name</Label>
    <Input id="name" />
  </div>
  <SheetFooter>
    <SheetClose asChild>
      <Button type="submit">Save</Button>
    </SheetClose>
  </SheetFooter>
</SheetContent>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="sheet-name">Name</Label>
                <Input id="sheet-name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sheet-email">Email</Label>
                <Input id="sheet-email" defaultValue="john@example.com" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="gradient-primary text-white">
                  Save changes
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ComponentPreview>
    </ComponentPage>
  );
}
