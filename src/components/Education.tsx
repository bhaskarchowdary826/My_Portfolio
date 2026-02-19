import { GraduationCap, MapPin, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const educationData = [
  {
    degree: "Bachelor's Degree",
    field: "B.Tech Computer Science Engineering",
    specialization: "Specialized in Artificial Intelligence",
    institution: "Vivekananda Global University",
    location: "Jaipur, Rajasthan",
    board: null,
    result: "8.07 CGPA",
    resultLabel: "CGPA",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (12th)",
    field: "Sri Chaitanya Junior College",
    specialization: null,
    institution: "Sri Chaitanya Junior College",
    location: "Kakinada, Andhra Pradesh",
    board: "Andhra Pradesh State Board",
    result: "94.7%",
    resultLabel: "Percentage",
    icon: GraduationCap,
  },
  {
    degree: "10th Grade",
    field: "Suresh IIT Concept School",
    specialization: null,
    institution: "Suresh IIT Concept School",
    location: "Parvathipuram, Vizianagaram (dist), Andhra Pradesh",
    board: "Andhra Pradesh State Board",
    result: "9.8 GPA",
    resultLabel: "GPA",
    icon: GraduationCap,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="mono text-primary text-sm mb-4">Education</p>
              <h2 className="section-heading">
                My Academic{' '}
                <span className="gradient-text">Journey</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-10">
              {educationData.map((edu, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="flex gap-6 md:gap-10">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 relative z-10">
                        <GraduationCap size={28} className="text-primary" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 gradient-border p-6 card-hover group">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          {/* Degree label */}
                          <p className="mono text-primary text-xs mb-1 uppercase tracking-wider">
                            {edu.degree}
                          </p>

                          {/* Field of study */}
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                            {edu.field}
                          </h3>

                          {/* Specialization */}
                          {edu.specialization && (
                            <p className="text-muted-foreground text-sm mb-3 italic">
                              {edu.specialization}
                            </p>
                          )}

                          {/* Institution */}
                          <p className="text-foreground font-medium mb-2">
                            {edu.institution}
                          </p>

                          {/* Location */}
                          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                            <MapPin size={14} className="text-primary flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>

                          {/* Board */}
                          {edu.board && (
                            <p className="text-muted-foreground text-sm">
                              Board: <span className="text-foreground">{edu.board}</span>
                            </p>
                          )}
                        </div>

                        {/* Score badge */}
                        <div className="flex-shrink-0">
                          <div className="inline-flex flex-col items-center justify-center bg-primary/10 border border-primary/30 rounded-xl px-5 py-4 min-w-[100px]">
                            <Award size={20} className="text-primary mb-1" />
                            <span className="text-2xl font-bold text-primary leading-tight">
                              {edu.result}
                            </span>
                            <span className="mono text-xs text-muted-foreground mt-0.5">
                              {edu.resultLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
