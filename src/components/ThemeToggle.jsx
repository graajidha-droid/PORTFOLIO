import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-slate-200/20 dark:border-white/10 bg-white/10 dark:bg-slate-900/40 text-sky-400 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 animate-pulse-slow" />
      ) : (
        <Moon className="h-5 w-5 animate-pulse-slow" />
      )}
    </button>
  );
}
