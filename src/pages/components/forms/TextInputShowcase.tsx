import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Mail, Eye, EyeOff, User } from "lucide-react";
import { useState } from "react";

export default function TextInputShowcase() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ComponentPage
      title="Text Input"
      description="A flexible text input component with support for icons, validation states, and various sizes."
    >
      <ComponentPreview
        title="Default Input"
        description="Basic text input with label"
        code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}
      >
        <div className="space-y-2 max-w-sm">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Icons"
        description="Input with leading and trailing icons"
        code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search..." />
</div>`}
      >
        <div className="space-y-4 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search..." />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" type="email" placeholder="Enter email" />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Username" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Password Input"
        description="Password input with toggle visibility"
        code={`const [showPassword, setShowPassword] = useState(false);

<div className="relative">
  <Input 
    type={showPassword ? "text" : "password"} 
    placeholder="Enter password" 
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2"
  >
    {showPassword ? <EyeOff /> : <Eye />}
  </button>
</div>`}
      >
        <div className="relative max-w-sm">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Different input states: default, disabled, and error"
        code={`<Input placeholder="Default" />
<Input placeholder="Disabled" disabled />
<Input placeholder="Error" className="border-destructive focus-visible:ring-destructive" />`}
      >
        <div className="space-y-4 max-w-sm">
          <div className="space-y-2">
            <Label>Default</Label>
            <Input placeholder="Enter text..." />
          </div>
          <div className="space-y-2">
            <Label>Disabled</Label>
            <Input placeholder="Disabled input" disabled />
          </div>
          <div className="space-y-2">
            <Label className="text-destructive">Error</Label>
            <Input
              placeholder="Error state"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-sm text-destructive">This field is required</p>
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
