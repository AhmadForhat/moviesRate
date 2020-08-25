import React from 'react';
import icon_back from './image/iconBack.png'

const Headers = ({location, title}) => {
    return (
        <div style={{display:'flex', marginTop:'20px'}}>
            <a style={{selfAlign:'left', marginLeft:'20px'}}href={location}><img src={icon_back} style={{width:'40px'}}/></a>
            <h2 style={{selfAlign:'center', margin:'0 auto', fontSize:'22px'}}>{title}</h2>
        </div>
    )
}

export default Headers