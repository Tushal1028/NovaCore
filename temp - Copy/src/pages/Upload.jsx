import React, { useContext, useEffect, useRef, useState } from 'react';
import '../assets/style/Upload.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/User';
// import { postImage, postUserLogin } from '../Api/CoreApi';
import axios from 'axios';

const Upload = () => {
    // const userstate = useContext(UserContext);
    const navigate = useNavigate();

    const [image, setimage] = useState(null);
    const [tags, settgas] = useState("");
    const [category, setcategory] = useState('');
    const [preimage,setpreimage]=useState("./Upload12.png")
    const handelimagechange = (e) => {
        const file =e.target.files[0]
        setpreimage(file)
        setimage(file)
    }
    const handletagsChange = (e) => {
        settgas(e.target.value);
    }
    const handelCategoryChange = (e) => {
        setcategory(e.target.value);
    }

    const handelSubmit = async () => {
        // try{
        //     // const res=await 
        // }
        if(!image) {
            console.log("Please no image");
        }
        const formdata = new FormData();
        formdata.append('image_file', image);
        formdata.append('tags', tags);
        formdata.append('category', category);
        formdata.append('user', 32);
        // for(let pair of formdata.entries()){
        //     console.log(pair[0]+" : "+pair[1]);
        // }
        try {
            const res = await axios.post('http://127.0.0.1:8000/images/',formdata,{
                headers:{
                },
            });
            // console.log(res,data);
            navigate('/accounts/profile')
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
            <div className="photochose">
                <img src={preimage} alt={preimage.name} className='DefaultPhoto' />
                <label htmlFor="fileupload" className='chbtn'>CHOOSE FILE</label>
                <input
                    type="file"
                    name="imgfile"
                    id="fileupload"
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={handelimagechange}
                />
            </div>
            <div>
                <div className="ff">
                    <h3>Add tags</h3>
                    <textarea name="tags" rows={4} cols={50} onChange={handletagsChange} value={tags}></textarea>
                    {/* {error.tags && <span className="error">{error.tags}</span>} */}

                    <h3>Select Appropriate Category</h3>
                    <select name="cats" value={category} onChange={handelCategoryChange}>
                        <option value="nature">Nature</option>
                        <option value="travel">Travel</option>
                        <option value="animal">Animal</option>
                        <option value="wallpaper">Wallpaper</option>
                        <option value="india">India</option>
                        <option value="anime">Anime</option>
                        <option value="flower">Flower</option>
                        <option value="city">City</option>
                        <option value="people">People</option>
                        <option value="film">Film</option>
                        <option value="fashion">Fashion</option>
                        <option value="history">History</option>
                    </select>
                    {/* {error.cats && <span className="error">{error.cats}</span>} */}

                    <br />
                    <button onClick={handelSubmit}>
                        <ArrowUpwardIcon />
                        UPLOAD IMAGE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Upload;
