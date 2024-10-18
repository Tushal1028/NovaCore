// export default ProfileEdit
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User_idContext } from '../Context/User_id';
import '../assets/style/ProfileEdit.css'

const ProfileEdit = () => {
    const [userData, setUserData] = useState({});
    const [existingProfileImage, setExistingProfileImage] = useState(null);
    const ids = useContext(User_idContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/users/${ids.user.user_id}/`);
            setUserData(response.data);
            setExistingProfileImage(response.data.profile_image); // Save the existing image
        };
        fetchUserData();
    }, [ids.user.user_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserData({ ...userData, profile_image: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (const key in userData) {
            formData.append(key, userData[key]);
        }

        // If no new image is uploaded, append the existing image
        if (!userData.profile_image && existingProfileImage) {
            formData.append('profile_image', existingProfileImage);
        }

        console.log('Submitting data:', Array.from(formData.entries()));

        try {
            await axios.put(`http://127.0.0.1:8000/users/${userData.user_id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/');
        } catch (error) {
            console.error('Error updating profile:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>
                        <label htmlFor="">First Name :</label>
                    </td>
                    <td>
                        <input
                            type="text"
                            name="first_name"
                            value={userData.first_name || ''}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Last Name :</label>

                    </td>
                    <td>
                        <input
                            type="text"
                            name="last_name"
                            value={userData.last_name || ''}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>

                        <label htmlFor="">User Name :</label>
                    </td>
                    <td>
                        <input
                            type="text"
                            name="User_name"
                            value={userData.User_name || ''}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Email :</label>
                    </td>
                    <td>
                        <input
                            type="email"
                            name="email"
                            value={userData.email || ''}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>

                        <label htmlFor="">Bio :</label>
                    </td>
                    <td>
                        <textarea
                            name="bio"
                            value={userData.bio || ''}
                            onChange={handleChange}
                            placeholder="Bio"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Instagram Name :</label>
                    </td>
                    <td>

                        <input
                            type="text"
                            name="insta_name"
                            value={userData.insta_name || ''}
                            onChange={handleChange}
                            placeholder="Instagram Name"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Facebook Name :</label>
                    </td>
                    <td>
                        <input
                            type="text"
                            name="faceboook_name"
                            value={userData.faceboook_name || ''}
                            onChange={handleChange}
                            placeholder="Facebook Name"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Profile Ima:</label>
                    </td>
                    <td>
                        <input
                            type="file"
                            name="profile_image"
                            onChange={handleFileChange}
                            accept="image/*"
                            placeholder="Profile Image"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type="submit">Update Profile</button>
                    </td>
                </tr>
            </table>
        </form>
    );
};

export default ProfileEdit;
