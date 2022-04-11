import React from 'react'
import '../../styles/main.css'
const PCard = ({type,img,url}) => {
  return (
    <div className="product-cat-card">
      <div className="b-s"></div>
     <img src={img} alt="" />
     <p>{type}</p>
     <div className="box">
       
     </div>
    </div>
  )
}

export default PCard