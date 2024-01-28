"use client"
import { useThemeStore } from '@/store/dark-mode';
import React, { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
   const { darkMode } = useThemeStore();
  return (
    <div className={`${darkMode ? "dark" : ""} h-full transition`}>
      {children}
    </div>
  );
};

export default ThemeProvider;
