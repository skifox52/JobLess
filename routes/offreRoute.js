const { getAllOffres, postOffer,deleteOffre,updateOffer} = require("../controllers/offreController")

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add", postOffer).delete("/:id",deleteOffre).put("/:id",updateOffer)

module.exports = offreRouter
