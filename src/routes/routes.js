const express=require('express')
const {UserCreaetd,getallData}=require('../controller/user')
const routes=express.Router()

routes.get('/',(req,res)=>{
    res.send('this is new press backened ')
})

routes.post('/user',UserCreaetd)
routes.get('/getallData/:cat' ,getallData)

module.exports=routes