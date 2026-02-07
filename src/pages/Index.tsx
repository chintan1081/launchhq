import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  Layout,
  Server,
  Code2,
  Rocket,
  Star
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">
      <Header />

      <main className="flex-1  md:mx-36 border-x border-border/50">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden border-b border-border/50">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 h-full w-full bg-background overflow-hidden">
            <InteractiveGridPattern width={40} height={40} className="stroke-border/10 text-border/30 opacity-100" squaresClassName="hover:bg-primary/5" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          </div>

          <div className="container px-4 mx-auto text-center relative z-10">

            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 shadow-sm hover:bg-muted/50 transition-colors cursor-pointer">
              <span className="flex items-center justify-center bg-foreground text-background text-[10px] font-bold px-2 py-0.5 rounded-full leading-none">New</span>
              <span className="text-muted-foreground flex items-center gap-1">
                Everything you need to build end to end SaaS
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-1" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-pretty  max-w-5xl mx-auto leading-[1.1]">
              <span className="text-foreground">
                Launch your startup in</span>
              <span className="relative z-10 text-third inline-block ">
                a day, not days
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed text-balance">
              Secure, scalable, production-ready UI, backend, database, and infrastructure

              <span className="relative z-10 inline-block">
                so you only focus on business logic.

              </span>
            </p>

            {/* CTA Buttons */}
            <Link to="/components" className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all outline outline-offset-2 outline-foreground/5 bg-foreground text-background hover:bg-foreground/90">
                Get all access 
              </Button>
            </Link>



          </div>
        </section>

        {/* Tech Stack / Brand Icons */}
        <div className="my-20 pt-10  max-w-4xl mx-auto overflow-hidden">
          <p className="text-sm text-muted-foreground mb-6 text-center font-medium">POWERING NEXT-GEN APPLICATIONS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-8 w-auto hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="h-6 w-auto hover:opacity-100 transition-opacity" />
            <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js" className="h-8 w-auto hover:opacity-100 transition-opacity" />
            <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="Framer" className="h-8 w-auto hover:opacity-100 transition-opacity" />
            <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="TypeScript" className="h-8 w-auto hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* 2. PROBLEM SECTION */}
        <section className="py-32 border-y border-border/40 bg-muted/20">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">The Problem</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Building apps is still unnecessarily hard.</h3>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm">
              <p className="text-xl text-muted-foreground mb-8">Every project starts the same way:</p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-lg"><span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold">1</span> You set up UI components</li>
                  <li className="flex items-center text-lg"><span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold">2</span> Then backend routes</li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg"><span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold">3</span> Then database schemas</li>
                  <li className="flex items-center text-lg"><span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold">4</span> Then deployment configs</li>
                </ul>
              </div>
              <div className="border-t border-border pt-8 text-center">
                <p className="text-lg text-muted-foreground mb-2">You repeat boilerplate. You lose days.</p>
                <p className="text-foreground font-bold text-2xl">This platform exists to remove that friction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOLUTION SECTION */}
        <section className="py-32 border-b border-border">
          <div className="container px-4 mx-auto text-center max-w-4xl">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">The Solution</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">One platform. End-to-end.</h3>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
              Build your entire application in one place. <br />
              <span className="text-foreground font-medium">UI, backend, database, and deployment</span> — designed to work together.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <Card className="bg-primary-foreground text-primary border-border">
                <CardContent className="p-8">
                  <h4 className="font-bold text-xl mb-3">You stay in control</h4>
                  <p className="text-muted-foreground text-lg">You own the code. Export standard React/Node code anytime.</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary border-border">
                <CardContent className="p-8">
                  <h4 className="font-bold text-xl mb-3">We handle the scalable setup</h4>
                  <p className="text-muted-foreground/80 text-lg">Best practices, security, and project structure included.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-32 border-b border-border bg-muted/20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">From idea to production in minutes.</h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <StepCard number="01" title="Choose UI" desc="Pick from production-ready components." />
              <StepCard number="02" title="Customize" desc="Edit styles visually or in code." />
              <StepCard number="03" title="Generate" desc="Get clean frontend & backend code." />
              <StepCard number="04" title="Connect DB" desc="Prisma, Drizzle, or any SQL/NoSQL." />
              <StepCard number="05" title="Deploy" desc="Push to Vercel, Render, or Docker." />
            </div>
          </div>
        </section>

        {/* 5. WHAT YOU GET SECTION */}
        <section className="py-32 border-b border-border">
          <div className="container px-4 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">Everything you need to ship.</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Layout className="w-6 h-6" />}
                title="UI Components & Blocks"
                desc="Reusable, accessible, and customizable UI components built for real apps."
              />
              <FeatureCard
                icon={<Code2 className="w-6 h-6" />}
                title="Frontend Boilerplate"
                desc="Clean project structure with best practices already in place."
              />
              <FeatureCard
                icon={<Server className="w-6 h-6" />}
                title="Backend Boilerplate"
                desc="Express + Node.js setup with routing, services, and scalability in mind."
              />
              <FeatureCard
                icon={<Database className="w-6 h-6" />}
                title="Database Integration"
                desc="Plug in Prisma, TypeORM, Drizzle, or connect any SQL / NoSQL database."
              />
              <FeatureCard
                icon={<Rocket className="w-6 h-6" />}
                title="Deployment Ready"
                desc="Preconfigured deployment setups for Vercel, Render, and more."
              />
              <FeatureCard
                icon={<Globe className="w-6 h-6" />}
                title="API Ready"
                desc="Automatic API generation and documentation for your backend services."
              />
            </div>
          </div>
        </section>

        {/* 6. DEVELOPER BENEFITS SECTION */}
        <section className="py-32 border-b border-border bg-foreground text-background">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 sticky top-32">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">Built for developers who care about quality.</h2>
                <div className="h-1 w-20 bg-background/20 rounded"></div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-12">
                <BenefitItem title="Move faster without cutting corners" desc="Spend time building features, not setting up folders." />
                <BenefitItem title="Production-ready architecture" desc="Clean code structure that scales with your product." />
                <BenefitItem title="No vendor lock-in" desc="You own the code. Export and modify it anytime." />
                <BenefitItem title="Opinionated, but flexible" desc="Smart defaults that you can fully customize." />
              </div>
            </div>
          </div>
        </section>

        {/* 7. USE CASES SECTION */}
        <section className="py-32 border-b border-border">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Who is this for?</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <UseCaseItem title="Indie Hackers" desc="Launch MVPs faster" />
              <UseCaseItem title="Startup Teams" desc="Standardize architecture" />
              <UseCaseItem title="Full-Stack Devs" desc="Avoid boilerplates" />
              <UseCaseItem title="Agencies" desc="Deliver faster" />
            </div>
          </div>
        </section>

        {/* 8. TRUST / POSITIONING */}
        <section className="py-32 border-b border-border bg-muted/20">
          <div className="container px-4 mx-auto max-w-4xl text-center">
            <div className="inline-block p-4 rounded-full bg-background border border-border mb-8 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Designed for real production apps.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              This platform is not a demo generator. It produces real, maintainable code that you can scale, extend, and deploy with confidence.
            </p>
            <p className="font-bold text-lg">Built by developers who build real products.</p>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="py-32 border-b border-border">
          <div className="container px-4 mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Frequently asked questions</h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <FAQItem question="Do I own the code?" answer="Yes. You can export, modify, and deploy it anywhere." />
              <FAQItem question="Can I use my own database?" answer="Yes. You can connect any SQL or NoSQL database." />
              <FAQItem question="Is this only for small projects?" answer="No. The generated structure is designed to scale." />
              <FAQItem question="Can I customize everything?" answer="Yes. Nothing is locked. Everything is editable." />
              <FAQItem question="Do I need to use your hosting?" answer="No. You can deploy anywhere you want." />
            </Accordion>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section className="py-40 text-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="container px-4 mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">Build faster.<br />Ship with confidence.</h2>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">Stop rewriting the same setup. Start building real products.</p>
            <Button size="lg" className="h-16 px-12 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
              <Link to="/components">
                Start Building Now
              </Link>
            </Button>
          </div>
        </section>

        {/* 11. MINIMAL FOOTER */}
        <footer className="py-12 border-t border-border text-center bg-muted/20">
          <div className="container px-4 mx-auto">
            <p className="font-bold mb-2">Built for developers.</p>
            <p className="text-sm text-muted-foreground">UI, Backend, Database, Deployment — one platform.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Subcomponents
function StepCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative p-8 border border-border bg-card rounded-xl hover:border-foreground/50 transition-colors group">
      <div className="text-4xl font-bold text-muted-foreground/20 mb-6 group-hover:text-foreground/10 transition-colors">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border/60 bg-card/50 backdrop-blur-sm group hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="mb-6 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  )
}

function BenefitItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>
    </div>
  )
}

function UseCaseItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 border border-border bg-card rounded-xl text-center hover:border-foreground transition-colors">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <AccordionItem value={question} className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30 transition-colors">
      <AccordionTrigger className="text-lg font-medium py-6 hover:no-underline">{question}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}
