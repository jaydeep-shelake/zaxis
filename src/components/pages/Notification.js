import React from 'react'
import '../../styles/notification.css'
import {BsBellFill} from 'react-icons/bs'
import Header from '../Header'
const Notification = () => {
    return (
        <>
        <Header/>
        <div className="notifaction-page">
            <h1>NOTIFICATIONS</h1>
            <div className="notifaction-area">
              <div className="new-notification">
                  <div className="bell-area">
                     <BsBellFill/>
                  </div>
                  <div className="notifcation-text">
                      <h3>Your Order Has been Shipped!</h3>
                       <p>21 Feb 2021</p>
                  </div>

              </div>
              <div className="new-notification">
                  <div className="bell-area">
                     <BsBellFill/>
                  </div>
                  <div className="notifcation-text">
                      <h3>Your Order Has been Shipped!</h3>
                       <p>21 Feb 2021</p>
                  </div>

              </div>
            </div>
        </div>
        </>
    )
}

export default Notification
