import React from 'react'
import model from '../../assets/img/spring-osis-2.png'
const CollabCard = () => {
    return (
        <div className="collab-card">
            <img src={model} alt="" />
            <div className="collab-des">
             <p className="text-sm">ESSENTIAL CHIFFON HIJAB - BLACK</p>
             <p>$5.99 <span>$5.99</span></p>
            </div>
        </div>
    )
}

export default CollabCard
