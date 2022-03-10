import React from 'react'
import {connect} from 'react-redux'
import './style.css'
const Msg = ({msg}) => {
    return (
        <div className={`hide py-3 px-3 text-white bg-black fixed top-32 rounded  z-20 ${msg.err&&'bg-red-500'} ${msg.msg&&'show'}`}>{msg.msg}</div>
    )
}

const mapStateToProps=(state)=>{
    return{msg:state.notification}
}

export default connect(mapStateToProps)(Msg)
