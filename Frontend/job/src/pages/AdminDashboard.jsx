import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const AdminDashboard = () => {
    const [jobData, setJobData] = useState({ title: '', description: '', location: '', salary: '', jobType: '' });

    const handleChange = (e) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/jobs', jobData)
            .then(() => alert('Job posted'))
            .catch(err => console.error(err));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Post a New Job</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Job Title" name="title" onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Description" name="description" onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Location" name="location" onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Salary" name="salary" onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Job Type" name="jobType" onChange={handleChange} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Post Job</Button>
            </form>
        </Container>
    );
};

export default AdminDashboard;
