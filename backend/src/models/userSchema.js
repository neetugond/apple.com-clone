const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// document structure defined
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength:[3, "Name should have more than 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate:[validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        minlength:[8, "Password should be greater than 8 characters"]
    },
    role: [
        {
            type: String,
            required: true
        }
    ],

}
{
    timestamps: true,
    versionKey: false,
    },
)
    


// middleware pre method run before save method from auth.js

userSchema.pre('save', function (next) {
    const hash = bcrypt.hashSync(this.password, 12) //12 round
    this.password = hash
    return next()
  })

  userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

// now we need to attach this document with our project we can do that with the help of model = collection create

// first letter should be capital letter USER - name of the collection which we are creating it will automatically become plural in database userSchema- document structure which we created above

// connected document with collection
const User = mongoose.model("user", userSchema)

module.exports = User;

