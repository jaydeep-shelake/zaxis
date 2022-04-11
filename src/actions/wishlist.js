import {db} from '../firebase'
import { ADD_TO_WHISLIST, DELETE_WISHLIST, GET_WISHLIST } from './types'
import {notification} from './index'
export const addToWhislist=(id,title,originalPrice,price,imageUrl)=>async(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
    console.log('added')
    db.wishlist.doc(id).set({
   productId:id,
   id:id,
   title,
   originalPrice,
   price,
   imageUrl,
   userId
    }).then(()=>{
        dispatch({type:ADD_TO_WHISLIST,payload:{productId:id,
          id:id,
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

export const getWishlist =()=>async(dispatch,getState)=>{
  const userId=getState().user?.user?.userId

  if(userId){
  db.wishlist.where('userId','==',userId)
        .get()
        .then((sanpShot)=>{
          dispatch({type:GET_WISHLIST,payload:sanpShot.docs.map(db.formatedDoc)})
            console.log(sanpShot.docs.map(db.formatedDoc))
        })
        .catch((err)=>{
            console.log(err);
        })
  }
}
export const deleteWishlist =(id)=>async(dispatch)=>{
  console.log('removed')
 await db.wishlist.doc(id).delete()
 dispatch({type:DELETE_WISHLIST,payload:id})
}