import { Monitor, Brain, Server, Link } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Full-stack applications with modern frameworks and responsive design.",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Machine learning models and intelligent applications for data-driven insights.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable APIs and database architecture with security best practices.",
  },
  {
    icon: Link,
    title: "Blockchain",
    description: "Smart contracts and decentralized applications for secure solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-section-bg">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What I Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-card rounded-xl border border-border hover-lift text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
