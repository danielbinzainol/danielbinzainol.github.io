import TechBadge from './TechBadge';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'],
  },
  {
    title: 'Other',
    skills: ['Figma', 'Agile', 'Testing', 'SEO', 'Performance', 'Accessibility'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
            <span className="text-primary font-mono">03.</span> Skills & Technologies
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary font-mono">
                {'// '}{category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.15) + (index * 0.05)}s` }}
                  >
                    <TechBadge name={skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
