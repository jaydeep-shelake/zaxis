import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/home.css'
const Card = ({img,id,title,price,originalPrice,hascolors,des}) => {
    return (
        <Link to={`/products/${id}`}>
        <div  className="w-80 relative bg-white flex flex-col items-start justify-start p-2 mr-2 hover:shadow-xl card-1">
            <img className="h-4/5" src={img} alt="img" />
            <h3 className="py-1 text-lg">{title}</h3>
            <p className="text-gray-500">{des}</p>
            <p className="text-sm mt-1">{price} Rs. <span className="text-gray-500 tex-xs text-red-500 line-through">{originalPrice}</span></p>
            {hascolors&&(<div className="flex mt-2">
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
            </div>)}
            <div className="sale-tag absolute top-5 right-6 bg-white p-1 ">ON SALE</div>
        </div>
        </Link>
    )
}

export default Card
