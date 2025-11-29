const skills = [
  { name: "Frontend", percentage: 90 },
  { name: "Backend", percentage: 85 },
  { name: "AI/ML", percentage: 80 },
  { name: "Blockchain", percentage: 75 },
];

const techStack = [
  "React", "Node.js", "Python", "TypeScript", "MongoDB", "TensorFlow"
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            A bit about me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a B.Tech Computer Science student at REVA University with a 9.87 SGPA. 
              Passionate about building innovative solutions through programming, AI/ML, and web development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a hackathon enthusiast and published researcher, I combine theoretical knowledge 
              with hands-on experience to create impactful projects.
            </p>
            
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                  <span className="text-primary text-sm font-medium">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
