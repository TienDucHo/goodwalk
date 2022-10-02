const express = require("express")
require("dotenv").config()
const cors = require('cors');
const User = require("./routes/User");
const { default: mongoose } = require("mongoose");
const {DATABASE_URL} = process.env 
const app = express()
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true
    },
  (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

app.use(express.json());
app.use(cors())

app.use("/",User )

const {PORT = 4000} = process.env
const server = app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})