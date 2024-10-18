import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
    

    return (
        <div style={{ backgroundColor: '#CFCFCD', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ height: '92%', width: '84%', bgcolor: 'white', display: 'flex' }} boxShadow={9}>
                <img src="/dingding.png" alt="" style={{ height: '100%', width: '40%' }} />
                <Box sx={{ margin: '10px 50px', width: '60%' }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/user11.png"
                        sx={{ width: 75, height: 75 }}
                    />
                    <Typography variant="h5" component="h5" sx={{ margin: '20px 0px' }}>Sign Up Your Account</Typography>
                    <Box sx={{ padding: '5px 0px'}}>
                    <SignUpForm />
                    </Box>
                    <Typography variant="p" component="p" sx={{ margin: '20px 0px' ,color:'black'}}>Already have an account? <Link to="/accounts/sign-in" style={{ textDecoration: 'none' }}>Sign-in-here</Link></Typography>
                </Box>
            </Box>
        </div>
    )
}

export default SignUp