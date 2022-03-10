import React, { useState, useEffect } from 'react'
import '../styles/acc.css';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {VscDebugBreakpointData} from 'react-icons/vsc'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import CareerForm from './careers/CareerForm';
import { db, firestore } from '../firebase';
const Accordain=(props)=> {
    //    state={active:'',roatate:'0deg',careers:[],showForm:false}
  const [active,setActive]=useState('')
  const [roatate,setRoatate]=useState('0deg')
  const [careers,setCareers]=useState([])
  const [showForm,setShowForm]=useState(false)
  useEffect(()=>{
      firestore.collection('careers').onSnapshot((snapshot)=>{
          setCareers(snapshot.docs.map(db.formatedDoc))
      })
  },[])
  

     const handleAccordian=()=>{
        //  this.props.hadleAcc(!this.props.isOpen)
        // this.setState({active:this.state.active===""?"active":"",roatate:this.state.active==="active"?"0deg":"180deg"})
        setActive(active===""?"active":"")
        setRoatate(active==="active"?"0deg":"180deg")
     }
     
    return (
        <>
           {careers.map((carrer)=>(
               <React.Fragment key={carrer.id}>
               <div className="career accTitle" onClick={handleAccordian}>
                 <div>
                   <h4 className="text-lg font-bold">{carrer.name}</h4>
                   <p>{carrer.location}</p>
                </div>
                <div className="flex items-center">
                    <p>{carrer.date}</p>
                    <RiArrowDropDownLine className="drop" style={{transform:`rotate(${roatate})`}}/>
                  
                </div>
        
             </div>
            <div className={`career accItem ${active} ${(props.accItems.length<=4&&active==="active"? 'active2':null)}`}>
                <p>{carrer.description}</p>
                <div className="apply-area">
                    <button onClick={()=>setShowForm({showForm:true})}>Apply</button>
                    <p><BusinessCenterOutlinedIcon/> Experience :{carrer.expirince}</p>
                </div>
            </div>
            {showForm&&<CareerForm setShowForm={setShowForm} career={carrer}/>}
               </React.Fragment>
           ))}  
        </>
    )
            }

export default Accordain
