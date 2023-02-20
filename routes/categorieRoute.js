const {
  getAllCategories,
  postCategorie,
  deleteCategorie,
  updateCategorie,
} = require("../controllers/categorieController")
const categorieRoute = require("express").Router()
categorieRoute
  .get("/all", getAllCategories)
  .post("/add", postCategorie)
  .delete("/:id", deleteCategorie)
  .put("/:id", updateCategorie)
module.exports = categorieRoute
