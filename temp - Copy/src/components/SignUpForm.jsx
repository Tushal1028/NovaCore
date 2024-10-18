import { Button, TextField } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { postUser } from '../Api/CoreApi';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/User';
import axios from 'axios';
// import { UserContext } from '../context/UserContext';

const SignUpForm = () => {
    const userstate = useContext(UserContext);
    // useEffect(() => {
    //     console.log('User state changed:', userstate.user);
    // }, [userstate.user]);
    const navigate = useNavigate();
    const [error, Seterror] = useState({
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [fromData, SetformData] = useState({
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    // console.log('a',adddata)
    const isvalidEmail = (email) => {
        const emailRegex = /^(.+)@(.+)$/;
        return emailRegex.test(email)
    }
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
        if (!fromData.first_name) {
            newErrors.first_name = 'First name is required';
        }
        if (!fromData.last_name) {
            newErrors.last_name = 'Last name is required';
        }
        if (!fromData.user_name) {
            newErrors.user_name = 'User name is required';
        }
        if (!fromData.email) {
            newErrors.email = 'Email is required';
        } else if (!isvalidEmail(fromData.email)) {
            newErrors.email = 'Inavalid  Email format';
        }
        if (!fromData.password) {
            newErrors.password = 'Password is required';
        } else if (!isValidPassword(fromData.password)) {
            newErrors.password = 'Password must be at least 8 charecter long and contain at least one symbol, one number ,one upper case letter,one lower case letter';
        }
        if (!fromData.confirm_password) {
            newErrors.confirm_password = 'Confirm Password is required';
        } else if (!(fromData.confirm_password == fromData.password)) {
            newErrors.confirm_password = 'Password not match';
        }
        Seterror(newErrors);
        // console.log(newErrors);
        return Object.keys(newErrors).length === 0;

    };
    const handelFormSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            // console.log('Form Submited', fromData)
            const {user_name,email,first_name,last_name,password} =fromData;
            userstate.setUser({
                user_name,
                email,
                first_name,
                last_name,
                password,
            })
            // console.log('user state', userstate.user)
            addpostData();
        }
        else {
            console.log('from validations failed')
        }

    }
    const addpostData = async () => {
        
        console.log('f',fromData)
        const res = await postUser({
            first_name: fromData.first_name,
            last_name: fromData.last_name,
            email: fromData.email,
            password: fromData.password,
            User_name: fromData.user_name,
        });
        // const res =await axios.post('http://127.0.0.1:8000/users/', fromData, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
         if (res.status === 201) {
            navigate('/')
        }
    }
    const handelChange = (e) => {
        const { name, value } = e.target;
        SetformData({
            ...fromData,
            [name]: value,
        })
    }

    return (
        <div >

            <form onSubmit={handelFormSubmit} action='/accounts/about'>
                <TextField
                    id="standard-basic"
                    label="First Name"
                    name='first_name'
                    value={fromData.first_name}
                    onChange={handelChange}
                    variant="standard"
                    sx={{ width: '100%', margin: '0px 10px', }}
                    helperText={error.first_name && <p className='error'>{error.first_name}</p>}
                />
                <TextField
                    id="standard-text"
                    label="Last Name"
                    name='last_name'
                    value={fromData.last_name}
                    onChange={handelChange}
                    variant="standard"
                    sx={{ width: '100%', margin: '0px 10px',  }}
                    helperText={error.last_name && <p className='error'>{error.last_name}</p>}
                />
                <TextField
                    id="standard-error-helper-text"
                    label="User Name"
                    name='user_name'
                    value={fromData.user_name}
                    onChange={handelChange}
                    variant="standard"
                    sx={{ width: '100%', margin: '0px 10px' }}
                    helperText={error.user_name && <p className='error'>{error.user_name}</p>}
                />
                <TextField
                    id="standard-error-helper-text"
                    label="Email"
                    name='email'
                    value={fromData.email}
                    onChange={handelChange}
                    variant="standard"
                    sx={{ width: '100%', margin: '0px 10px' }}
                    helperText={error.email && <p className='error'>{error.email}</p>}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name='password'
                    value={fromData.password}
                    onChange={handelChange}
                    variant="standard"
                    sx={{ width: '98%', margin: '0px 10px' }}
                    helperText={error.password && <p className='error'>{error.password}</p>}
                />
                <TextField
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    name='confirm_password'
                    value={fromData.confirm_password}
                    onChange={handelChange}
                    variant="standard"
                    sx={{ width: '98%', margin: '0px 10px' }}
                    helperText={error.confirm_password && <p className='error'>{error.confirm_password}</p>}
                />
                <Button
                    type='submit'
                    variant="contained"
                    sx={{ margin: '0px 40%', bgcolor: '#FED164', color: 'black', fontWeight: '550', padding: '10px 30px' }}
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
