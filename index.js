const express=require("express")
const app=express()
const userRoutes=require("./Routes/userRoutes")
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(5000,()=>{
    console.log("server is running")
})
const connectDB= async () => {
    try{
        const connect=await mongoose.connect("mongodb+srv://praveenkaikala25:VXelCAJNU1KlXg3x@cluster0.groyljh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
           
            dbName: 'ecomerce' // Specify the database name here
        })
        console.log("db connected")
    }
    catch(err){
        console.log("db not connected",err.message)
    }
   
};
app.use('/user',userRoutes)
connectDB()
