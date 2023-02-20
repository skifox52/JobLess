const {
  Login,
  refreshAccess,
  logout,
} = require("../controllers/authController")

const authRouter = require("express").Router()

authRouter
  .post("/login", Login)
  .post("/token", refreshAccess)
  .delete("/token", logout)

module.exports = authRouter
