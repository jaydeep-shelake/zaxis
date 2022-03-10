import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions'
import Header from '../Header'
import '../../styles/profile.css'
import UserInfo from '../profile/UserInfo'
import ProfileNavigation from '../profile/ProfileNavigation'
const Profile = (props) => {

    const handleLogout=()=>{
      props.logout()
    }
    
    return (
        <>
        <Header/>
        <div className="profile-page" >
          <ProfileNavigation/>
          <UserInfo user={props.user}/>
        {/* <button onClick={handleLogout} className="bg-black text-white py-2 px-3">Logout</button> */}
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
 return{user:state.user?.user}
}
export default connect(mapStateToProps,{logout})(Profile)
