import { Trophy, Users, Brain, Code, FileText } from "lucide-react";

const hackathons = [
  {
    event: "Hack Nocturne 2025",
    achievement: "1st Runner-Up",
    role: "Team Lead & Backend Developer",
    description: "Led a team of 4, developed full-stack AI-powered solution",
    highlight: true,
  },
  {
    event: "Hack Horizon",
    achievement: "Finalist",
    role: "AI Developer",
    description: "Built real-time ML pipeline for data processing",
    highlight: false,
  },
  {
    event: "CodeFury",
    achievement: "Top 10",
    role: "Blockchain Developer",
    description: "Developed secure KYC verification system on blockchain",
    highlight: false,
  },
  {
    event: "HackSky",
    achievement: "Participant",
    role: "UI Developer",
    description: "Created responsive interfaces for web applications",
    highlight: false,
  },
];

const research = {
  title: "Prediction of Heart Disease by Implementation of Neural Network Algorithm",
  contribution: "Developed neural network model achieving 94% accuracy",
  status: "Published",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hackathons & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Trophy, value: "4+", label: "Hackathons" },
            { icon: Users, value: "15+", label: "Team Projects" },
            { icon: Brain, value: "5+", label: "AI/ML Projects" },
            { icon: Code, value: "10+", label: "Web Apps" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl shadow-card hover-lift">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Hackathon Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Hackathon Journey
            </h3>
            <div className="space-y-4">
              {hackathons.map((hack, index) => (
                <div
                  key={hack.event}
                  className={`relative pl-8 pb-4 ${index !== hackathons.length - 1 ? "border-l-2 border-border" : ""}`}
                >
                  <div className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${hack.highlight ? "gradient-primary" : "bg-muted border-2 border-primary"}`} />
                  <div className={`p-4 rounded-xl ${hack.highlight ? "bg-primary/5 border border-primary/20" : "bg-card"}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{hack.event}</h4>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${hack.highlight ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        {hack.achievement}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium">{hack.role}</p>
                    <p className="text-muted-foreground text-sm">{hack.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Research Publication
            </h3>
            <div className="bg-card p-6 rounded-xl shadow-card border-l-4 border-primary">
              <span className="inline-block px-3 py-1 gradient-purple text-primary-foreground text-xs rounded-full mb-4">
                {research.status}
              </span>
              <h4 className="font-semibold text-foreground text-lg mb-3">{research.title}</h4>
              <p className="text-muted-foreground">{research.contribution}</p>
            </div>

            {/* Skills highlight */}
            <div className="mt-8 p-6 bg-section-bg rounded-xl">
              <h4 className="font-semibold text-foreground mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { skill: "Team Leadership", level: "Advanced" },
                  { skill: "Problem Solving", level: "Advanced" },
                  { skill: "Communication", level: "Excellent" },
                  { skill: "Fast Learner", level: "Expert" },
                ].map((item) => (
                  <div key={item.skill} className="flex justify-between items-center">
                    <span className="text-sm text-foreground">{item.skill}</span>
                    <span className="text-xs text-primary font-medium">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
