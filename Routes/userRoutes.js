const express=require('express')
const {loginController,registerController,priceController}=require("../Controllers/userController")
const router=express.Router()

router.post("/login",loginController);
router.post('/register',registerController)
router.post("/priceset",priceController)

module.exports=router;