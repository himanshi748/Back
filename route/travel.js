const express = require('express')
const travelController = require('../Api/travel')

const travelRouter = express.Router()
travelRouter.route("/travel")
.get(travelController.apiController)
module.exports = travelRouter