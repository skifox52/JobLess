const { getAllOffres, postOffer } = require("../controllers/offreController")

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add", postOffer)

module.exports = offreRouter
