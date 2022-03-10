import React from 'react'
import '../../styles/orders.css'
import ProfileNavigation from '../profile/ProfileNavigation'
import {connect} from 'react-redux'
import Header from '../Header'
import OrderCard from '../cards/OrderCard'
const Orders = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date=`${props?.orders[0]?.placedAt.toDate().getDate()} ${months[props?.orders[0]?.placedAt?.toDate().getMonth()]} ${props?.orders[0]?.placedAt?.toDate().getFullYear()}`
    // console.log(props.orders[0].placedAt.toDate().getDate())
 
    return (
        <>
        <Header/>
        <div className="profile-page">
            <ProfileNavigation/>
            <div className="orders">
            <h1 className="profile-title orders-title">My Orders</h1>
                <h2>{date}</h2>
               {
                props.orders.map((order,i)=>(
                    <OrderCard key={order.id} order={order}/> 
                ))
               }
               {/* <h2>03 FEBRUARY 2021</h2> */}
               {/* <OrderCard/> */}
            </div>
        </div>
        </>
    )
}
const mapStateToProps=(state)=>{
return{orders:state.orders}
}

export default connect(mapStateToProps)(Orders)
