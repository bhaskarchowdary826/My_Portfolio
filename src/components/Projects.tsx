import { Github, Folder } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'WEDNES AI',
    subtitle: 'No-Code AI Agent Builder Platform',
    description: 'A full-stack, production-ready platform that enables users to build and deploy RAG, SQL, and Image Generation agents without writing code. Features a visual pipeline builder, multi-LLM support (OpenAI, Groq, Gemini, Claude), vector database integration, secure API key management, and dynamic code generation that exports fully runnable Python applications.',
    technologies: ['FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'React', 'OpenAI', 'Groq', 'Gemini'],
    github: 'https://github.com/Prashanth-TechAI/WEDNES-AI-Backend',
    featured: true,
  },
  {
    title: 'DocuMind',
    subtitle: 'Production-Ready Document Q&A System (RAG)',
    description: 'A full-stack Retrieval-Augmented Generation (RAG) platform that transforms PDF documents into interactive knowledge sources. Implements an end-to-end RAG pipeline including document parsing, chunking, embedding generation (HuggingFace), FAISS vector indexing, and context-grounded response generation via LangChain and Groq.',
    technologies: ['FastAPI', 'Next.js', 'LangChain', 'Groq', 'HuggingFace', 'FAISS'],
    github: 'https://github.com/bhaskarchowdary826/DocuMind',
    featured: true,
  },
  {
    title: 'AI Calling Agent',
    subtitle: 'Real-Time Speech-to-Speech AI System',
    description: 'A real-time AI calling agent built using OpenAI\'s Realtime API and Twilio Voice, enabling low-latency, bidirectional voice conversations over phone calls. Streams live audio between Twilio and OpenAI via WebSockets, supports natural interruption handling, and dynamically configures AI behavior using persona-driven system prompts.',
    technologies: ['FastAPI', 'WebSockets', 'OpenAI Realtime API', 'Twilio'],
    github: '#',
    featured: true,
  },
  {
    title: 'JD Scraper',
    description: 'A full-stack lead generation platform that extracts structured business data from JustDial across 300+ Indian cities. Integrates a Next.js dashboard with a Python Selenium engine — supports single target, city sweep, and multi-category blast modes with live progress tracking and CSV/Excel export.',
    technologies: ['Next.js', 'Python', 'Selenium', 'FastAPI'],
    github: 'https://github.com/bhaskarchowdary826/JDScrapper',
  },
  {
    title: 'Blog Writing Agent',
    description: 'A multi-agent AI system that autonomously researches any topic, synthesizes information from live web sources, and generates publish-ready blog posts. Orchestrates specialized agents for planning, web research (SerpAPI), content cleaning, and writing using GPT-4o-mini via LangGraph.',
    technologies: ['LangGraph', 'FastAPI', 'GPT-4o-mini', 'SerpAPI'],
    github: 'https://github.com/bhaskarchowdary826/Blog_Writing_Agent',
  },
  {
    title: 'AI Safe Drive',
    description: 'A computer vision–based driver monitoring system that detects emotions and drowsiness in real time using webcam input. Combines CNN-based emotion classification (FER-2013) with eye/head movement tracking to trigger alerts and play emotion-based music for the driver.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Dlib'],
    github: 'https://github.com/bhaskarchowdary826/AI_SAFE-DRIVE',
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="mono text-primary text-sm mb-4">Projects</p>
              <h2 className="section-heading">
                Things I've{' '}
                <span className="gradient-text">Built</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={0.1}>
                <div className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}>
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden group relative">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Folder size={64} className="text-primary/30" />
                      </div>
                    </div>
                  </div>

                  <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'} row-start-1 z-10`}>
                    <p className="mono text-primary text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    {'subtitle' in project && project.subtitle && (
                      <p className="text-muted-foreground text-sm italic mb-3">{project.subtitle}</p>
                    )}

                    <div className="gradient-border p-6 mb-4">
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className="mono text-sm text-muted-foreground">{tech}</span>
                      ))}
                    </div>

                    <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {project.github && project.github !== '#' ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors"><Github size={20} /></a>
                      ) : (
                        <Github size={20} className="text-muted-foreground/30" />
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <h3 className="text-center text-2xl font-bold mb-12">Other Noteworthy Projects</h3>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="gradient-border p-6 card-hover group h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Folder size={40} className="text-primary" />
                    <div className="flex gap-4">
                      {project.github && <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="mono text-xs text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
