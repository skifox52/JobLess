const { registerAdmin } = require("../controllers/userController")

const userRouter = require("express").Router()

userRouter.post("/add", registerAdmin)

module.exports = userRouter
