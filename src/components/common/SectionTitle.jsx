// src/components/common/SectionTitle.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'left' }) => {
  return (
    <Box 
      sx={{ 
        mb: 4, 
        textAlign: align,
        position: 'relative'
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Typography 
        variant="h3" 
        component="h2"
        sx={{ 
          position: 'relative',
          display: 'inline-block',
          fontWeight: 700,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: align === 'center' ? '50%' : 0,
            transform: align === 'center' ? 'translateX(-50%)' : 'none',
            width: align === 'center' ? '80px' : '70px',
            height: '4px',
            bgcolor: 'primary.main',
            borderRadius: '2px'
          }
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          sx={{ mt: 2 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;