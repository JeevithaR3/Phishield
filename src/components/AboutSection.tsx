import { GraduationCap, Award, Code2, Lightbulb } from "lucide-react";

const skills = [
  { name: "Frontend Development", percentage: 90 },
  { name: "Backend Development", percentage: 85 },
  { name: "AI/ML Integration", percentage: 80 },
  { name: "Blockchain Development", percentage: 75 },
];

const highlights = [
  { icon: GraduationCap, title: "REVA University", subtitle: "B.Tech CSE - SGPA 9.87" },
  { icon: Award, title: "Hackathon Winner", subtitle: "1st Runner-Up Hack Nocturne" },
  { icon: Code2, title: "Full Stack", subtitle: "AI/ML & Web Development" },
  { icon: Lightbulb, title: "Innovator", subtitle: "Published Researcher" },
];

const techStack = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "TensorFlow", "PyTorch", "Solidity", "Git"
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            I Can Develop Anything
            <br />
            <span className="text-gradient">For Your Needs</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Highlights */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-card p-6 rounded-xl shadow-card hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I am a dedicated technophile currently pursuing B.Tech in Computer Science and Engineering 
              at REVA University. My passion lies in creating innovative solutions through programming, 
              AI/ML integration, and web development. With a strong academic record and hands-on experience 
              in hackathons, I bring both theoretical knowledge and practical skills to every project.
            </p>
          </div>

          {/* Right - Skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
