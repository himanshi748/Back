const express = require('express')
const bollyController = require('../Api/bollywood')

const bollyRouter = express.Router()
bollyRouter.route("/bolly")
.get(bollyController.apiController)
module.exports = bollyRouter