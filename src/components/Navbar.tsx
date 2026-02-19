import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const GITHUB_URL = 'https://github.com/bhaskarchowdary826';
const LINKEDIN_URL = 'https://www.linkedin.com/in/bhaskar-goditi-7169b0240';
const WHATSAPP_URL = 'https://wa.me/917852910316';
const INSTAGRAM_URL = 'https://www.instagram.com/bhas_kar.009?igsh=MTViaGl2ZDBsY25nbw==';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold gradient-text">GB</a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm font-medium">{link.name}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle size={18} /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
            <Button variant="outline" size="sm" className="ml-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="mailto:bhaskargoditi@gmail.com">
                <Mail size={14} className="mr-2" />
                Hire Me
              </a>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>{link.name}</a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
