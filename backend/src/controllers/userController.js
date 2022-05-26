const jwt = require('jsonwebtoken');
require('dotenv').config()

const User = require("../models/userSchema")
const express = require("express")
const router = express.Router()
const generateToken = (user)=>
{
    return jwt.sign({user},process.env.Secret_key);
}


const register = async(req,res)=>
{
    try{
 let user = await User.findOne({email:req.body.email}).lean().exec()  

 if(user)
 {
     return res.status(400).send({message:"email already exists"})
 }
  user = await User.create(req.body)
  const token = generateToken(user)
  return res.status(200).send({user,token})
}
catch(err)
{
    return res.status(400).send({message:err.message})
}
}



const login = async(req,res)=>
{
    try{

    
 let user = await User.findOne({email:req.body.email})

 if(!user)
 {
     return res.status(400).send({message:"invalid email or password"})
 }
  const match = user.checkPassword(req.body.password)
 
  if(!match)
  {
      return res.status(400).send({message:"invalid email or password"})
  }
  const token = generateToken(user)
  return res.status(200).send({user,token})
}
catch(err)
{
    return res.status(400).send({message:err.message})
}
}



module.exports = {register, login }

