
import {ADD_TO_CART,SHOW_CART,GET_CART, CART_TOTAL, DELETE_CART_ITEM, UPDATE_CART_QUANITY} from './types'
import {db} from '../firebase'

export const showCart=(boolean)=>{
    return{type:SHOW_CART,payload:boolean}
}

export const  addToCart=(data)=>async(dispatch,getState)=>{
    const {productId,color,size,quanity,price}=data;
 const userId =getState().user?.user?.userId;
const cart = getState().cart
 const itemWithColor= cart.find((item)=>item.color===color)
 const itemWithSize= cart.find((item)=>item.size===size)
 const itemColorSize=cart.find((item)=>item.size===size&&item.color===color)
 console.log('item with color and size',itemColorSize)
 if(productId&&itemColorSize){
     console.log('item present in cart')
 cart.map((item)=>{
   if(item.color===color&&item.size===size){
   db.cart.doc(item.id).update({
    quanity:item.quanity+quanity,
    totalPrice:item.price*(item.quanity+quanity)
   })
   .then(()=>{
       dispatch({type:UPDATE_CART_QUANITY,payload:item.id})
       dispatch(showCart(true))
    })
}else{
 return item
}
 })
 }
 else{
     console.log('cart data',{...data})
    db.cart.add({...data,userId})
    .then((doc)=>{
        dispatch({type:ADD_TO_CART,payload:{...data,userId}})
        dispatch(showCart(true))
    })
 }

 
}

export const getCartItems=()=>(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
    db.cart.where('userId','==',userId)
    .onSnapshot(snapshot=>{
        console.log(snapshot.docs.map(db.formatedDoc))
        dispatch({type:GET_CART,payload:snapshot.docs.map(db.formatedDoc)})
    })  
}

export const deleteCartItem=(id)=>(dispatch)=>{
    db.cart.doc(id).delete()
    .then(()=>{
        dispatch({type:DELETE_CART_ITEM,payload:id})
    }).catch((err)=>{
        console.log(err)
    })
}

export const updateCartQauntity=(id,quanity,totalPrice)=>async(dispatch)=>{
    db.cart.doc(id).update({
        quanity:quanity,
    })
    .then(()=>{
        dispatch({type:UPDATE_CART_QUANITY,payload:id})
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const getCartTotal=()=>(dispatch,getState)=>{
    const cartItems=getState().cart;
    const total=cartItems.reduce((total,itm)=>total+itm?.price*itm?.quanity,0)
    dispatch({type:CART_TOTAL,payload:total})
}
