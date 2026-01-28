import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { ExternalLink } from "lucide-react";

function PortfolioSection1() {
  const projects = [
    { title: "E-commerce Platform", category: "Web Development", year: "2024" },
    { title: "Mobile Banking App", category: "Mobile", year: "2024" },
    { title: "SaaS Dashboard", category: "Web Development", year: "2023" },
    { title: "AI Analytics Tool", category: "Machine Learning", year: "2023" },
    { title: "Social Media App", category: "Mobile", year: "2023" },
    { title: "CRM System", category: "Enterprise", year: "2022" },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Selected projects we're proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolioFiles1: BlockFile[] = [
  {
    name: "portfolio-grid.tsx",
    path: "components/blocks/portfolio-grid.tsx",
    content: `import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-commerce Platform", category: "Web Development", year: "2024" },
  { title: "Mobile Banking App", category: "Mobile", year: "2024" },
  { title: "SaaS Dashboard", category: "Web Development", year: "2023" },
  { title: "AI Analytics Tool", category: "Machine Learning", year: "2023" },
  { title: "Social Media App", category: "Mobile", year: "2023" },
  { title: "CRM System", category: "Enterprise", year: "2022" },
];

export function PortfolioGrid() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Selected projects we're proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function PortfolioBlockShowcase() {
  return (
    <BlockPage
      title="Portfolio"
      description="Portfolio sections to showcase your work."
    >
      <BlockPreview
        title="Portfolio 01 - Grid"
        description="Project cards in a grid layout"
        files={portfolioFiles1}
        installCommand="npx shadcn add portfolio-01"
      >
        <PortfolioSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
