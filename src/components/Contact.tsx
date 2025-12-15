import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
            <span className="text-primary font-mono">04.</span> Get In Touch
          </h2>
          <div className="h-px bg-border flex-1 max-w-md" />
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card mb-8 animate-slide-up">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a question, 
              a project idea, or just want to say hi, I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">daniel@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
            
            <a
              href="mailto:daniel@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl glow-button animate-pulse-glow transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
