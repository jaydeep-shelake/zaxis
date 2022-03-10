import {db} from '../firebase';
import { ADD_ADDRES, GET_ADDRESS ,MSG,ADD_SINGLE_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS} from './types';

export const notification=(msg)=>{
    return{type:MSG,payload:msg}
  }

export const addAdress=(data)=>async(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
    db.address.add({...data,userId})
    .then(()=>{
     dispatch({type:ADD_ADDRES,payload:data})
     dispatch(notification({msg:"Address added",err:false}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
    })
    .catch((err)=>{
        console.log(err)
        dispatch(notification({msg:"Failed to add address",err:true}))
        setTimeout(()=>{
            dispatch(notification({msg:"",err:false}))
          },2000)
    })
}


export const getAddresses =()=>async(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
   db.address.where('userId','==',userId)
   .onSnapshot((sanpShot)=>{
       console.log(sanpShot.docs.map(db.formatedDoc))
     dispatch({type:GET_ADDRESS,payload:sanpShot.docs.map(db.formatedDoc)})
   })
}

// export const addSingleAdd=(address)=>{
//   return{type:ADD_SINGLE_ADDRESS,payload:address}
// }

//delete address

export const deleteAdress=(id)=>async dispatch=>{
   db.address.doc(id).delete()
   .then(()=>{
     dispatch({type:DELETE_ADDRESS,payload:id})
     dispatch(notification({msg:"Address deleted",err:false}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
   })
   .catch((err)=>{
     console.log(err)
     dispatch(notification({msg:"Unable deleted",err:true}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
   })
}


//update specific address

export const updateAddress=(id,data)=>async(dispatch)=>{
   db.address.doc(id).update(data).then(()=>{
     dispatch({type:UPDATE_ADDRESS,payload:data})
     dispatch(notification({msg:"Address Updated",err:false}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
   }).catch((err)=>{
     console.log(err)
     dispatch(notification({msg:"Unable to update address",err:true}))
     setTimeout(()=>{
        dispatch(notification({msg:"",err:false}))
      },2000)
   })
}