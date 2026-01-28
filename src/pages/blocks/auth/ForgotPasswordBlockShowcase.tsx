import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

function ForgotPasswordSection1() {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Forgot password?</h1>
          <p className="text-muted-foreground mt-1">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="name@example.com" />
          </div>

          <Button className="w-full">Reset Password</Button>

          <div className="text-center">
            <a href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const forgotPasswordFiles1: BlockFile[] = [
  {
    name: "forgot-password-page.tsx",
    path: "app/forgot-password/page.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Forgot password?</h1>
          <p className="text-muted-foreground mt-1">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="name@example.com" />
          </div>

          <Button className="w-full">Reset Password</Button>

          <div className="text-center">
            <a href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function ForgotPasswordBlockShowcase() {
  return (
    <BlockPage
      title="Forgot Password"
      description="Password recovery request page blocks."
    >
      <BlockPreview
        title="Forgot Password 01"
        description="Simple email input for password reset"
        files={forgotPasswordFiles1}
        installCommand="npx shadcn add forgot-password-01"
      >
        <ForgotPasswordSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
