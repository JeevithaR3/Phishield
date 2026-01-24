import { ArrowRight, Link2, Search, ShieldCheck, Bell } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Link2,
    title: "Encounter a Link",
    description: "Click any shortened or suspicious URL while browsing the web.",
  },
  {
    step: "02",
    icon: Search,
    title: "Instant Analysis",
    description: "PhishGuard unshortens the URL and scans the destination for threats.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "AI Detection",
    description: "Our machine learning model analyzes page content for phishing patterns.",
  },
  {
    step: "04",
    icon: Bell,
    title: "Get Protected",
    description: "Receive instant alerts if threats are detected, keeping you safe.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Protection in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground">
            PhishGuard works silently in the background, analyzing every link you encounter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full">
                  <ArrowRight className="w-6 h-6 text-border" />
                </div>
              )}

              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
