import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const UserInfo = ({user}) => {

const [country,setCountry]=useState('United Arab Emirates')

    return (
        <div className="user-info">
          <h1 className="profile-title">Profile Details</h1>
            <div className="info">
                <TextField
                style={{marginTop:'40px'}}
                autoComplete="off"
                id="outlined-basic" 
                label="FULL NAME" 
                variant="outlined"
                value={user?.name}
                />
        <div className="email-country" style={{marginTop:'40px'}}>
                <TextField
                autoComplete="off"
                id="outlined-basic" 
                label="EMAIL ADDRESS" 
                variant="outlined"
                value={user?.email}
                style={{marginRight:'20px'}}
                />
                
        <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">COUNTRY</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
          label="Age"
        >
          <option ria-label="None" value="">
          </option>
          <option selected={true} value={'India'}>India</option>
          <option value={'USA'}>USA</option>
          <option value={'Italy'}>Italy</option>
        </Select>
      </FormControl>
              
                </div>

                <TextField
                style={{marginTop:'40px'}}
                autoComplete="off"
                id="outlined-basic" 
                label="PHONE NUMBER" 
                variant="outlined"
                value={user?.mobNo}
                />
              <button className="update-profile-btn">Update Info</button>
            </div>
        </div>
    )
}

export default connect()(UserInfo)
