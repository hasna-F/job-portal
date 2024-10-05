import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const JobListings = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(response => setJobs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Job Listings</Typography>
            <Grid container spacing={3}>
                {jobs.map(job => (
                    <Grid item xs={12} md={6} key={job._id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{job.title}</Typography>
                                <Typography>{job.description}</Typography>
                                <Typography>Location: {job.location}</Typography>
                                <Typography>Salary: ${job.salary}</Typography>
                                <Button variant="contained">Apply</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default JobListings;
