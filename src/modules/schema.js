const mongoose=require('mongoose')

const Userschema= new mongoose.Schema({

    fullname:{ type:String , required:true ,trim:true },
    email:{ type:String , required:true ,trim:true },
    password:{ type:String , required:true ,trim:true },
    isdelete:{ type:Boolean , default:false},
   

} ,{timestamps:true} )

module.exports=mongoose.model('userdata',Userschema)