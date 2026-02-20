import React from 'react';
import { useWindowStore } from '@/stores/windowStore';
import { FolderOpen, Terminal, Globe, FileText } from 'lucide-react';

const desktopIcons = [
  { id: 'finder', label: 'Projects', icon: FolderOpen },
  { id: 'terminal', label: 'Terminal', icon: Terminal },
  { id: 'safari', label: 'Blog', icon: Globe },
  { id: 'resume', label: 'Resume', icon: FileText },
];

const DesktopIcons: React.FC = () => {
  const { openWindow } = useWindowStore();

  return (
    <div className="absolute top-10 right-6 flex flex-col gap-4 pt-4">
      {desktopIcons.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onDoubleClick={() => openWindow(item.id)}
            className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-foreground/5 smooth-transition group"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center glass-panel group-hover:scale-105 smooth-transition">
              <Icon className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />
            </div>
            <span className="text-[11px] font-medium text-foreground/90 drop-shadow-sm">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DesktopIcons;