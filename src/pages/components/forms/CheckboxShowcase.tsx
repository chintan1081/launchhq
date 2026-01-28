import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxShowcase() {
  return (
    <ComponentPage
      title="Checkbox"
      description="A checkbox component for selecting multiple options from a set."
    >
      <ComponentPreview
        title="Default Checkbox"
        description="Basic checkbox with label"
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Checkbox Group"
        description="Multiple checkboxes for selecting options"
        code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="email" defaultChecked />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="push" />
    <Label htmlFor="push">Push notifications</Label>
  </div>
</div>`}
      >
        <div className="space-y-3">
          <p className="text-sm font-medium mb-3">Notification preferences</p>
          <div className="flex items-center space-x-2">
            <Checkbox id="email-notif" defaultChecked />
            <Label htmlFor="email-notif">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sms-notif" />
            <Label htmlFor="sms-notif">SMS notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="push-notif" />
            <Label htmlFor="push-notif">Push notifications</Label>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Description"
        description="Checkbox with additional description text"
        code={`<div className="flex space-x-2">
  <Checkbox id="marketing" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="marketing">Marketing emails</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
</div>`}
      >
        <div className="space-y-4 max-w-md">
          <div className="flex space-x-2">
            <Checkbox id="marketing" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="marketing">Marketing emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about new products, features, and more.
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Checkbox id="security" defaultChecked />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="security">Security emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about your account security.
              </p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Checked, unchecked, and disabled states"
        code={`<Checkbox />
<Checkbox defaultChecked />
<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="text-muted-foreground">
              Disabled Checked
            </Label>
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
