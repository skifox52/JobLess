const {
  getAllcandidatures,
  postCandidature,
  modifierCandidature,
} = require("../controllers/candidatureController")
const { protectRecruteur } = require("../middlewares/Protect")
const candidatureRoute = require("express").Router()
candidatureRoute
  .get("/all", protectRecruteur, getAllcandidatures)
  .post("/add/:idOffre", protectRecruteur, postCandidature)
  .put("/:id", protectRecruteur, modifierCandidature)
module.exports = candidatureRoute
