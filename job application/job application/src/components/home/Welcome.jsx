import { Typography, Box } from '@mui/material';
import React from 'react';

const Welcome = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#f0f2f5" 
      padding="20px"
      textAlign="center"
    >
      <Typography 
        variant="h3" 
        style={{ 
          fontWeight: 'bold', 
          color: '#1976d2', 
          marginBottom: '20px' 
        }}
      >
        Welcome to Og's Job Portal
      </Typography>
      <Typography 
        variant="h6" 
        style={{ 
          color: '#555', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}
      >
        Find your dream job and take your career to the next level! 
        Explore a variety of job listings and apply with ease.
      </Typography>
    </Box>
  );
};

export default Welcome;
