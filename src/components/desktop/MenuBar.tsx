import React from 'react';

const MenuBar: React.FC = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] h-7 glass-menubar flex items-center justify-between px-4 text-xs font-medium text-foreground/80">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-foreground">⌘ Portfolio</span>
        <span className="cursor-pointer hover:text-foreground smooth-transition">Finder</span>
        <span className="cursor-pointer hover:text-foreground smooth-transition">Edit</span>
        <span className="cursor-pointer hover:text-foreground smooth-transition">View</span>
        <span className="cursor-pointer hover:text-foreground smooth-transition">Help</span>
      </div>
      <div className="flex items-center gap-3">
        <span>{dateString}</span>
        <span>{timeString}</span>
      </div>
    </div>
  );
};

export default MenuBar;