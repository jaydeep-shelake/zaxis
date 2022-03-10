import React from 'react'
import LoginComp from '../auth/LoginComp'
import {connect} from 'react-redux'
const Login = ({state}) => {
    console.log(state)
    return (
        <LoginComp/>
    )
}
const mapStateToProps=(state)=>{
    return{state}
}
export default connect(mapStateToProps)(Login)
