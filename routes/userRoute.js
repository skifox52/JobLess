const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
  autoDelete,
} = require("../controllers/userController")
const { protectUser, protectAdmin } = require("../middlewares/Protect")
const userRouter = require("express").Router()
const multer = require("multer")
const path = require("path")

//Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "cv"))
  },
  filename: (req, file, cb) => {
    req.cv = Date.now() + path.extname(file.originalname)
    cb(null, req.cv)
  },
})

const upload = multer({ storage: storage })

userRouter
  .post("/add", upload.single("cv"), ajouterUtilisateur)
  .put("/modifier", protectUser, modifierUtilisateur)
  .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)
  .delete("/delete", protectUser, autoDelete)

module.exports = userRouter
