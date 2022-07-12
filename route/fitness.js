const express = require('express')
const fitController = require('../Api/fitness')

const fitRouter = express.Router()

fitRouter.route("/fitness")
    .get(fitController.apiController)
module.exports = fitRouter;