import { Monitor, Brain, Database, Rocket, Check } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks, responsive UI, and seamless backend integration.",
    features: ["React & Next.js", "Node.js & Express", "Responsive Design", "API Integration"],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent machine learning models and AI-powered applications for data-driven decision making.",
    features: ["Custom ML Models", "NLP & Computer Vision", "Real-time AI Apps", "Data Analytics"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with secure databases, APIs, and scalable architecture.",
    features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security Best Practices"],
  },
  {
    icon: Rocket,
    title: "Blockchain Development",
    description: "Decentralized applications and smart contracts for secure, transparent solutions.",
    features: ["Smart Contracts", "DApp Development", "Web3 Integration", "Token Systems"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">WHAT I OFFER</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Services I Will <span className="text-gradient">Provide For You</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-6 rounded-2xl shadow-card hover-lift border border-transparent hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
