import { ExternalLink, Shield, Brain, Droplets, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Phishing Detector",
    description: "Chrome extension with real-time phishing detection using machine learning.",
    icon: Shield,
    tags: ["Python", "TensorFlow", "React"],
    color: "from-primary to-orange-400",
  },
  {
    title: "AI Content Guardian",
    description: "Protecting children online with BERT-based toxic content detection.",
    icon: Brain,
    tags: ["NLP", "BERT", "Node.js"],
    color: "from-secondary to-purple-400",
  },
  {
    title: "Smart Water System",
    description: "AI-powered water distribution with dynamic pricing and analytics.",
    icon: Droplets,
    tags: ["AI/ML", "React", "MongoDB"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Blockchain KYC",
    description: "Decentralized identity verification using blockchain technology.",
    icon: Lock,
    tags: ["Solidity", "Web3", "React"],
    color: "from-emerald-500 to-green-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift"
            >
              {/* Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} p-6 relative`}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary p-0">
                  View Project
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
