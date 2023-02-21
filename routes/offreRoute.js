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

module.exports = offreRouter
