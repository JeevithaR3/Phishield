import { Link2, Zap, Shield, Bell, Eye, Lock } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "URL Unshortening",
    description: "Instantly reveals the true destination behind shortened URLs from bit.ly, tinyurl, and 100+ services.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our AI-powered engine analyzes pages in under a second, so you're protected before you click.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Shield,
    title: "Real-Time Protection",
    description: "Continuous monitoring scans every link you encounter, blocking threats before they reach you.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get immediate popup notifications when malicious content is detected on any webpage.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Eye,
    title: "Visual Indicators",
    description: "Clear safety badges show the security status of every link directly in your browser.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All analysis happens locally. We never collect or store your browsing data.",
    color: "bg-secondary/10 text-secondary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Stay Safe
          </h2>
          <p className="text-muted-foreground">
            Comprehensive protection against phishing attacks, malicious URLs, and online threats.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-card rounded-2xl border border-border p-8 hover-lift ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
