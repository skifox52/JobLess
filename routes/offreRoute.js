const { getAllOffres, postOffer,deleteOffre,updateOffer,getCandidatOffres} = require("../controllers/offreController")

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add", postOffer).delete("/:id",deleteOffre).put("/:id",updateOffer).get("/:candidatId",getCandidatOffres )

module.exports = offreRouter
