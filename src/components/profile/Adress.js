import React ,{useState,useEffect}from 'react'
import ProfileNavigation from './ProfileNavigation'
import Header from '../Header'
import {connect} from 'react-redux'
import {getAddresses} from '../../actions/address'
import AddressCard from './AddressCard'
import AddIcon from '@material-ui/icons/Add';
import AddressForm from './AddressForm';
import Msg from '../notification/Msg'
const Adress = (props) => {
  const [showForm,setShowForm]=useState(false)
  

    return (
        <>
        <Header/>
        <Msg/>
        <div className="profile-page">
            <ProfileNavigation/>
            <div className="address">
            <h1 className="profile-title">My Address</h1>
                {
                    props.addresses.map((add,i)=>(
                        <AddressCard key={i} add={add}/>
                    ))
                }
                <div className="address-card add-address"
                onClick={()=>setShowForm(true)}
                >
                    <div className="add-icon">
                    <AddIcon className="icon-add" />
                    </div>
                    <h3>Add New Address</h3>
                   
                </div>
            </div>
        </div>
        {showForm&&<AddressForm setShowForm={setShowForm}/>}
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        
        addresses:state.addresses,
        userId:state.user?.user?.userId,
    }
}

export default connect(mapStateToProps,{getAddresses})(Adress)
