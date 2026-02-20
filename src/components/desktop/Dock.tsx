import React, { useRef, useState, useCallback } from 'react';
import { useWindowStore } from '@/stores/windowStore';
import { FolderOpen, Terminal, Globe, FileText } from 'lucide-react';

const dockItems = [
  { id: 'finder', label: 'Finder', icon: FolderOpen, color: 'hsl(211, 100%, 50%)' },
  { id: 'terminal', label: 'Terminal', icon: Terminal, color: 'hsl(220, 20%, 15%)' },
  { id: 'safari', label: 'Safari', icon: Globe, color: 'hsl(211, 100%, 55%)' },
  { id: 'resume', label: 'Resume', icon: FileText, color: 'hsl(0, 72%, 51%)' },
];

const Dock: React.FC = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
  }, []);

  const getScale = (index: number) => {
    if (mouseX === null) return 1;
    const iconWidth = 56;
    const gap = 8;
    const iconCenter = index * (iconWidth + gap) + iconWidth / 2 + 16; // 16 for padding
    const distance = Math.abs(mouseX - iconCenter);
    const maxDistance = 120;
    if (distance > maxDistance) return 1;
    return 1 + 0.5 * (1 - distance / maxDistance);
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9999]">
      <div
        ref={dockRef}
        className="glass-dock rounded-2xl px-4 py-2 flex items-end gap-2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {dockItems.map((item, index) => {
          const scale = getScale(index);
          const isOpen = windows.find((w) => w.id === item.id)?.isOpen;
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex flex-col items-center gap-1">
              <button
                onClick={() => {
                  const win = windows.find((w) => w.id === item.id);
                  if (win?.isOpen && !win.isMinimized) {
                    closeWindow(item.id);
                  } else {
                    openWindow(item.id);
                  }
                }}
                className="relative flex items-center justify-center w-12 h-12 rounded-xl smooth-transition"
                style={{
                  transform: `scale(${scale}) translateY(${(scale - 1) * -16}px)`,
                  background: item.color,
                  transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                title={item.label}
              >
                <Icon className="w-6 h-6" style={{ color: 'white' }} strokeWidth={1.8} />
              </button>
              {isOpen && <div className="dock-indicator" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;