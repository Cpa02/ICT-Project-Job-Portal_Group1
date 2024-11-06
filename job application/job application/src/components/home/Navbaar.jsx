import { AppBar, Button, Toolbar, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbaar = () => {
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate(); 

  // Function to open the popup
  const handleLoginClick = () => {
    setOpen(true);
  };

//close
  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = () => {
    setOpen(false);
    navigate('/Login'); 
  };

  const handleAdminClick = () => {
    setOpen(false);
    navigate('/AdminLog'); 
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#7ea6e0', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between',backgroundColor: '#7ea6e0', boxShadow: 'none', width: '100%'  }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            Og's
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: 'white', fontWeight: 'bold' }}>
              Home
            </Button>
            <Button onClick={handleLoginClick} sx={{ color: 'white', fontWeight: 'bold' }}>
              Login
            </Button>
            <Button component={Link} to="/Signup" sx={{ color: 'white', fontWeight: 'bold' }}>
              SignUp
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '16px' } }}>
        <DialogTitle>Login As</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '300px',
              borderRadius: '12px', 
            }}
          >
            <Button variant="contained" onClick={handleUserClick}>
              User
            </Button>
            <Button variant="contained" onClick={handleAdminClick}>
              Admin
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbaar;
