const offreModel = require("../models/offreModel")

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
