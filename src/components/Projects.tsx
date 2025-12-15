import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, secure payments via Stripe, and an intuitive admin dashboard for managing products and orders.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    title: 'AI Chat Assistant',
    description:
      'An intelligent chatbot powered by OpenAI GPT-4 with context-aware responses, conversation memory, and a sleek modern interface.',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.',
    technologies: ['React', 'Firebase', 'Framer Motion', 'Zustand'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather application featuring animated backgrounds, 7-day forecasts, and location-based weather alerts.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'SCSS'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Portfolio Generator',
    description:
      'A CLI tool that generates stunning developer portfolios from a simple JSON configuration file with multiple theme options.',
    technologies: ['Node.js', 'Handlebars', 'CLI', 'CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Crypto Tracker',
    description:
      'Real-time cryptocurrency tracking app with price alerts, portfolio management, and historical data visualization.',
    technologies: ['React Native', 'CoinGecko API', 'Redux', 'D3.js'],
    githubUrl: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
            <span className="text-primary font-mono">02.</span> My Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
