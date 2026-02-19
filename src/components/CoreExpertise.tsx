import { Bot, Database, Radio, Server, Brain, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const expertiseCards = [
  {
    icon: Bot,
    title: 'Agentic AI Systems',
    description:
      'I design and ship LangGraph-powered multi-agent systems — Supervisor agents, SQL agents, and Query Expander nodes — that autonomously reason, route, and respond in 2–8 seconds at production load.',
    tag: 'LangGraph · Multi-Agent',
  },
  {
    icon: Database,
    title: 'RAG & Document Intelligence',
    description:
      'I build end-to-end RAG pipelines — semantic chunking, embedding generation, vector retrieval with Qdrant and Pinecone, and grounded LLM responses. Enterprise documents become queryable knowledge bases.',
    tag: 'RAG · Qdrant · Pinecone',
  },
  {
    icon: Radio,
    title: 'Real-Time Voice AI',
    description:
      'I engineer speech-to-speech calling agents using OpenAI Realtime API and Twilio over bidirectional WebSockets — with persona conditioning, live interruption handling, and zero STT→text→TTS lag.',
    tag: 'OpenAI Realtime · LiveKit · Twilio',
  },
  {
    icon: Server,
    title: 'AI Backend Engineering',
    description:
      'I build the infrastructure that keeps AI running in production — FastAPI and DRF APIs, multi-tenant data isolation, Socket.IO real-time streaming, Selenium scraping pipelines, and Docker deployments on AWS and Azure.',
    tag: 'FastAPI · Docker · AWS · Azure',
  },
  {
    icon: Brain,
    title: 'ML & DL Model Development',
    description:
      'I train, fine-tune, and deploy ML/DL models — CNNs, RNNs, LSTMs, and Transformers — for classification, regression, clustering, NLP, and computer vision. Full lifecycle from raw data to production inference.',
    tag: 'PyTorch · TensorFlow · Fine-Tuning',
  },
  {
    icon: Cpu,
    title: 'MLOps & Cloud Deployment',
    description:
      'I containerize and ship AI services on AWS (EC2, S3, Bedrock) and Azure — handling model versioning, automated monitoring, and scalable serving so models that work in dev keep working under real traffic.',
    tag: 'MLOps · AWS · Azure · Docker',
  },
];

const CoreExpertise = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="mono text-primary text-sm mb-4 tracking-wider uppercase">What I Do</p>
              <h2 className="section-heading">
                Core Expertise{' '}
                <span className="gradient-text">& Services</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="gradient-border p-6 md:p-8 card-hover group h-full">

                  {/* icon — circular, matches Contact cards */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="text-primary" size={22} />
                  </div>

                  {/* title */}
                  <h3 className="font-semibold text-base mb-3 text-foreground">
                    {card.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* tag pill */}
                  <span className="inline-block text-[11px] font-medium text-primary/80 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 tracking-wide">
                    {card.tag}
                  </span>

                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;