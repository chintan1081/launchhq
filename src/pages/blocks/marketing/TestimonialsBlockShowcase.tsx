import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

function TestimonialsSection1() {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we build and deploy applications. The speed is incredible.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      rating: 5,
    },
    {
      quote: "We've reduced our deployment time by 80% since switching. The developer experience is unmatched.",
      author: "Marcus Johnson",
      role: "Lead Engineer at Scale",
      rating: 5,
    },
    {
      quote: "Best investment we've made for our engineering team. The support is outstanding.",
      author: "Emily Rodriguez",
      role: "VP Engineering at Rapid",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-muted">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection2() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 leading-relaxed">
            "This is hands down the best development platform I've ever used. It's changed how our entire team thinks about deployment."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback className="bg-muted text-lg">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold">James Davidson</div>
              <div className="text-muted-foreground">CEO at DevCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonialsFiles1: BlockFile[] = [
  {
    name: "testimonials-section.tsx",
    path: "components/blocks/testimonials-section.tsx",
    content: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "This platform has completely transformed how we build and deploy applications. The speed is incredible.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    rating: 5,
  },
  {
    quote: "We've reduced our deployment time by 80% since switching. The developer experience is unmatched.",
    author: "Marcus Johnson",
    role: "Lead Engineer at Scale",
    rating: 5,
  },
  {
    quote: "Best investment we've made for our engineering team. The support is outstanding.",
    author: "Emily Rodriguez",
    role: "VP Engineering at Rapid",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-muted">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  },
];

const testimonialsFiles2: BlockFile[] = [
  {
    name: "testimonial-hero.tsx",
    path: "components/blocks/testimonial-hero.tsx",
    content: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialHero() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 leading-relaxed">
            "This is hands down the best development platform I've ever used. It's changed how our entire team thinks about deployment."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback className="bg-muted text-lg">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold">James Davidson</div>
              <div className="text-muted-foreground">CEO at DevCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function TestimonialsBlockShowcase() {
  return (
    <BlockPage
      title="Testimonials"
      description="Social proof sections to build trust with your visitors."
    >
      <BlockPreview
        title="Testimonials 01 - Grid"
        description="Three-column testimonial cards with ratings"
        files={testimonialsFiles1}
        installCommand="npx shadcn add testimonials-01"
      >
        <TestimonialsSection1 />
      </BlockPreview>

      <BlockPreview
        title="Testimonials 02 - Hero"
        description="Single featured testimonial with large quote"
        files={testimonialsFiles2}
        installCommand="npx shadcn add testimonials-02"
      >
        <TestimonialsSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
