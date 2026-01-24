import { Chrome, Download, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Chrome,
    title: "1. Install Extension",
    description: "Click the 'Add to Chrome' button to open the Chrome Web Store. Click 'Add to Chrome' on the extension page.",
  },
  {
    icon: Download,
    title: "2. Confirm Installation",
    description: "A popup will appear asking for permissions. Click 'Add extension' to complete the installation.",
  },
  {
    icon: Settings,
    title: "3. Pin to Toolbar",
    description: "Click the puzzle icon in Chrome's toolbar, then click the pin icon next to PhishGuard for easy access.",
  },
  {
    icon: CheckCircle2,
    title: "4. Start Browsing Safely",
    description: "That's it! PhishGuard will now automatically protect you from phishing attacks and malicious URLs.",
  },
];

const DocumentationSection = () => {
  return (
    <section id="docs" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Documentation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-muted-foreground mb-8">
              Installing PhishGuard takes less than a minute. Follow these simple steps to start protecting yourself from online threats.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gradient-primary text-primary-foreground gap-2 rounded-full px-8 mt-8">
              <Chrome className="w-5 h-5" />
              Install Now — Free
            </Button>
          </div>

          {/* Right Content - Visual Guide */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-card">
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Chrome className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Chrome Web Store</p>
                    <p className="text-sm text-muted-foreground">Extensions</p>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">PhishGuard</h4>
                      <p className="text-sm text-muted-foreground mb-3">Phishing & Malware Protection</p>
                      <div className="flex items-center gap-3">
                        <Button size="sm" className="gradient-primary text-primary-foreground rounded-full text-xs">
                          Add to Chrome
                        </Button>
                        <span className="text-xs text-muted-foreground">Free</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {["Real-time phishing detection", "URL unshortening", "Privacy-focused", "Zero configuration"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
              100% Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
