const {getAllcandidatures} = require("../controllers/candidatureController")
const candidatureRoute = require("express").Router()
candidatureRoute.get("/all", getAllcandidatures)
module.exports = candidatureRoute