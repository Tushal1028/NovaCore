import React, { useContext, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { postUserLogin } from '../Api/CoreApi';
import { UserContext } from '../Context/User';


const SignIn = () => {

    const userstate = useContext(UserContext)
    // console.log('userstate', userstate)

    const navigate = useNavigate();
    const [error, Seterror] = useState({
        user_name: '',
        password: '',
    });
    const [fromData, SetformData] = useState({
        user_name: '',
        password: '',
    })
    const isValidPassword = (password) => {
        const symbolRegex = /[!@#$%^&*(),.?:<>|{}]/
        const number = /[0-9]/
        const upper = /[A-Z]/
        const lower = /[a-z]/
        return (
            password.length >= 8 &&
            symbolRegex.test(password) &&
            number.test(password) &&
            upper.test(password) &&
            lower.test(password)
        );
    }
    const validateForm = () => {
        let newErrors = [];
        if (!fromData.user_name) {
            newErrors.user_name = 'User name is required';
        }
        if (!fromData.password) {
            newErrors.password = 'Password is required';
        } else if (!isValidPassword(fromData.password)) {
            newErrors.password = 'Password must be at least 8 charecter long and contain at least one symbol, one number ,one upper case letter,one lower case letter';
        }
        Seterror(newErrors);
        // console.log(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handelFormSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            // console.log('Form Submited', fromData)
            checkPostData();
        }
        else {
            console.log('from validations failed')
        }

    }
    const checkPostData = async () => {
        const res = await postUserLogin();

        res.data.map((curElem) => {
            const { User_name, password, email, first_name, last_name } = curElem;
            if (fromData.user_name === User_name && fromData.password === password) {
                userstate.setUser({
                    user_name: User_name,
                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                    password: password,
                })
                // console.log('usercontext',userstate)
                navigate('/');
            }

        })

    }

    const handelChange = (e) => {
        const { name, value } = e.target;
        SetformData({
            ...fromData,
            [name]: value,
        })
    }


    return (
        <div>
            <Box sx={{ height: '96vh', width: '100%', bgcolor: 'white', display: 'flex' }}>
                <Box sx={{ margin: '100px 100px', width: '60%', padding: '20px 10px' }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/user11.png"
                        sx={{ width: 75, height: 75 }}
                    />
                    <Typography variant="h5" component="h2" sx={{ margin: '20px 0px', fontWeight: '700' }}>Sign In</Typography>
                    <form onSubmit={handelFormSubmit} style={{height:'100%', width:'100%'}}>
                        <TextField
                            id="standard-error-helper-text"
                            label="User Name"
                            name='user_name'
                            value={fromData.user_name}
                            onChange={handelChange}
                            variant="standard"
                            sx={{ width: '80%', margin: '20px 10px' }}
                            helperText={error.user_name && <p className='error'>{error.user_name}</p>}
                        />

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name='password'
                            value={fromData.password}
                            onChange={handelChange}
                            variant="standard"
                            sx={{ width: '80%', margin: '10px 10px' }}
                            helperText={error.password && <p className='error'>{error.password}</p>}
                        />
                        {/* <Typography variant="p" component="p" sx={{ margin: '20px 150px', textAlign: 'end' }}><a href="#" style={{ textDecoration: 'none' }}>Forgot Passowrd</a></Typography> */}
                        <Button variant="contained" type='submit' sx={{ margin: '10px 40%', bgcolor: '#FED164', color: 'black', fontWeight: '550', padding: '10px 30px' }}>Sign In</Button>
                    <Typography variant="p" component="p" sx={{ margin: '20px 0px' }}>Don't have an account? <Link to="/accounts/sign-up" style={{ textDecoration: 'none' }}>Sign-up-here</Link></Typography>
                    </form>
                </Box>
                <img src="/peakpx.jpg" alt="" style={{ height: '100%', width: '40%', transform: 'scaleX(-1)' }} />
            </Box>
        </div>
    )
}

export default SignIn