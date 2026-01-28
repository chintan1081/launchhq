import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { blockCategories } from "@/components/layout/BlockSidebar";
import { ArrowRight } from "lucide-react";

export default function BlocksIndex() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blocks</h1>
        <p className="text-lg text-muted-foreground">
          Ready-to-use page sections and components. Copy the code and customize for your project.
        </p>
      </div>

      <div className="space-y-12">
        {blockCategories.map((category) => (
          <div key={category.slug}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {category.blocks.length} blocks available
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.blocks.map((block) => (
                <Link
                  key={block.slug}
                  to={`/blocks/${category.slug}/${block.slug}`}
                  className="group"
                >
                  <Card className="p-4 h-full hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-md bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <block.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {block.name}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
