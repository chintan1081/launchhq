import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function TextareaShowcase() {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;

  return (
    <ComponentPage
      title="Textarea"
      description="A multi-line text input component for longer form content."
    >
      <ComponentPreview
        title="Default Textarea"
        description="Basic textarea with label"
        code={`<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here..." />
</div>`}
      >
        <div className="space-y-2 max-w-md">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Character Count"
        description="Textarea with character limit indicator"
        code={`const [charCount, setCharCount] = useState(0);
const maxChars = 200;

<Textarea 
  onChange={(e) => setCharCount(e.target.value.length)}
  maxLength={maxChars}
/>
<p className="text-sm text-muted-foreground">
  {charCount}/{maxChars} characters
</p>`}
      >
        <div className="space-y-2 max-w-md">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself..."
            onChange={(e) => setCharCount(e.target.value.length)}
            maxLength={maxChars}
          />
          <p className="text-sm text-muted-foreground text-right">
            {charCount}/{maxChars} characters
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Different Sizes"
        description="Textarea with different row heights"
        code={`<Textarea rows={2} placeholder="Small textarea" />
<Textarea rows={4} placeholder="Medium textarea" />
<Textarea rows={8} placeholder="Large textarea" />`}
      >
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label>Small (2 rows)</Label>
            <Textarea rows={2} placeholder="Small textarea..." />
          </div>
          <div className="space-y-2">
            <Label>Medium (4 rows)</Label>
            <Textarea rows={4} placeholder="Medium textarea..." />
          </div>
          <div className="space-y-2">
            <Label>Large (8 rows)</Label>
            <Textarea rows={8} placeholder="Large textarea..." />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Disabled and error states"
        code={`<Textarea placeholder="Disabled" disabled />
<Textarea className="border-destructive" placeholder="Error state" />`}
      >
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label>Disabled</Label>
            <Textarea placeholder="This textarea is disabled" disabled />
          </div>
          <div className="space-y-2">
            <Label className="text-destructive">Error</Label>
            <Textarea
              placeholder="Error state"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-sm text-destructive">
              Please enter a valid message
            </p>
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
