import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SliderShowcase() {
  const [value, setValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([25, 75]);

  return (
    <ComponentPage
      title="Slider"
      description="A slider component for selecting values from a range."
    >
      <ComponentPreview
        title="Default Slider"
        description="Basic slider with single value"
        code={`<Slider value={[50]} onValueChange={setValue} max={100} step={1} />`}
      >
        <div className="space-y-4 max-w-md">
          <div className="flex justify-between text-sm">
            <Label>Volume</Label>
            <span className="text-muted-foreground">{value[0]}%</span>
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Range Slider"
        description="Slider with min and max values"
        code={`<Slider value={[25, 75]} onValueChange={setRangeValue} max={100} step={1} />`}
      >
        <div className="space-y-4 max-w-md">
          <div className="flex justify-between text-sm">
            <Label>Price Range</Label>
            <span className="text-muted-foreground">
              ${rangeValue[0]} - ${rangeValue[1]}
            </span>
          </div>
          <Slider
            value={rangeValue}
            onValueChange={setRangeValue}
            max={100}
            step={1}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Steps"
        description="Slider with discrete steps"
        code={`<Slider defaultValue={[50]} max={100} step={10} />`}
      >
        <div className="space-y-4 max-w-md">
          <Label>Select amount (steps of 10)</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled State"
        description="Disabled slider"
        code={`<Slider defaultValue={[50]} disabled />`}
      >
        <div className="space-y-4 max-w-md">
          <Label className="text-muted-foreground">Disabled</Label>
          <Slider defaultValue={[50]} max={100} disabled />
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
