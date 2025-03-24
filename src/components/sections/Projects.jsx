// src/components/sections/Projects.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import kanbanImage from '../../assets/images/1-kanban.webp';
import ChatBotImage from '../../assets/images/2-chatbot.webp';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  // Normalmente estos datos vendrían de un archivo separado (data/projects.js)
  const projects = [
    {
      id: 1,
      title: 'Tablero Kanban Interactivo',
      shortDescription: 'Aplicación de gestión de tareas con interfaz drag and drop para organizar el flujo de trabajo.',
      fullDescription: 'Aplicación web modular que permite gestionar tareas en un tablero Kanban con columnas para tareas pendientes, en progreso y finalizadas. Incluye funcionalidades como creación de tareas con descripciones detalladas, arrastre intuitivo entre columnas, visualización de detalles y diseño responsivo. La arquitectura modular facilita la escalabilidad y mantenimiento del código.',
      imageUrl: kanbanImage,
      technologies: ['React', 'JavaScript', '@hello-pangea/dnd', 'Bootstrap', 'React-Bootstrap', 'CSS'],
      liveUrl: 'https://matiassbp.github.io/super_kanban/',
      githubUrl: 'https://github.com/matiassbp/super_kanban',
      achievements: [
        'Desarrollo de arquitectura modular con componentes reutilizables',
        'Implementación de interfaz intuitiva con drag and drop',
        'Diseño responsivo con estética moderna y gradientes',
        'Optimización del estado de la aplicación para rendimiento fluido'
      ]
    },
    {
      id: 2,
      title: 'ChatBot CV Asistente Virtual',
      shortDescription: 'Asistente virtual interactivo con IA para presentar información profesional',
      fullDescription: 'Chatbot desarrollado con React que utiliza la API de Google Gemini para proporcionar información detallada sobre experiencia profesional, habilidades técnicas y formación académica. Incluye una interfaz de chat moderna con animaciones fluidas, preguntas sugeridas e indicador de escritura que simula respuestas humanas.',
      imageUrl: ChatBotImage,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Google Gemini API', 'Axios', 'JavaScript'],
      liveUrl: 'https://github.com/matiassbp/ChatBot_CV',
      githubUrl: 'https://matiassbp.github.io/ChatBot_CV/',
      achievements: [
        'Integración de API de IA generativa con prompt engineering avanzado',
        'Diseño de experiencia de usuario fluida con animaciones y transiciones',
        'Implementación de sistema de formateo para respuestas estructuradas',
        'Desarrollo de interfaz responsive con características adaptativas para móviles'
      ]
    }
    // ,
    // {
    //   id: 3,
    //   title: 'API de Gestión de Inventario',
    //   shortDescription: 'API RESTful para gestión y monitoreo de inventario en tiempo real.',
    //   fullDescription: 'API completa para la gestión de inventario que permite realizar operaciones CRUD sobre productos, categorías y proveedores. Incluye funcionalidades de búsqueda avanzada, historial de cambios y alertas de stock.',
    //   imageUrl: '/placeholder-project3.jpg',
    //   technologies: ['Express.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    //   liveUrl: 'https://example.com/inventory-api',
    //   githubUrl: 'https://github.com/yourusername/inventory-api',
    //   achievements: [
    //     'Arquitectura escalable que soporta hasta 1000 transacciones por segundo',
    //     'Implementación de autenticación JWT y autorización basada en roles',
    //     'Documentación automática con Swagger'
    //   ]
    // },
    // {
    //   id: 4,
    //   title: 'Aplicación de Gestión de Proyectos',
    //   shortDescription: 'Herramienta colaborativa para seguimiento y gestión de proyectos.',
    //   fullDescription: 'Aplicación web que permite gestionar proyectos, tareas, equipos y recursos de manera colaborativa. Incluye funcionalidades como asignación de tareas, seguimiento de tiempo, comentarios en tiempo real y generación de informes.',
    //   imageUrl: '/placeholder-project4.jpg',
    //   technologies: ['React', 'TypeScript', 'GraphQL', 'Firebase', 'Material UI'],
    //   liveUrl: 'https://example.com/project-management',
    //   githubUrl: 'https://github.com/yourusername/project-management',
    //   achievements: [
    //     'Desarrollo de interfaz de usuario intuitiva con drag and drop',
    //     'Implementación de notificaciones en tiempo real',
    //     'Integración con Google Calendar y Slack'
    //   ]
    // }
  ];

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.gradient2",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Proyectos"
          subtitle="Una selección de mis trabajos más destacados"
          align="center"
        />

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.imageUrl || `https://via.placeholder.com/500x300?text=${project.title}`}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.shortDescription}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Chip 
                          key={idx} 
                          label={tech} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'primary.lighter',
                            color: 'primary.dark',
                            fontWeight: 500,
                          }} 
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip 
                          label={`+${project.technologies.length - 3}`} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'background.default',
                            fontWeight: 500
                          }} 
                        />
                      )}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      size="small" 
                      variant="outlined" 
                      color="primary" 
                      onClick={() => handleClickOpen(project)}
                      sx={{ mr: 1 }}
                    >
                      Ver Detalles
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    {project.githubUrl && (
                      <IconButton 
                        size="small" 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    )}
                    {project.liveUrl && (
                      <IconButton 
                        size="small" 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Live Project"
                        color="primary"
                      >
                        <LinkIcon fontSize="small" />
                      </IconButton>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Diálogo de detalles del proyecto */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        scroll="paper"
        aria-labelledby="project-dialog-title"
      >
        {selectedProject && (
          <>
            <DialogTitle id="project-dialog-title" sx={{ pr: 6 }}>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box 
                component="img" 
                src={selectedProject.imageUrl || `https://via.placeholder.com/800x400?text=${selectedProject.title}`}
                alt={selectedProject.title}
                sx={{ 
                  width: '100%', 
                  borderRadius: 1,
                  mb: 3
                }}
              />
              <DialogContentText component="div">
                <Typography variant="body1" paragraph>
                  {selectedProject.fullDescription}
                </Typography>
                
                <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                  Logros destacados:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {selectedProject.achievements.map((achievement, idx) => (
                    <Typography component="li" variant="body2" key={idx} sx={{ mb: 1 }}>
                      {achievement}
                    </Typography>
                  ))}
                </Box>
                
                <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                  Tecnologías utilizadas:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                  {selectedProject.technologies.map((tech, idx) => (
                    <Chip 
                      key={idx} 
                      label={tech} 
                      sx={{ 
                        bgcolor: 'primary.lighter',
                        color: 'primary.dark',
                        fontWeight: 500,
                      }} 
                    />
                  ))}
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              {selectedProject.githubUrl && (
                <Button 
                  startIcon={<GitHubIcon />} 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Código Fuente
                </Button>
              )}
              {selectedProject.liveUrl && (
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<LinkIcon />} 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver Proyecto
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;