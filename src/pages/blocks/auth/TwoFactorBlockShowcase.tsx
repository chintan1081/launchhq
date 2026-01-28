import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { ShieldCheck, ArrowLeft } from "lucide-react";

function TwoFactorSection1() {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4 text-center">
        <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Two-Factor Authentication</h1>
        <p className="text-muted-foreground mb-8">
          Enter the 6-digit code from your authenticator app
        </p>

        <div className="flex justify-center mb-8">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button className="w-full mb-4">Verify</Button>

        <p className="text-sm text-muted-foreground mb-6">
          Lost access to your authenticator?{" "}
          <a href="#" className="text-primary hover:underline">
            Use recovery code
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

const twoFactorFiles1: BlockFile[] = [
  {
    name: "two-factor-page.tsx",
    path: "app/two-factor/page.tsx",
    content: `import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function TwoFactorPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-auto px-4 text-center">
        <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Two-Factor Authentication</h1>
        <p className="text-muted-foreground mb-8">
          Enter the 6-digit code from your authenticator app
        </p>

        <div className="flex justify-center mb-8">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button className="w-full mb-4">Verify</Button>

        <p className="text-sm text-muted-foreground mb-6">
          Lost access to your authenticator?{" "}
          <a href="#" className="text-primary hover:underline">
            Use recovery code
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

export default function TwoFactorBlockShowcase() {
  return (
    <BlockPage
      title="Two Factor Authentication"
      description="2FA verification page blocks."
    >
      <BlockPreview
        title="Two Factor 01"
        description="OTP input for authenticator app"
        files={twoFactorFiles1}
        installCommand="npx shadcn add two-factor-01"
      >
        <TwoFactorSection1 />
      </BlockPreview>
    </BlockPage>
  );
}
