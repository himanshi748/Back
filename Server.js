const express = require('express')
const bollyRouter = require('./route/bollywood')
const dataRouter = require('./route/data')
const techRouter = require('./route/tech')
const fitRouter = require('./route/fitness')
const homeRouter = require('./route/home')
const travelRouter = require('./route/travel')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api", bollyRouter)
app.use("/api", dataRouter)
app.use("/api", techRouter)
app.use("/api", fitRouter)
app.use("/api", homeRouter)
app.use("/api", travelRouter)


app.listen(process.env.PORT || 5000, () => {
    console.log("app is running");
})