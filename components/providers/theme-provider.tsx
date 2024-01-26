"use client"
import { useThemeStore } from '@/app/store/darkMode';
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
