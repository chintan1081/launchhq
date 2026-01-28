import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Zap, Github, Command } from "lucide-react";
import RocketIcon from "@/components/Icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <div className="text-primary-foreground text-2xl">L</div>
            </div>
            LaunchHQ
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/components"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Components
            </Link>
            <Link
              to="/blocks"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blocks
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/chintan1081/launchhq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
