const express = require('express')
const techController = require('../Api/tech')

const techRouter = express.Router()
techRouter.route("/tech")
.get(techController.apiController)
module.exports = techRouter