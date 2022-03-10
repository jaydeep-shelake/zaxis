import{db,storage} from '../firebase'
import{ADD_REVIEW, GET_REVIEWS} from './types'
import {notification} from './index'
export const addReview=(reviewText,stars,productId,files)=>async(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
    const userName=getState().user?.user?.name
 db.reviews.add({
  reviewText,
  stars,
  productId,
  userId,
  userName
 }).then((doc)=>{
     if(files){
         const uploadReview=storage.ref(`reviews/${doc.id}`).putString(files,'data_url')

         uploadReview.on('state_change',null,err=>console.log(err),()=>{
            storage.ref(`reviews`).child(doc.id).getDownloadURL().then(url=>{
                db.reviews.doc(doc.id).set({
                    ReviewImg:url
                },{merge:true})
            })
         })
     }
     dispatch({type:ADD_REVIEW,payload:{reviewText,stars,productId,userId,userName}})
     dispatch(notification({msg:"Review added",err:false}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
 })
 .catch((err)=>{
     console.log(err)
     dispatch(notification({msg:"Failed to add review",err:true}))
        setTimeout(()=>{
            dispatch(notification({msg:"",err:false}))
      },2000)
 })
}


export const getReviews=(productId)=>(dispatch,getState)=>{
    db.reviews
    .where('productId','==',productId)
    .onSnapshot((sanpShot)=>{
        console.log(sanpShot.docs.map(db.formatedDoc))
        dispatch({type:GET_REVIEWS,payload:sanpShot.docs.map(db.formatedDoc)})
    })
}