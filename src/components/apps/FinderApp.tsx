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
        name: 'AWS Employee System',
        type: 'file',
        icon: <Code className="w-4 h-4" />,
        content: 'Serverless employee management system using AWS CloudFront, API Gateway, Lambda, S3, and DynamoDB. Automated processes for cost efficiency.',
      },
      {
        name: 'Jarvis Voice AI',
        type: 'file',
        icon: <Code className="w-4 h-4" />,
        content: 'Multilingual voice assistant built with React and Node.js. Features local LLM integration (LLaMA2) and real-time task automation.',
      },
      {
        name: 'Portfolio OS',
        type: 'file',
        icon: <Code className="w-4 h-4" />,
        content: 'MacOS-inspired desktop environment built with React and Tailwind CSS. Featuring glassmorphism, dynamic windowing, and interactive apps.',
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
        content: 'Mugasala Rohit is a tech-savvy CS undergraduate with hands-on experience in cloud computing, data analytics, and software development. Proficient in AWS, Salesforce, and Python.',
      },
      {
        name: 'Certifications.txt',
        type: 'file',
        content: '• Prompt Engineering (Vanderbilt)\n• AWS Cloud Essentials\n• Data Science (IBM)\n• Software Engineering (IBM)\n• Data Analyst (OneRoadmap)',
      },
      {
        name: 'Contact.txt',
        type: 'file',
        content: 'Name: Mugasala Rohit\nEmail: angerkings00@gmail.com\nPhone: +91 9154716156\nLinkedIn: linkedin.com/in/kanna143',
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