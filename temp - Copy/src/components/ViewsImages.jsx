import React from 'react'
import '../assets/style/viewImage.css'
import { getPost } from '../Api/CoreApi'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const ViewImage = () => {
    const [data, setData] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
    };
    useEffect(() => {
        getPostData();
    }, []);
    return (
        <div className='container'>
            {
                data.map((curElem) => {
                    const { image_file, img_id } = curElem;
                    var linkd='/image/'+img_id
                    return (
                        <div className="box">
                            <Link to={linkd}>
                                <img src={image_file} alt={img_id} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewImage