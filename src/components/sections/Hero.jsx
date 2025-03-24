// src/components/sections/Hero.jsx (continuación)
import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import SocialIcons from '../common/SocialIcons';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, sm: 12 },
        pb: { xs: 8, sm: 12 },
        background: "background.gradient",
      }}
    >
      {/* Elementos decorativos de fondo (formas abstractas) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.7,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '370px',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'rgba(37, 99, 235, 0.5)',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '5%',
            width: '500px',
            height: '400px',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            background: 'rgba(16, 185, 129, 0.5)',
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            rotate: [0, -7, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 'md', mx: 'auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              ¡Hola, soy Matías! 👋
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Ingeniero de Software
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 'md', mx: 'auto', fontWeight: 400 }}
            >
              Especializado en automatización de procesos, ETL y desarrollo full stack
              con enfoque en la calidad e integridad de datos.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 5 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowDownwardIcon />}
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  style={{ width: '100%', height: '100%' }}
                >
                  Ver proyectos
                </Link>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<DescriptionIcon />}
                href="/cv.pdf"
                target="_blank"
              >
                Descargar CV
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <SocialIcons size="large" spacing={2} />
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Indicador de scroll hacia abajo */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Link to="about" spy={true} smooth={true} duration={800} offset={-70}>
            <ArrowDownwardIcon
              color="primary"
              sx={{ fontSize: 32, cursor: 'pointer' }}
            />
          </Link>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;