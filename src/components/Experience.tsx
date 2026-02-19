import { Briefcase, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const experiences = [
  {
    title: 'AI/ML Developer',
    company: 'Telepathy Infotech Pvt Ltd',
    location: 'Jaipur, India',
    period: 'Oct 2024 – Present',
    description: [
      'Engineered a production LangGraph multi-agent platform — Supervisor, Query Expander, and SQL Agent nodes — backed by Qdrant vector search and served via FastAPI, achieving consistent 2–8 second end-to-end response times under real load.',
      'Architected a multi-tenant AI real-estate assistant with NLP-driven property queries, function-calling pipelines, tenant-level data isolation, and Socket.IO real-time streaming — handling multiple clients on a single deployed instance.',
      'Built a multimodal real-time voice agent using LiveKit with STT, TTS, and VAD integration — enabling low-latency voice and text conversations with LLM orchestration, from scratch to production deployment.',
      'Designed and fine-tuned ML/DL models across classification, regression, and clustering tasks using transfer learning — owning the full lifecycle from raw data preprocessing to cloud deployment on AWS and Azure.',
      'Built and maintained RESTful APIs with FastAPI and Django REST Framework; developed Selenium-based scraping pipelines; deployed all services as containerized applications using Docker on AWS (EC2, S3, Bedrock) and Azure.',
    ],
    technologies: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Qdrant', 'LiveKit', 'PyTorch', 'TensorFlow', 'Docker', 'AWS', 'Azure', 'Socket.IO'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="mono text-primary text-sm mb-4 tracking-wider uppercase">Career</p>
              <h2 className="section-heading">
                Work{' '}
                <span className="gradient-text">Experience</span>
              </h2>
            </div>
          </AnimatedSection>

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.1}>
              <div className="gradient-border p-6 md:p-8">

                {/* header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6 pb-6 border-b border-white/6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      {/* live badge */}
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm mt-1">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} />
                        {exp.company}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary mono text-sm shrink-0">
                    <Calendar size={13} />
                    {exp.period}
                  </div>
                </div>

                {/* bullets */}
                <ul className="space-y-4 text-sm text-muted-foreground mb-7">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary flex-shrink-0 mt-0.5">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs mono text-primary bg-primary/10 border border-primary/15 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;