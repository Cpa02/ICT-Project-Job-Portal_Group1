import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  
return (
    <div>
        <AppBar> 
            <Toolbar sx={{ justifyContent: 'space-between',backgroundColor: '#7ea6e0', boxShadow: 'none', width: '100%'  }}>
                <Typography varient='h4'>Dashboard</Typography>
                <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            Og's
          </Typography>
                <div sx={{ display: 'flex', gap: 8 }}> 
                <Link to='/h'>
                <Button variant='container'>Home</Button>
                </Link>
                  {/* <Link to='/u'>
                  <Button variant='container'>User</Button>
                  </Link> */}
               <Link to='/m'> 
                <Button variant='container' >Manage Jobs</Button>
                </Link>
                <Link to='/view'>
                <Button variant='container' >View</Button>
                </Link>
                <Button variant='container' component={Link} to="/" >Logout</Button>
                </div>
            </Toolbar>
        </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Topbar