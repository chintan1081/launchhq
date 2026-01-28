import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CardShowcase() {
  return (
    <ComponentPage
      title="Card"
      description="A versatile container component for displaying content."
    >
      <ComponentPreview
        title="Basic Card"
        description="Simple card with header and content"
        code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
      >
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content of the card. You can put any content here.</p>
          </CardContent>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Card with Footer"
        description="Card with action buttons in footer"
        code={`<Card>
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Create Project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your project will be deployed to our global edge network with automatic SSL.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button className="gradient-primary text-white">Deploy</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Profile Card"
        description="Card with avatar and user info"
        code={`<Card>
  <CardContent className="flex items-center gap-4 pt-6">
    <Avatar className="h-16 w-16">
      <AvatarImage src="..." />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div>
      <h3 className="font-semibold">John Doe</h3>
      <p className="text-sm text-muted-foreground">Software Engineer</p>
    </div>
  </CardContent>
</Card>`}
      >
        <Card className="max-w-sm">
          <CardContent className="flex items-center gap-4 pt-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Interactive Cards"
        description="Cards with hover effects"
        code={`<Card className="hover-glow transition-all hover:border-primary/50 cursor-pointer">`}
      >
        <div className="grid sm:grid-cols-3 gap-4">
          {["Starter", "Pro", "Enterprise"].map((plan) => (
            <Card
              key={plan}
              className="hover-glow transition-all hover:border-primary/50 cursor-pointer hover:scale-[1.02]"
            >
              <CardHeader>
                <CardTitle>{plan}</CardTitle>
                <CardDescription>
                  {plan === "Starter" && "Perfect for small projects"}
                  {plan === "Pro" && "For growing businesses"}
                  {plan === "Enterprise" && "For large organizations"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {plan === "Starter" && "$9"}
                  {plan === "Pro" && "$29"}
                  {plan === "Enterprise" && "$99"}
                  <span className="text-sm font-normal text-muted-foreground">/mo</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
