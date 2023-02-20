const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
} = require("../controllers/userController")

const userRouter = require("express").Router()

userRouter
  .post("/add", ajouterUtilisateur)
  .put("/modifier/:id", modifierUtilisateur)
  .delete("/supprimer/:id", supprimerUtilisateur)

module.exports = userRouter
