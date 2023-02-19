const {getAllCategories,postCategorie} = require("../controllers/categorieController")
const categorieRoute = require("express").Router()
categorieRoute.get("/all", getAllCategories).post("/add",postCategorie)
module.exports = categorieRoute