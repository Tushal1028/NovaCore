import React, { useEffect, useState } from 'react'
import '../assets/style/ImageShoe.css'
import { getImageById, getUser } from '../Api/CoreApi';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ImageView = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [date, Setdate] = useState(String);
    const getPostData = async (id) => {
        try {
            const res = await getImageById(id);
            setData(res.data);
            Setdate(res.data.added);
            

        } catch (err) {
            return 'mot  found';
        }

    };

    const [usert, SetUser] = useState([]);
    const getUserData = async () => {
        try {
            const userf = await getUser(data.user);
            SetUser(userf.data);
        } catch (err) {
            return 'not found';
        }
    }
    useEffect(() => {
        getPostData(id);
    }, [id]);
    useEffect(() => {
        getUserData();
    }, [data.user]);
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <br />
            <div className="imageshows">
                <div className="left">
                    <img src={data.image_file} alt={data.img_id} />
                </div>
                <div className="right">
                    <h3><span>Featured In </span>{(data.category)}</h3>
                    <h3>Related Tags</h3>
                    <p>{data.tags}</p>
                    <div className="infotext">
                        <p style={{display:'flex',alignItems:'center'}}><PersonIcon/>Published by {usert.first_name}</p>
                    </div>
                    <div className="infotext">
                        <p style={{display:'flex',alignItems:'center'}}><CalendarMonthIcon/>Published on   {date.slice(0, 10)}</p>
                    </div>
                    <div className="infotext">
                        <p style={{display:'flex',alignItems:'center'}}><LocalPoliceIcon/>Free to use under NovaCore Linces</p>
                    </div>
                    <a href={'image/' + data.img_id} download={data.image_file}>
                        <button className='btn' >
                            <ArrowDownwardIcon/>
                            Download Free
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ImageView