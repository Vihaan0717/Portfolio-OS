import { create } from 'zustand';
import { produce } from 'immer';

export interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface WindowStore {
  windows: WindowState[];
  topZIndex: number;
  focusWindow: (id: string) => void;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  updatePosition: (id: string, position: { x: number; y: number }) => void;
}

const defaultWindows: WindowState[] = [
  {
    id: 'finder',
    title: 'Finder',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    position: { x: 80, y: 60 },
    size: { width: 700, height: 450 },
  },
  {
    id: 'terminal',
    title: 'Terminal',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    position: { x: 200, y: 100 },
    size: { width: 600, height: 400 },
  },
  {
    id: 'safari',
    title: 'Safari',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    position: { x: 150, y: 80 },
    size: { width: 750, height: 500 },
  },
  {
    id: 'resume',
    title: 'Resume',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    position: { x: 250, y: 70 },
    size: { width: 600, height: 500 },
  },
];

export const useWindowStore = create<WindowStore>((set) => ({
  windows: defaultWindows,
  topZIndex: 1,

  focusWindow: (id) =>
    set(
      produce((state: WindowStore) => {
        state.topZIndex += 1;
        const win = state.windows.find((w) => w.id === id);
        if (win) {
          win.zIndex = state.topZIndex;
        }
      })
    ),

  openWindow: (id) =>
    set(
      produce((state: WindowStore) => {
        state.topZIndex += 1;
        const win = state.windows.find((w) => w.id === id);
        if (win) {
          win.isOpen = true;
          win.isMinimized = false;
          win.zIndex = state.topZIndex;
        }
      })
    ),

  closeWindow: (id) =>
    set(
      produce((state: WindowStore) => {
        const win = state.windows.find((w) => w.id === id);
        if (win) {
          win.isOpen = false;
          win.isMinimized = false;
          win.isMaximized = false;
        }
      })
    ),

  minimizeWindow: (id) =>
    set(
      produce((state: WindowStore) => {
        const win = state.windows.find((w) => w.id === id);
        if (win) {
          win.isMinimized = true;
        }
      })
    ),

  toggleMaximize: (id) =>
    set(
      produce((state: WindowStore) => {
        const win = state.windows.find((w) => w.id === id);
        if (win) {
          win.isMaximized = !win.isMaximized;
        }
      })
    ),

  updatePosition: (id, position) =>
    set(
      produce((state: WindowStore) => {
        const win = state.windows.find((w) => w.id === id);
        if (win) {
          win.position = position;
        }
      })
    ),
}));
