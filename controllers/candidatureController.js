const candidatureModel = require("../models/candidatureModel")
const expressAsyncHandler = require("express-async-handler")


//Afficher toutes les offres

exports.getAllcandidatures = expressAsyncHandler(async (req, res) => {
  try {
    const candidatures = await candidatureModel.find()
    res.status(200).json(candidatures)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})



