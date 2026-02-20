import React, { useState, useRef, useEffect } from 'react';

const PROMPT = 'guest@portfolio ~ % ';

const techTree = `├── Frontend
│   ├── React / TypeScript
│   ├── Tailwind CSS
│   ├── Zustand (State)
│   ├── Framer Motion
│   └── Vite
├── Backend
│   ├── Node.js / Express
│   ├── PostgreSQL
│   ├── GraphQL
│   └── Redis
├── DevOps
│   ├── Docker
│   ├── AWS (EC2, S3, Lambda)
│   ├── GitHub Actions
│   └── Vercel
└── Tools
    ├── Figma
    ├── VS Code
    ├── Postman
    └── Linear`;

const helpText = `Available commands:
  tree        Show tech stack
  about       About me
  projects    List projects
  contact     Contact info
  clear       Clear terminal
  help        Show this help`;

const aboutText = `
  ╔══════════════════════════════════════╗
  ║  Senior Frontend Engineer           ║
  ║  5+ years building for the web      ║
  ║  Design systems enthusiast          ║
  ║  Open source contributor            ║
  ╚══════════════════════════════════════╝`;

const projectsText = `
  1. E-Commerce Platform    — React, Node.js, Stripe
  2. AI Chat Application    — WebSockets, OpenAI
  3. Portfolio OS            — React, Zustand, Tailwind`;

const contactText = `
  Email:    hello@portfolio.dev
  GitHub:   github.com/developer
  LinkedIn: linkedin.com/in/developer`;

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