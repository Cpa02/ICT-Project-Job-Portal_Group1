import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Veed = () => {  
  const [home, setHome] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4007/view")
      .then((job) => {
        console.log(job.data);
        setHome(job.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const apply = (job) => {
    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    if (!appliedJobs.some(appliedJob => appliedJob._id === job._id)) {
      appliedJobs.push(job);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    }
    navigate("/Applied_Job");
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      height: '100vh', 
      overflowY: 'auto', 
      padding: '20px',
      paddingTop: '80px', // Adjust this based on navbar height (e.g., 64px + 16px for spacing)
      backgroundColor: '#f5f5f5', 
      boxSizing: 'border-box',
    }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {home.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val._id} display="flex" justifyContent="center"> 
            <Card 
              sx={{ 
                maxWidth: 345, 
                width: '100%',
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
                <CardContent sx={{ padding: '16px', backgroundColor: '#ffffff' }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
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
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
                    Location: {val.Place}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
                    Salary: {val.Salary}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Type: {val.JobType}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: '16px', backgroundColor: '#ffffff' }}>
                <Button 
                  size="medium" 
                  variant="contained" 
                  color="primary" 
                  onClick={() => apply(val)}
                  sx={{
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '8px 16px',
                  }}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Veed;
