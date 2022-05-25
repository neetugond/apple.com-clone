const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

// document structure defined
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        // need to generate token again and again that's why array of obj
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})
    


// middleware pre method run before save method from auth.js

// it will return promise that why async
userSchema.pre('save', async function (next) {
   //modified only password
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12); //12 round salt
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
       
    }
    next()
})

// userSchema.pre('save', async function (next) {
//     //modified only password
//      if (this.isModified('email')) {
//          this.email = await bcrypt.hash(this.email, 12); //12 round
//      }
//      next()
// })
 

// we are generating token
// userSchema > methods > generateAuthToken
userSchema.methods.generateAuthToken = async function () {
    try {
        // for generating token jwt sign
        // in sign need to pass two parameter one is payload(obj) and mush be unique we have _id and another is secret key
        let gentoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY); //generate token done
        this.tokens = this.tokens.concat({ token: gentoken }) //for adding concate
        await this.save(); //need to save
        return gentoken;
    
    } catch (err){
        console.log(err)
}
    
}


// now we need to attach this document with our project we can do that with the help of model = collection create

// first letter should be capital letter USER - name of the collection which we are creating it will automatically become plural in database userSchema- document structure which we created above

// connected document with collection
const User = mongoose.model("USER", userSchema)

module.exports = User;

