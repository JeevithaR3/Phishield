import { Button } from "@/components/ui/button";
import { Chrome, Shield, Zap, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ users
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Detect Phishing
              <br />
              <span className="text-gradient">In Under a Second</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              PhishGuard unshortens URLs and analyzes web pages in real-time to protect you from 
              malicious content. Get instant alerts before you become a victim.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary text-primary-foreground gap-2 rounded-full px-8 h-14 text-base">
                <Chrome className="w-5 h-5" />
                Add to Chrome — It's Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Detection Rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">&lt;1s</p>
                <p className="text-sm text-muted-foreground">Scan Time</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">500K+</p>
                <p className="text-sm text-muted-foreground">Threats Blocked</p>
              </div>
            </div>
          </div>

          {/* Right Content - Browser Mockup */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl border border-border shadow-card p-6 animate-float">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 bg-muted rounded-lg px-4 py-2 text-sm text-muted-foreground truncate">
                  https://bit.ly/3x7Kj...
                </div>
              </div>

              {/* Extension Popup */}
              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center animate-pulse-glow">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">PhishGuard Active</p>
                    <p className="text-sm text-muted-foreground">Scanning URL...</p>
                  </div>
                </div>

                {/* Scan Animation */}
                <div className="relative bg-card rounded-xl p-4 mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent animate-scan" />
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">URL Unshortened</p>
                      <p className="text-xs text-muted-foreground truncate">https://malicious-site.com/login</p>
                    </div>
                  </div>
                </div>

                {/* Alert */}
                <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <div>
                    <p className="font-semibold text-destructive">Phishing Detected!</p>
                    <p className="text-sm text-muted-foreground">This site is unsafe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl border border-border shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Protected</p>
                <p className="text-xs text-muted-foreground">24/7 Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
