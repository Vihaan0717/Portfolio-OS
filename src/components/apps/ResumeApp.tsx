import React from 'react';
import { Mail, MapPin, Globe, Linkedin, Calendar, Award, Phone, BookOpen, Briefcase, Code, GraduationCap, CheckCircle2 } from 'lucide-react';

const ResumeApp: React.FC = () => {
  return (
    <div className="h-full overflow-auto p-6" style={{ background: 'hsla(0, 0%, 100%, 0.4)' }}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground">Mugasala Rohit</h1>
        <p className="text-sm text-primary font-medium mt-1">Computer Science Undergraduate | Cloud & AI Enthusiast</p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 9154716156</span>
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> angerkings00@gmail.com</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Rajahmundry, Andhra Pradesh</span>
          <span className="flex items-center gap-1"><Linkedin className="w-3 h-3" /> linkedin.com/in/kanna143</span>
        </div>
      </div>

      <div className="h-px bg-border/50 mb-5" />

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <BookOpen className="w-3 h-3" /> Professional Summary
        </h2>
        <p className="text-xs text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-3">
          Motivated and tech-savvy Computer Science undergraduate with hands-on experience in cloud computing, data analytics, and software development. Proficient in AWS, Salesforce, Flutter, and Python, with a solid foundation in data science and software engineering. Demonstrated ability to build scalable solutions and dashboards, and complete real-world simulations with Deloitte, Siemens, and Forage.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Briefcase className="w-3 h-3" /> Professional Experience
        </h2>
        {[
          {
            role: 'Salesforce Developer – Virtual Internship',
            company: 'Salesforce',
            period: 'Aug 2023 – Oct 2023',
            points: [
              'Customized Salesforce environment using VS Code and Lightning framework.',
              'Enhanced sales team efficiency by 25% and improved metrics tracking by 15%.',
              'Created impactful presentations using Excel and PowerPoint.'
            ]
          },
          {
            role: 'Cloud Engineering – Blackbucks Virtual Internship (AWS)',
            company: 'APSSDC',
            period: 'May 2023 – Jul 2023',
            points: [
              'Reduced AWS costs by 20% through usage analysis and optimization.',
              'Delivered market research reports to identify customer segments.',
              'Achieved 95% customer satisfaction with timely issue resolution.'
            ]
          }
        ].map((exp, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
              <span className="text-[10px] text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-xs text-primary font-medium">{exp.company}</p>
            <ul className="mt-1 list-disc list-inside text-[11px] text-muted-foreground space-y-0.5">
              {exp.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Job Simulations */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Globe className="w-3 h-3" /> Virtual Job Simulations
        </h2>
        {[
          { title: 'Solutions Architecture', company: 'Forage', desc: 'Designed simple and scalable hosting architecture and gained practical skills in cloud system design.' },
          { title: 'Project Management', company: 'Siemens Mobility', desc: 'Built KPIs and managed interactive dashboards for a railway infrastructure simulation.' },
          { title: 'Data Analytics', company: 'Deloitte Australia', desc: 'Completed real-world forensic technology and data analytics tasks with insights on corporate risk assessment.' }
        ].map((sim, i) => (
          <div key={i} className="mb-3">
            <h3 className="text-sm font-medium text-foreground">{sim.title} — {sim.company}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{sim.desc}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Code className="w-3 h-3" /> Projects
        </h2>
        {[
          {
            title: 'Employee Management System using AWS',
            period: 'Jul 2023 – Aug 2023',
            desc: 'Developed a serverless system using AWS CloudFront, API Gateway, Lambda, S3, and DynamoDB. Enabled secure and scalable data storage.'
          },
          {
            title: 'Jarvis Voice AI Assistant',
            period: 'Jan 2025 – Present',
            desc: 'Built a multilingual voice-enabled AI assistant using React, Node.js, and Web APIs. Integrated local LLM (LLaMA2) and fallback APIs.'
          }
        ].map((proj, i) => (
          <div key={i} className="mb-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-semibold text-primary">{proj.title}</h3>
              <span className="text-[10px] text-muted-foreground">{proj.period}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Award className="w-3 h-3" /> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
          {[
            'Prompt Engineering Specialization – Coursera (Vanderbilt)',
            'AWS Cloud Technical Essentials – Coursera (AWS)',
            'Data Science – IBM (Coursera)',
            'Introduction to Software Engineering – IBM (Coursera)',
            'Data Analyst Skill Certification – OneRoadmap',
            'Solutions Architecture – Forage',
            'Project Management – Siemens Mobility',
            'Data Analytics – Deloitte Australia'
          ].map((cert, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded bg-white/40 border border-white/20">
              <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
              <span className="text-foreground/80">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <GraduationCap className="w-3 h-3" /> Education
        </h2>
        {[
          { level: 'Bachelor of Technology in Computer Science', school: 'Godavari Institute of Engineering and Technology', period: '2021 – 2025', grade: 'CGPA: 7.39' },
          { level: 'Intermediate – MPC', school: 'Sri Chaitanya Junior College', period: '2020 – 2021', grade: 'CGPA: 7.9' },
          { level: 'Secondary School', school: 'Sri Chaitanya High School', period: 'Completion: 2019', grade: 'GPA: 8.5' }
        ].map((edu, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-medium text-foreground">{edu.level}</h3>
              <span className="text-[10px] text-muted-foreground">{edu.period}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">{edu.school}</p>
              <span className="text-[10px] font-semibold text-primary">{edu.grade}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1">
          <Award className="w-3 h-3" /> Technical Skills
        </h2>
        <div className="space-y-3">
          {[
            { label: 'Programming', skills: ['Java', 'Python', 'Dart', 'Flutter', 'React', 'Node.js', 'Spring'] },
            { label: 'Cloud & Platforms', skills: ['AWS', 'Azure', 'Salesforce'] },
            { label: 'Databases', skills: ['SQL', 'MongoDB', 'Hive'] },
            { label: 'Analytics', skills: ['Tableau', 'Excel', 'PowerPoint', 'KPI Design', 'Data Analysis'] },
            { label: 'Dev Tools', skills: ['Git', 'VS Code', 'Git Bash', 'Windows'] }
          ].map((category) => (
            <div key={category.label}>
              <h4 className="text-[10px] font-bold text-muted-foreground uppercase mb-1.5">{category.label}</h4>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 cursor-default transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeApp;