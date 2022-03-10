import React ,{useState}from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {connect} from 'react-redux'
import {addAdress} from '../../actions/address'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import '../../styles/addressform.css'
const AddressForm = (props) => {
    const [country,setCountry]=useState('')
    const [timing,setTiming]=useState('Home-7am to 9am')
    const [pinCode,setPinCode]=useState('')
    const [adress1,setAdd1]=useState('')
    const [adress2,setAdd2]=useState('')
    const [landmark,setLanmark]=useState('')
    const [city,setCity]=useState('')
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [showFirstForm,setShowFirstForm]=useState(true)
    const [state,setState]=useState('')

  const submitAddress=(e)=>{
  e.preventDefault()
 props.addAdress({name,number,country,state,timing,pinCode,adress1,adress2,landmark,city})
setShowFirstForm(true)
  props.setShowForm(false)
  }

    return (
        <div className="add-full" onClick={()=>props.setShowForm(false)}>

   {!showFirstForm&&(<form onSubmit={submitAddress} onClick={(e)=>e.stopPropagation()} className="nextForm" >
                <h1>Add New Address</h1>
                <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">ADDRESS TYPE</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={timing}
          onChange={(e)=>setTiming(e.target.value)}
          label="Age"
        >
          <option selected ria-label="None" value="">
              Selecet
          </option>
          <option selected={true} value={'Home-7am to 9am'}>Home-7am to 9am</option>
          <option value={'Home-9am to 10am'}>Home-9am to 10am</option>
          <option value={'Home-10am to 11am'}>Home-10am to 11am</option>
        </Select>
      </FormControl>

            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="PIN CODE" 
            variant="outlined"
            placeholder="PIN CODE"
            onChange={(e)=>setPinCode(e.target.value)}
            />
            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="FLAT, HOUSE NO., BUILDING, COMPANY," 
            variant="outlined"
            onChange={(e)=>setAdd1(e.target.value)}
            placeholder="FLAT, HOUSE, BUILDING, COMPANY"
            />
            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="AREA, COLONY, STREET, SECTOR, VILLAGE" 
            variant="outlined"
            placeholder="AREA, COLONY, STREET, SECTOR, VILLAGE"
            onChange={(e)=>setAdd2(e.target.value)}
            />
            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="LANDMARK" 
            variant="outlined"
            placeholder="LANDMARK"
            onChange={(e)=>setLanmark(e.target.value)}
            />
            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="TOWN/CITY" 
            variant="outlined"
            placeholder="TOWN/CITY"
            onChange={(e)=>setCity(e.target.value)}
            />

            
            <button className="update-profile-btn" type="submit">NEXT</button>
            </form>)}
          
         








        {showFirstForm&&(<form onClick={(e)=>e.stopPropagation()} >
                <h1>Add New Address</h1>
            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="FULL NAME" 
            variant="outlined"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
            />
            <TextField 
            autoComplete="off"
            id="outlined-basic" 
            label="MOBILE NUMBER" 
            variant="outlined"
            placeholder="Mobile Number"
            onChange={(e)=>setNumber(e.target.value)}
            />

<FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label"> COUNTRY</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
          label="STATE"
        >
          <option ria-label="None" value="">
          </option>
          <option selected={true} value={'India'}>India</option>
          <option value={'USA'}>USA</option>
          <option value={'Italy'}>Italy</option>
        </Select>
      </FormControl>


<FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">STATE/REGION</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          onChange={(e)=>setState(e.target.value)}
          label="STATE"
        >
          <option ria-label="None" value="">
          </option>
          <option selected={true} value={'Maharashtra'}>Maharashtra</option>
          <option value={'Goa'}>Goa</option>
          <option value={'Gujrat'}>Gujrat</option>
        </Select>
      </FormControl>
            
            <button onClick={()=>setShowFirstForm(false)} className="update-profile-btn" >NEXT</button>
            </form>)}
        </div>
    )
}

export default connect(null,{addAdress})(AddressForm)
