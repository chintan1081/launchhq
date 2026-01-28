import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { componentCategories } from "@/components/layout/ComponentSidebar";
import { ArrowRight } from "lucide-react";

export default function CategoryIndex() {
  const { category } = useParams<{ category: string }>();

  const categoryData = componentCategories.find((c) => c.slug === category);

  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-2">Category Not Found</h1>
        <p className="text-muted-foreground">
          The category you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
            <categoryData.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{categoryData.name}</h1>
            <p className="text-muted-foreground">
              {categoryData.components.length} components available
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {categoryData.components.map((component) => (
          <Link
            key={component.slug}
            to={`/components/${category}/${component.slug}`}
            className="group"
          >
            <Card className="p-5 h-full glass hover-glow transition-all duration-300 hover:border-primary/50 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <component.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                      {component.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      View examples and code
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
