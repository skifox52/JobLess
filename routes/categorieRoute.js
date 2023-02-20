const {
  getAllCategories,
  postCategorie,
  deleteCategorie,
  updateCategorie,
} = require("../controllers/categorieController")
const categorieRoute = require("express").Router()
const protectAdmin = require("../middlewares/protectAdmin")
categorieRoute
  .get("/all", protectAdmin, getAllCategories)
  .post("/add", postCategorie)
  .delete("/:id", deleteCategorie)
  .put("/:id", updateCategorie)
module.exports = categorieRoute
