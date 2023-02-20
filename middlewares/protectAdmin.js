const expressAsyncHandler = require("express-async-handler")

const protectAdmin = expressAsyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    console.log(authHeader)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

module.exports = protectAdmin
