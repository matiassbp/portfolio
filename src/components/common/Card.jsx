// src/components/common/Card.jsx
import React from 'react';
import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Card = ({ 
  title, 
  subtitle, 
  icon, 
  children,
  sx = {},
  ...props 
}) => {
  return (
    <MuiCard
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)'
      }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...sx
      }}
      {...props}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {icon && (
          <Box 
            sx={{ 
              mb: 2,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: '50%',
              bgcolor: 'primary.lighter',
              '& svg': {
                fontSize: 24,
              }
            }}
          >
            {icon}
          </Box>
        )}
        {title && (
          <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
            {subtitle}
          </Typography>
        )}
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;