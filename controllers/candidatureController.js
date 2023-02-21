const candidatureModel = require("../models/candidatureModel")
const expressAsyncHandler = require("express-async-handler")


//Afficher toutes les candidature

exports.getAllcandidatures = expressAsyncHandler(async (req, res) => {
  try {
    const candidatures = await candidatureModel.find()
    res.status(200).json(candidatures)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})

//Ajouter une candidature
exports.postCandidature = expressAsyncHandler(async (req, res) => {
  try {  
    const idCandidat = req.user._id
    const {idOffre} = req.params
    await candidatureModel.create({
      idCandidat,
      idOffre, 
    })
    res.status(201).json("Candidature creer")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})
//Modifier une candidature
exports.modifierCandidature = expressAsyncHandler(async (req, res) => {
  try {  
    const {id} = req.params
    const {Etat} = req.body
    await candidatureModel.findByIdAndUpdate(id,{Etat})
    res.status(201).json("Candidature Modifier")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})


