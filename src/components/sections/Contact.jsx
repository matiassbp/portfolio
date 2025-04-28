// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Aquí iría la lógica para enviar el formulario
      // Por ejemplo, usando fetch o axios para enviar a un backend
      
      // Simulamos éxito
      setSnackbar({
        open: true,
        message: '¡Mensaje enviado con éxito! Te contactaré pronto.',
        severity: 'success'
      });
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Por favor, completa todos los campos requeridos.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  const contactInfo = [
    {
      icon: <EmailIcon color="primary" fontSize="large" />,
      title: 'Email',
      content: 'matiasbenonip@gmail.com',
      link: 'mailto:matiasbenonip@gmail.com'
    },
    {
      icon: <LocationOnIcon color="primary" fontSize="large" />,
      title: 'Ubicación',
      content: 'Santiago, Chile',
      link: null
    },
    {
      icon: <PhoneIcon color="primary" fontSize="large" />,
      title: 'Teléfono',
      content: '+56 9 9999 9999',
      link: 'tel:+56999999999'
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: 'www.linkedin.com/in/matías-benoni-peralta-1050541a0',
      label: 'LinkedIn'
    },
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/matiassbp',
      label: 'GitHub'
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com/',
      label: 'Twitter'
    }
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? ¡Conversemos!"
          align="center"
        />

        <Grid container spacing={5} alignItems="stretch">
          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Box 
                  sx={{ 
                    bgcolor: 'primary.main',
                    height: 10,
                    width: '100%',
                    position: 'absolute',
                    top: 0
                  }} 
                />
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="h5" component="h3" fontWeight="bold" mb={3}>
                    Información de Contacto
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    {contactInfo.map((item, index) => (
                      <Box 
                        key={index} 
                        component={item.link ? 'a' : 'div'}
                        href={item.link}
                        target={item.link ? "_blank" : ""}
                        rel={item.link ? "noopener noreferrer" : ""}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 3,
                          textDecoration: 'none',
                          color: 'text.primary',
                          '&:hover': {
                            '& .MuiTypography-root': {
                              color: 'primary.main',
                            }
                          }
                        }}
                      >
                        <Box sx={{ mr: 2 }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.content}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  
                  <Typography variant="h6" component="h4" fontWeight="bold" mb={2}>
                    Sígueme en
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{ 
                          bgcolor: 'background.paper',
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-3px)',
                            transition: 'all 0.3s'
                          },
                          boxShadow: 1
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Formulario de contacto */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ 
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden'
              }}>
                <Box 
                  sx={{
                    bgcolor: 'primary.main',
                    py: 3,
                    px: 4,
                    color: 'white'
                  }}
                >
                  <Typography variant="h5" component="h3" fontWeight="bold">
                    Envíame un Mensaje
                  </Typography>
                  <Typography variant="body2">
                    Completa el formulario y me pondré en contacto contigo lo antes posible.
                  </Typography>
                </Box>
                
                <CardContent sx={{ p: 4 }}>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="name"
                          name="name"
                          label="Nombre"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="email"
                          name="email"
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="subject"
                          name="subject"
                          label="Asunto"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          required
                          id="message"
                          name="message"
                          label="Mensaje"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            mt: 1,
                            fontWeight: 'bold',
                            bg: 'primary.main'
                          }}
                        >
                          Enviar Mensaje
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar para mostrar mensajes */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;