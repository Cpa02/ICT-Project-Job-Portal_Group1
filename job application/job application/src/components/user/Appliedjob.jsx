import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  IconButton,
  TableSortLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // Import an icon for deletion

const AppliedJob = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    // Retrieve applied jobs from localStorage on component mount
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(storedJobs);
  }, []);

  const handleDelete = (index) => {
    const updatedJobs = appliedJobs.filter((_, i) => i !== index);
    setAppliedJobs(updatedJobs);
    localStorage.setItem("appliedJobs", JSON.stringify(updatedJobs));
  };

  const handleSort = (column) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedJobs = [...appliedJobs].sort((a, b) => {
      if (direction === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setAppliedJobs(sortedJobs);
    setSortDirection(direction);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#f0f2f5',
        padding: '20px',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 900,
          width: '100%',
          bgcolor: '#ffffff',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" align="center" sx={{ margin: 2 }}>
          Applied Jobs
        </Typography>
        <Table aria-label="applied jobs table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortDirection === 'asc'}
                  direction={sortDirection}
                  onClick={() => handleSort('JobTitle')}
                >
                  Job Title
                </TableSortLabel>
              </TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Requirements</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appliedJobs.length > 0 ? (
              appliedJobs.map((job, index) => (
                <TableRow key={index} hover>
                  <TableCell>{job.JobTitle}</TableCell>
                  <TableCell>{job.Description}</TableCell>
                  <TableCell>{job.Requirements}</TableCell>
                  <TableCell>{job.Place}</TableCell>
                  <TableCell>{job.Salary}</TableCell>
                  <TableCell>{job.JobType}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(index)} aria-label="delete">
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No jobs have been applied to yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppliedJob;
