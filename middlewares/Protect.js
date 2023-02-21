const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

//Protect Admin
exports.protectAdmin = expressAsyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
      res.status(400)
      throw new Error("No token!")
    }
    const user = jwt.verify(token, process.env.ACCESS_TOKEN)
    const { role, _id } = user
    const isAdmin = role === "Admin"
    if (!isAdmin) {
      res.status(404)
      throw new Error("Unauthorized, you are not an admin!")
    }
    req.user = { _id, role }
    next()
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
//Protect Recruteur
exports.protectRecruteur = expressAsyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
      res.status(400)
      throw new Error("No token!")
    }
    const user = jwt.verify(token, process.env.ACCESS_TOKEN)
    const { role, _id } = user
    const isAdmin = role === "Recruteur"
    if (!isAdmin) {
      res.status(404)
      throw new Error("Unauthorized, you are not a Recruteur!")
    }
    req.user = { _id, role }
    next()
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
//Protect Candidat
exports.protectCandidat = expressAsyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
      res.status(400)
      throw new Error("No token!")
    }
    const user = jwt.verify(token, process.env.ACCESS_TOKEN)
    const { role, _id } = user
    const isAdmin = role === "Candidat"
    if (!isAdmin) {
      res.status(404)
      throw new Error("Unauthorized, you are not a Candidat!")
    }
    req.user = { _id, role }
    next()
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
//Protect Any User
exports.protectUser = expressAsyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
      res.status(400)
      throw new Error("No token!")
    }
    const user = jwt.verify(token, process.env.ACCESS_TOKEN)
    const { role, _id } = user
    req.user = { _id, role }
    next()
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
