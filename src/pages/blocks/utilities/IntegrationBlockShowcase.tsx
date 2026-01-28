import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Check, Zap, ArrowRight } from "lucide-react";

function IntegrationSection1() {
  const integrations = [
    { name: "Slack", connected: true },
    { name: "GitHub", connected: true },
    { name: "Figma", connected: false },
    { name: "Notion", connected: false },
    { name: "Linear", connected: true },
    { name: "Discord", connected: false },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations</h2>
          <p className="text-lg text-muted-foreground">
            Connect your favorite tools and automate your workflow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="font-medium">{integration.name}</span>
              </div>
              {integration.connected ? (
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <Check className="h-4 w-4" />
                  Connected
                </div>
              ) : (
                <Button size="sm" variant="outline">Connect</Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const integrationFiles1: BlockFile[] = [
  {
    name: "integrations.tsx",
    path: "components/blocks/integrations.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const integrations = [
  { name: "Slack", connected: true },
  { name: "GitHub", connected: true },
  { name: "Figma", connected: false },
  { name: "Notion", connected: false },
  { name: "Linear", connected: true },
  { name: "Discord", connected: false },
];

export function Integrations() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations</h2>
          <p className="text-lg text-muted-foreground">
            Connect your favorite tools and automate your workflow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="font-medium">{integration.name}</span>
              </div>
              {integration.connected ? (
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <Check className="h-4 w-4" />
                  Connected
                </div>
              ) : (
                <Button size="sm" variant="outline">Connect</Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function IntegrationBlockShowcase() {
  return (
    <BlockPage
      title="App Integration"
      description="Integration showcase and connection blocks."
    >
      <BlockPreview
        title="Integrations 01 - Grid"
        description="Integration cards with connection status"
        files={integrationFiles1}
        installCommand="npx shadcn add integrations-01"
      >
        <IntegrationSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
