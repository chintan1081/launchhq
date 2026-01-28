import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

function CompareSection1() {
  const features = [
    { name: "Projects", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Storage", starter: "1GB", pro: "50GB", enterprise: "Unlimited" },
    { name: "Team members", starter: "1", pro: "10", enterprise: "Unlimited" },
    { name: "Analytics", starter: false, pro: true, enterprise: true },
    { name: "Custom domains", starter: false, pro: true, enterprise: true },
    { name: "API access", starter: false, pro: true, enterprise: true },
    { name: "SSO", starter: false, pro: false, enterprise: true },
    { name: "Dedicated support", starter: false, pro: false, enterprise: true },
    { name: "SLA", starter: false, pro: false, enterprise: true },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Plans</h2>
          <p className="text-lg text-muted-foreground">
            Find the perfect plan for your needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Features</th>
                <th className="text-center py-4 px-4 font-semibold">Starter</th>
                <th className="text-center py-4 px-4 font-semibold">
                  <div className="inline-flex items-center gap-2">
                    Pro
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Popular</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm">{feature.name}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.starter)}</td>
                  <td className="py-4 px-4 text-center bg-primary/5">{renderValue(feature.pro)}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.enterprise)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-6 px-4"></td>
                <td className="py-6 px-4 text-center">
                  <Button variant="outline" size="sm">Get Started</Button>
                </td>
                <td className="py-6 px-4 text-center bg-primary/5">
                  <Button size="sm">Start Free Trial</Button>
                </td>
                <td className="py-6 px-4 text-center">
                  <Button variant="outline" size="sm">Contact Sales</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

const compareFiles1: BlockFile[] = [
  {
    name: "compare-table.tsx",
    path: "components/blocks/compare-table.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Check, Minus } from "lucide-react";

const features = [
  { name: "Projects", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Storage", starter: "1GB", pro: "50GB", enterprise: "Unlimited" },
  { name: "Team members", starter: "1", pro: "10", enterprise: "Unlimited" },
  { name: "Analytics", starter: false, pro: true, enterprise: true },
  { name: "Custom domains", starter: false, pro: true, enterprise: true },
  { name: "API access", starter: false, pro: true, enterprise: true },
  { name: "SSO", starter: false, pro: false, enterprise: true },
  { name: "Dedicated support", starter: false, pro: false, enterprise: true },
  { name: "SLA", starter: false, pro: false, enterprise: true },
];

const renderValue = (value: boolean | string) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-green-500 mx-auto" />
    ) : (
      <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
    );
  }
  return <span className="text-sm">{value}</span>;
};

export function CompareTable() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Plans</h2>
          <p className="text-lg text-muted-foreground">
            Find the perfect plan for your needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Features</th>
                <th className="text-center py-4 px-4 font-semibold">Starter</th>
                <th className="text-center py-4 px-4 font-semibold">
                  <div className="inline-flex items-center gap-2">
                    Pro
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Popular</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm">{feature.name}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.starter)}</td>
                  <td className="py-4 px-4 text-center bg-primary/5">{renderValue(feature.pro)}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.enterprise)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-6 px-4"></td>
                <td className="py-6 px-4 text-center">
                  <Button variant="outline" size="sm">Get Started</Button>
                </td>
                <td className="py-6 px-4 text-center bg-primary/5">
                  <Button size="sm">Start Free Trial</Button>
                </td>
                <td className="py-6 px-4 text-center">
                  <Button variant="outline" size="sm">Contact Sales</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function CompareBlockShowcase() {
  return (
    <BlockPage
      title="Compare"
      description="Feature comparison table blocks."
    >
      <BlockPreview
        title="Compare 01 - Table"
        description="Feature comparison table with plans"
        files={compareFiles1}
        installCommand="npx shadcn add compare-01"
      >
        <CompareSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
