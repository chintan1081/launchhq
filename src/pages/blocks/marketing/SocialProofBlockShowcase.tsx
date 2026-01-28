import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Users, Star, Download, Building } from "lucide-react";

function SocialProofSection1() {
  const stats = [
    { value: "10K+", label: "Active Users", icon: Users },
    { value: "4.9", label: "Average Rating", icon: Star },
    { value: "1M+", label: "Downloads", icon: Download },
    { value: "500+", label: "Companies", icon: Building },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection2() {
  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<50ms", label: "Response Time" },
    { value: "150+", label: "Edge Locations" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const socialProofFiles1: BlockFile[] = [
  {
    name: "social-proof.tsx",
    path: "components/blocks/social-proof.tsx",
    content: `import { Users, Star, Download, Building } from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Users", icon: Users },
  { value: "4.9", label: "Average Rating", icon: Star },
  { value: "1M+", label: "Downloads", icon: Download },
  { value: "500+", label: "Companies", icon: Building },
];

export function SocialProof() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

const socialProofFiles2: BlockFile[] = [
  {
    name: "stats-bar.tsx",
    path: "components/blocks/stats-bar.tsx",
    content: `const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<50ms", label: "Response Time" },
  { value: "150+", label: "Edge Locations" },
  { value: "24/7", label: "Support" },
];

export function StatsBar() {
  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function SocialProofBlockShowcase() {
  return (
    <BlockPage
      title="Social Proof"
      description="Stats and metrics to showcase your achievements."
    >
      <BlockPreview
        title="Social Proof 01 - With Icons"
        description="Four-column stats with icons"
        files={socialProofFiles1}
        installCommand="npx shadcn add social-proof-01"
      >
        <SocialProofSection1 />
      </BlockPreview>

      <BlockPreview
        title="Social Proof 02 - Stats Bar"
        description="Horizontal stats bar with large numbers"
        files={socialProofFiles2}
        installCommand="npx shadcn add social-proof-02"
      >
        <SocialProofSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
