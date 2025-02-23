const UserDAB = require('../modules/schema')
const {validfullName,validpaswword,validemail }=require('../validation/validation')
const bcrypt=require('bcrypt')

exports.UserCreaetd = async (req, res) => {

    try {

        const data=req.body
        const { fullname, email, password } = data;

        if (!fullname) { res.status(400).send('please provide a name ') }
        if(!validfullName(fullname)){ res.status(400).send('please provide a validfullname') }

        if (!email) { res.status(400).send('please provide a email ') }
        if(!validemail(email)){ res.status(400).send('please provide a valid email') }


        if (!password) { res.status(400).send('please provide a password ') }
        if(!validpaswword(password)){ res.status(400).send('please provide a valid password') }

        const checkMail= await UserDAB.findOne({email:email})
        if(checkMail) { return res.status(400).send({status:false , message:"email already exit " }) }

        const bcryptpassword= await bcrypt.hash(password,10)
        data.password=bcryptpassword

        const udata = await UserDAB.create(data)
        res.status(201).send(udata)

    } catch (e) { res.status(400).send({ status: false, message: e.message }) }

}


// now we create a new app update API BANAYENGE 

exports.upateUser = async (req, res) => {

    try {

        const a = req.params.id
        const NewName = req.body.fullname;

        const updateData = await UserDAB.findOneAndUpdate({ _id: a }, { fullname: NewName }, { new: true })
        res.send(updateData)

    } catch (e) { res.status(500).send({ status: false, message: e.message }) }

}








// questionss
// try and catch explain
// params suggestion nahi deta
// explain update user data API
// explain get all user data API CONCEPT 

