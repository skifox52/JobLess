const mongoose = require("mongoose") 

const candidatureModel = new mongoose.Schema({
    IdOffre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "offres",
        required: true,
      },
    
},{timestamps: true})

module.exports = mongoose.model("candidatures", candidatureModel) 