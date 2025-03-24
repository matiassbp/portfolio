// src/components/sections/About.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const About = () => {
  const skills = [
    { name: 'Python', proficiency: 90 },
    { name: 'SQL', proficiency: 85 },
    { name: 'JavaScript/TypeScript', proficiency: 80 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'Angular', proficiency: 80 },
    { name: 'React', proficiency: 70 },
    { name: 'ETL Pipelines', proficiency: 90 },
    { name: 'Azure/Google Cloud', proficiency: 75 },
  ];

  const strengthAreas = [
    {
      icon: <DataObjectIcon fontSize="large" />,
      title: 'Desarrollo Full Stack',
      description: 'Experiencia en el desarrollo de aplicaciones completas, desde el frontend con Angular y React hasta el backend con Node.js y Python.'
    },
    {
      icon: <StorageIcon fontSize="large" />,
      title: 'Gestión de Datos',
      description: 'Especialista en bases de datos SQL, almacenamiento en la nube y manejo de grandes volúmenes de información con integridad y seguridad.'
    },
    {
      icon: <AutoGraphIcon fontSize="large" />,
      title: 'Automatización ETL',
      description: 'Experto en procesos de extracción, transformación y carga de datos, optimizando flujos de trabajo y reduciendo errores en entornos de alta demanda.'
    },
    {
      icon: <DeveloperModeIcon fontSize="large" />,
      title: 'Metodologías Ágiles',
      description: 'Experiencia trabajando con Scrum, XP y Kanban, adaptando los procesos a las necesidades específicas de cada proyecto y equipo.'
    }
  ];

  return (
    
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.gradient2",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Sobre Mí"
          subtitle="Ingeniero de Software con enfoque en la automatización y manejo de datos"
          align="center"
        />

        <Grid container spacing={6} sx={{ mt: 2 }}>
          {/* Perfil personal */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                ¿Quién soy?
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 2, lineHeight: 1.8 }}
              >
                Ingeniero Civil en Computación e Informática con experiencia en la automatización de procesos
                y el manejo de grandes volúmenes de información. Mi enfoque se centra en el desarrollo
                de soluciones tecnológicas que aporten valor al negocio.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 2, lineHeight: 1.8 }}
              >
                He trabajado con equipos multidisciplinarios en empresas como Ripley y Decalink,
                desarrollando soluciones tanto en el frontend como en el backend, con un enfoque particular
                en la optimización de procesos ETL y la gestión eficiente de datos.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Me apasiona el aprendizaje continuo y estoy constantemente explorando nuevas tecnologías
                y metodologías para mejorar procesos y crear soluciones innovadoras.
              </Typography>
            </motion.div>
          </Grid>

          {/* Habilidades técnicas */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Habilidades Técnicas
              </Typography>
              <Box>
                {skills.map((skill, index) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body1" fontWeight={500}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.proficiency}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'rgba(0, 0, 0, 0.08)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: `linear-gradient(90deg, ${index % 2 ? '#2563eb' : '#10b981'} 0%, ${index % 2 ? '#3b82f6' : '#34d399'} 100%)`,
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Áreas de Fortaleza */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Áreas de especialización
          </Typography>
          <Grid container spacing={3}>
            {strengthAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={3} key={area.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: 'primary.main',
                        bgcolor: 'primary.lighter',
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                      }}
                    >
                      {area.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {area.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {area.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;