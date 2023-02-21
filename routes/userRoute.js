const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
  autoDelete,
} = require("../controllers/userController")
const { protectUser, protectAdmin } = require("../middlewares/Protect")
const userRouter = require("express").Router()

userRouter
  .post("/add", ajouterUtilisateur)
  .put("/modifier", protectUser, modifierUtilisateur)
  .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)
  .delete("/delete", protectUser, autoDelete)

module.exports = userRouter
