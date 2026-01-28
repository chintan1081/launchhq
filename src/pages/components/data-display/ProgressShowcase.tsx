import { ComponentPage, ComponentPreview } from "@/components/showcase/ComponentPreview";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function ProgressShowcase() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ComponentPage
      title="Progress"
      description="Displays an indicator showing the completion progress of a task."
    >
      <ComponentPreview
        title="Default Progress"
        description="Basic progress indicator"
        code={`<Progress value={33} />`}
      >
        <div className="space-y-4 max-w-md">
          <Progress value={33} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Different Values"
        description="Progress bars at various completion levels"
        code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
      >
        <div className="space-y-4 max-w-md">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Uploading...</span>
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Processing...</span>
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Almost done...</span>
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Complete!</span>
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Animated Progress"
        description="Progress bar with animation"
        code={`const [progress, setProgress] = useState(13);

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500);
  return () => clearTimeout(timer);
}, []);

<Progress value={progress} />`}
      >
        <div className="space-y-2 max-w-md">
          <div className="flex justify-between text-sm">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="transition-all duration-500" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Custom Colors"
        description="Progress bars with custom indicator colors"
        code={`<Progress value={60} className="[&>div]:bg-green-500" />
<Progress value={40} className="[&>div]:bg-yellow-500" />
<Progress value={80} className="[&>div]:bg-red-500" />`}
      >
        <div className="space-y-4 max-w-md">
          <div className="space-y-1">
            <span className="text-sm text-green-500">Success</span>
            <Progress value={60} className="[&>div]:bg-green-500" />
          </div>
          <div className="space-y-1">
            <span className="text-sm text-yellow-500">Warning</span>
            <Progress value={40} className="[&>div]:bg-yellow-500" />
          </div>
          <div className="space-y-1">
            <span className="text-sm text-red-500">Error</span>
            <Progress value={80} className="[&>div]:bg-red-500" />
          </div>
          <div className="space-y-1">
            <span className="text-sm gradient-text">Gradient</span>
            <Progress value={70} className="[&>div]:gradient-primary" />
          </div>
        </div>
      </ComponentPreview>
    </ComponentPage>
  );
}
