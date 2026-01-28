import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";

function ErrorSection1() {
  return (
    <section className="w-full min-h-[600px] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-muted-foreground/30 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </Button>
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
}

function ErrorSection2() {
  return (
    <section className="w-full min-h-[600px] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="h-20 w-20 mx-auto mb-8 rounded-full bg-destructive/10 flex items-center justify-center">
          <svg className="h-10 w-10 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          We're experiencing technical difficulties. Please try again later or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </section>
  );
}

const errorFiles1: BlockFile[] = [
  {
    name: "404-page.tsx",
    path: "app/not-found.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-muted-foreground/30 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </Button>
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
}`,
  },
];

const errorFiles2: BlockFile[] = [
  {
    name: "error-page.tsx",
    path: "app/error.tsx",
    content: `import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function Error() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="h-20 w-20 mx-auto mb-8 rounded-full bg-destructive/10 flex items-center justify-center">
          <svg className="h-10 w-10 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          We're experiencing technical difficulties. Please try again later or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function ErrorBlockShowcase() {
  return (
    <BlockPage
      title="Error Page"
      description="Error and 404 page blocks."
    >
      <BlockPreview
        title="Error 01 - 404"
        description="Page not found error"
        files={errorFiles1}
        installCommand="npx shadcn add error-404"
      >
        <ErrorSection1 />
      </BlockPreview>

      <BlockPreview
        title="Error 02 - Server Error"
        description="Generic server error page"
        files={errorFiles2}
        installCommand="npx shadcn add error-500"
      >
        <ErrorSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
