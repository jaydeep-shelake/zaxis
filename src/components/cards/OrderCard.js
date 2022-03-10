import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {IoMdArrowDropdown} from 'react-icons/io'
import CancleForm from '../orders/CancleForm'
const OrderCard = (props) => {
 
    const [cancel,setCancel]=useState(true)
    const [showCancleForm,setShowCancleForm]=useState(false)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date=`${props?.order?.placedAt.toDate().getDate()} ${months[props?.order?.placedAt?.toDate().getMonth()]} ${props?.order?.placedAt?.toDate().getFullYear()}`
    // console.log(date)
    const palcedDate = new Date().getTime();
    const OneDay = new Date(`${months[props?.order?.placedAt?.toDate().getMonth()]} ${props?.order?.placedAt.toDate().getDate()}, ${props?.order?.placedAt?.toDate().getFullYear()}`).getTime() + (1 * 24 * 60 * 60 * 1000)
    console.log('24 hour',OneDay,'placed date',palcedDate)
     console.log(OneDay > palcedDate)
    useEffect(()=>{
        if (OneDay > palcedDate) {
            // The yourDate time is less than 1 days from now
            console.log('you can cancel')
            setCancel(true)
        }
        else if (OneDay <palcedDate) {
            console.log('you canot cancel order')
            setCancel(false)
            // The yourDate time is more than 1 days from now
        }
    },[])
   
    return (
        <>
        <div className="order-card">
            <Link to={`/products/${props.order?.productId}`}>
                <div className="order-img">
                    <img src={props.order?.imgUrl} alt="" />
               </div>
            </Link>
            <div className="order-des">
                <div className="order-title mb-2">
                <h3>{props.order.title}</h3>
                 
                </div>
                <div className="size">
                    <div style={{background:props.order.color==='white'?'rgb(238, 235, 235)':props.order.color}} className="color-circle">

                    </div>
                    <p>{props.order.size}</p>
                    
                </div>
                {(props.order.placed&&props.order.status==='Placed')&&<p className="text-sm text-green-600 mb-2">PLACED</p>}
                    {(props.order.packed&&props.order.status==='Packed')&&<p className="text-sm text-green-600 mb-2">PACKED</p>}
                    {(props.order.shipped&&props.order.status==='Shipped')&&<p className="text-sm text-green-600 mb-2">SHIPPED</p>}
                    {(props.order.deliverd&&props.order.status==='Deliverd')&&<p className="text-sm text-green-600 mb-2">DELIVERED</p>}
                    {(props.order.cancled&&props.order.status==='Canceled')&&<p className="text-sm text-red-600 mb-2">CANCELED</p>}
                <div className="order-btns">
                    <div className="full-cancel flex flex-col items-start justify-start cancel-area">
            {(cancel&&!props.order.cancled)?<button onClick={()=>setShowCancleForm(true)} className={`cancle-btn cancel`}>CANCEL PACKAGE</button>:<button className={`cancle-btn`}>CANCEL PACKAGE</button>}
             {cancel&&<p className="text-xs pt-2 text-right" style={{color:'#D10404CF'}}>WITHIN 24 HOURS OF PLACING ORDER</p>}
             {!cancel&&<p className="text-xs pt-2 underline text-right" > CONTACT SUPPORT</p>}
            </div>
                    <div className="res-cancel flex flex-col items-end justify-end cancel-area">
            {(cancel&&!props.order.cancled)?<button onClick={()=>setShowCancleForm(true)} className={`cancle-btn cancel`}>CANCEL PACKAGE</button>:<button className={`cancle-btn`}>CANCEL PACKAGE</button>}
             {cancel&&<p className="text-xs pt-2 text-right" style={{color:'#D10404CF'}}>WITHIN 24 HOURS OF PLACING ORDER</p>}
             {!cancel&&<p className="text-xs pt-2 underline text-right" >CONTACT SUPPORT</p>}
            </div>
                </div>
                
            </div>
            <div className="more-btns">
                <button className="more-btn">MORE <IoMdArrowDropdown/></button>
                    <button className="track-btn">TRACK PACKAGE</button>
                </div>
        </div>
        {showCancleForm&&<CancleForm order={props.order} setShowCancleForm={setShowCancleForm}/>}
        </>
    )
}

export default OrderCard
