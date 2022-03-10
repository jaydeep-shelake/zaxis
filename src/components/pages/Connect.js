import React ,{useState}from 'react'
import Header from '../Header'
import '../../styles/connect.css'
import connect from '../../assets/img/connect.png'
import chat from '../../assets/img/chat.png'
import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import phone from '../../assets/img/phone-icon.png'
import watsapp from '../../assets/img/watsapp.png'
import Accordain from '../Accordian'
import { firestore } from '../../firebase'
import Msg from '../notification/Msg'
const Connect = () => {
         const [name,setName]=useState('')
         const [email,setEmail]=useState('')
         const [mobNo,setMobNo]=useState('')
         const [reason,setReason]=useState('')
         const [msg,setMsg]=useState({msg:'',err:false})
    const saveData=(e)=>{
        e.preventDefault()
        firestore.collection('connect').add({
             name,
             email,
             mobNo,
             reason
        }).then(()=>{
            setMsg({msg:'Form submitted succesfully',err:false})
            setName('')
            setEmail('')
            setMobNo('')
            setReason('')
            setTimeout(()=>{
                setMsg({msg:'',err:false})
            },2000)
        })
    }


    return (
        <>
        <Header/>
        <Msg msg={msg}/>
        <div className="connect-area">
            <div className="connect">
               <div className="connect-banner">
                   <div className="img-container">
                   <img src={connect} alt="" />
                   <h1 className="img-text">
                   LETS CONNECT
                   </h1>
                   </div>
                   <div className="connect-from">
                       <form onSubmit={saveData}>
                       <TextField 
                       value={name}
                       autoComplete="off"id="outlined-basic" label="NAME" variant="outlined" 
                       onChange={(e)=>setName(e.target.value)}
                       />
                       <TextField
                       value={email} 
                       autoComplete="off"id="outlined-basic" label="EMAIL" variant="outlined" 
                       onChange={(e)=>setEmail(e.target.value)}
                       />
                       <TextField 
                       value={mobNo}
                       autoComplete="off"id="outlined-basic" label="PHONE" variant="outlined" 
                       onChange={(e)=>setMobNo(e.target.value)}
                       />
                       <TextField 
                       value={reason}
                       autoComplete="off"id="outlined-basic" label="CONTACT REASON" variant="outlined" 
                       onChange={(e)=>setReason(e.target.value)}
                       />
                       <button type="submit">Submit</button>
                       </form>
                   </div>
               </div>
               <div className="faq-section">
                   <div className="faq-title">
                       <h1 className="text-3xl font-bold">Support & FAQ</h1>
                       <div className="line"></div>
                   </div>
                   <div className="connect-detail">
                       <img src={chat} alt="" />
                       <div className="detail-des">
                          <h1 className="text-2xl py-6 font-bold">We are always here to help you</h1>
                          <p>If you face any problem with our service feel free to contact us directly</p>
                          <div className="email">
                           <MailOutlineIcon/>
                           <p>help@healthnutrients.com</p>
                          </div>
                          <div className="mobile">
                             <img src={phone} alt="" />
                             <p>+91 9452325632</p>
                          </div>
                          <button> <img src={watsapp} alt="" /> WhatsApp us</button>
                       </div>
                   </div>
               </div>
               <div className="faq-acc">
                   <h1 className="text-3xl font-bold">FAQs</h1>
                   <div className="acc-area">
                    <Accordain
                    title="Lorem ipsum dolor sit amet?"
                    accItems={['Your friend gets cashback worth 100 on placing their first successful order']}
                    />
                    <Accordain
                    title="Lorem ipsum dolor sit amet?"
                    accItems={['Your friend gets cashback worth 100 on placing their first successful order']}
                    />
                    <Accordain
                    title="Lorem ipsum dolor sit amet?"
                    accItems={['Your friend gets cashback worth 100 on placing their first successful order']}
                    />
                   </div>
               </div>
            </div>
        </div>
        </>
    )
}

export default Connect
