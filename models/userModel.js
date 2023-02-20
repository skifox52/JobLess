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

UserSchema.set("discriminatorKey", "role")
UserSchema.discriminator("Admin", AdminSchema)
UserSchema.discriminator("Candidat", CandidatSchema)
UserSchema.discriminator("Recruteur", RecruteurSchema)

module.exports = mongoose.model("Utilisateur", UserSchema)
