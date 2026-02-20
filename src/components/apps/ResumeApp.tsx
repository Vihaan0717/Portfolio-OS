import React from 'react';
import { Mail, MapPin, Globe, Github, Linkedin, Calendar, Award } from 'lucide-react';

const ResumeApp: React.FC = () => {
  return (
    <div className="h-full overflow-auto p-6" style={{ background: 'hsla(0, 0%, 100%, 0.4)' }}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground">John Developer</h1>
        <p className="text-sm text-primary font-medium mt-1">Senior Frontend Engineer</p>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> hello@portfolio.dev</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> San Francisco, CA</span>
          <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> portfolio.dev</span>
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <a href="#" className="text-muted-foreground hover:text-primary smooth-transition"><Github className="w-4 h-4" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary smooth-transition"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>

      <div className="h-px bg-border/50 mb-5" />

      {/* Experience */}
      <section className="mb-5">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Calendar className="w-3 h-3" /> Experience
        </h2>
        {[
          { role: 'Senior Frontend Engineer', company: 'TechCorp', period: '2022 – Present', desc: 'Led design system development serving 50+ engineers. Reduced bundle size by 40%.' },
          { role: 'Frontend Engineer', company: 'StartupXYZ', period: '2020 – 2022', desc: 'Built real-time collaboration features used by 100K+ users. Implemented WebSocket architecture.' },
          { role: 'Junior Developer', company: 'AgencyABC', period: '2019 – 2020', desc: 'Developed responsive websites and landing pages for enterprise clients.' },
        ].map((exp) => (
          <div key={exp.role} className="mb-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
              <span className="text-[10px] text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-xs text-primary/80 font-medium">{exp.company}</p>
            <p className="text-xs text-muted-foreground mt-1">{exp.desc}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Award className="w-3 h-3" /> Skills
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Tailwind', 'Figma', 'Git', 'CI/CD'].map((skill) => (
            <span key={skill} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeApp;