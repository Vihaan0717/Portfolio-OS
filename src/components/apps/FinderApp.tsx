import React, { useState } from 'react';
import { FolderOpen, FileText, ChevronRight, User, Briefcase, Code } from 'lucide-react';

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  icon?: React.ReactNode;
  children?: FileItem[];
  content?: string;
}

const fileSystem: FileItem[] = [
  {
    name: 'Projects',
    type: 'folder',
    icon: <Briefcase className="w-4 h-4" />,
    children: [
      {
        name: 'E-Commerce Platform',
        type: 'file',
        icon: <Code className="w-4 h-4" />,
        content: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, Stripe payments, and admin dashboard.',
      },
      {
        name: 'AI Chat Application',
        type: 'file',
        icon: <Code className="w-4 h-4" />,
        content: 'Real-time chat application with AI-powered responses. Built with WebSockets, OpenAI API, and React. Supports multi-user conversations.',
      },
      {
        name: 'Portfolio OS',
        type: 'file',
        icon: <Code className="w-4 h-4" />,
        content: 'This very portfolio! A macOS-inspired desktop environment built with React, Zustand, and Tailwind CSS featuring glassmorphism UI.',
      },
    ],
  },
  {
    name: 'About Me',
    type: 'folder',
    icon: <User className="w-4 h-4" />,
    children: [
      {
        name: 'Bio.txt',
        type: 'file',
        content: 'Senior Frontend Engineer with 5+ years of experience building scalable web applications. Passionate about design systems, performance, and developer experience.',
      },
      {
        name: 'Skills.txt',
        type: 'file',
        content: 'React • TypeScript • Node.js • Python • PostgreSQL • AWS • Docker • GraphQL • Tailwind CSS • Figma',
      },
      {
        name: 'Contact.txt',
        type: 'file',
        content: 'Email: hello@portfolio.dev\nGitHub: github.com/developer\nLinkedIn: linkedin.com/in/developer',
      },
    ],
  },
];

const FinderApp: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<FileItem | null>(fileSystem[0]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-48 border-r border-border/50 p-3 flex flex-col gap-1" style={{ background: 'hsla(220, 14%, 96%, 0.5)' }}>
        <span className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wider mb-1 px-2">
          Favorites
        </span>
        {fileSystem.map((item) => (
          <button
            key={item.name}
            onClick={() => { setSelectedFolder(item); setSelectedFile(null); }}
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm smooth-transition ${
              selectedFolder?.name === item.name
                ? 'bg-primary/10 text-primary'
                : 'text-foreground/70 hover:bg-accent'
            }`}
          >
            {item.icon || <FolderOpen className="w-4 h-4" />}
            {item.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* File List */}
        <div className="flex-1 p-3">
          {selectedFolder?.children?.map((file) => (
            <button
              key={file.name}
              onClick={() => setSelectedFile(file)}
              className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm smooth-transition ${
                selectedFile?.name === file.name
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/80 hover:bg-accent'
              }`}
            >
              {file.icon || <FileText className="w-4 h-4" />}
              {file.name}
              <ChevronRight className="w-3 h-3 ml-auto opacity-40" />
            </button>
          ))}
        </div>

        {/* Preview */}
        {selectedFile && (
          <div className="w-64 border-l border-border/50 p-4" style={{ background: 'hsla(220, 14%, 96%, 0.3)' }}>
            <h3 className="font-semibold text-sm mb-2 text-foreground">{selectedFile.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{selectedFile.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinderApp;