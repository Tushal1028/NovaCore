import { Box, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../assets/style/Footer.css"
import {  useNavigate,Link } from "react-router-dom";

const Footer = () => {
    const listyle = { fontSize: '24px', color: '#F9F8FF', borderBottom: '1px solid #FFD062' }
    const navigate = useNavigate()
    return (
        <div>
            <Box component="section" sx={{ bgcolor: 'black' }}>
                <Box sx={{ display: 'flex', padding: '20px 0px' }}>

                    <Typography variant="h5" component="h5" sx={{ color: '#FFD062', width: '100%', padding: "0px 120px" }}>
                        NovaCore
                    </Typography>
                    <Box sx={{ display: 'flex', marginRight: '110px', gap: '4px' }}>
                        <div onClick={()=>{navigate("/");}}>
                            <FacebookIcon sx={{ color: 'blue', fontSize: '3rem' }} />
                        </div>
                        <div onClick={()=>{navigate("/");}}>
                            <InstagramIcon sx={{ color: 'pink', fontSize: '3rem' }} />
                        </div>
                    </Box>
                </Box>
                <Box component="section" sx={{ color: '#B4B3B5', display: 'flex', justifyContent: 'space-around', padding: '15px 0px' }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={listyle}>Links</li>
                        <li><Link to='/' style={{ textDecoration: 'none', color: '#B4B3B5' }}>Home</Link></li>
                        <li><Link to='/accounts/about' style={{ textDecoration: 'none', color: '#B4B3B5' }}>About Us</Link></li>
                    </ul>
                    <ul style={{ listStyle: 'none', color: '#B4B3B5' }}>
                        <li style={listyle}>Recommended</li>
                        <li><Link to='/category/india' style={{ textDecoration: 'none', color: '#B4B3B5' }}>India</Link></li>
                        <li><Link to='/category/anime' style={{ textDecoration: 'none', color: '#B4B3B5' }}>Anime</Link></li>
                        <li><Link to='/category/people' style={{ textDecoration: 'none', color: '#B4B3B5' }}>People</Link></li>
                        <li><Link to='/category/travel' style={{ textDecoration: 'none', color: '#B4B3B5' }}>Travel</Link></li>
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={listyle}>Legal Info</li>
                        <li>Licnece</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policies</li>
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={listyle}>Contact</li>
                        <li>+91 9079680135</li>
                        <li>contactnovacore007@gmail.com</li>
                    </ul>
                </Box>




                <Divider orientation="horizontal" sx={{ border: '1px solid #F9F8FF' }} />
                <Box component="section" sx={{ p: 2, color: '#F9F8FF', marginLeft: '100px' }}>
                    &copy; 2024 NovaCore. All rights reserved.
                </Box>
            </Box>

        </div>
    )
}

export default Footer