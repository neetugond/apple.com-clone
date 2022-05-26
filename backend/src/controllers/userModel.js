const express = require("express")
const router = express.Router()
const authenticate = require("../middleware/authentication")

const User = require("../models/userSchema")

router.get ("/", authenticate, async (req, res )=>{


    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }

    
})

module.exports = router