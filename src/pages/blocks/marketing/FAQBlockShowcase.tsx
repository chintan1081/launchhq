import { BlockPage, BlockPreview, BlockFile } from "@/components/blocks/BlockPreview";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQSection1() {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "You get full access to all features for 14 days, no credit card required. At the end of the trial, you can choose a plan that fits your needs.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for annual plans. Monthly plans can be cancelled anytime but are not refundable.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees or hidden charges. You only pay for your chosen subscription plan.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our product
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FAQSection2() {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact our support team for a full refund.",
    },
    {
      question: "How do I upgrade my plan?",
      answer: "You can upgrade your plan at any time from your account settings. The new pricing will be prorated for the remainder of your billing period.",
    },
    {
      question: "Do you offer custom plans?",
      answer: "Yes, we offer custom enterprise plans for large teams with specific requirements. Contact our sales team to discuss your needs.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
            <div className="inline-flex items-center text-primary font-medium">
              Contact Support →
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqFiles1: BlockFile[] = [
  {
    name: "faq-section.tsx",
    path: "components/blocks/faq-section.tsx",
    content: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You get full access to all features for 14 days, no credit card required. At the end of the trial, you can choose a plan that fits your needs.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for annual plans. Monthly plans can be cancelled anytime but are not refundable.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees or hidden charges. You only pay for your chosen subscription plan.",
  },
];

export function FAQSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our product
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={\`item-\${index}\`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}`,
  },
];

const faqFiles2: BlockFile[] = [
  {
    name: "faq-split.tsx",
    path: "components/blocks/faq-split.tsx",
    content: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: "How do I upgrade my plan?",
    answer: "You can upgrade your plan at any time from your account settings. The new pricing will be prorated for the remainder of your billing period.",
  },
  {
    question: "Do you offer custom plans?",
    answer: "Yes, we offer custom enterprise plans for large teams with specific requirements. Contact our sales team to discuss your needs.",
  },
];

export function FAQSplit() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
            <div className="inline-flex items-center text-primary font-medium">
              Contact Support →
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={\`item-\${index}\`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
];

export default function FAQBlockShowcase() {
  return (
    <BlockPage
      title="FAQ Section"
      description="Frequently asked questions sections with accordion."
    >
      <BlockPreview
        title="FAQ 01 - Centered"
        description="Centered FAQ with accordion"
        files={faqFiles1}
        installCommand="npx shadcn add faq-01"
      >
        <FAQSection1 />
      </BlockPreview>

      <BlockPreview
        title="FAQ 02 - Split"
        description="Two-column layout with CTA and FAQ"
        files={faqFiles2}
        installCommand="npx shadcn add faq-02"
      >
        <FAQSection2 />
      </BlockPreview>
    </BlockPage>
  );
}
