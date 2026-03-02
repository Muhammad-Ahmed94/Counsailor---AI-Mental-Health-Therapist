import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { Check, X, Star } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for exploring what AI therapy can do for you.",
    highlighted: false,
    cta: "Get Started Free",
    features: [
      { text: "5 AI chat sessions per day", included: true },
      { text: "Basic mood tracking", included: true },
      { text: "Community support forum", included: true },
      { text: "Self-help resources library", included: true },
      { text: "Priority response time", included: false },
      { text: "Progress analytics", included: false },
      { text: "Personalized wellness plan", included: false },
      { text: "Crisis support hotline", included: false },
    ],
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For those committed to their mental health journey.",
    highlighted: true,
    cta: "Start Pro Plan",
    features: [
      { text: "Unlimited AI chat sessions", included: true },
      { text: "Advanced mood tracking", included: true },
      { text: "Community support forum", included: true },
      { text: "Self-help resources library", included: true },
      { text: "Priority response time", included: true },
      { text: "Progress analytics", included: true },
      { text: "Personalized wellness plan", included: false },
      { text: "Crisis support hotline", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    description: "Complete mental wellness with expert-level support.",
    highlighted: false,
    cta: "Go Premium",
    features: [
      { text: "Unlimited AI chat sessions", included: true },
      { text: "Advanced mood tracking", included: true },
      { text: "Community support forum", included: true },
      { text: "Self-help resources library", included: true },
      { text: "Priority response time", included: true },
      { text: "Progress analytics", included: true },
      { text: "Personalized wellness plan", included: true },
      { text: "Crisis support hotline", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Absolutely. Upgrade, downgrade, or switch plans anytime from your dashboard. Changes take effect immediately — no hidden fees, no hassle.",
  },
  {
    q: "Is my data secure and private?",
    a: "Your privacy is non-negotiable. We use end-to-end encryption, store nothing on external servers, and never share your data with anyone — period.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancel anytime with one click — no penalties, no guilt trips, no fine print. We hope you stay, but we'll never lock you in.",
  },
  {
    q: "Does the AI replace a real therapist?",
    a: "Counsailor is a powerful supplement, not a replacement. For clinical diagnoses or severe conditions, we provide direct referrals to licensed professionals.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <PageHeader
        title="Pricing"
        description="Transparent pricing, no surprises. Start free and upgrade when you're ready — your mental health journey shouldn't break the bank."
      />

      {/* Pricing Cards */}
      <section className="bg-bg-secondary">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-title">Pricing</span>
            <h2 className="section-heading mt-3">
              Choose the Mental Health Consultation Package for Your Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-green-primary text-white shadow-xl shadow-green-primary/20 scale-[1.03] md:scale-105"
                    : "bg-white shadow-sm hover:shadow-md border border-black/5"
                }`}
              >
                {/* Recommended badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <Star size={12} className="fill-white" /> RECOMMENDED
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      plan.highlighted ? "text-white/90" : "text-text-secondary"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl md:text-5xl font-bold ${
                        plan.highlighted ? "text-white" : "text-text-primary"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-sm ${
                          plan.highlighted
                            ? "text-white/60"
                            : "text-text-secondary"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      plan.highlighted ? "text-white/70" : "text-text-secondary"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-6 ${
                    plan.highlighted ? "bg-white/20" : "bg-black/10"
                  }`}
                />

                {/* Feature list */}
                <ul className="flex flex-col gap-3 mb-8 grow">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-3 text-sm"
                    >
                      {feature.included ? (
                        <Check
                          size={18}
                          className={`shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? "text-orange-primary"
                              : "text-green-primary"
                          }`}
                        />
                      ) : (
                        <X
                          size={18}
                          className={`shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? "text-white/30"
                              : "text-black/20"
                          }`}
                        />
                      )}
                      <span
                        className={
                          feature.included
                            ? plan.highlighted
                              ? "text-white/90"
                              : "text-text-primary"
                            : plan.highlighted
                              ? "text-white/30"
                              : "text-text-secondary/50"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full rounded-full py-3 font-semibold text-sm transition-all cursor-pointer ${
                    plan.highlighted
                      ? "bg-orange-primary text-white hover:opacity-90 shadow-md"
                      : "bg-green-primary/10 text-green-primary hover:bg-green-primary hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-bg-primary">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-title">FAQ</span>
            <h2 className="section-heading mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-black/5 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-text-primary hover:text-green-primary transition-colors list-none">
                  {faq.q}
                  <span className="text-xl transition-transform group-open:rotate-45 shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
