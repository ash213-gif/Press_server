const express=require('express')
const mongoose=require('mongoose')
const routes=require('./routes/routes')
require('dotenv').config();

const app=express()
app.use(express.json());
const port =3020;

mongoose.connect( process.env.mongoDBurl )
.then(()=>{console.log('mongoDB is connected ');})
.catch((e)=>{console.log(e);})


app.use('/',routes)
app.use('/user',routes)
app.use('/getallData',routes)

app.listen(port,(console.log(`this port is running on ${port}`)))