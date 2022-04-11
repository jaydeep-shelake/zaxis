import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaRegHeart,FaHeart} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import '../../styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToWhislist, deleteWishlist } from '../../actions/wishlist'
const Card = ({img,id,title,price,originalPrice,hascolors,des}) => {
    const [show,setShow]=useState(false)
    const history = useHistory()
    const dispatch =useDispatch()
    const  wishlist = useSelector(state=>state.getWishlist)
    const changeRoute=()=>{
         
         history.push(`/products/${id}`)
    }
    const addWhislist=(e)=>{
        e.stopPropagation()
        // remove from whishlist
        dispatch(addToWhislist(
            id,title,originalPrice,price,img
        ))
    }

    const removeFormWishlist=(e)=>{
        e.stopPropagation()
        dispatch(deleteWishlist(id))
    }
    const getWishlistStyle=()=>{
     if(wishlist.find(x=>x.id===id)) return <FaHeart className='fill'/>
     else return <FaRegHeart/>
    }
    return (
        
        <div onClick={changeRoute} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className={` w-80 relative bg-white flex flex-col items-start justify-start p-2 mr-2 hover:shadow-xl card-1`}>
            <img className="h-4/5" src={img} alt="img" />
            <div className="card-heart" onClick={wishlist.find(x=>x.id===id)?removeFormWishlist:addWhislist}>
              {getWishlistStyle()}
            </div>
            <div onClick={(e)=>e.stopPropagation()} className={`add-section ${show&&'show'}`}>
            <button className='add-cart-button '>
                <p>Add to carts</p>
            </button>
            </div>
            <h3 className="py-1 text-lg">{title}</h3>
            <p className="text-gray-500">{des}</p>
            <p className="text-sm mt-1">{price} Rs. <span className="text-gray-500 tex-xs text-red-500 line-through">{originalPrice}</span></p>
            
            {hascolors&&(<div className="flex mt-2">
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
            </div>)}
           
        </div>
        
    )
}

export default Card
