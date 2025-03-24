// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto del tema
const ThemeContext = createContext();

// Hook personalizado para usar el contexto del tema
export const useTheme = () => useContext(ThemeContext);

// Proveedor del contexto del tema
export const ThemeProvider = ({ children }) => {
  // Intentar obtener la preferencia de tema del localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Si hay una preferencia guardada, usarla; de lo contrario, usar preferencia del sistema
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  // Función para cambiar entre temas
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Guardar preferencia de tema en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Valores que estarán disponibles a través del contexto
  const value = {
    darkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};