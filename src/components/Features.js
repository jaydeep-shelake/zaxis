import React from 'react'
import '../styles/featuers.css'
import {FaShippingFast} from 'react-icons/fa'
import {GiWallet,GiTakeMyMoney} from 'react-icons/gi'
const Features = () => {
  return (
    <div className='features-tab'>
     <div className="feat-icon">
         <div className='circle'>
         <FaShippingFast/>
         </div>
         <p>Free Shipping </p>
     </div>
     <div className="feat-icon">
         <div className='circle'>
        <GiWallet/>
         </div>
        <p>Easy Returns</p>
     </div>
     <div className="feat-icon">
         <div className='circle'>
       <GiTakeMyMoney/>
         </div>
       <p>COD Available</p>
     </div>
    </div>
  )
}

export default Features