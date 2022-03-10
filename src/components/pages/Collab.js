import React from 'react'
import '../../styles/collab.css'
import banner from '../../assets/img/banner-3.png'
import Header from '../Header'
import collabLogo from '../../assets/img/collab-logo.png'
import logoBalck from '../../assets/img/ANA-LOGO-04.png'
import CollabCard from '../cards/CollabCard'
const Collab = () => {
    return (
        <>
        <Header/>
        <div className="collab">
            <div className="collab-area">
                <div className="img-banner">
                    <img src={collabLogo} alt="" className="collab-logo" />
                    <img src={banner} alt="" />
                    <h1>Heading Title</h1>
                </div>
                <div className="collab-cards">
                    <div className="button-area-collab">
                        <button>SHOP THE COLLECTION</button>
                    </div>
                    <div className="collab-cards-area">
                      <CollabCard/>
                      <CollabCard/>
                      <CollabCard/>
                      <CollabCard/>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="collab two">
        <div className="collab-area two">
            <div className="img-banner">
                    <img src={logoBalck} alt="" className="collab-logo" />
                    <img src={banner} alt="" />
                    <h1>Heading Title</h1>
                </div>
                <div className="collab-cards">
                    <div className="button-area-collab">
                        <button>SHOP THE COLLECTION</button>
                    </div>
                    <div className="collab-cards-area">
                      <CollabCard/>
                      <CollabCard/>
                      <CollabCard/>
                      <CollabCard/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Collab
