import { Mail, Phone, Github, Linkedin, Send, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const GITHUB_URL = 'https://github.com/bhaskarchowdary826';
const LINKEDIN_URL = 'https://www.linkedin.com/in/bhaskar-goditi-7169b0240';
const WHATSAPP_URL = 'https://wa.me/917852910316';
const INSTAGRAM_URL = 'https://www.instagram.com/bhas_kar.009?igsh=MTViaGl2ZDBsY25nbw==';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="mono text-primary text-sm mb-4">What's Next?</p>
            <h2 className="section-heading mb-6">
              Let's{' '}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              I'm currently looking for new opportunities where I can contribute my AI/ML expertise. 
              Whether you have a question, a project idea, or just want to say hi, 
              my inbox is always open!
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="mailto:bhaskargoditi@gmail.com" className="gradient-border p-6 card-hover group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">bhaskargoditi@gmail.com</p>
              </a>
              <a href="tel:+917852910316" className="gradient-border p-6 card-hover group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 78529 10316</p>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gradient-border p-6 card-hover group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Chat with me</p>
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg glow-effect" asChild>
              <a href="mailto:bhaskargoditi@gmail.com">
                <Send size={20} className="mr-2" />
                Say Hello
              </a>
            </Button>
            
            <div className="flex items-center justify-center gap-6 mt-12">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Github size={28} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Linkedin size={28} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <MessageCircle size={28} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Instagram size={28} />
              </a>
              <a href="mailto:bhaskargoditi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Mail size={28} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
