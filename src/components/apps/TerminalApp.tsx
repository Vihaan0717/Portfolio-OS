import React, { useState, useRef, useEffect } from 'react';

const PROMPT = 'rohit@portfolio ~ % ';

const techTree = `├── Cloud & DevOps
│   ├── AWS (S3, Lambda, API Gateway)
│   ├── Azure
│   ├── Git / GitHub
│   └── Salesforce
├── Programming
│   ├── Python / Java
│   ├── Dart / Flutter
│   ├── React / Node.js
│   └── Spring
├── Data & Analytics
│   ├── SQL / MongoDB / Hive
│   ├── Tableau / Excel
│   └── KPI Design
└── Tools
    ├── VS Code
    ├── Git Bash
    └── Windows`;

const helpText = `Available commands:
  tree        Show tech stack
  about       About me
  projects    List projects
  contact     Contact info
  clear       Clear terminal
  help        Show this help`;

const aboutText = `
  ╔══════════════════════════════════════╗
  ║  Mugasala Rohit                      ║
  ║  Cloud & AI Enthusiast               ║
  ║  6+ Job Simulations completed        ║
  ║  AWS & IBM Certified                 ║
  ╚══════════════════════════════════════╝`;

const projectsText = `
  1. AWS Employee System — Serverless, S3, Lambda
  2. Jarvis Voice AI     — React, Node, LLaMA2
  3. Portfolio OS        — This Desktop Environment`;

const contactText = `
  Email:    angerkings00@gmail.com
  LinkedIn: linkedin.com/in/kanna143
  Phone:    +91 9154716156`;

const TerminalApp: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to Portfolio Terminal v1.0.0',
    'Type "help" for available commands.\n',
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output = '';

    switch (trimmed) {
      case 'tree':
        output = techTree;
        break;
      case 'help':
        output = helpText;
        break;
      case 'about':
        output = aboutText;
        break;
      case 'projects':
        output = projectsText;
        break;
      case 'contact':
        output = contactText;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        setHistory((h) => [...h, PROMPT]);
        setInput('');
        return;
      default:
        output = `zsh: command not found: ${trimmed}`;
    }

    setHistory((h) => [...h, `${PROMPT}${cmd}`, output]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  return (
    <div
      className="h-full font-mono text-xs p-4 overflow-auto"
      style={{ background: 'hsla(220, 20%, 8%, 0.92)', color: 'hsl(120, 100%, 80%)' }}
    >
      {history.map((line, i) => (
        <pre key={i} className="whitespace-pre-wrap leading-5">{line}</pre>
      ))}
      <div className="flex items-center">
        <span className="shrink-0">{PROMPT}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none border-none caret-current"
          style={{ color: 'inherit' }}
          autoFocus
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default TerminalApp;