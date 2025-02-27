const express = require('express')
const { validAuth } = require('../middleware/middleware')
const multer = require('multer')
const { UserCreaetd, upateUser } = require('../controller/user')
const routes = express.Router()

const upload = multer({ storage: multer.diskStorage({}) })

routes.post('/user', upload.single('userIMG'), validAuth, UserCreaetd)
routes.post('/upateUser/:id', upateUser)

routes.all('/*', (req, res) => {
    res.status(404).send({ status: false, message: 'invailed URL' })
})

module.exports = routes 