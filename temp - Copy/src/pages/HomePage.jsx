import React, { useEffect } from 'react'
import ViewImage from '../components/ViewsImages'
import '../assets/style/Home.css'
const HomePage = () => {
    useEffect(()=>{
        
    },[]);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <br />
            <div className="homeimg" style={{backgroundImage:'url(./D2.jpg)'}}>
                <div className="box">
                    <div className="info">
                        <h1>NovaCore</h1>
                        <h3>Photos for Everyone</h3>
                        <p>Free & high Quality images that you can use for any project.</p>
                        <p>Powered by Creators everywhere</p>
                    </div>
                </div>
            </div>
            <ViewImage />
        </div>
    )
}

export default HomePage