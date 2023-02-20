const {
  AdminModel,
  CandidatModel,
  RecruteurModel,
} = require("../models/userModel")
const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//Sign token
const generateToken = (data) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN)
  return token
}
//Login user [Generate ACCESS TOKEN]
exports.Login = expressAsyncHandler(async (req, res) => {
  try {
    const { mail, role, mot_de_passe } = req.body
    if (!mail || !role || !mot_de_passe) {
      res.status(400)
      throw new Error("Empty fields!")
    }
    if (role === "Admin") {
      const userExists = await AdminModel.find({ mail: mail })
      if (userExists.length == 0) {
        res.status(400)
        throw new Error("User not found!")
      } else {
        const passwordMatch = await bcrypt.compare(
          mot_de_passe,
          userExists[0].mot_de_passe.toString()
        )
        if (!passwordMatch) {
          res.status(400)
          throw new Error("Password doesn't match")
        }
        const token = generateToken(userExists[0]._id.toString())
        res.status(200).json({
          _id: userExists[0]._id.toString(),
          mail: userExists[0].mail.toString(),
          role: userExists[0].role.toString(),
          token: token,
        })
      }
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
