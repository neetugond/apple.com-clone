import React, { useState } from 'react'
import "./signup.css"
import axios from 'axios'
import { Link, useNavigate} from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate()
       const [toggle, setToggle] = useState(false);
        const [user, setUser] = useState({
            name: "",
            email: "",
            password: "",
            role: "",

        });

        const handleChange = e => {
            console.log(e)
            // name = e.target.name;
            // value = e.target.value.
            const { name, value } = e.target
          setUser({ ...user, [name]: value });
          user.name !== "" && user.email !== "" && user.password !== "" && user.role !== "" ? (
           setToggle(false)
          ) : (
              <></>
          )
          console.log("user", user);
        };
  const postData = () => {
    axios.post("http://localhost:5000/register", user).then((res) => {
    });
  };    

    //   const postData =  () => {
    //     // e.preventDefault();
    //     axios.post("http://localhost:5000/register", user).then((res) => {
    //         console.log(res.data.token.split(".")[0]);
    //         alert("User Created")
    //     })
    //     const { name, email, password, cpassword } = user;
    //     const res = await fetch("/register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //             // 'Accept': 'application/json'

    //         },
    //         //server doesn't understand json only want data formate in string
    //         body: JSON.stringify({
    //             name, email, password, cpassword //key value same
    //         })
    //     });
    //     const data = await res.json();
    //     if (data.status === 422 || !data) {
    //         window.alert("Invalid Registration")
    //         console.log("Invalid Registration")
    //     } else {
    //         window.alert("Registration successfull")
    //         console.log("Registration successfull")

    //         navigate.push("/login");
    //     }
    //  }

  return (
    <div className='register'>
      {console.log("user", user)}
      <h1>Register</h1>
      <input type="text" name='name' value={user.name} placeholder='Enter your Name'  onChange={handleChange} />
      <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder="Enter your Password"  onChange={handleChange}/>
      <input type="text" name='role' value={user.role} placeholder="role" onChange={handleChange} />
      
       <div className="button-register" >
      <Link to="/login">
        <button type='submit' onClick={postData} disabled={toggle}>Register</button>
        </Link>
        </div>
    <div>or</div>
      <div className="button-register" onClick={()=> navigate('/login')}>
        {/* <Link to="/login"> */}
          {/* <button> */}
            Login
            {/* </button> */}
          {/* </Link> */}
      </div>
  </div>
  );
}
