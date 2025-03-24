// src/components/layout/Nav.jsx
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem,
  ListItemButton,
  ListItemText, 
  useScrollTrigger,
  Slide,
  Tooltip,
  useTheme as useMuiTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';

// Función para manejar el scroll y ocultar/mostrar la barra de navegación
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  
  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Experiencia', id: 'experience' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' }
  ];

  // Cambiar el estilo de la navegación cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar 
        position="fixed" 
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: scrolled 
            ? darkMode 
              ? 'rgba(30, 41, 59, 0.95)' // Fondo oscuro con transparencia
              : 'rgba(255, 255, 255, 0.95)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? darkMode 
              ? '0px 1px 10px rgba(0, 0, 0, 0.2)' 
              : '0px 1px 10px rgba(0, 0, 0, 0.1)' 
            : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                Matías Benoni
              </Link>
            </Typography>

            {/* Desktop Navigation with Theme Toggle */}
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <Button
                  component={motion.div}
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    my: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    },
                    textTransform: 'none',
                  }}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ width: '100%', height: '100%', display: 'block' }}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
              
              {/* Theme Toggle Button */}
              <Tooltip title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
                <IconButton
                  onClick={toggleTheme}
                  color="primary"
                  sx={{ 
                    ml: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'rotate(30deg)' },
                  }}
                >
                  {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            </Box>

            {/* Mobile Navigation Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              {/* Theme Toggle Button for Mobile */}
              <Tooltip title={darkMode ? "Modo claro" : "Modo oscuro"}>
                <IconButton
                  onClick={toggleTheme}
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
              
              <IconButton
                component={motion.button}
                whileTap={{ scale: 0.9 }}
                size="large"
                aria-label="menu"
                color="primary"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Navigation Menu */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ 
                  width: 250, 
                  pt: 2, 
                  pb: 3,
                  bgcolor: 'background.paper',
                  height: '100%'
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
                  <IconButton color="primary" onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  <AnimatePresence>
                    {navItems.map((item, index) => (
                      <ListItem
                        component={motion.li}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        key={item.id}
                        disablePadding
                      >
                        <ListItemButton>
                          <Link
                            to={item.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={{ width: '100%' }}
                          >
                            <ListItemText primary={item.name} />
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </AnimatePresence>
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Nav;