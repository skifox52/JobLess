const { getAllOffres, postOffer,deleteOffre} = require("../controllers/offreController")

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add", postOffer).delete("/:id",deleteOffre)

module.exports = offreRouter
