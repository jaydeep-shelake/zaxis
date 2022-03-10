import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import{logout} from '../../actions/index'
import {connect} from 'react-redux'
import { Link ,useHistory } from 'react-router-dom';
import Header from '../Header';
const ProfileNavigation = (props) => {
    const history=useHistory();
    const path =history.location.pathname;

    const handleLogout=()=>{
        props.logout()
      }

    return (
      <>
      {path==='/profile-and-details'&&<Header/>}
        <div style={path==='/profile-and-details'?{marginTop:'70px'}:{marginTop:'0px'}} className={`profile-nav ${path==='/profile-and-details'&& 'show-porfile'}`}>
            <h1>< KeyboardBackspaceIcon/> Profile</h1>
            <p className="font-bold text-sm">PROFILE AND DETAILS</p>
            <div className="nav">
               <Link to="/profile"><p className={`${path==='/profile'&& 'active'}`}>Profile Details</p></Link>
               <Link to="/profile/address"><p className={`${path==='/profile/address'&& 'active'}`}>My Address <ChevronRightIcon /></p></Link>
               <Link to="/profile/orders"><p className={`${path==='/profile/orders'&& 'active'}`}>My Order</p></Link>
                <Link to="/profile/whislist"><p className={`${path==='/profile/whislist'&& 'active'}`}>Wish List</p></Link>
            </div>
              <  p className="font-bold text-gray-600 text-sm pt-6">POLICY AND COOKIES</p>
               <div className="nav bottom">
                   <Link to="/privacy-policy"><p>Privacy Policy</p></Link>
                   <Link to="/terms"><p>Terms of Service</p></Link>
                   <Link to="/return-policy"><p>Return Policy</p></Link>
                 <p className="cursor-pointer" onClick={handleLogout}>Logout</p>
               </div>
        </div>
       </> 
    )
}

export default connect(null,{logout})(ProfileNavigation)
