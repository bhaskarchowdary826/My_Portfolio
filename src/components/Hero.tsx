import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono text-primary text-sm mb-6 tracking-wider uppercase"
            >
              AI/ML Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text">Goditi Bhaskar</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-foreground/90 text-balance"
            >
              Gen AI |{' '}
              <span className="text-primary">  LLM Expert</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              AI Engineer with 1.5+ years of experience designing multi-agent architectures,
              RAG pipelines, and real-time conversational AI systems. I build scalable backend
              AI services using FastAPI, LangGraph, and modern cloud infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                asChild
              >
                <a href="/Goditi_Bhaskar_CV.pdf" download>
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-[50%] opacity-50 blur-xl animate-pulse-glow group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-transparent to-primary rounded-[50%] animate-spin-slow opacity-30" style={{ animationDuration: '10s' }} />
              <div className="relative w-60 h-72 md:w-68 md:h-80 lg:w-72 lg:h-96 rounded-[50%] overflow-hidden border-2 border-primary/20 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40">
                <img
                  src={profilePhoto}
                  alt="Goditi Bhaskar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
