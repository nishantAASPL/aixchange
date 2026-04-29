import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aixchange-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aixchange-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = selectedAgent ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedAgent]);

  const value = {
    currentPage,
    setCurrentPage,
    selectedAgent,
    setSelectedAgent,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
