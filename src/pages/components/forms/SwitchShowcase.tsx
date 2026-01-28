import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SwitchShowcase() {
  const [airplaneMode, setAirplaneMode] = useState(false);

  return (
    <ComponentPage
      title="Switch"
      description="A toggle switch component for binary settings."
    >
      <ComponentPreview
        title="Default Switch"
        description="Basic switch with label"
        code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane"
            checked={airplaneMode}
            onCheckedChange={setAirplaneMode}
          />
          <Label htmlFor="airplane">
            Airplane Mode {airplaneMode ? "(On)" : "(Off)"}
          </Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Settings Panel"
        description="Multiple switches in a settings-like layout"
        code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <Label>Dark Mode</Label>
      <p className="text-sm text-muted-foreground">Toggle dark theme</p>
    </div>
    <Switch />
  </div>
</div>`}
      >
        <div className="space-y-4 max-w-md">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Marketing emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about new products and features.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Security emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about your account security.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Weekly digest</Label>
              <p className="text-sm text-muted-foreground">
                Receive a weekly summary of activity.
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="On, off, and disabled states"
        code={`<Switch />
<Switch defaultChecked />
<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center space-x-2">
            <Switch id="off-state" />
            <Label htmlFor="off-state">Off</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="on-state" defaultChecked />
            <Label htmlFor="on-state">On</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on" className="text-muted-foreground">
              Disabled On
            </Label>
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
