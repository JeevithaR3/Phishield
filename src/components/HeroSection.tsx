import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jeevitha@email.com", label: "Email" },
];

const stats = [
  { value: "9.87", label: "SGPA" },
  { value: "4+", label: "Hackathons" },
  { value: "10+", label: "Projects" },
  { value: "1", label: "Publication" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-primary/40 animate-float" />
        <div className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-secondary/40 animate-float-delayed" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-accent/50 animate-float-slow" />
        <div className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Social Links - Vertical on desktop */}
      <div className="hidden lg:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="w-px h-12 bg-border mx-auto" />
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            aria-label={social.label}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
        <div className="w-px h-12 bg-border mx-auto" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Jeevitha</span>
              <br />
              <span className="text-foreground/80 text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Passionate about crafting innovative solutions with <span className="text-primary font-medium">AI/ML</span>, 
              <span className="text-secondary font-medium"> Web Development</span>, and 
              <span className="text-primary font-medium"> Blockchain</span>. 
              Hackathon winner & published researcher building the future of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gradient-primary text-primary-foreground gap-2 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-foreground hover:text-background px-8 transition-all hover:-translate-y-0.5" 
                asChild
              >
                <a href="#contact">Let's Connect</a>
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
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Main geometric background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6 animate-float" />
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-2 right-4 md:top-4 md:right-0 lg:right-8 w-16 h-16 md:w-24 md:h-24 gradient-primary rounded-2xl rotate-12 animate-float shadow-lg shadow-primary/30 z-0" />
            <div className="absolute -bottom-2 left-4 md:bottom-8 md:left-0 lg:left-8 w-14 h-14 md:w-20 md:h-20 gradient-purple rounded-2xl -rotate-12 animate-float-delayed shadow-lg shadow-secondary/30 z-0" />
            <div className="absolute top-1/3 -right-4 md:right-0 w-8 h-8 md:w-12 md:h-12 bg-accent rounded-xl rotate-45 animate-float-slow z-0" />
            
            {/* Dotted pattern */}
            <div className="absolute -bottom-8 right-0 lg:right-12 w-20 h-20 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />
                ))}
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="relative z-10">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]">
                {/* Outer ring */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-20 animate-pulse" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Jeevitha R - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card px-4 py-3 rounded-xl shadow-xl border border-border">
                  <p className="text-2xl md:text-3xl font-bold text-primary">2+</p>
                  <p className="text-xs text-muted-foreground font-medium">Years Learning</p>
                </div>

                {/* Tech badge */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-card px-4 py-3 rounded-xl shadow-xl border border-border">
                  <p className="text-2xl md:text-3xl font-bold text-secondary">AI</p>
                  <p className="text-xs text-muted-foreground font-medium">& ML Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 lg:mt-24 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`text-center ${index !== stats.length - 1 ? "md:border-r md:border-border" : ""}`}
                >
                  <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
