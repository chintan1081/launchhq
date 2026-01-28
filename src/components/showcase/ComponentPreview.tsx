import { ReactNode, useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: ReactNode;
  code?: string;
  className?: string;
}

export function ComponentPreview({
  title,
  description,
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={cn("rounded-xl border border-border/50 overflow-hidden", className)}>
      <div className="border-b border-border/50 bg-card/50 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between border-b border-border/50 px-4">
          <TabsList className="h-12 bg-transparent">
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            {code && (
              <TabsTrigger
                value="code"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
            )}
          </TabsList>

          {code && (
            <Button variant="ghost" size="sm" onClick={copyCode}>
              {copied ? (
                <Check className="h-4 w-4 mr-2 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              {copied ? "Copied!" : "Copy"}
            </Button>
          )}
        </div>

        <TabsContent value="preview" className="m-0">
          <div className="p-6 bg-background/50">{children}</div>
        </TabsContent>

        {code && (
          <TabsContent value="code" className="m-0">
            <div className="relative">
              <pre className="p-4 overflow-x-auto bg-muted/30">
                <code className="text-sm text-foreground">{code}</code>
              </pre>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}

interface ComponentPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ComponentPage({ title, description, children }: ComponentPageProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
}
