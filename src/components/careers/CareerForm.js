import React from 'react'
import TextField from '@material-ui/core/TextField';
import {BiUpload} from 'react-icons/bi'
import { useState } from 'react';
import {storage, firestore} from '../../firebase';
const CareerForm=(props)=> {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobNo,setMobNo]=useState('')
    const [file,setFile]=useState(null)
         

    const handleOnChange=(e)=>{
        console.log(e.target.files[0])
        if(e.target.files[0]){
            setFile(e.target.files[0]);
            console.log(file)
        }
    }

    const handleUpload=(e)=>{
        e.preventDefault()
       const uploadTask= storage.ref(`files/${file.name}`).putString(file)
        uploadTask.on('state_change',null,err=>console.log(err),()=>{           
            storage.ref('files').child(file.name).getDownloadURL()
            .then(url=>{
                firestore.collection('career-forms').add({
                    resume:url,
                    jobTilte:props.career.name,
                    name,
                    email,
                    mobNo
                    })
                    .then(()=>{
                        setFile(null);
                        console.log('saved')
                        props.setShowForm(false)
                    })
            })
        })
    }

    

    return (
        <div className="cut-screen" onClick={()=>props.setShowForm(false)}>
        <div className="connect-from bg-white" onClick={(e)=>e.stopPropagation()}>
            <h1 className="text-xl font-bold align-left"> Appy for {props.career.name}</h1>
                       <form onSubmit={handleUpload}>
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
                       <div className="resume-input relative">
                           <p className="text-sm resume">RESUME</p>
                          <input type="file" id="file" onChange={handleOnChange} />
                          <label htmlFor="file" className="flex items-center cursor-pointer"><BiUpload className="mr-2"/> Upload .pdf</label>
                          <p className="text-md text-gray-300">{file?file.name:'Upload your Resume'}</p>
                       </div>
                       <button type="submit">Apply</button>
                       </form>
                   </div>
                   </div>
    )
}

export default CareerForm
