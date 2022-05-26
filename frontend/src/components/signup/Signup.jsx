import React, { useState } from 'react'
import "./signup.css"
// import axios from 'axios'

export default function SignUp() {
        const [user, setUser] = useState({
            name: "",
            email: "",
            password: "",
            cpassword: ""

        });

        const handleChange = e => {
            console.log(e)
            // name = e.target.name;
            // value = e.target.value.
            const { name, value } = e.target
            setUser({ ...user, [name]: value })
        };
//         const postData =  () => {
//             // e.preventDefault();
//             axios.post("http://localhost:5000/register", user).then((res) => {
//                 console.log(res.data.token.split(".")[0]);
//                 alert("User Created")
//             })
// }

  return (
    <div className='register'>
      {console.log("user", user)}
      <h1>Register</h1>
      <input type="text" name='name' value={user.name} placeholder='Enter your Name'  onChange={handleChange} />
      <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder="Enter your Password"  onChange={handleChange}/>
      <input type="password" name='cpassword' value={user.cpassword} placeholder="confirm Password"  onChange={handleChange}/>
    <div className="button">Register</div>
    <div>or</div>
    <div className="button">Login</div>
  </div>
  );
}
