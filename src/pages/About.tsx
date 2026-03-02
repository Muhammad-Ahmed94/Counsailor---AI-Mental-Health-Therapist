import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import {
  Shield,
  Brain,
  Clock,
  Lock,
  Heart,
  MessagesSquare,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insight",
    description:
      "Powered by advanced AI trained on therapeutic frameworks, Counsailor understands your emotions and responds with clinically-informed guidance.",
  },
  {
    icon: Shield,
    title: "Safe & Confidential",
    description:
      "Every conversation is encrypted end-to-end. Your thoughts stay between you and Counsailor — no judgments, no data sharing, ever.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Mental health doesn't wait for office hours. Get compassionate support at 3 AM or 3 PM — no appointments, no waiting rooms.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Your data is never sold, shared, or used for ads. We believe your mental health journey is deeply personal — and it stays that way.",
  },
  {
    icon: Heart,
    title: "Empathetic Approach",
    description:
      "Built with genuine empathy at its core. Counsailor listens without bias and responds with warmth, patience, and understanding.",
  },
  {
    icon: MessagesSquare,
    title: "Natural Conversations",
    description:
      "No awkward menus or rigid scripts. Just type what's on your mind and have a flowing, natural conversation like you would with a real therapist.",
  },
];

const stats = [
  { value: "10K+", label: "Users Helped" },
  { value: "50K+", label: "Sessions Completed" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Availability" },
];

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <PageHeader
        title="About Us"
        description="We believe everyone deserves access to quality mental health support. Counsailor bridges the gap between needing help and getting it — instantly."
      />

      {/* Our Mission Section */}
      <section className="bg-bg-secondary">
        <div className="container-custom py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Illustration */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-linear-to-br from-green-primary/10 to-orange-primary/10 rounded-3xl blur-xl" />
                <img
                  src="/about-illustration.png"
                  alt="About Counsailor illustration"
                  className="relative w-full object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
              <span className="section-title">About Us</span>
              <h2 className="section-heading">
                Discover the Faces Behind Our Mental Health Consultancy
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Counsailor was born from a simple truth: millions of people struggle silently because therapy feels inaccessible, expensive, or intimidating. We built an AI companion that breaks down those barriers — offering professional-grade mental health support that's available to everyone.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Our mission is to make mental wellness as normal as physical fitness. No stigma, no barriers — just a safe space to heal, grow, and thrive.
              </p>
              <button className="btn w-fit mt-2">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-green-primary">
        <div className="container-custom py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 text-center"
              >
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-white/70 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-bg-primary">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-title">Why Choose Us</span>
            <h2 className="section-heading mt-3">
              What Makes Counsailor Different
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-green-primary/10 flex-center mb-5 group-hover:bg-orange-primary/10 transition-colors">
                  <feature.icon
                    size={26}
                    className="text-green-primary group-hover:text-orange-primary transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
