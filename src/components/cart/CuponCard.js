import React,{useState} from 'react'
import {connect} from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const CuponCard = (props) => {
    const [couponDiscount,setCouponDiscount]=useState(0)
    const [couponCode,setCouponCode]=useState('')
    const handleCodeAndName=()=>{
        console.log(props.coupon.discount,props.coupon.couponCode)
        setCouponDiscount(props.coupon.discount)
        setCouponCode(props.coupon.couponCode)
        props.getCodeAndName(props.coupon.discount,props.coupon.couponCode)
        console.log(couponDiscount,couponCode)
        props.handleOnSubmit()
    }
    return (
        <div onClick={props.total>=props.coupon.minPrice?handleCodeAndName:''} className={`promo-code-card ${props.total>=props.coupon.minPrice?'cursor-pointer':'cursor-not-allowed'}`} >
            <div className="promo-img">

            </div>
            <div className="promo-text">
                <h3>{props.coupon.couponName}</h3>
                <p>{props.coupon.description}</p>
                <div className="promo-code-btn">
                    <div className="lock-icon">
                       {props.total>=props.coupon.minPrice?<LockOpenIcon/>:<LockOutlinedIcon/>}
                    </div>
                    <div className="offer-code-text">
                       <p>Min Purchase of INR {props.coupon.minPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{total:state.cartTotal.total}
}

export default connect(mapStateToProps)(CuponCard)
