const {
  AdminModel,
  CandidatModel,
  RecruteurModel,
} = require("../models/userModel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")
//Ajouter un administrateur
exports.registerAdmin = expressAsyncHandler(async (req, res) => {
  try {
    const {
      nom,
      prenom,
      mail,
      date_de_naissance,
      sexe,
      mot_de_passe,
      num_tel,
      role,
    } = req.body
    if (
      !nom ||
      !prenom ||
      !mail ||
      !date_de_naissance ||
      !sexe ||
      !mot_de_passe ||
      !num_tel ||
      !role
    ) {
      res.status(400)
      throw new Error("Empty fields")
    }
    switch (role) {
      case "Candidat": {
        if (!req.body.cv) {
          res.status(400)
          throw new Error("Cv is required on role candidat")
        }
        const { cv } = req.body
        await CandidatModel.create({
          nom,
          prenom,
          mail,
          date_de_naissance,
          sexe,
          mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
          num_tel,
          role,
          cv,
        })
        res.status(201).json("Candidat created successfully!")
        break
      }
      case "Recruteur": {
        if (!req.body.entreprise) {
          res.status(400)
          throw new Error("Cv is required on role candidat")
        }
        const { entreprise } = req.body
        await RecruteurModel.create({
          nom,
          prenom,
          mail,
          date_de_naissance,
          sexe,
          mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
          num_tel,
          role,
          entreprise,
        })
        res.status(201).json("Recruteur created successfully!")
        break
      }
      default: {
        await AdminModel.create({
          nom,
          prenom,
          mail,
          date_de_naissance,
          sexe,
          mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
          num_tel,
          role,
        })
        res.status(201).json("Admin created successfully!")
      }
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
