import React from 'react'
import modelRow from '../assets/img/feautred-model.png'
const Feautred = () => {
    return (
        <div className="feautred-area bg-gray-100 flex flex-col w-full p-32">
            <div className="flex items-center justify-between">
                <div className="feautred-text">
                <h1 className="text-xl font-bold">@ANAFashion</h1>
                <p className="text-sm tag-text">TAG US FOR A CHANCE TO BE FEATURED</p>
                </div>
                <div className="follow-btn p-2 border-2 border-black text-md">Follow US</div>
            </div>
            <div className="flex justify-evenly flex-wrap">
               <div className="images-row">
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
               </div>
               <div className="images-row">
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
                   <img src={modelRow} alt="" />
               </div>
            </div>
        </div>
    )
}

export default Feautred
