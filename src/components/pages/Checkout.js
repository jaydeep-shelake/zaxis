import React,{useState} from 'react'
import SideCartItem from '../sideCart/SideCartItem'
import AddressCard from '../profile/AddressCard'
import {connect} from 'react-redux'
import logo from '../../assets/img/login-logo.png'
import {placeOrder} from '../../actions/orders'
import Header from '../Header'
const Checkout = (props) => {

    const [grandTotal,setGrandTotal]=useState(props.checkout.subTotal+props.checkout.deliveryCharges)

    const handlePlaceOrder=()=>{
    props.placeOrder({...props.checkout,grandTotal})
    }
    const loadScripts=(src)=>{
        return new Promise((resolve)=>{
        const script = document.createElement('script');
        script.src=src;
        
        script.onload= ()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script);
    })
}   

    const options = {
        "key":"rzp_test_NYUPSveWybUfyq", // Enter the Key ID generated from the Dashboard
         "currency":'INR',
         "amount":1*100,
        "name": "ANA",
        "image":logo,
        "description":props.user.name,
         //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            props.placeOrder({...props.checkout,grandTotal,paymentId:response.razorpay_payment_id})

        },
        "prefill": {
            "name":props.user.name,
            "email":props.user.email,
            "contact":props.user.mobNo
        },
        
    };
    


    const displayRazorpay=async()=>{
        const res= await loadScripts('https://checkout.razorpay.com/v1/checkout.js');
        if(!res){
            alert('faild to load script')
        }
           const paymentObject = new window.Razorpay(options);
            paymentObject.open();
    }


    return (
        <>
        <Header/>
        <div className="main-cart-container">
            <div className="main-cart-area">

                <div className="main-right-cart">
                <h1 className="text-2xl font-bold m-0 p-0">{props.cartItems.length} Items</h1>
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
                  size={cart.size}
                  disable
                  />
                ))}
                </div>
                </div>
                <div className="main-cart-selection">
                   <h1 className="text-xl font-bold">Delivering to,</h1>
                   <div className="address">
                   <AddressCard 
                        add={props.checkout.addressId}
                        disable
                        />
                   </div>
                   <div className="subtotal-section">
                    <h1 className="text-xl font-bold mb-3">Total Price</h1>
                    <div className="table">
                        <div className="price-item">
                            <p>Item Total</p><p>{props.total}</p>
                        </div>
                        <div className="price-item">
                        <p>Delivery Charges</p><p>{props.checkout.deliveryCharges}</p>
                        </div>
                        <div className="price-item">
                        <p>Discount</p><p>-{props.checkout.Discount} rs</p>
                        </div>
                        <div className="price-item">
                        <p className="font-bold">Grand Total</p><p className="font-bold">{grandTotal}</p>
                        </div>
                        <p className="text-xs text-left mt-2" style={{width:'100%'}}>*All prices are inclusive of taxes</p>
                    </div>
                </div>

                <div className="process-area">
                     {props.checkout.orderType==="Paid Online"?<button onClick={displayRazorpay}>Pay Online</button>:<button onClick={handlePlaceOrder}>Process</button>}
                  </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartItems:state.cart,
        checkout:state.checkout?.checkout,
        total:state.cartTotal.total,
        user:state.user?.user
    }
}

export default connect(mapStateToProps,{placeOrder})(Checkout)
