import React, { useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import '../assets/style/Profile.css';
import { UserContext } from '../Context/User';
import { postUserLogin, userPosts } from '../Api/CoreApi';
import { Link } from "react-router-dom";
import '../assets/style/viewimage.css';
import { User_idContext } from '../Context/User_id';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Profile = () => {
  const userstate = useContext(UserContext);
  const userr_id = useContext(User_idContext);
  const [profile, setProfile] = useState([])

  const checkPostData = async () => {
    const res = await postUserLogin();

    res.data.map((curElem) => {
      const { User_name, password, email, first_name, last_name, bio, insta_name, faceboook_name, profile_image, user_id } = curElem;
      if (userstate.user.user_name === User_name && userstate.user.password === password) {
        setProfile({
          user_name: User_name,
          email: email,
          first_name: first_name,
          last_name: last_name,
          password: password,
          bio: bio,
          faceboook_name: faceboook_name,
          insta_name: insta_name,
          profile_image: profile_image,
          user_id: user_id
        })
        userr_id.setUser({ user_id: user_id })
        // console.log('t', userr_id)
        // console.log('userprofile', profile.profile_image)
        // navigate('/');
      }

    })
  }
  const [userpp, setUserpp] = useState([])
  // const userspost = async (id) => {
  //   try {
  //     const res = await userPosts(id);
  //     setUserpp(res.data)
  //   } catch (e) {
  //     return 'No Post yet'
  //   }
  // }
  const userspost = async (id) => {
    try {
      const res = await userPosts(id);
      // Check if res.data is an array
      if (Array.isArray(res.data)) {
        setUserpp(res.data);
      } else {
        // console.error('Unexpected response format:', res);
        setUserpp([]); // Reset to empty array if data is not an array
      }
    } catch (e) {
      // console.error('Error fetching user posts:', e);
      setUserpp([]); // Reset to empty array on error
    }
  };
  useEffect(() => {
    checkPostData();
  }, [])
  useEffect(() => {
    // console.log('call',profile.user_id)
    userspost(profile.user_id);
  }, [profile.user_id])
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* <Header /> */}
      <br />
      <div className="profileDetails">
        <Avatar
          alt="Remy Sharp"
          src={profile.profile_image || '/user11.png'}
          sx={{ width: 200, height: 200, border: '5px solid white', boxShadow: '4' }}
        />
        <div className="details">
          <div className="nameshow">
            <h1 style={{ fontSize: '32px' }}>{profile.first_name} {profile.last_name}</h1>
            <Link to={'/accounts/profile/edit'}>Edit Profile</Link>
          </div>
          <h5>{profile.user_name}</h5>
          <p style={{display:'flex',alignItems:'center'}}><EmailIcon />{profile.email} &nbsp; <FacebookIcon/>{profile.faceboook_name}&nbsp; <InstagramIcon/>{profile.insta_name}</p>
          <p>{(profile.bio == '' && <p>{profile.bio}</p>)}</p>
        </div>
      </div>
      <div className="posts">
        <div className='container'>
          {!Array.isArray(userpp) ? (
            <h1>Page not found</h1>
          ) : userpp.length === 0 ? (
            <h1>No items found</h1>
          ) : (
            userpp.map((curElem) => {
              const { image_file, img_id } = curElem;
              const linkd = '/image/' + img_id;
              return (
                <div className="box" key={img_id}>
                  <Link to={linkd}>
                    <img src={image_file} alt={img_id} />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile