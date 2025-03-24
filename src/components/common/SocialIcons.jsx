// src/components/common/SocialIcons.jsx
import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const SocialIcons = ({ color = 'primary', size = 'medium', spacing = 1 }) => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <LinkedInIcon />, 
      url: 'https://www.linkedin.com/in/your-linkedin/' 
    },
    { 
      name: 'GitHub', 
      icon: <GitHubIcon />, 
      url: 'https://github.com/your-github' 
    },
    { 
      name: 'Email', 
      icon: <EmailIcon />, 
      url: 'mailto:matiasbenonidev@gmail.com' 
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: spacing }}>
      {socialLinks.map((social) => (
        <Tooltip key={social.name} title={social.name}>
          <IconButton
            component={motion.a}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            color={color}
            size={size}
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;