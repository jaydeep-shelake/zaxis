import React,{useState,useEffect} from 'react'
import img from '../../assets/img/404.png'
import {history} from '../../history'
import Header from '../Header'
const NotFound = () => {
    const [counter, setCounter] =useState(5);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

useEffect(()=>{
    setTimeout(()=>{
        history.push('/')
     },5000)
},[])

      
    return (
        <>
        <Header/>
        <div className="confirmed-order">
            <img src={img} alt="" style={{width:'213px',height:'82px'}} />
            <h1 className="text-2xl font-bold mt-16 mb-6">Page Not Found</h1>
            <p>You will be redirected in {counter}s..</p>
        </div>
        </>
    )
}

export default NotFound
