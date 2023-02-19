const mongoose = require("mongoose")

//Role
const Role = Object.freeze(["Admin", "Candidat", "Recruteur"])
//Sexe
const Sexe = Object.freeze(["Homme", "Femme"])
//Super classe
const UserSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    date_de_naissance: {
      type: Date,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
      enum: Sexe,
    },
    mot_de_passe: {
      type: String,
      required: true,
    },
    num_tel: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: Role,
    },
  },
  { timestamps: true }
)
//Sub classes
const AdminSchema = new mongoose.Schema({}).add(UserSchema)
const CandidatSchema = new mongoose.Schema({
  cv: {
    type: String,
    required: true,
  },
}).add(UserSchema)
const RecruteurSchema = new mongoose.Schema({
  entreprise: {
    type: String,
    required: true,
  },
}).add(UserSchema)

const AdminModel = mongoose.model("Admin", AdminSchema)
const CandidatModel = mongoose.model("Candidat", CandidatSchema)
const RecruteurModel = mongoose.model("Recruteur", RecruteurSchema)
const UsersModel = {
  AdminModel,
  CandidatModel,
  RecruteurModel,
}
module.exports = UsersModel
