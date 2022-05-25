const mongoose = require('mongoose')

const DB = process.env.DATABASE


// this return promise so for fullfilling the promise we use.then
mongoose.connect(DB).then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log("no connection")
})
