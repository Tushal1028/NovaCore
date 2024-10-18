import React from 'react'
import '../assets/style/viewImage.css'
import '../assets/style/Home.css'
import { getPostByCategory, } from '../Api/CoreApi'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const Category = () => {
    const { category_name } = useParams();
    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({});

    const getPostData = async (loc) => {
        try {
            const res = await getPostByCategory(loc);
            setData(res.data);
        } catch (err) {
            return 'mot  found';
        }

    };
    useEffect(() => {
        const loc = window.location.pathname;
        const cate = loc.slice(9, loc.length)
        getPostData(cate);

    }, [category_name]);


    return (
        <div>
            <div className="nn"></div>
            <div className='container'>
                {!data ? (
                    <h1>Page not found</h1>
                ) : data.length === 0 ? (
                    <h1>No items found</h1>
                ) : (
                    data.map((curElem) => {
                        const { image_file, img_id } = curElem;
                        var linkd='/image/'+img_id
                        return (
                            <div key={img_id} className="box">
                                <Link to={linkd}>
                                    <img  src={image_file} alt={img_id} />
                                </Link>
                            </div>
                        );
                    })
                )}

            </div>
        </div>
    )
}

export default Category