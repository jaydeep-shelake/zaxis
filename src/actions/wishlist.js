import {db} from '../firebase'
import { ADD_TO_WHISLIST } from './types'
import {notification} from './index'
export const addToWhislist=(id,title,originalPrice,price,imageUrl)=>async(dispatch,getState)=>{
    const userId=getState().user?.user?.userId

    db.wishlist.doc(id).set({
   productId:id,
   title,
   originalPrice,
   price,
   imageUrl,
   userId
    }).then(()=>{
        dispatch({type:ADD_TO_WHISLIST,payload:{productId:id,
            title,
            originalPrice,
            price,
            imageUrl,userId}})
        dispatch(notification({msg:"Product added to wishlist",err:false}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
    })
    .catch((err)=>{
      console.log(err)
      dispatch(notification({msg:"Unable added to wishlist",err:true}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
    })
}