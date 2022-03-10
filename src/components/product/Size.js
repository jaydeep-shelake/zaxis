import React,{useState} from 'react'

const Size = (props) => {
    const [Size,setSize]=useState('')
    
  
        
    const handleSize=(e)=>{
        setSize(props.size)
        props.getSize(props.size,props.i)
        
//  console.log(e.target.nextElementSibling.nextElementSibling.classList)
    }


    return (
        <button className={`size`} style={props.style} onClick={handleSize}>
            {props.size}
        </button>
    )
}

export default Size
