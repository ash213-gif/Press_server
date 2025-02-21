const express=require('express')
const {UserCreaetd,upateUser}=require('../controller/user')
const routes=express.Router()

routes.get('/',(req,res)=>{
    res.send('this is backened ')
})
routes.post('/user',UserCreaetd)
routes.post('/upateUser',upateUser)


module.exports=routes