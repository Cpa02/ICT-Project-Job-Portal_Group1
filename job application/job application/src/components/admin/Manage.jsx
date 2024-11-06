import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Manage = () => {
  const [inputs, setInputs] = useState({ JobTitle: "", Description: "", Requirements: "", Place: "", Salary: "", JobType: "" });
  const locate = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    if (locate.state !== null) {
      axios.put(`http://localhost:4007/update/${locate.state.val._id}`, inputs)
        .then((res) => {
          alert(res.data.message);
          navigate('/view');
        })
        .catch((err) => console.log(err));
    } else {
      axios.post("http://localhost:4007/madd", inputs)
        .then((res) => {
          alert(res.data.message);
          navigate('/view');
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (locate.state !== null) {
      setInputs({
        JobTitle: locate.state.val.JobTitle,
        Description: locate.state.val.Description,
        Requirements: locate.state.val.Requirements,
        Place: locate.state.val.Place,
        Salary: locate.state.val.Salary,
        JobType: locate.state.val.JobType,
      });
    }
  }, []);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="#f0f2f5" 
      padding="20px"
    >
      <Paper elevation={3} sx={{ maxWidth: '500px', width: '100%', borderRadius: '10px', overflowY: 'auto', maxHeight: '90vh' }}>
        <Box padding="30px">
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Manage Jobs
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField 
              label="Job Title" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={inputHandler} 
              name="JobTitle" 
              value={inputs.JobTitle} 
            />
            <TextField 
              label="Description" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={inputHandler} 
              name="Description" 
              value={inputs.Description} 
              multiline
              rows={3}
            />
            <TextField 
              label="Requirements" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={inputHandler} 
              name="Requirements" 
              value={inputs.Requirements} 
              multiline
              rows={3}
            />
            <TextField 
              label="Location" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={inputHandler} 
              name="Place" 
              value={inputs.Place} 
            />
            <TextField 
              label="Salary" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={inputHandler} 
              name="Salary" 
              value={inputs.Salary} 
              type="number"
            />
            <TextField 
              label="Job Type" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={inputHandler} 
              name="JobType" 
              value={inputs.JobType} 
            />
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 3, py: 1, fontWeight: 'bold', textTransform: 'none' }}
              onClick={addHandler}
            >
              {locate.state !== null ? "Update Job" : "Add Job"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Manage;
