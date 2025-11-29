import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jeevitha@email.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-primary/20 animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-secondary/20 animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-accent/30 animate-float-slow" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Social Links - Vertical on desktop */}
            <div className="hidden lg:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-20">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <p className="text-primary font-medium mb-4 animate-slide-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Jeevitha R</span>
              <br />
              <span className="text-gradient">Full Stack Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Aspiring Full Stack Developer passionate about AI/ML, Web Development, and Blockchain. 
              Building innovative solutions and winning hackathons along the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gradient-primary text-primary-foreground gap-2 px-8">
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-foreground/20 hover:border-primary hover:text-primary px-8" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex lg:hidden justify-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Geometric shapes */}
            <div className="absolute -top-4 -right-4 md:top-0 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-geometric-orange rounded-lg rotate-12 animate-float z-0" />
            <div className="absolute -bottom-4 -left-4 md:bottom-10 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-geometric-purple rounded-lg -rotate-12 animate-float-delayed z-0" />
            <div className="absolute top-1/2 -right-8 md:right-0 w-8 h-8 md:w-12 md:h-12 bg-geometric-yellow rounded-lg rotate-45 animate-float-slow z-0" />

            {/* Profile Image Container */}
            <div className="relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-background shadow-card">
                <img
                  src={profilePhoto}
                  alt="Jeevitha R - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-3 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
