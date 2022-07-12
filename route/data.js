const express = require('express')
const dataController = require('../Api/data')

const dataRouter = express.Router()

dataRouter.route("/data")
.get(dataController.apiController)

module.exports = dataRouter