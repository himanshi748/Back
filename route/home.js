const express = require('express')
const homeController = require('../Api/home')

const homeRouter = express.Router()

homeRouter.route("/home")
.get(homeController.apiController)

module.exports = homeRouter