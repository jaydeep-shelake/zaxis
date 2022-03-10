import React from 'react'
import '../../styles/cancelorder.css'
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux'
import {cancleOrder} from '../../actions/orders'
import { useState } from 'react';
const CancleForm = (props) => {
    const [next,setNext]=useState(false)
    const [checked, setChecked] = useState(false);
    const [value, setValue] =useState('');
    const [comment,setComment]=useState('')
    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const handleOnSubmit=()=>{
        if(checked){
            props.cancleOrder(props.order.id,{...props.order,reason:value,comment})
            props.setShowCancleForm(false)
        }
    }
    return (
        <div className="cut-screen" onClick={()=>props.setShowCancleForm(false)}>
            <div className="cancel-product-card" onClick={(e)=>e.stopPropagation()}>
                   <div className="cancel-product-inner">
                       <div className={`cancle-title ${next&&'next'}`}>
                       <h1 className="font-bold text-2xl mb-8">Cancel Product</h1>
                       <div className="close-icon" onClick={()=>props.setShowCancleForm(false)}>
                       <CloseIcon/>

                       </div>
                       </div>
                       <div className={`cancel-product-des ${next&&'next'}`}>
                           <div className="cancel-img">
                               <img src={props.order.imgUrl} alt="" />
                           </div>
                           <div className="cancel-des">
                               <h3>{props.order.title}</h3>
                               <div className="size">
                                    <div  className="color-circle">

                                    </div>
                                    <p>{props.order.size}</p>
                    
                                </div>
                           </div>
                       </div>
                       {!next?(<div className="cancel-btns-area">
                       <h3 className="font-bold">Are you sure you want to cancel this product?</h3>
                       <button onClick={()=>setNext(true)}>Yes</button>
                       <button onClick={()=>props.setShowCancleForm(false)}>No</button>
                       </div>):(
                           <div className="cancel-que-area">
                               <div className="que">
                                   <p>Why are you canceling?*</p>
                               </div>
                        <div className="all-que">
                        <RadioGroup aria-label="question" name="question1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Do not have the need for the product" control={<Radio />} label="Do not have the need for the product" />
                        <FormControlLabel value="Found something better" control={<Radio />} label="Found something better" />
                        <FormControlLabel value="I changed my mind" control={<Radio />} label="I changed my mind" />
                        <FormControlLabel value="Estimated delivery too late" control={<Radio />} label="Estimated delivery too late" />
                        <FormControlLabel value="Ordered wrong product" control={<Radio />} label="Ordered wrong product" />
                        </RadioGroup>
                        </div>
                        <div className="add-des">
                        <TextField onChange={(e)=>setComment(e.target.value)} autoComplete="off" id="outlined-basic" label="ADDITIONAL COMMENTS" variant="outlined" />
                        </div>
                         <div className="agree-cancel">
                         <Checkbox
                                defaultChecked
                                size="small"
                                checked={checked}
                                onChange={()=>setChecked(!checked)}
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                         <p>I confirm that I wish to cancel this product</p>

                         </div>
                         <div className="can-btns-area">
                             <button onClick={handleOnSubmit}>CANCEL PRODUCT</button> <p>Back</p>
                         </div>
                           </div>
                       )}
                   </div>
            </div>
        </div>
    )
}

export default connect(null,{cancleOrder})(CancleForm)
