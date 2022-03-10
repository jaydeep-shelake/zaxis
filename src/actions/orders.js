import { db, firestore } from "../firebase"
import {history} from '../history'
import { CANCEL_ORDER, GET_ORDERS, PLACE_ORDER } from "./types"

export const placeOrder=(data)=>async(dispatch,getState)=>{
    const cart = getState().cart
    const userId=getState().user?.user?.userId
    cart.map((itm,i)=>{
        db.orders.add({...data,imgUrl:itm.imageUrl,color:itm.color,title:itm.title,quanity:itm.quanity,size:itm.size,price:itm.price,productId:itm.productId,userId:itm.userId,coustomText:itm.coustomText,placedAt:db.getCurrentTimeStamp(),placed:true,shipped:false,cancled:false,deliverd:false,packed:false,status:'Placed'})
        .then(()=>{
            dispatch({type:PLACE_ORDER,payload:data})
            console.log('order saved successfully')
            db.cart.doc(itm.id).delete()
            .then(()=>{
                console.log('cart deleted')
            })
        })
    })

    
    history.push('/order-confirmed')
}

export const getOrders=()=>(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
 db.orders.where('userId','==',userId)
 .onSnapshot((snapshot)=>{
     dispatch({type:GET_ORDERS,payload:snapshot.docs.map(db.formatedDoc)})
 })
}

export const cancleOrder=(id,product)=>(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
    db.orders.doc(id).update({
        cancled:true,
        status:'Canceled'
    })
    .then(()=>{
        dispatch({type:CANCEL_ORDER,payload:id})
        firestore.collection('cancelOrders').add({...product,userId})
    })
}