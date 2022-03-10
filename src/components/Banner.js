import React from 'react'

const Banner = ({img,text,height}) => {
    return (
        <div className="banner-1 relative w-full h-full mt-12 mb-12" style={{height:height}}>
            <img src={img} alt="banner-img" className="h-full w-full p" />
            {text&&<h1 className="banner-title text-5xl text-white w-1/3 absolute top-1/2 left-32">{text}</h1>}
        </div>
    )
}

export default Banner
