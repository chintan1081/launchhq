import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { componentCategories } from "@/components/layout/ComponentSidebar";
import { ArrowRight } from "lucide-react";

export default function ComponentsIndex() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Components</h1>
        <p className="text-lg text-muted-foreground">
          Browse our comprehensive collection of 35+ beautifully designed
          components.
        </p>
      </div>

      <div className="space-y-12">
        {componentCategories.map((category) => (
          <div key={category.slug}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {category.components.length} components
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.components.map((component) => (
                <Link
                  key={component.slug}
                  to={`/components/${category.slug}/${component.slug}`}
                  className="group"
                >
                  <Card className="p-4 h-full glass hover-glow transition-all duration-300 hover:border-primary/50 group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <component.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {component.name}
                          </h3>
                        </div>
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
