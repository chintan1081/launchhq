import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

function CookiesSection1() {
  return (
    <div className="w-full p-4">
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto rounded-xl border border-border/50 bg-card p-6 shadow-lg" style={{ position: 'relative' }}>
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">We use cookies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to improve your experience and analyze site traffic.
            </p>
            <div className="flex gap-2">
              <Button size="sm">Accept All</Button>
              <Button size="sm" variant="outline">Customize</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookiesSection2() {
  return (
    <div className="w-full p-4">
      <div className="w-full rounded-xl border border-border/50 bg-card p-4" style={{ position: 'relative' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-5 w-5 text-muted-foreground shrink-0" />
            <p className="text-sm text-muted-foreground">
              This website uses cookies to ensure you get the best experience.{" "}
              <a href="#" className="text-primary hover:underline">Learn more</a>
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button size="sm" variant="outline">Decline</Button>
            <Button size="sm">Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const cookiesFiles1: BlockFile[] = [
  {
    name: "cookie-consent.tsx",
    path: "components/blocks/cookie-consent.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { useState } from "react";

export function CookieConsent() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto rounded-xl border border-border/50 bg-card p-6 shadow-lg z-50">
      <button 
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        onClick={() => setShow(false)}
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Cookie className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">We use cookies</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to improve your experience and analyze site traffic.
          </p>
          <div className="flex gap-2">
            <Button size="sm" onClick={() => setShow(false)}>Accept All</Button>
            <Button size="sm" variant="outline">Customize</Button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
];

const cookiesFiles2: BlockFile[] = [
  {
    name: "cookie-banner.tsx",
    path: "components/blocks/cookie-banner.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border/50 bg-card p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-5 w-5 text-muted-foreground shrink-0" />
            <p className="text-sm text-muted-foreground">
              This website uses cookies to ensure you get the best experience.{" "}
              <a href="#" className="text-primary hover:underline">Learn more</a>
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button size="sm" variant="outline" onClick={() => setShow(false)}>Decline</Button>
            <Button size="sm" onClick={() => setShow(false)}>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
];

export default function CookiesBlockShowcase() {
  return (
    <BlockPage
      title="Cookies Consent"
      description="Cookie consent banner blocks."
    >
      <BlockPreview
        title="Cookies 01 - Card"
        description="Floating cookie consent card"
        files={cookiesFiles1}
        installCommand="npx shadcn add cookies-01"
      >
        <CookiesSection1 />
      </BlockPreview>

      <BlockPreview
        title="Cookies 02 - Banner"
        description="Full-width cookie banner"
        files={cookiesFiles2}
        installCommand="npx shadcn add cookies-02"
      >
        <CookiesSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
