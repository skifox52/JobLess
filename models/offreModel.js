const mongoose = require("mongoose")

const offerModel = new mongoose.Schema({
  autheur: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  competences: {
    type: [String],
    required: true,
  },
  diplome: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Offre", offerModel)
