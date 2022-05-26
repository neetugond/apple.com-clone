
const express = require('express')
const cors = require('cors')

const app = express();

// to access dotenv we need to give path of file config.env
if (process.env.NODE_ENV !== "PRODUCTION") {
    require('dotenv').config({ path: './src/config.env' });
}

require('./src/db/conn')
app.use(express.json())
app.use(cors({ origin: "*" }));
const {register, login} = require('./src/controllers/userController')
const product = require('./src/routes/productRoutes')

app.post("/register", register);
app.post("/login", login)
app.use("/api", product)


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})