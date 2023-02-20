const { Login } = require("../controllers/authController")

const authRouter = require("express").Router()

authRouter.post("/login", Login)

module.exports = authRouter
