import React, { Component } from 'react'
import '../styles/acc.css';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {VscDebugBreakpointData} from 'react-icons/vsc'
class Accordain extends Component {
       state={active:'',roatate:'0deg'}
     handleAccordian=()=>{
        //  this.props.hadleAcc(!this.props.isOpen)
        this.setState({active:this.state.active===""?"active":"",roatate:this.state.active==="active"?"0deg":"180deg"})
     }
    render(){
        console.log(this.props.accItems.length)
     
    return (
        <>
             <div className="accTitle" onClick={this.handleAccordian}>
                 <div>
                   <h2>{this.props.title}</h2>
                </div>
                    <RiArrowDropDownLine className="drop" style={{transform:`rotate(${this.state.roatate})`}}/>
        
             </div>
            <ul className={`accItem ${this.state.active} ${(this.props.accItems.length<=4&&this.state.active==="active"? 'active2':null)}`}>
               {
                   this.props.accItems.map((item,index)=>(
                       <li className="accList" key={index}>
                           {item}
                       </li>
                   ))
               }
            </ul>
            
        </>
    )
            }
}
export default Accordain
