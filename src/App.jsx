// src/App.jsx
import React, { useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import Nav from './components/layout/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const theme = useTheme();

  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Nav />
      <Box component="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;