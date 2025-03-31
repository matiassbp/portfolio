// src/components/layout/Footer.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import SocialIcons from '../common/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'background.default',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Matías Benoni
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Ingeniero de Software especializado en automatización y desarrollo full stack.
            </Typography>
            <SocialIcons color="primary" spacing={1} />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Enlaces
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column' }}>
              {['Inicio', 'Sobre mí', 'Experiencia', 'Proyectos', 'Contacto'].map((item) => (
                <MuiLink
                  key={item}
                  component="a"
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  underline="hover"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contacto
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Santiago, Chile
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              <MuiLink href="mailto:matiasbenonidev@gmail.com" underline="hover" color="inherit">
                matiasbenonidev@gmail.com
              </MuiLink>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <MuiLink href="tel:+56999999999" underline="hover" color="inherit">
                +56 9 8428 2128
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Matías Benoni. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;