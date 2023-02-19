const offreModel = require("../models/offreModel")
const expressAsyncHandler = require("express-async-handler")
//Afficher toutes les offres
exports.getAllOffres = async (req, res) => {
  try {
    const offres = await offreModel.find()
    res.status(200).json(offres)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
}

//Créer une offre
exports.postOffer = async (req, res) => {
  try {
    const { autheur, contact, competences, diplome, experience, description } =
      req.body
    if (
      !autheur ||
      !contact ||
      !competences ||
      !diplome ||
      !experience ||
      !description
    ) {
      res.status(400).json("Empty fields!!")
    }

    await offreModel.create({
      autheur,
      contact,
      competences,
      diplome,
      experience,
      description,
    })
    res.status(201).json("User created successfully!")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
}


// modifier offre 


// Supprimer une offre : 
exports.deleteOffre = expressAsyncHandler( async (req , res ) => {
  try {
      const id = req.params.id 
      await offreModel.findByIdAndDelete(id) 
      res.status(201).json("Vous avez supprimé cette offre ")
  } catch (error) {
      res.status(400)
      throw new Error(error) 
  }
})
