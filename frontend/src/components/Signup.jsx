import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios"

const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""

    });

    // let name;
    // let value;

    const handleInputs = (e) => {
        const { id, value } = e.target
        setUser({...user, [id] : value})
    }
    const handleChange = () => {
        axios.post("http://localhost:4000/register", user).then(() => {
            alert("User Created")
        })
    }

    return (
      
        <div className='signup-main-div'>
            <form action="">
          <h4>
              Create your account
          </h4>
          <div className="sigup-sub-div">

              
              <div className='signup-input-div'>
                  <label className='signup-icon'><AccountCircleIcon/></label>
                  <input id='name' onChange={handleInputs}  type="text" placeholder='Enter your name' />
              </div>
              <div className='signup-input-div'>
                  <label className='signup-icon'> <EmailIcon/></label>
                  <input id='email' onChange={handleInputs} type="text" placeholder='Enter your email' />
              </div>
              <div className='signup-input-div'>
                  <label className='signup-icon'> <LocalPhoneIcon/></label>
                  <input id='phone' onChange={handleInputs}  type="text" placeholder='Enter your mobile no.' />
              </div>
              <div className='signup-input-div'>
                  <label className='signup-icon'><LockIcon/></label>
                  <input id='password' onChange={handleInputs}  type="text" placeholder='create password' />
              </div>
              <div className='signup-input-div'>
                  <label className='signup-icon'><LockIcon/></label>
                  <input id='cpassword' onChange={handleInputs}  type="text" placeholder='confirm password' />
              </div>

          </div>
          <Button variant='outlined' onClick={()=>  handleChange()} >Register</Button>
          <div className="signup-login-main">
          <NavLink to='/login' className='signup-login'>I am already register</NavLink>
          </div>
          </form>
          
    </div>
  )
}

export default Signup