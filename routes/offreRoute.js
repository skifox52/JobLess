<<<<<<< HEAD
const {
  getAllOffres,
  postOffer,
  deleteOffre,
  updateOffer,
} = require("../controllers/offreController")
const { protectUser, protectRecruteur } = require("../middlewares/Protect")
const offreRouter = require("express").Router()

offreRouter
  .get("/all", getAllOffres)
  .post("/add", protectRecruteur, postOffer)
  .delete("/:id", protectRecruteur, deleteOffre)
  .put("/:id", protectRecruteur, updateOffer)
=======
const { getAllOffres, postOffer,deleteOffre,updateOffer,getCandidatOffres} = require("../controllers/offreController")

const offreRouter = require("express").Router()

offreRouter.get("/all", getAllOffres).post("/add", postOffer).delete("/:id",deleteOffre).put("/:id",updateOffer).get("/:candidatId",getCandidatOffres )
>>>>>>> d0db468d249a6eabf278e8f1388f23b9d217e642

module.exports = offreRouter
