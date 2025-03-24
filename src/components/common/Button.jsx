// src/components/common/Button.jsx
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'contained', 
  color = 'primary', 
  startIcon, 
  endIcon,
  sx,
  ...props 
}) => {
  return (
    <MuiButton
      component={motion.button}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
      }}
      whileTap={{ scale: 0.98 }}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        fontWeight: 600,
        ...sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;