const UserDAB = require('../modules/schema')
const bcrypt = require('bcrypt')
const { userURLImg } = require('../cloudnary/imageurl')

exports.UserCreaetd = async (req, res) => {

    try {

        const data = req.body;
        const img = req.file

        if (img) {
            data.userIMG = await userURLImg(img.path)
        }
        const bcryptpassword = await bcrypt.hash(password, 10)
        data.password = bcryptpassword

        // pasword defind error aa raha haa 

        const udata = await UserDAB.create(data)
        res.status(201).send(udata)
       

    } catch (e) { res.status(400).send({ status: false, msg: e.message }) }

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

