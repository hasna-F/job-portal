import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobListings from './pages/JobListings';
import AdminDashboard from './pages/AdminDashboard';
import NavBar from './components/NavBar';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Update this based on authentication
    const [isAdmin, setIsAdmin] = useState(false);        // Update this based on user role

    return (
        <Router>
            <NavBar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/jobs" element={<JobListings />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
