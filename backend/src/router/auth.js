
const bcrypt = require('bcryptjs')

const express = require('express');

const router = express.Router();

const User = require('../model/userSchema')

// using async await
router.post("/register", async (req, res) => {
    // array destructring to avoid req.body.name 
    const { name, email, phone, work, password, cpassword } = req.body
    // if any of the details missing error show 
    // validation
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled the field properly" });
    }
    
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" })
        } else if (password != cpassword) {
            return res.status(422).json({error: "password are not matching"})
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });

            // here brcypt pre middleware 
    
             await user.save();
    
            // console.log(`${user} user Registered successfully`)
            // console.log(userRegister)
    
            res.status(201).json({ message: "user registered successfully" });
        }
    } catch (err) {
        console.log(err);
    }
})

// login

router.post("/signin", async (req, res) => {
    // console.log(req.body);
    // res.json({message:"awesome"})
    
    try {
        const { email, password } = req.body
   
        if (!email || !password) {
            return res.status(400).json({ error: "plz filled the field properly" });
        }
        const userLogin = await User.findOne({ email: email })
        //   console.log('userLogin:', userLogin)

        //  compare passwordthrough bcrypt compare
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            // generate jwt token; //why here becoz we are getting all the details in userLogin 
            const token = await userLogin.generateAuthToken();
            console.log(token)

            // stored cookies
            // key = jwtToken and value= token (from above line no 63)
            res.cookie('jwtToken', token, {
                // When to expires time 30day in mili second
                expires: new Date(Date.now() + 25892000000), 
                // where
                httpOnly:true
             })
        if (!isMatch) {
            res.status(400).json({ error: "user error" });
        } else {
            res.status(200).json({ message: "user signin successfully" });
        }
   } else {
             res.status(400).json({error :"Invalid credential"})
         }
     } catch (err) {
        console.log(err);
     }
})

 module.exports = router