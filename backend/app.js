const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
// const cors = require('cors')

const app = express();

// to access dotenv we need to give path of file config.env
dotenv.config({ path: './src/config.env' });

require('./src/db/conn')

// const User = require('./model/userSchema')

app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())
const product = require('./src/routes/productRoutes')
app.use("/api", product)
// middleware- we link the router files to make our routes easy
app.use(require("./src/router/auth"))

// how to access the connection from env file (process.env.givevaluename)


const PORT = process.env.PORT


// middleware = if user is not login redirect to the login page, if login redirect to about page

const middleware = (req, res, next) => {
    console.log("hello from middleware")
    next();

}

app.get('/', (req, res) => {

    res.send("hello world from the server app.js")
    //this get ignore becoz on line no 16 we have require home page from auth.js and once it get thw data below everything get ignore
})

// app.get('/about', middleware, (req, res) => {
//     console.log("about")
//     res.send("hello world from the about")
// })

// app.get('/contact', (req, res) => {
//     res.cookie('test', 'neetu')
//     res.send("hello world from the contact")

// })

// app.get('/login', (req, res) => {
//     res.send("hello world from the login page")

// })

// app.get('/register', (req, res) => {
//     res.send(req.body)

// })
// console.log("this is my first mern project")

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})