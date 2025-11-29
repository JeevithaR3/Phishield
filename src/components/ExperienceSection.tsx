import { Trophy, FileText } from "lucide-react";

const hackathons = [
  { event: "Hack Nocturne 2025", achievement: "1st Runner-Up", role: "Team Lead" },
  { event: "Hack Horizon", achievement: "Finalist", role: "AI Developer" },
  { event: "CodeFury", achievement: "Top 10", role: "Blockchain Dev" },
  { event: "HackSky", achievement: "Participant", role: "UI Developer" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-section-bg">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hackathons */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Hackathons
            </h3>
            <div className="space-y-4">
              {hackathons.map((hack) => (
                <div
                  key={hack.event}
                  className="flex items-center justify-between p-4 bg-card rounded-xl border border-border"
                >
                  <div>
                    <p className="font-medium text-foreground">{hack.event}</p>
                    <p className="text-sm text-muted-foreground">{hack.role}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {hack.achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Research
            </h3>
            <div className="p-6 bg-card rounded-xl border border-border">
              <span className="text-xs font-medium px-3 py-1 gradient-purple text-primary-foreground rounded-full">
                Published
              </span>
              <h4 className="font-semibold text-foreground mt-4 mb-2">
                Prediction of Heart Disease Using Neural Networks
              </h4>
              <p className="text-sm text-muted-foreground">
                Developed a neural network model achieving 94% accuracy for early heart disease detection.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { value: "15+", label: "Team Projects" },
                { value: "5+", label: "AI/ML Projects" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-card rounded-xl border border-border text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
