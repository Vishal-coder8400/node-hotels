const mongoose=require("mongoose")

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    work:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    
})

const PersonModel=mongoose.model('Person',personSchema);
module.exports=PersonModel