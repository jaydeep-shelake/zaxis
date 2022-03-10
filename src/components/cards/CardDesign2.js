import React from 'react'

const CardDesign2 = ({img,title}) => {
    return (
        <div className="card-2 relative bg-white flex flex-col items-start justify-start p-2 mr-2">
            <img className="h-full w-full" src={img} alt="img" />
            <h3 className="card-2-title py-1 absolute bottom-20 left-10 text-3xl text-black">{title}</h3>
            
            <div className="absolute bottom-6 left-10  p-2 bg-transparent border-2 border-black ">SHOP NOW</div>
        </div>
    )
}

export default CardDesign2
