import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; // Corrected this line
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Grid } from '@mui/material';
import axios from 'axios';

const Home = () => {  
  const [home, setHome] = useState([]);
  
  // Fetch data only once using useEffect to avoid continuous requests
  useEffect(() => {
    axios.get("http://localhost:4007/view")
      .then((job) => {
        console.log(job.data);
        setHome(job.data);
      });
  }, []);

  return (
    <div style={{
      height: '100vh', 
      overflowY: 'auto', 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      boxSizing: 'border-box', 
      margin: 0 
    }}>
      <br /><br /><br /><br />
      <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
        {home.map((val) => (
          <Grid item xs={10} sm={8} md={4} key={val._id}> 
            <Card 
              sx={{ 
                maxWidth: 345, 
                margin: 'auto',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
                },
                borderRadius: '10px',
              }}
            >
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="Job Image"
                  sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                /> */}
                <CardContent sx={{ padding: '16px', backgroundColor: '#ffffff' }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ color: '#1976d2', fontWeight: 'bold' }}
                  >
                    Job: {val.JobTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
                    Description: {val.Description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
                    Requirements: {val.Requirements}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: '16px', backgroundColor: '#ffffff' }}>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
