import React,{useState,useEffect} from 'react'
import img from '../../assets/img/error.png'
import {history} from '../../history'
import Header from '../Header'
const Error = () => {
    const [counter, setCounter] =useState(5);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

useEffect(()=>{
    setTimeout(()=>{
        history.push('/profile/orders')
     },5000)
},[])

      
    return (
        <>
        <Header/>
        <div className="confirmed-order">
            <img className="err-img" style={{height:'144px',width:"207px"}} src={img} alt="" />
            <h1 className="text-2xl font-bold mt-16 mb-6">Error Message</h1>
            <p>You will be redirected in {counter}s..</p>
        </div>
        </>
    )
}

export default Error
