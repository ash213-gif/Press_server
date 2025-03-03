
const { validemail, validfullName, validpaswword } = require('../validation/validation')

exports.validAuth = (req, res , next) => {

    try {

        const data=req.body
        const { fullname, email ,password } = data;

        if (!fullname) { res.status(400).send('please provide a name ') }
        if (!validfullName(fullname)) { res.status(400).send('please provide a validfullname') }

        if (!email) { res.status(400).send('please provide an email ') }
        if (!validemail(email)) { res.status(400).send('please provide a valid email') }

        if (!password) { res.status(400).send('please provide a password ') }
        if (!validpaswword(password)) { res.status(400).send('please provide a valid password') }

        next()

    }     catch (err) { return res.status(500).send({ status: false, msg: err.message }) }

}