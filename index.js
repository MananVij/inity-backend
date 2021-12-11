const express = require('express')
const app = express();
app.use(express.json())

const cors = require('cors')
app.use(cors())

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const userRouter = require('./router/user-router')
const mongoose = require('./db/mongoose')

const port = process.env.PORT || 3000

app.use(userRouter)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})