import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Box textAlign="center" mt={5}>
                <Typography variant="h3" gutterBottom>Welcome to the Job Portal</Typography>
                <Typography variant="h6" gutterBottom>Explore new jobs</Typography>
                <Box mt={4}>
                    <Button variant="contained" component={Link} to="/login" color="primary" sx={{ margin: 2 }}>
                        Login
                    </Button>
                    <Button variant="contained" component={Link} to="/signup" color="secondary" sx={{ margin: 2 }}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
