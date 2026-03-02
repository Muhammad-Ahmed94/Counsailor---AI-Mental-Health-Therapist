import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Brain,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  TreePine,
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Anxiety & Stress Support",
    description:
      "Break free from the cycle of worry. Our AI counselor uses proven techniques like deep breathing, grounding, and cognitive reframing to help you find calm.",
    color: "from-green-primary to-green-light",
  },
  {
    icon: Brain,
    title: "Cognitive Behavioral Therapy",
    description:
      "Challenge the thoughts that hold you back. Guided CBT exercises help you identify negative patterns and replace them with healthier perspectives.",
    color: "from-orange-primary to-[#f5956e]",
  },
  {
    icon: HeartHandshake,
    title: "Relationship Guidance",
    description:
      "Whether it's family, friends, or partners — navigate relationship challenges with compassionate guidance and actionable communication strategies.",
    color: "from-green-primary to-green-light",
  },
  {
    icon: Sparkles,
    title: "Mindfulness & Meditation",
    description:
      "Quiet the noise. Personalized meditation and mindfulness exercises tailored to how you're feeling right now — not a one-size-fits-all script.",
    color: "from-orange-primary to-[#f5956e]",
  },
  {
    icon: ShieldCheck,
    title: "Crisis Support",
    description:
      "When things feel overwhelming, we're here. Get immediate compassionate support and, when needed, direct referrals to professional crisis resources.",
    color: "from-green-primary to-green-light",
  },
  {
    icon: TreePine,
    title: "Personal Growth",
    description:
      "Become the best version of yourself. Build resilience, sharpen self-awareness, and develop emotional intelligence through meaningful conversations.",
    color: "from-orange-primary to-[#f5956e]",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <PageHeader
        title="Services"
        description="From anxiety relief to personal growth, Counsailor offers AI-powered mental health support designed to meet you exactly where you are."
      />

      {/* Services Grid */}
      <section className="bg-bg-secondary">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-title">Services</span>
            <h2 className="section-heading mt-3">
              Empowering Minds — Our Mental Health Consulting Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient top bar */}
                <div
                  className={`h-1.5 w-full bg-linear-to-r ${service.color}`}
                />

                <div className="p-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex-center mb-5`}
                  >
                    <service.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <button className="text-green-primary font-semibold text-sm hover:text-orange-primary transition-colors cursor-pointer flex items-center gap-1 group/btn">
                    Learn More
                    <span className="inline-block transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bg-primary">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-title">How It Works</span>
            <h2 className="section-heading mt-3">
              Three Simple Steps to Better Mental Health
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                desc: "Create your account and complete a simple onboarding to help us understand your needs.",
              },
              {
                step: "02",
                title: "Start Chatting",
                desc: "Begin a conversation with our AI counselor. Share what's on your mind in a safe space.",
              },
              {
                step: "03",
                title: "Feel Better",
                desc: "Track your progress and continue your journey towards improved mental wellness.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-primary flex-center">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-green-dark via-green-primary to-green-light">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            No waiting lists. No judgment. Just a safe, private conversation that could change everything. Take the first step right now.
          </p>
          <Link to="/chat" className="btn text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-shadow inline-block">
            Get Started — It's Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
