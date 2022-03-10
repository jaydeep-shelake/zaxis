import React ,{useState}from 'react'

const Fabric = (props) => {
  const [currentColor,setColor]=useState('')
    
      const handleColor=()=>{
        props.getFabric(props.fabric,props.i)
        setColor(props.fabric)
      }

    return (
        <div className="flex flex-col items-center justify-center">
        <div className={`element`} onClick={handleColor}  style={{background:props.hex==="#fff"?'rgb(236 234 234)':props.hex,...props.style}}>
           
        </div>
        <span className="text-xs">{props.fabric}</span>
        </div>
    )
}

export default Fabric
