import { Box, Button } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../Context/User';

const Header = () => {
    const userstate = useContext(UserContext);

    const liststyle = {
        color: '#161616',
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '20px',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            color: '#FCCF69',
        },
    }
    const navigate = useNavigate()

    const gotToUploadPage = () => {
        navigate("/upload");
    }
    const gotToAboutPage = () => {
        navigate("/accounts/about");
    }
    const gotToSigninPage = () => {
        navigate("/accounts/sign-in");
    }
    const gotToSignUpPage = () => {
        navigate("/accounts/sign-up");
    }
    const gotToProfilePage = () => {
        navigate("/accounts/profile");
    }
    const goToCategory = (name) => {
        navigate(`/category/${name}`);
    }
    const temp = { first_name: '', last_name: '', user_name: '', email: '', password: '', }
    const loogout = () => {
        localStorage.setItem('k', JSON.stringify(temp));
        navigate("/");
    }

    const isLodded = () => {
        if (localStorage.getItem('k') ===JSON.stringify(temp)) {
            return <>
                <Button variant="text" sx={{ color: '#7B787B' }} onClick={() => { gotToSigninPage() }}>Sign-In</Button>
                <Button variant="contained" sx={{ color: 'black', bgcolor: '#FCCF69' }} onClick={() => { gotToSignUpPage() }}>Sign-Up</Button>
            </>
        } else {
            return <>
                <Button variant="outlined" sx={{ color: 'black', borderColor: 'black', }} onClick={() => { gotToUploadPage() }}>Submit Photo</Button>
                <Button variant="contained" sx={{ color: 'black', bgcolor: '#FCCF69' }} onClick={() => { gotToProfilePage() }}>Profile</Button>
                <Button variant="contained" sx={{ color: 'black', bgcolor: '#FCCF69' }} onClick={() => { loogout() }}>Logout</Button>
            </>
        }
    }
    return (
        <div style={{ width: '100%', height: '18vh', position: 'fixed', zIndex: 999 }}>
            <Box boxShadow={9} sx={{ width: '100%', height: '100%', bgcolor: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', height: '9vh', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', width: '50%', gap: '20px' }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/NC.jpg"
                            sx={{ width: 56, height: 56, border: '1px solid black', margin: '0px 4px' }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', margin: '0px 10px' }}>

                        <Button variant="text" sx={{ color: '#7B787B', }} onClick={() => { gotToAboutPage() }} >About us</Button>
                        {
                            isLodded()
                        }
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'start', alignItems: 'center', width: '100%', height: '50%' }}>
                    <Link to="/" underline="none" style={liststyle}>
                        {'Home'}
                    </Link>
                    <Link to="/category/nature" underline="none" style={liststyle} >
                        {'Nature'}
                    </Link>
                    <Link to="/category/travel" underline="none" style={liststyle}>
                        {'Travel'}
                    </Link>
                    <Link to="/category/animal" underline="none" style={liststyle}>
                        {'Animal'}
                    </Link>
                    <Link to="/category/wallpaper" underline="none" style={liststyle}>
                        {'Wallpaper'}
                    </Link>
                    <Link to="/category/india" underline="none" style={liststyle}>
                        {'India'}
                    </Link>
                    <Link to="/category/anime" underline="none" style={liststyle}>
                        {'Anime'}
                    </Link>
                    <Link to="/category/flower" underline="none" style={liststyle}>
                        {'Flower'}
                    </Link>
                    <Link to="/category/city" underline="none" style={liststyle}>
                        {'City'}
                    </Link>
                    <Link to="/category/people" underline="none" style={liststyle}>
                        {'People'}
                    </Link>
                    <Link to="/category/film" underline="none" style={liststyle}>
                        {'Film'}
                    </Link>
                    <Link to="/category/fashion" underline="none" style={liststyle}>
                        {'Fashion'}
                    </Link>
                    <Link to="/category/history" style={liststyle}>
                        {'History'}
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default Header