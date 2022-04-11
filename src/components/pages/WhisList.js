import React from 'react'
import ProfileNavigation from '../profile/ProfileNavigation'
import Header from '../Header'
import {connect, useDispatch, useSelector} from 'react-redux'
import DressCard from '../cards/DressCard';
import '../../styles/wishlist.css';
const WhisList = (props) => {
  const product = useSelector(state=>state.getWishlist)
    return (
        <>
        <Header/>
        <div className="profile-page">
            <ProfileNavigation/>
            <div className="wish-list">
            <h1 className="profile-title orders-title">Wish List</h1>
                {
                    product.map((pro,i)=>(
                        <DressCard 
                        name={pro?.title}
                        price={pro?.price} 
                        originalPrice={pro?.originalPrice}
                        id={pro?.productId}
                        imageUrl={pro?.imageUrl}
                        key={pro?.productId}
                        />
                    ))
                }
             
    
            </div>
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{userId:state.user?.user?.userId}
}

export default connect(mapStateToProps)(WhisList)
