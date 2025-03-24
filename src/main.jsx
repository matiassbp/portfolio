// src/main.jsx (corregido)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './styles/theme';
import darkTheme from './styles/darkTheme';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Mueve el componente ThemeWrapper a un archivo separado o defínelo después de importar todo
const ThemeWrapper = () => {
  const { darkMode } = useTheme();
  
  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
};

// Estructura correcta: ThemeProvider envuelve a ThemeWrapper
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  </React.StrictMode>,
);