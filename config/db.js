const mongoose=require("mongoose")

const mongodbUrl="mongodb://127.0.0.1:27017/BtechwalaRestro"

mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to Mongodb Server');
})

db.on('error',(err)=>{
    console.log('Mongodb connection error',err);
})

db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
})

module.exports=db