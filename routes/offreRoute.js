const { getAllOffres, postOffer,deleteOffre,updateOffer,getAppliedOffres,getEntrepriseOffres} = require("../controllers/offreController")

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add", postOffer).delete("/:id",deleteOffre).put("/:id",updateOffer).get("/:candidatId",getAppliedOffres ).get("/:entreprise",getEntrepriseOffres )

module.exports = offreRouter
