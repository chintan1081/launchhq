import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";

function VerifyEmailSection1() {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4 text-center">
        <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Check your email</h1>
        <p className="text-muted-foreground mb-6">
          We sent a verification link to<br />
          <span className="font-medium text-foreground">john@example.com</span>
        </p>

        <Button className="w-full mb-4">Open Email App</Button>

        <p className="text-sm text-muted-foreground mb-6">
          Didn't receive the email?{" "}
          <a href="#" className="text-primary hover:underline">
            Click to resend
          </a>
        </p>

        <a href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to login
        </a>
      </div>
    </section>
  );
}

function VerifyEmailSection2() {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-card p-8 text-center">
          <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Email Verified!</h1>
          <p className="text-muted-foreground mb-6">
            Your email has been successfully verified. You can now access your account.
          </p>
          <Button className="w-full">Continue to Dashboard</Button>
        </div>
      </div>
    </section>
  );
}

const verifyEmailFiles1: BlockFile[] = [
  {
    name: "verify-email-page.tsx",
    path: "app/verify-email/page.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4 text-center">
        <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Check your email</h1>
        <p className="text-muted-foreground mb-6">
          We sent a verification link to<br />
          <span className="font-medium text-foreground">john@example.com</span>
        </p>

        <Button className="w-full mb-4">Open Email App</Button>

        <p className="text-sm text-muted-foreground mb-6">
          Didn't receive the email?{" "}
          <a href="#" className="text-primary hover:underline">
            Click to resend
          </a>
        </p>

        <a href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to login
        </a>
      </div>
    </section>
  );
}`,
  },
];

const verifyEmailFiles2: BlockFile[] = [
  {
    name: "email-verified-page.tsx",
    path: "app/email-verified/page.tsx",
    content: `import { Button } from "@/components/ui/button";

export default function EmailVerifiedPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-card p-8 text-center">
          <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Email Verified!</h1>
          <p className="text-muted-foreground mb-6">
            Your email has been successfully verified. You can now access your account.
          </p>
          <Button className="w-full">Continue to Dashboard</Button>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function VerifyEmailBlockShowcase() {
  return (
    <BlockPage
      title="Verify Email"
      description="Email verification page blocks."
    >
      <BlockPreview
        title="Verify Email 01 - Pending"
        description="Waiting for email verification"
        files={verifyEmailFiles1}
        installCommand="npx shadcn add verify-email-01"
      >
        <VerifyEmailSection1 />
      </BlockPreview>

      <BlockPreview
        title="Verify Email 02 - Success"
        description="Email verification success state"
        files={verifyEmailFiles2}
        installCommand="npx shadcn add verify-email-02"
      >
        <VerifyEmailSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
