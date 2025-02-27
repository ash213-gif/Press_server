const mongoose=require('mongoose')

const Userschema= new mongoose.Schema({

    userIMG:{type:String  ,  required:false ,trim:true },
    fullname:{ type:String  ,  required:true ,trim:true },
    email:{ type:String , unique:true  , required:true ,trim:true },
    password:{ type:String , required:true ,trim:true },
    userverifyOTP:{  type:String , required:true ,trim:true },
    isdelete:{ type:Boolean , default:false},
    IsActive:{ type:Boolean , default:false},
    isVerify:{ type:Boolean , default:false},
   

} ,{timestamps:true} )

module.exports=mongoose.model('userdata',Userschema)