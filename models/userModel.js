const mongoose = require("mongoose")
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
    },
    date_de_naissance: {
      type: Date,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
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
    },
  },
  { timestamps: true }
)
//Sub classes
const AdminSchema = new mongoose.Schema({})
const CandidatSchema = new mongoose.Schema({
  cv: {
    type: String,
    required: true,
  },
})
const RecruteurSchema = new mongoose.Schema({
  entreprise: {
    type: String,
    required: true,
  },
})
AdminSchema.add(UserSchema)
CandidatSchema.add(UserSchema)
RecruteurSchema.add(UserSchema)
const AdminModel = mongoose.model("Admin", AdminSchema)
const CandidatModel = mongoose.model("Candidat", CandidatSchema)
const RecruteurModel = mongoose.model("Recruteur", RecruteurSchema)
const UsersModel = {
  AdminModel,
  CandidatModel,
  RecruteurModel,
}
module.exports = UsersModel
