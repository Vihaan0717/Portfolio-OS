import React from 'react';
import wallpaper from '@/assets/wallpaper.jpg';
import MenuBar from '@/components/desktop/MenuBar';
import Dock from '@/components/desktop/Dock';
import DesktopIcons from '@/components/desktop/DesktopIcons';
import WindowShell from '@/components/desktop/WindowShell';
import FinderApp from '@/components/apps/FinderApp';
import TerminalApp from '@/components/apps/TerminalApp';
import SafariApp from '@/components/apps/SafariApp';
import ResumeApp from '@/components/apps/ResumeApp';

const Index = () => {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative select-none"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <MenuBar />
      <DesktopIcons />

      <WindowShell id="finder">
        <FinderApp />
      </WindowShell>

      <WindowShell id="terminal">
        <TerminalApp />
      </WindowShell>

      <WindowShell id="safari">
        <SafariApp />
      </WindowShell>

      <WindowShell id="resume">
        <ResumeApp />
      </WindowShell>

      <Dock />
    </div>
  );
};

export default Index;