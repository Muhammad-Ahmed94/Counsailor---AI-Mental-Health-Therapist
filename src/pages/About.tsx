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
      "Lorem ipsum dolor sit amet consectetur. Advanced AI understanding of mental health patterns and therapeutic techniques.",
  },
  {
    icon: Shield,
    title: "Safe & Confidential",
    description:
      "Lorem ipsum dolor sit amet consectetur. Your conversations are private and encrypted end-to-end.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Lorem ipsum dolor sit amet consectetur. Get support whenever you need it, day or night, no appointments needed.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Lorem ipsum dolor sit amet consectetur. We never share your data. Your mental health journey stays yours.",
  },
  {
    icon: Heart,
    title: "Empathetic Approach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Designed with empathy at its core for a supportive experience.",
  },
  {
    icon: MessagesSquare,
    title: "Natural Conversations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Chat naturally like you would with a real therapist.",
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
        description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis."
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
                Lorem ipsum dolor sit amet consectetur. Convallis est urna
                adipiscing fringilla nulla diam lorem non mauris. Ultrices
                aliquet at quam adipiscing feugiat interdum mattis. Placerat
                donec risus diam sed et. A in ullamcorper ipsum.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae.
                Sed dignissim lacinia nunc.
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
