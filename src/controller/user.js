const UserDAB = require('../modules/schema')

exports.UserCreaetd = async (req, res) => {

    const data = req.body;
    const udata = await UserDAB.create(data)

    res.send(udata)
}


// now we create a new app update API BANAYENGE 

exports.upateUser =  async (req, res) => {

    try {

        const a = req.params.id
        const NewName=req.body.fullname;

        const updateData =await UserDAB.findOneAndUpdate({ _id: a }, { fullname: NewName }, { new: true })
        res.send(updateData)

    } catch (e) { res.status(500).send({ status: false, message: e.message }) }

}


// questionss 
// try and catch explain 
// params suggestion nahi deta 
// explain update user data API 
// explain get all user data API CONCEPT 