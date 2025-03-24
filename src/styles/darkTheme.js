// src/styles/darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Azul más brillante para contrastar con fondo oscuro
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#10b981', // Verde para acentos
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f172a', // Fondo principal oscuro
      paper: '#1e293b',  // Superficies de componentes
      dark: '#020617',   // Áreas más oscuras
      gradient: 'linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(243,244,246,1) 100%)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      disabled: '#64748b',
    },
    divider: '#334155',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.25),0px 3px 4px 0px rgba(0,0,0,0.18),0px 1px 8px 0px rgba(0,0,0,0.2)',
    '0px 3px 5px -1px rgba(0,0,0,0.25),0px 5px 8px 0px rgba(0,0,0,0.18),0px 1px 14px 0px rgba(0,0,0,0.2)',
    '0px 4px 5px -2px rgba(0,0,0,0.28),0px 7px 10px 1px rgba(0,0,0,0.2),0px 2px 16px 1px rgba(0,0,0,0.22)',
    '0px 6px 10px -3px rgba(0,0,0,0.3),0px 10px 14px 1px rgba(0,0,0,0.24),0px 4px 18px 3px rgba(0,0,0,0.28)',
    '0px 6px 11px -4px rgba(0,0,0,0.32),0px 11px 15px 1px rgba(0,0,0,0.26),0px 4px 20px 3px rgba(0,0,0,0.3)',
    '0px 7px 12px -4px rgba(0,0,0,0.34),0px 12px 17px 2px rgba(0,0,0,0.28),0px 5px 22px 4px rgba(0,0,0,0.32)',
    '0px 7px 14px -4px rgba(0,0,0,0.36),0px 13px 19px 2px rgba(0,0,0,0.3),0px 5px 24px 4px rgba(0,0,0,0.34)',
    '0px 8px 15px -5px rgba(0,0,0,0.38),0px 14px 21px 2px rgba(0,0,0,0.32),0px 6px 26px 4px rgba(0,0,0,0.36)',
    '0px 8px 17px -5px rgba(0,0,0,0.4),0px 15px 22px 2px rgba(0,0,0,0.34),0px 6px 28px 5px rgba(0,0,0,0.38)',
    '0px 9px 18px -5px rgba(0,0,0,0.42),0px 16px 24px 2px rgba(0,0,0,0.36),0px 6px 30px 5px rgba(0,0,0,0.4)',
    '0px 9px 19px -5px rgba(0,0,0,0.44),0px 17px 26px 2px rgba(0,0,0,0.38),0px 7px 32px 5px rgba(0,0,0,0.42)',
    '0px 10px 20px -5px rgba(0,0,0,0.46),0px 18px 28px 2px rgba(0,0,0,0.4),0px 7px 34px 6px rgba(0,0,0,0.44)',
    '0px 10px 22px -6px rgba(0,0,0,0.48),0px 19px 29px 2px rgba(0,0,0,0.42),0px 8px 36px 6px rgba(0,0,0,0.46)',
    '0px 11px 23px -6px rgba(0,0,0,0.5),0px 20px 31px 3px rgba(0,0,0,0.44),0px 8px 38px 7px rgba(0,0,0,0.48)',
    '0px 11px 24px -6px rgba(0,0,0,0.52),0px 21px 33px 3px rgba(0,0,0,0.46),0px 8px 40px 7px rgba(0,0,0,0.5)',
    '0px 12px 25px -6px rgba(0,0,0,0.54),0px 22px 35px 3px rgba(0,0,0,0.48),0px 9px 42px 7px rgba(0,0,0,0.52)',
    '0px 12px 27px -6px rgba(0,0,0,0.56),0px 23px 36px 3px rgba(0,0,0,0.5),0px 9px 44px 8px rgba(0,0,0,0.54)',
    '0px 13px 28px -6px rgba(0,0,0,0.58),0px 24px 38px 3px rgba(0,0,0,0.52),0px 9px 46px 8px rgba(0,0,0,0.56)',
    '0px 13px 29px -7px rgba(0,0,0,0.6),0px 25px 40px 3px rgba(0,0,0,0.54),0px 10px 48px 8px rgba(0,0,0,0.58)',
    '0px 14px 30px -7px rgba(0,0,0,0.62),0px 26px 42px 4px rgba(0,0,0,0.56),0px 10px 50px 8px rgba(0,0,0,0.6)',
    '0px 14px 32px -7px rgba(0,0,0,0.64),0px 27px 44px 4px rgba(0,0,0,0.58),0px 11px 52px 8px rgba(0,0,0,0.62)',
    '0px 15px 33px -7px rgba(0,0,0,0.66),0px 28px 46px 4px rgba(0,0,0,0.6),0px 11px 54px 9px rgba(0,0,0,0.64)',
    '0px 15px 35px -7px rgba(0,0,0,0.68),0px 29px 48px 4px rgba(0,0,0,0.62),0px 11px 56px 9px rgba(0,0,0,0.66)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
          borderRadius: 12,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default darkTheme;