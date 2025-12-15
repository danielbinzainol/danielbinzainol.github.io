import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-primary mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hello, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">Daniel Bin Zainol</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I craft beautiful, performant web experiences with modern technologies. 
            Passionate about clean code, intuitive design, and pushing the boundaries of what's possible on the web.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="mailto:daniel@example.com"
              className="p-3 glass rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
          
          {/* CTA Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl glow-button animate-pulse-glow transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            View My Work
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
