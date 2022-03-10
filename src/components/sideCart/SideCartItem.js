import React ,{useState}from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {connect} from 'react-redux'
import {deleteCartItem,updateCartQauntity} from '../../actions/cart'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
const SideCartItem = (props) => {
    console.log(props)
    const [updatedQuantity,setQuantity]=useState(props.quanity)
    if(updatedQuantity<=0){
        setQuantity(1)
    }
   
useEffect(()=>{
props.updateCartQauntity(props.id,updatedQuantity,props.totalPrice)
},[updatedQuantity])

 const handleDelete=()=>{
     props.deleteCartItem(props.id)
 }

    return (
        <div className="side-cart-item">
            <Link to={`products/${props.productId}`}>
            <div className="side-cart-item-img">
              <img src={props.imageUrl} alt="" />
            </div>
            </Link>
            <div className="side-cart-item-des pl-4 ">
                <div className="item-des">
                <p className="text-sm">{props.title}</p>
                 <p className="text-sm">Rs{props.price}</p>
                 <p className="text-sm py-2">size:<span className="font-bold ml-2">{props.size}</span></p>
                  <p className="text-sm py-2 flex items-center">color:<span style={{background:props?.hex}} className="cart-color ml-2"></span></p>
                </div>
                 <div className="item-handler">
                     <div className="item-quanity">
                         {!props.disable&&<button onClick={()=>setQuantity(updatedQuantity-1)}>-</button>}
                           <p>{props.quanity}</p>
                           {!props.disable&&<button  onClick={()=>setQuantity(updatedQuantity+1)}>+</button>}
                     </div>
                     {!props.disable&&(<div className="trash-btn">
                         <button onClick={handleDelete} className="p-2 hover:bg-gray-100 rounded-full"><DeleteOutlineIcon/></button>
                     </div>)}
                 </div>
            </div>
        </div>
    )
}



export default connect(null,{deleteCartItem,updateCartQauntity})(SideCartItem)
