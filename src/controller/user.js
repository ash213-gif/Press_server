const UserDAB = require('../modules/schema')

exports.UserCreaetd = async (req, res) => {

    const data = req.body;

    const udata = await UserDAB.create(data)
    res.send(udata)
}

exports.getallData = async(req, res) => {
    try {

        const a= req.params.cat
        if(a=='all'){
            const alluser = await UserDAB.find({ isdeletes: false }).sort({ createdat: -1 })
        return res.send(alluser)
        }
        
        const alluser= await UserDAB.find({name:a}).sort({ createdat: -1 })
         res.send(alluser)

    }
    catch (e) { res.status(500).send({ status: false, message: e.message }) }
}