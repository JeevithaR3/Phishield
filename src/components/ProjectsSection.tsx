import { ExternalLink, Github, Shield, Brain, Droplets, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Phishing Detector",
    subtitle: "Chrome Extension + Web Dashboard",
    description: "Multi-purpose AI-powered phishing detection system with real-time threat analysis, browser extension, and comprehensive admin dashboard.",
    icon: Shield,
    tags: ["Python", "TensorFlow", "React", "Chrome API"],
    color: "from-primary to-orange-400",
  },
  {
    title: "AI Defender for Children",
    subtitle: "Content Safety Platform",
    description: "Chrome extension and dashboard detecting toxic content using BERT/RoBERTa models to protect children from harmful online content.",
    icon: Brain,
    tags: ["NLP", "BERT", "RoBERTa", "React", "Node.js"],
    color: "from-secondary to-purple-400",
  },
  {
    title: "Virtual Water Distribution",
    subtitle: "AI Credit System",
    description: "Intelligent water distribution system with dynamic pricing, interactive dashboards, AI chatbot assistance, and integrated payment solutions.",
    icon: Droplets,
    tags: ["AI/ML", "React", "MongoDB", "Stripe"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Blockchain KYC System",
    subtitle: "Secure Verification",
    description: "Decentralized Aadhaar KYC verification leveraging blockchain technology for enhanced security and privacy in identity verification.",
    icon: Lock,
    tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    color: "from-emerald-500 to-green-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my best work in AI/ML, web development, and blockchain technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.subtitle}</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1 gradient-primary text-primary-foreground">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
