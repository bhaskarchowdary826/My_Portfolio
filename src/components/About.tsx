import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const expertiseList = [
  'Architecting LangGraph multi-agent systems with Supervisor, SQL, and Query Expander agents',
  'Building RAG pipelines with semantic chunking and vector retrieval using Qdrant and Pinecone',
  'Engineering real-time voice AI with OpenAI Realtime API, LiveKit, STT/TTS, and WebSockets',
  'Developing multi-tenant AI backends with FastAPI and containerized deployments on AWS and Azure',
  'Fine-tuning and deploying ML/DL models across the full lifecycle — preprocessing to production',
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="mono text-primary text-sm mb-4 tracking-wider uppercase">About Me</p>
              <h2 className="section-heading">
                Building AI That{' '}
                <span className="gradient-text">Works in Real World</span>
              </h2>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm an AI/ML Engineer focused on one thing —{' '}
                <span className="text-foreground font-medium">turning complex AI research into systems that run reliably in production</span>.
                From multi-agent orchestration and RAG pipelines to real-time voice AI, I build backend-first solutions that scale beyond the demo.
              </p>
              <p>
                With 1.5+ years of hands-on industry experience, I've shipped a LangGraph multi-agent platform 
                delivering responses in 2–8 seconds, a multi-tenant AI real-estate assistant with real-time 
                Socket.IO integration, and a speech-to-speech voice agent using OpenAI Realtime API with live 
                interruption handling — all in production environments.
              </p>
              
              <div className="pt-4">
                <p className="text-foreground font-medium mb-4">What I focus on:</p>
                <ul className="space-y-3">
                  {expertiseList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="pt-2">
                My goal is to keep pushing the boundary of what agentic AI can do in the real world —{' '}
                <span className="text-foreground font-medium">not just in notebooks, but in products people actually use</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;