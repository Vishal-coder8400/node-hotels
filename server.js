const express=require("express")
const app=express()
require('dotenv').config()
const db=require("./config/db")
const Person=require("./models/Person")
const personRoute=require("./routes/personRoute")

const bodyParser=require("body-parser")
const PersonModel = require("./models/Person")
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send('Welcome to my hotel... How i can help you?, we have list of menus')
})

// routes
app.use("/person",personRoute)



const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
