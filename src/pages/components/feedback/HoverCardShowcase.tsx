import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

export default function HoverCardShowcase() {
  return (
    <ComponentPage
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
    >
      <ComponentPreview
        title="Basic Hover Card"
        description="Simple hover card with content preview"
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@shadcn</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex space-x-4">
      <Avatar>
        <AvatarImage src="..." />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold">@shadcn</h4>
        <p className="text-sm">Creator of shadcn/ui</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-primary p-0 h-auto">
              @shadcn
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-semibold">@shadcn</h4>
                <p className="text-sm text-muted-foreground">
                  The React component library. Open source.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreview>

      <ComponentPreview
        title="Product Preview"
        description="Hover card for product preview"
        code={`<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">Product Name</span>
  </HoverCardTrigger>
  <HoverCardContent>
    <img src="..." alt="Product" />
    <h4>Product Name</h4>
    <p>$99.99</p>
  </HoverCardContent>
</HoverCard>`}
      >
        <p className="text-sm">
          Check out our newest{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="underline decoration-primary decoration-2 cursor-pointer text-primary font-medium">
                Premium Package
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="space-y-3">
                <div className="h-24 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">PREMIUM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Premium Package</h4>
                  <p className="text-sm text-muted-foreground">
                    Get access to all features and priority support.
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">$99</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>{" "}
          for unlimited access.
        </p>
      </ComponentPreview>

      <ComponentPreview
        title="User Profile Preview"
        description="Hover card showing user details"
        code={`<HoverCard>
  <HoverCardTrigger>
    <Avatar />
  </HoverCardTrigger>
  <HoverCardContent>
    <div>User profile information...</div>
  </HoverCardContent>
</HoverCard>`}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">Created by</span>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs gradient-primary text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hover:text-primary transition-colors">
                  John Doe
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="gradient-primary text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">
                    Senior Developer at LaunchHQ
                  </p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>42 projects</span>
                    <span>1.2k followers</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
