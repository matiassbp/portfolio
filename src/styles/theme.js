// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(9, 37, 158, 0.73)', // Azul moderno
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#10b981', // Verde para acentos
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
      dark: '#0f172a',
      gradient: 'linear-gradient(180deg, rgba(9, 37, 158, 0.73) 0%, rgba(243,244,246,1) 100%)',
      gradient2: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      disabled: '#94a3b8',
    },
    divider: '#e2e8f0',
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
    '0px 2px 1px -1px rgba(0,0,0,0.05),0px 1px 1px 0px rgba(0,0,0,0.03),0px 1px 3px 0px rgba(0,0,0,0.05)',
    '0px 3px 3px -2px rgba(0,0,0,0.06),0px 3px 4px 0px rgba(0,0,0,0.04),0px 1px 8px 0px rgba(0,0,0,0.06)',
    '0px 3px 5px -1px rgba(0,0,0,0.06),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.06)',
    '0px 4px 5px -2px rgba(0,0,0,0.07),0px 7px 10px 1px rgba(0,0,0,0.05),0px 2px 16px 1px rgba(0,0,0,0.07)',
    '0px 6px 10px -3px rgba(0,0,0,0.08),0px 10px 14px 1px rgba(0,0,0,0.06),0px 4px 18px 3px rgba(0,0,0,0.08)',
    '0px 6px 11px -4px rgba(0,0,0,0.09),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.09)',
    '0px 7px 12px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.08),0px 5px 22px 4px rgba(0,0,0,0.1)',
    '0px 7px 14px -4px rgba(0,0,0,0.11),0px 13px 19px 2px rgba(0,0,0,0.09),0px 5px 24px 4px rgba(0,0,0,0.11)',
    '0px 8px 15px -5px rgba(0,0,0,0.12),0px 14px 21px 2px rgba(0,0,0,0.1),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 17px -6px rgba(0,0,0,0.13),0px 16px 24px 2px rgba(0,0,0,0.11),0px 6px 30px 5px rgba(0,0,0,0.13)',
    '0px 9px 18px -6px rgba(0,0,0,0.14),0px 17px 26px 2px rgba(0,0,0,0.12),0px 6px 32px 5px rgba(0,0,0,0.14)',
    '0px 9px 20px -6px rgba(0,0,0,0.15),0px 18px 28px 2px rgba(0,0,0,0.13),0px 7px 34px 6px rgba(0,0,0,0.15)',
    '0px 10px 21px -6px rgba(0,0,0,0.16),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.16)',
    '0px 10px 23px -7px rgba(0,0,0,0.17),0px 20px 31px 3px rgba(0,0,0,0.15),0px 8px 38px 7px rgba(0,0,0,0.17)',
    '0px 10px 24px -7px rgba(0,0,0,0.18),0px 21px 33px 3px rgba(0,0,0,0.16),0px 8px 40px 7px rgba(0,0,0,0.18)',
    '0px 11px 26px -7px rgba(0,0,0,0.19),0px 22px 35px 3px rgba(0,0,0,0.17),0px 8px 42px 7px rgba(0,0,0,0.19)',
    '0px 11px 27px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.18),0px 9px 44px 8px rgba(0,0,0,0.2)',
    '0px 11px 29px -8px rgba(0,0,0,0.21),0px 24px 38px 3px rgba(0,0,0,0.19),0px 9px 46px 8px rgba(0,0,0,0.21)',
    '0px 12px 30px -8px rgba(0,0,0,0.22),0px 25px 40px 3px rgba(0,0,0,0.2),0px 10px 48px 8px rgba(0,0,0,0.22)',
    '0px 12px 32px -8px rgba(0,0,0,0.23),0px 26px 42px 4px rgba(0,0,0,0.21),0px 10px 50px 9px rgba(0,0,0,0.23)',
    '0px 12px 33px -8px rgba(0,0,0,0.24),0px 27px 43px 4px rgba(0,0,0,0.22),0px 10px 52px 9px rgba(0,0,0,0.24)',
    '0px 13px 35px -9px rgba(0,0,0,0.25),0px 28px 45px 4px rgba(0,0,0,0.23),0px 11px 54px 10px rgba(0,0,0,0.25)',
    '0px 13px 36px -9px rgba(0,0,0,0.26),0px 29px 47px 4px rgba(0,0,0,0.24),0px 11px 56px 10px rgba(0,0,0,0.26)',
    '0px 13px 38px -9px rgba(0,0,0,0.27),0px 30px 49px 4px rgba(0,0,0,0.25),0px 11px 58px 10px rgba(0,0,0,0.27)',
    '0px 14px 40px -9px rgba(0,0,0,0.28),0px 31px 51px 4px rgba(0,0,0,0.26),0px 12px 60px 10px rgba(0,0,0,0.28)'
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
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
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.05)',
          borderRadius: 12,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;