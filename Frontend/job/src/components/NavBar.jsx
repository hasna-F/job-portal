import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, isAdmin }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    Job Portal
                </Typography>

                {isLoggedIn ? (
                    <>
                        {isAdmin ? (
                            <Button color="inherit" component={Link} to="/admin">
                                Admin Dashboard
                            </Button>
                        ) : (
                            <Button color="inherit" component={Link} to="/jobs">
                                Browse Jobs
                            </Button>
                        )}
                        <Button color="inherit" component={Link} to="/profile">
                            Profile
                        </Button>
                        <Button color="inherit" component={Link} to="/logout">
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/signup">
                            Sign Up
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
