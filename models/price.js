const mongoose=require("mongoose")

const PriceSchema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    product:{
        type:String,
        required:true,  
    },
    price:{
        type:Number,
        required:true,   
    }
})

const priceModel=mongoose.model("prices",PriceSchema)
module.exports=priceModel;