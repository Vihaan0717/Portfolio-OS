import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useWindowStore } from '@/stores/windowStore';

interface WindowShellProps {
  id: string;
  children: React.ReactNode;
}

const WindowShell: React.FC<WindowShellProps> = ({ id, children }) => {
  const { windows, focusWindow, closeWindow, minimizeWindow, toggleMaximize, updatePosition } =
    useWindowStore();
  const win = windows.find((w) => w.id === id);
  const shellRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [closing, setClosing] = useState(false);
  const [minimizing, setMinimizing] = useState(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('.traffic-light')) return;
      isDragging.current = true;
      dragOffset.current = {
        x: e.clientX - (win?.position.x ?? 0),
        y: e.clientY - (win?.position.y ?? 0),
      };
      focusWindow(id);
      document.body.style.userSelect = 'none';
    },
    [id, win?.position, focusWindow]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(id, {
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [id, updatePosition]);

  if (!win || !win.isOpen) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeWindow(id);
      setClosing(false);
    }, 200);
  };

  const handleMinimize = () => {
    setMinimizing(true);
    setTimeout(() => {
      minimizeWindow(id);
      setMinimizing(false);
    }, 350);
  };

  if (win.isMinimized) return null;

  const isMaximized = win.isMaximized;
  const style: React.CSSProperties = isMaximized
    ? { top: 28, left: 0, width: '100%', height: 'calc(100% - 28px)', zIndex: win.zIndex }
    : {
        top: win.position.y,
        left: win.position.x,
        width: win.size.width,
        height: win.size.height,
        zIndex: win.zIndex,
      };

  return (
    <div
      ref={shellRef}
      className={`fixed glass-panel rounded-xl overflow-hidden flex flex-col shadow-2xl ${
        closing ? 'animate-window-close' : minimizing ? 'animate-window-minimize' : 'animate-window-open'
      }`}
      style={style}
      onMouseDown={() => focusWindow(id)}
    >
      {/* Title Bar */}
      <div className="window-title-bar" onMouseDown={handleMouseDown}>
        <div className="flex items-center gap-2 mr-4">
          <button
            className="traffic-light traffic-close"
            onClick={handleClose}
            aria-label="Close"
          />
          <button
            className="traffic-light traffic-minimize"
            onClick={handleMinimize}
            aria-label="Minimize"
          />
          <button
            className="traffic-light traffic-maximize"
            onClick={() => toggleMaximize(id)}
            aria-label="Maximize"
          />
        </div>
        <span className="text-sm font-medium text-foreground/70 flex-1 text-center pr-16">
          {win.title}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default WindowShell;