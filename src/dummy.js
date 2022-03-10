import React from 'react'
import logo from './assets/img/login-logo.png'
import {firestore} from './firebase'
const Dummy = () => {



  const options = {
    "key":"rzp_test_NYUPSveWybUfyq", // Enter the Key ID generated from the Dashboard
     "currency":'INR',
     "amount":200*100,
    "name": "ANA",
    "image":logo,
    "description":'jaydeep',
     //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        saveToDb(response)
    },
    "prefill": {
        "name":'jaydeep',
        "email":'jaydeepshelake10@gmail.com',
        "contact":'9175732873'
    },
    
};

const saveToDb=(response)=>{
  console.log(response)
 const payRef= firestore.collection('payment')
 .doc('jaydeepshelake10@gmail.com').set({
  razorpay_payment_id:response.razorpay_payment_id
 })
 .then(()=>{
   console.log('saved sucessfully')
 })
}

const displayRazorpay=()=>{
       const paymentObject = new window.Razorpay(options);
        paymentObject.open();
}


  return (
    <div style={{marginTop:'150px'}}>
      <h1 onClick={displayRazorpay} className="p-3 w-32 bg-blue-300 text-white">Cehcout</h1>
    </div>
  )
}

export default Dummy
//rzp_test_NYUPSveWybUfyq