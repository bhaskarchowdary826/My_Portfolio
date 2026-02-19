import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold gradient-text">
              Goditi Bhaskar
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              AI/ML Engineer
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built by Bhaskar<Heart size={14} className="text-primary" />
          </p>
          
          <p className="text-sm text-muted-foreground mono">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
