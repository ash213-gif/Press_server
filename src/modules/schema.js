const mongoose=require('mongoose')

const Userschema= new mongoose.Schema({

    fullname:{ type:String , required:true ,trim:true },
    email:{ type:String , required:true ,trim:true },
    password:{ type:String , required:true ,trim:true },
    gender:{ type:String , required:false  ,trim:true }

})

module.exports=mongoose.model('Ashish',Userschema)