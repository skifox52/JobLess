const {getAllCategories,postCategorie} = require("../controllers/categorieController")
const categorieRoute = require("express").Router()
categorieRoute.get("/all", getAllCategories).post("/add",postCategorie).get("/id",deleteCategorie)
module.exports = categorieRoute