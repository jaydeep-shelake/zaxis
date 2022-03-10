import React ,{useState}from 'react'

const Color = (props) => {
  const [currentColor,setColor]=useState('')
    
      const handleColor=()=>{
        props.getColor(props.color,props.hex,props.i)
        setColor(props.color)
      }

    return (
        <div className={`element`} onClick={handleColor}  style={{background:props.hex==="#fff"?'rgb(236 234 234)':props.hex,...props.style}}>
           
        </div>
    )
}

export default Color
