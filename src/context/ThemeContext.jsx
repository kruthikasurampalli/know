/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Design tokens for modern minimalist aesthetic
const LIGHT_TOKENS = {
  // Primary colors
  bg: '#ffffff',
  'bg-secondary': '#f8f9fa',
  'bg-tertiary': '#f0f2f5',
  'bg-hover': '#efefef',
  
  // Text colors with improved hierarchy
  text: '#1a1a1a',
  'text-secondary': '#5a5a5a',
  'text-tertiary': '#8a8a8a',
  'text-disabled': '#b0b0b0',
  
  // Borders
  border: '#e2e2e2',
  'border-light': '#f0f0f0',
  'border-dark': '#d0d0d0',
  
  // Accent colors (modern blue)
  accent: '#2563eb',
  'accent-light': '#dbeafe',
  'accent-dark': '#1e40af',
  'accent-hover': '#1d4ed8',
  
  // Semantic colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Shadows (elevated, natural)
  'shadow-xs': 'rgba(0, 0, 0, 0.04)',
  'shadow-sm': 'rgba(0, 0, 0, 0.08)',
  'shadow-md': 'rgba(0, 0, 0, 0.12)',
  'shadow-lg': 'rgba(0, 0, 0, 0.16)',
};

const DARK_TOKENS = {
  // Primary colors
  bg: '#0f0f0f',
  'bg-secondary': '#1a1a1a',
  'bg-tertiary': '#262626',
  'bg-hover': '#2a2a2a',
  
  // Text colors with improved hierarchy
  text: '#f5f5f5',
  'text-secondary': '#b0b0b0',
  'text-tertiary': '#7a7a7a',
  'text-disabled': '#505050',
  
  // Borders
  border: '#363636',
  'border-light': '#2a2a2a',
  'border-dark': '#4a4a4a',
  
  // Accent colors (brighter for dark mode)
  accent: '#60a5fa',
  'accent-light': '#1e3a8a',
  'accent-dark': '#93c5fd',
  'accent-hover': '#93c5fd',
  
  // Semantic colors
  success: '#34d399',
  warning: '#fbbf24',
  error: '#f87171',
  info: '#60a5fa',
  
  // Shadows (softer, more pronounced)
  'shadow-xs': 'rgba(0, 0, 0, 0.2)',
  'shadow-sm': 'rgba(0, 0, 0, 0.3)',
  'shadow-md': 'rgba(0, 0, 0, 0.4)',
  'shadow-lg': 'rgba(0, 0, 0, 0.5)',
};

// Apply theme tokens to document and CSS variables
// Extracted outside component to satisfy ESLint fast-refresh rules
const applyTheme = (themeName) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', themeName);
  
  const tokens = themeName === 'dark' ? DARK_TOKENS : LIGHT_TOKENS;
  
  // Apply CSS variables
  Object.entries(tokens).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
  
  document.body.style.backgroundColor = tokens.bg;
  document.body.style.color = tokens.text;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Lazy initialize from localStorage to avoid issues with hydration
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
