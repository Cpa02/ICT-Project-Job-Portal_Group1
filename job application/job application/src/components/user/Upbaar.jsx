import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import InboxIcon from '@mui/icons-material/Inbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Upbaar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleProfileClick = () => {
    const userData = JSON.parse(localStorage.getItem('user')); // Fetch user details from local storage
    setUserDetails(userData);
    setProfileOpen(true); // Open dialog for profile
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between', 
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box>
        <List>
          <ListItem key="Profile" disablePadding>
            <ListItemButton onClick={handleProfileClick}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Applied Jobs" disablePadding>
            <ListItemButton component={Link} to="/Applied_Job">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Applied Jobs" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Divider />
        <List>
          <ListItem key="Logout" disablePadding>
            <ListItemButton component={Link} to="/"> 
              <ListItemIcon>
                <LogoutIcon /> 
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between',backgroundColor: '#7ea6e0'}}>
          <Button onClick={toggleDrawer(true)} sx={{ padding: 2 }}>
            <MenuIcon sx={{ color: 'white', fontSize: 40 }} />
          </Button>
          <Typography variant="h4" component="h2" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Og's
          </Typography>
          <Button component={Link} to='/v' sx={{ color: 'white', fontWeight: 'bold' }}>
            Home
          </Button>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>

      {/* Profile Dialog */}
      <Dialog open={profileOpen} onClose={handleProfileClose}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          {userDetails ? (
            <div>
              <Typography variant="body1">Email: {userDetails.email}</Typography>
              <Typography variant="body1">Full Name: {userDetails.fullName}</Typography>
              <Typography variant="body1">Contact No: {userDetails.contactNo}</Typography>
              <Typography variant="body1">Alt No: {userDetails.altNo}</Typography>
              <Typography variant="body1">Degree: {userDetails.degree}</Typography>
              <Typography variant="body1">Graduation Year: {userDetails.gradYear}</Typography>
              <Typography variant="body1">Diploma: {userDetails.diploma}</Typography>
              <Typography variant="body1">Graduation (Diploma): {userDetails.diplomaGrad}</Typography>
              <Typography variant="body1">Programming Languages: {userDetails.programmingLanguages}</Typography>
              <Typography variant="body1">Experience: {userDetails.experience}</Typography>
            </div>
          ) : (
            <Typography variant="body1">No user details available.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Upbaar;
