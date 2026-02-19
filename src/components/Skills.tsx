import { Code2, Sparkles, Layers, DatabaseZap, Cloud, FlaskConical } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'SQL'],
  },
  {
    icon: Sparkles,
    title: 'Generative AI & LLM',
    skills: [
      'RAG', 'AI Agents', 'Prompt Engineering', 'LLM Evaluation',
      'Transformers', 'MCP', 'STT / TTS', 'OpenAI Realtime API',
      'Function Calling', 'LLM Fine-Tuning',
    ],
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    skills: [
      'LangChain', 'LangGraph', 'FastAPI', 'Django / DRF',
      'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas',
      'NumPy', 'LiveKit', 'Selenium',
    ],
  },
  {
    icon: FlaskConical,
    title: 'ML / DL',
    skills: [
      'Classification', 'Regression', 'Clustering',
      'CNN', 'RNN', 'LSTM', 'Transfer Learning',
      'Fine-Tuning', 'NLP', 'Computer Vision',
    ],
  },
  {
    icon: DatabaseZap,
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Qdrant', 'Pinecone'],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      'Docker', 'Git', 'GitHub / GitLab',
      'AWS (EC2, S3, Bedrock)', 'Azure',
      'WebSockets', 'REST APIs', 'CI/CD',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="mono text-primary text-sm mb-4 tracking-wider uppercase">Tech Stack</p>
              <h2 className="section-heading">
                Skills &{' '}
                <span className="gradient-text">Technologies</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <div className="gradient-border p-6 card-hover group h-full">

                  {/* icon — same circular style as Contact cards */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="text-primary" size={22} />
                  </div>

                  {/* title */}
                  <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-foreground">
                    {category.title}
                  </h3>

                  {/* divider */}
                  <div className="h-px w-full bg-white/6 mb-4" />

                  {/* skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11.5px] font-medium px-2.5 py-1 rounded-md
                          bg-primary/5 border border-primary/10 text-muted-foreground
                          hover:bg-primary/15 hover:border-primary/30 hover:text-primary
                          transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
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

export default Skills;