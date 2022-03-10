import React ,{useEffect,useState}from 'react'
import '../../styles/cupon.css'
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import CuponCard from './CuponCard';
import { firestore ,db} from '../../firebase';
const Coupon = (props) => {
    const [coupons,setCoupons]=useState([])
    const [Discount,setDiscount]=useState(0)
    const [couponCode,setCouponCode]=useState('')
  useEffect(()=>{
  firestore.collection('coupons').onSnapshot((snapshot)=>setCoupons(snapshot.docs.map(db.formatedDoc)))
  },[])

  const getCodeAndName=(discount,code)=>{
  setCouponCode(code)
  setDiscount(discount)
  console.log(discount,code)
  console.log(Discount,couponCode)
  }

  const handleOnSubmit=(e)=>{
 e.preventDefault()
 props.getCodeNDiscount(Discount,couponCode)
 props.setShowPromo(false)
  }
    return (
        <div className="cut-screen" onClick={()=>props.setShowPromo(false)}>
            <div className="cupon-form" onClick={(e)=>e.stopPropagation()}>
                <div className="cupon-title">
                    <h1 className="font-bold">Promo Code</h1>
                    <div onClick={()=>props.setShowPromo(false)}>
                      <CloseIcon/>  
                    </div>
                </div>
                <form onSubmit={handleOnSubmit}>
                   <div className="cupon-input">
                       <input value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} type="text" />
                       <SearchIcon/>
                   </div>
                   <button type="submit" className="code-pro-btn">Proceed</button>
                </form>
                <div className="weekend-cupons">
                    <h3 className="text-sm font-bold">WEEKEND OFFERS</h3>
                    {
                        coupons.map((coupon,i)=>(
                            <CuponCard key={i} handleOnSubmit={handleOnSubmit} getCodeAndName={getCodeAndName} coupon={coupon}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Coupon
