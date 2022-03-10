import React ,{useState}from 'react'
import '../../styles/cart.css'
import {connect} from 'react-redux'
import {checkout} from '../../actions/checkout'
import SideCartItem from '../sideCart/SideCartItem'
import Header from '../Header'
import AddressCard from '../profile/AddressCard'
import AddressForm from '../profile/AddressForm'
import AddIcon from '@material-ui/icons/Add';
import Msg from '../notification/Msg'
import Coupon from '../cart/Coupon'
const Cart = (props) => {
    const [showForm,setShowForm]=useState(false)
    const [showPromo,setShowPromo]=useState(false)
    const [cashOnDelivery,setCashOnDelivery]=useState(true)
    const [payOnline,setPayOnline]=useState(false)
    const [activeIndex,setActiveIndex]=useState(null)
    const [Discount,setDiscount]=useState(0)
    const [Code,setCode]=useState('')
    const [selectedAddress,setSelectedAddress]=useState({})
 const handleCOD=()=>{
     setCashOnDelivery(true)
     setPayOnline(false)
 }
 const handlePayOnline=()=>{
     setCashOnDelivery(false)
     setPayOnline(true)
 }
 const getCodeNDiscount=(discount,code)=>{
setDiscount(discount)
setCode(code)
console.log(discount,code)
console.log(Discount,Code)
 }

 const getActiveAdd=(addIndex,selecAdd)=>{
setActiveIndex(addIndex)
setSelectedAddress(selecAdd)
 }


 const handleCheckout=()=>{
     props.checkout({
         addressId:selectedAddress,
         orderType:cashOnDelivery?'Cash on Delivery':'Paid Online',
         Discount,
         Code
     })
     console.log(selectedAddress,cashOnDelivery?'Cash on Delivery':'Paid Online',Discount)
 }
console.log(props.cartItems)
    return (
        <>
        <Msg/>
        <Header/>
        <div className="main-cart-container">
            <div className="main-cart-area">
                <div className="main-right-cart">
                  <h1 className="text-2xl font-bold m-0 p-0">{props.cartItems.length} items {`(Item Total ${props.total})`}</h1>
                  <div className="side-cart-items">
                  {props.cartItems?.map((cart,i)=>(
                  <SideCartItem
                  key={cart.id}
                  id={cart.id}
                  productId={cart.productId}
                  title={cart.title}
                  quanity={cart.quanity}
                  imageUrl={cart.imageUrl}
                  price={cart.price}
                  totalPrice={cart.totalPrice}
                  color={cart.color}
                  hex={cart.hex}
                  size={cart.size}
                  />
                ))}
                  </div>
                </div>
                <div className="main-cart-selection">
                <div className="selection-title">
                    <h1 className="text-2xl font-bold m-0 p-0">Select Address</h1>
                   <div onClick={()=>setShowForm(true)}><AddIcon  className="adress-add-icon"/></div>
                </div>
                  <div className="address">
                  {
                    props.addresses.map((add,i)=>(
                        <AddressCard 
                        
                        key={i} getActiveAdd={getActiveAdd} 
                        i={i} 
                        add={add}
                        style={i===activeIndex?{border:'2px solid #000'}:null}
                        />
                    ))
                }
                  </div>

                  <div className="payment-method">
                      <h1 className="text-xl font-bold">Payment Mode</h1>
                      <div className="payment-btns">
                          <button onClick={handleCOD} className={`${cashOnDelivery&& 'active'}`}>Cash On Delivery</button>
                          <button onClick={handlePayOnline} className={`${payOnline&& 'active'}`}>Pay Online</button>
                      </div>
                  </div>


                  <div className="cupon-code-area">
                      <div className="select-cupon">
                      <h1 className="text-xl font-bold">Got a coupon ?</h1>
                      <p onClick={()=>setShowPromo(true)}>SELECT COUPON</p>
                      </div>
                      <div className="cupon-fields">
                        <input value={Code} type="text" placeholder="coupon" />
                        <button>Apply</button>
                      </div>
                  </div>


                  <div className="process-area">
                      <button onClick={handleCheckout}>Process</button>
                  </div>
                </div>
            </div>
        </div>
        {showForm&&<AddressForm setShowForm={setShowForm}/>}
        {showPromo&&<Coupon getCodeNDiscount={getCodeNDiscount} setShowPromo={setShowPromo}/>}
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartItems:state.cart,
        total:state.cartTotal.total,
        addresses:state.addresses,
    }
}
    
export default connect(mapStateToProps,{checkout})(Cart)
