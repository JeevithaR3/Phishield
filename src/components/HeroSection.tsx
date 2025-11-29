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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

      {/* Social Links - Desktop */}
      <div className="hidden lg:flex flex-col gap-3 fixed left-8 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in">Hello, I'm</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Jeevitha R
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Full Stack Developer
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: "0.15s" }}>
              Specializing in AI/ML, Web Development, and Blockchain. 
              Hackathon winner & published researcher.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gradient-primary text-primary-foreground gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Mobile Social */}
            <div className="flex lg:hidden justify-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Geometric accents */}
              <div className="absolute -top-6 -right-6 w-20 h-20 gradient-primary rounded-2xl rotate-12 animate-float opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 gradient-purple rounded-xl -rotate-12 animate-float-delayed opacity-80" />
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Jeevitha R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Simple stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto lg:mx-0">
          {[
            { value: "9.87", label: "SGPA" },
            { value: "4+", label: "Hackathons" },
            { value: "10+", label: "Projects" },
            { value: "1", label: "Publication" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
