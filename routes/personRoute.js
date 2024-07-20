const express =require("express");
const PersonModel = require("../models/Person");
const router=express.Router()

//post
router.post("/",async(req,res)=>{
    try {
        const data=req.body;
        const newPerson=new PersonModel(data)
        const response=await newPerson.save()
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
})

//get
router.get("/",async(req,res)=>{
    try {
        const data=await PersonModel.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
})

//put
router.put("/:id",async(req,res)=>{
   try {
    const personId=req.params.id;
    const updatedPersonData=req.body;
    const response=await PersonModel.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,
        runValidators:true,
    })
    console.log("data updated");
    res.status(200).json(response)
   } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error")
   }
})

// delete
router.delete("/:id",async(req,res)=>{
    try {
        const personId=req.params.id
        const response=await PersonModel.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data delete');
        res.status(200).json({message:'Person deleted Successfully '})
    } catch (error) {
        console.log(error);
    res.status(500).json("Internal Server Error")
    }
})

module.exports=router