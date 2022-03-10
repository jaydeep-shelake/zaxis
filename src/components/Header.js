import React,{useState} from 'react'
import '../styles/Header.css'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart,FiMenu} from 'react-icons/fi'
import {AiOutlineBell} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../assets/img/ana-logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
// import {AiOutlineUser} from 'react-icons/ai'
const Header = (props) => {
    const [showSideBar,setShowSideBar]=useState(false)
  
    return (
        <div  className="main-header fixed border-b border-gray-200 bg-white top-0 left-0 flex flex-col w-full pt-6 px-3 flex z-10 mb-6" >
            <div className="flex items-center justify-around">
             <div className="div">

             </div>
             <div className="burger" onClick={()=>setShowSideBar(true)}>
                 <FiMenu className="menu"/>
             </div>
             <div className="ml-36 header-img">
                 <Link to="/"><img src={logo} alt="ANA" /></Link>
             </div>
             <div className="flex justify-evenly text-black">
              <BiSearch className="text-xl mx-3"/>
              <Link to="/profile"><AiOutlineUser className="top-user-icon text-xl mx-3"/></Link>
              <Link to="/cart"><div className="cart-icon"><span>{props.cart?.length}</span><FiShoppingCart className="text-xl mx-3"/></div></Link>
             
             </div>
            </div>
            <div className="bottom-header flex w-full px-10 items-center justify-center pt-8 pb-5 ">
                <ul className={`nav-links ${showSideBar&& 'show-side-bar'} cursor-pointer upper-case flex w-3/4 items-center justify-evenly`}>
                    <div className="profile">
                       <Link to="/profile-and-details"> <AiOutlineUser className="user-icon"/></Link>
                        <p>{props.user?.name}</p>
                        <Link to="/notification">  <AiOutlineBell className="bell-icon"/></Link>
                    </div>
                    <Link><li className="text-2xl font-bold">Women</li></Link>
                    <Link to="/collections"><li className="text-2xl font-bold">Men</li></Link>
                    <Link to="/dresses"><li className="text-2xl font-bold">Shoes</li></Link>
                    <Link to="/collab"><li className="text-2xl font-bold">Collab</li></Link>
                    <Link to="/custom"><li className="text-2xl font-bold">CUSTOM</li></Link>

                </ul>
                <div onClick={()=>setShowSideBar(false)} className={`blank-screen ${showSideBar&& 'show-side-bar'}`}>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{cart:state.cart,user:state.user.user}
}

export default connect(mapStateToProps)(Header)
