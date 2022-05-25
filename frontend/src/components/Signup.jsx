import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PasswordIcon from '@mui/icons-material/Password';
import axios from "axios"

const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work : "",
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
          <h4>
              Create your account
          </h4>
          <div className="sigup-sub-div">

              
              <div className='signup-input-div'>
                  <span className='signup-icon'><AccountCircleIcon/></span>
                  <input id='name' onChange={handleInputs}  type="text" placeholder='Enter your name' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'> <EmailIcon/></span>
                  <input id='email' onChange={handleInputs} type="text" placeholder='Enter your email' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'> <LocalPhoneIcon/></span>
                  <input id='phone' onChange={handleInputs}  type="text" placeholder='Enter your mobile no.' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'> <LocalPhoneIcon/></span>
                  <input id='work' onChange={handleInputs}  type="text" placeholder='Enter your work' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'><PasswordIcon/></span>
                  <input id='password' onChange={handleInputs}  type="text" placeholder='create password' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'><PasswordIcon/></span>
                  <input id='cpassword' onChange={handleInputs}  type="text" placeholder='confirm password' />
              </div>

          </div>
          <Button variant='outlined' onClick={()=>  handleChange()} >Register</Button>
          <div className="signup-login-main">
          <NavLink to='/login' className='signup-login'>I am already register</NavLink>
          </div>
         
          
    </div>
  )
}

export default Signup