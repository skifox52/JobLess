const offreModel = require("../models/offreModel")
const userModel = require("../models/userModel")
const candidatureModel = require("../models/candidatureModel");


const expressAsyncHandler = require("express-async-handler")

//Afficher toutes les offres

exports.getAllOffres = expressAsyncHandler(async (req, res) => {
  try {
    const offres = await offreModel.find()
    res.status(200).json(offres)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})

// Afficher les offres où le candidat a postulé

exports.getAppliedOffres = expressAsyncHandler(async (req, res) => {
  try {
    const candidatId = req.params.candidatId;
    const candidatures = await candidatureModel.find({ candidatId: candidatId }).populate("offreId");
    const offres = candidatures.map((candidature) => candidature.offreId);
    res.status(200).json(offres);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Afficher les entreprises 

exports.getEntrepriseOffres = expressAsyncHandler(async (req, res) => {
  try {
    const entreprise = req.params.entreprise.toString().toLowerCase();
    const users = await userModel.find({ entreprise });
    const offres = await offreModel.find({ autheur: { $in: users.map((user) => user._id) } });
    res.status(200).json(offres);
  } catch (error) {
    res.status(400).json(error);
  }
});




//Créer une offre
exports.postOffer = expressAsyncHandler(async (req, res) => {
  try {
    const {  contrat, competences, diplome, experience, description ,IdCategorie} =
      req.body
    if (
      !contrat ||
      !competences ||
      !diplome ||
      !experience ||
      !description
    ) {
      res.status(400).json("Fichier Vide !!")
    }

    await offreModel.create({
      autheur: req.user._id,
      contrat,
      IdCategorie,
      competences,
      diplome,
      experience,
      description,
    })
    res.status(201).json("l'offre a été crée !")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})

// Modifier une offre
exports.updateOffer = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const { autheur, contact, competences, diplome, experience, description } =
      req.body
    const updatedOffer = {
      autheur,
      contact,
      competences,
      diplome,
      experience,
      description,
    }

    const result = await offreModel.findByIdAndUpdate(id, req.body)
    if (!result) {
      return res.status(404).json({ message: "L'offre n'a pas été trouvée." })
    }
    res
      .status(200)
      .json({ message: "L'offre a été modifiée avec succès.", offer: result })
  } catch (error) {
    res
      .status(400)
      .json({ message: "La modification de l'offre a échoué.", error: error })
  }
})

// Supprimer une offre :
exports.deleteOffre = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    await offreModel.findByIdAndDelete(id)
    res.status(201).json("Vous avez supprimé cette offre ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
