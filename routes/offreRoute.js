const { getAllOffres, postOffer,deleteOffre,updateOffer,getAppliedOffres,getEntrepriseOffres} = require("../controllers/offreController")
const  {protectRecruteur, protectUser} = require('../middlewares/Protect')

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add",protectRecruteur, postOffer).delete("/:id",protectRecruteur,deleteOffre).put("/:id",protectRecruteur,updateOffer).get("/:candidatId",protectUser,getAppliedOffres ).get("/entreprise/:entreprise",protectUser,getEntrepriseOffres )


module.exports = offreRouter
