const express=require("express")
const expressAsyncHandler=require("express-async-handler")
const userModel=require("../models/user")
const priceModel=require("../models/price")
const loginController=expressAsyncHandler(async (req,res)=>{
  const {username,password}=req.body;
  const user=await userModel.findOne({username})
  if(user && user.password===password)
  {
    res.status(200)
    res.json({
        _id:user.id,
        name:user.name,
        email:user.email,
    })
  }
  else{
    res.status(400)
    throw new Error("username or password incorrect")
  }
})
const registerController=expressAsyncHandler( async (req,res)=>{
    const {username,email,password}=req.body;
let usercreate
    if(!username || !email || !password)
    { 
        res.send(400)
        // throw error("fields are not filled ")
    }
    const userexist=await userModel.findOne({email})
    if(userexist){
       res.status(401)
        res.send("email already exist")
    }
    const user=await userModel.findOne({username})
    if(user){
       res.status(401)
        res.send("username already exist")
    }
    if(!userexist && !user)
   {
    usercreate= await userModel.create({username,email,password})
   }
   else{
    res.status(400)
    res.send("not created")
   }
    if(usercreate){
        res.status(201).json({
            id:usercreate._id,
            name:usercreate.name,
            email:usercreate.email,
           
           
        })
    }
    else{
        res.status(400)
        throw new Error("registration error")
    }


})

const priceController=expressAsyncHandler( async (req,res)=>{

    const {userid,product,price}=req.body
    try
    {
        const data=await priceModel.create({userid,product,price})
        res.status(200).send({
            _id:data._id,
            userid:data.userid,
            product:data.product,
            price:data.price
        })
    }
    catch(err)
    {
        res.status(400).send(err)
    }
        

})
module.exports={loginController,registerController,priceController}