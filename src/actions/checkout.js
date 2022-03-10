import { CHECKOUT } from "./types"
import {history} from '../history'
export const checkout=(data)=>async(dispatch,getState)=>{
    const userId=getState().user?.user?.userId
    const total =getState().cartTotal?.total
    const subTotal=total-data.Discount
    const deliveryCharges=subTotal<500?150:'Free'
    console.log({...data,userId,total})
    dispatch({type:CHECKOUT,payload:{...data,userId,subTotal,deliveryCharges}})
    history.push('/checkout')
}