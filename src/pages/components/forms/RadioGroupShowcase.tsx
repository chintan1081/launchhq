import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioGroupShowcase() {
  return (
    <ComponentPage
      title="Radio Group"
      description="A set of checkable buttons where only one can be selected at a time."
    >
      <ComponentPreview
        title="Default Radio Group"
        description="Basic radio group for single selection"
        code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="r-option-1" />
            <Label htmlFor="r-option-1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="r-option-2" />
            <Label htmlFor="r-option-2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-3" id="r-option-3" />
            <Label htmlFor="r-option-3">Option 3</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview
        title="With Descriptions"
        description="Radio options with additional description text"
        code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="default" id="default" className="mt-1" />
    <div>
      <Label htmlFor="default">Default</Label>
      <p className="text-sm text-muted-foreground">Standard spacing</p>
    </div>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="comfortable" className="space-y-3">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="default" id="spacing-default" className="mt-1" />
            <div>
              <Label htmlFor="spacing-default" className="font-medium">
                Default
              </Label>
              <p className="text-sm text-muted-foreground">
                The default system spacing
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="comfortable" id="spacing-comfortable" className="mt-1" />
            <div>
              <Label htmlFor="spacing-comfortable" className="font-medium">
                Comfortable
              </Label>
              <p className="text-sm text-muted-foreground">
                More space between elements
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="compact" id="spacing-compact" className="mt-1" />
            <div>
              <Label htmlFor="spacing-compact" className="font-medium">
                Compact
              </Label>
              <p className="text-sm text-muted-foreground">
                Less space, more content visible
              </p>
            </div>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview
        title="Horizontal Layout"
        description="Radio group displayed horizontally"
        code={`<RadioGroup defaultValue="medium" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="small" />
    <Label htmlFor="small">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="medium" />
    <Label htmlFor="medium">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="large" id="large" />
    <Label htmlFor="large">Large</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="medium" className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="size-small" />
            <Label htmlFor="size-small">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="size-medium" />
            <Label htmlFor="size-medium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="size-large" />
            <Label htmlFor="size-large">Large</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled State"
        description="Radio group with disabled options"
        code={`<RadioGroup defaultValue="enabled">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="enabled" id="enabled" />
    <Label htmlFor="enabled">Enabled option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="disabled" id="disabled" disabled />
    <Label htmlFor="disabled" className="text-muted-foreground">Disabled option</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="enabled">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enabled" id="state-enabled" />
            <Label htmlFor="state-enabled">Enabled option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="also-enabled" id="state-also-enabled" />
            <Label htmlFor="state-also-enabled">Another enabled option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled" id="state-disabled" disabled />
            <Label htmlFor="state-disabled" className="text-muted-foreground">
              Disabled option
            </Label>
          </div>
        </RadioGroup>
      </ComponentPreview>
    </ComponentPage>
  );
}
