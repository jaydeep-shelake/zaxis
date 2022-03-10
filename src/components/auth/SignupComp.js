import React from 'react'
import { useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './inputstyle.css'
import '../../styles/auth.css'
import firebase from '../../firebase'
import {connect} from 'react-redux'
import {sigin,submitOtp} from '../../actions'
import sideImg from '../../assets/img/login.png'
import loginLogo from '../../assets/img/login-logo.png'
import Msg from '../notification/Msg'
import TextField from '@material-ui/core/TextField';
import Header from '../Header'
const SignupComp = (props) => {
    const [number,setNumber]=useState(props.mobNo?props.mobNo:'')
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [isNumber,setIsNumber]=useState(false)
    const [hasName,setHasName]=useState(true);
    const [hasEmail,setHasEmail]=useState(true)
    const [hasNum,setHasNum]=useState(true)
    const [isLoading,setIsLoading]=useState(false)
    // const [validate,setValidate]=useState({hasName:true,hasNum:true,hasEmail:true,hasOtp:true})
    console.log(props.mobNo)
    const [otp,setOtp]=useState('')
    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: function (response) {
              console.log("Captcha Resolved");
              onSignInSubmit();
            },
            defaultCountry: "IN",
          }
        );
      };
      const onSignInSubmit = (e) => {
        e.preventDefault();
        if(email===''&&name===''&&number===''){
           setHasEmail(false)
           setHasName(false)
           setHasNum(false)
        }
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||email===''){
          setHasEmail(false)
        }
        else{
          setHasEmail(true)
        }
        if(!number.match(/^\d{10}$/) || number===''){
          console.log(number)
          setHasNum(false)
       }
      else{
      setHasNum(true)
      }
      
        if(name===''){
          setHasName(false)
      }
      else{
      setHasName(true)
      }
      if(name&&email&&number){
        setHasName(true)
        setHasNum(true)
        setHasEmail(true)
        setIsNumber(true)
        setUpRecaptcha();
        setIsLoading(true)
        props.sigin(number,email,name)
      }
        
        
      };

      const onSubmitOtp = (e) => {
        e.preventDefault();
        props.submitOtp(otp,email,name,number,setName,setEmail,setNumber,setIsNumber)
        setIsLoading(false)
      };
    
    
    return (
      <>
      <Header/>
        <div  className="auth-screen signup mt-60 flex items-center justify-center w-11/12 h-11/12 mx-auto  px-20">
          {/*notifation*/}
          <Msg/>
            <div className="login-img flex w-1/2 h-full">
            <img src="https://img.freepik.com/free-photo/beautiful-young-woman-with-shopping-bags-using-her-smart-phone-yellow-background_50889-43.jpg?size=626&ext=jpg" alt="loginImg" className="w-full h-full"/>
            </div>
            <div className="welcome-screen flex flex-col items-center justify-evenly text-sm rounded w-1/2 h-full px-32">
        <form onSubmit={onSignInSubmit} className="flex flex-col  text-sm w-full">
        <img src={loginLogo} alt="ANA" style={{width:'112px',height:'39px',marginLeft:'-22px'}}/>
            <h1 className="text-2xl font-bold flex items-center py-10 "><AiOutlineArrowLeft className="text-xl mr-4"/>Just a small step,</h1>
           <TextField 
          
           onChange={(e)=>{
             setEmail(e.target.value)
             setHasEmail(true)
            }}
           type="email" 
           placeholder="EMAIL"
           label="EMAIL"
           variant="outlined"
           autoComplete="off"  
           className={` p-2 my-2 outline-none border border-gray w-full ${!hasEmail &&'border border-red-500' }`}/>
           {!hasEmail &&<p className="text-red-500">Email is required</p>}

           <TextField
           style={{marginTop:'10px'}}
           onChange={(e)=>{
             setName(e.target.value)
             setHasName(true)
            }}
            label="NAME"
            variant="outlined"
           placeholder="NAME"  
           className={`p-2 my-2 outline-none border border-gray w-full ${!hasName &&'border border-red-500' }`}/>
            {!hasName &&<p className="text-red-500">Name is required</p>}
           <TextField
           style={{marginTop:'10px'}}
           onChange={(e)=>{
             !props.mobNo&&setNumber(e.target.value)
             setHasNum(true)
            }}
            
            value={props.mobNo?props.mobNo:number}
            variant="outlined"
            label="PHONE"
           type="text" 
           placeholder="PHONE" 
           className={`p-2 my-2 outline-none border border-gray w-full ${!hasNum &&'border border-red-500' }`}/>
            {!hasNum &&<p className="text-red-500">Number is required</p>}
           {!isNumber&&<button type="submit" className="auth-btn w-1/2 bg-black py-2 px-3 my-2 text-white mt-8">Proceed</button>}
           <div id="recaptcha-container"></div>
         </form>
        {isNumber&&(<form onSubmit={onSubmitOtp} className="flex flex-col w-full items-start justify-evenly text-sm rounded ">
           <TextField
           style={{marginTop:'10px'}} 
           onChange={(e)=>setOtp(e.target.value)}
           type="number" 
           placeholder="OTP"
           label="OTP"
           variant="outlined" 
           className="p-2 my-2 outline-none border border-gray w-full" 
            />
           
           <button type="submit" className="auth-btn bg-black py-2 px-6 my-2 text-white">Login</button>
           <div id="recaptcha-container"></div>
         </form>)}
         </div>
      </div>
      </>
    )
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{user:state?.user?.user,mobNo:state.mobNo.mobNo}
}
export default connect(mapStateToProps,{sigin,submitOtp})(SignupComp)
