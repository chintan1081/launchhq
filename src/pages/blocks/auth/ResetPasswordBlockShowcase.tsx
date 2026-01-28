import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

function ResetPasswordSection1() {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Set new password</h1>
          <p className="text-muted-foreground mt-1">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">New password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              At least 8 characters
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              One uppercase letter
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-muted-foreground" />
              One number
            </div>
          </div>

          <Button className="w-full">Reset Password</Button>
        </div>
      </div>
    </section>
  );
}

const resetPasswordFiles1: BlockFile[] = [
  {
    name: "reset-password-page.tsx",
    path: "app/reset-password/page.tsx",
    content: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Set new password</h1>
          <p className="text-muted-foreground mt-1">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">New password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              At least 8 characters
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              One uppercase letter
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-muted-foreground" />
              One number
            </div>
          </div>

          <Button className="w-full">Reset Password</Button>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function ResetPasswordBlockShowcase() {
  return (
    <BlockPage
      title="Reset Password"
      description="Password reset page blocks."
    >
      <BlockPreview
        title="Reset Password 01"
        description="Password reset form with requirements"
        files={resetPasswordFiles1}
        installCommand="npx shadcn add reset-password-01"
      >
        <ResetPasswordSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
