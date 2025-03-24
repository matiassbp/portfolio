// src/components/sections/Experience.jsx
import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Tab, Tabs, Divider, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Datos de experiencia basados en el CV
  const experiences = [
    {
      company: 'Ripley',
      position: 'Ingeniero de Software',
      period: 'Marzo 2023 - Actual',
      location: 'Santiago, Chile',
      description: 'Desarrollo y optimización de soluciones tecnológicas para la transformación y almacenamiento de datos, incluyendo automatización de procesos y desarrollo de aplicaciones web corporativas.',
      responsibilities: [
        'Diseño e implementación de procesos ETL para extracción, transformación y carga de datos en entornos de alta demanda, optimizando tiempos de procesamiento y reduciendo errores mediante Python, SQL y BigQuery.',
        'Desarrollo de aplicativo web corporativo utilizado en Chile y Perú, trabajando directamente con equipos comerciales.',
        'Implementación de interfaces de usuario intuitivas mediante Angular, HTML5, CSS3 y TypeScript.',
        'Desarrollo de APIs y servicios con Node.js, JavaScript y TypeScript, garantizando escalabilidad y seguridad.',
        'Administración de bases de datos en SQL Server, Oracle y Azure Blob, asegurando accesibilidad, integridad y seguridad de la información.',
        'Colaboración directa con equipos comerciales para definición y diseño lógico de soluciones.'
      ],
      technologies: ['Python', 'SQL', 'BigQuery', 'Angular', 'Node.js', 'TypeScript', 'SQL Server', 'Oracle', 'Azure']
    },
    {
      company: 'Decalink',
      position: 'Ingeniero de Software',
      period: 'Enero 2023 - Marzo 2024',
      location: 'Santiago, Chile',
      description: 'Participación en proyecto orientado a la gestión administrativa de pensiones, desarrollando un aplicativo para el procesamiento de datos y generación de informes relacionados con el sistema de previsión social.',
      responsibilities: [
        'Maquetación de sistemas y planificación de recursos para la integración y gestión eficiente de datos.',
        'Modelamiento y normalización de estructuras de datos para mejorar el rendimiento y almacenamiento.',
        'Implementación de soluciones en Java 8 y Spring Boot, asegurando escalabilidad y eficiencia de los procesos.',
        'Desarrollo y documentación de APIs para facilitar la interoperabilidad entre sistemas.',
        'Ejecución y documentación de pruebas QA, asegurando estabilidad y cumplimiento de los requerimientos.'
      ],
      technologies: ['Java 8', 'Spring Boot', 'REST APIs', 'SQL', 'JUnit', 'QA Testing']
    },
    {
      company: 'Orion Minera',
      position: 'Software Intern',
      period: 'Marzo 2022 - Junio 2023',
      location: 'Santiago, Chile',
      description: 'Desarrollo integral de una aplicación web basada en un sistema ERP para gestión documental del departamento de operaciones, abarcando todas las fases del ciclo de vida de un proyecto.',
      responsibilities: [
        'Realización de un estudio detallado de las necesidades de la empresa, estableciendo especificaciones funcionales y técnicas.',
        'Evaluación de tecnologías de desarrollo para implementación on-premise usando stack MERN (MongoDB, Express.js, React, Node.js).',
        'Aplicación de metodologías ágiles, con énfasis en Extreme Programming (XP), adaptadas a las necesidades del proyecto.',
        'Modelado de base de datos y planificación de la estructura del software para optimizar la gestión documental.',
        'Desarrollo del sistema en fases iterativas, realizando pruebas, ajustes y validaciones con usuarios finales.'
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'XP Methodology']
    }
  ];

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Experiencia Profesional"
          subtitle="Mi trayectoria profesional en el desarrollo de software"
          align="center"
        />

        <Box sx={{ mt: 5, maxWidth: 900, mx: 'auto' }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                minWidth: 100,
              },
            }}
          >
            {experiences.map((exp, index) => (
              <Tab key={index} label={exp.company} />
            ))}
          </Tabs>

          <AnimatePresence mode="wait">
            {experiences.map((exp, index) => (
              selectedTab === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                      {exp.position}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 500, mb: 2 }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body1" color="text.secondary">
                          {exp.period}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PlaceIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body1" color="text.secondary">
                          {exp.location}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {exp.description}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Responsabilidades:
                  </Typography>
                  <List disablePadding>
                    {exp.responsibilities.map((responsibility, respIdx) => (
                      <ListItem key={respIdx} disablePadding sx={{ mb: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <ArrowRightIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={responsibility} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                    Tecnologías:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.technologies.map((tech, techIdx) => (
                      <Chip 
                        key={techIdx} 
                        label={tech} 
                        color={techIdx % 2 === 0 ? "primary" : "secondary"}
                        variant="outlined"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;