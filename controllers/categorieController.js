const categorieModel = require("../models/categorieModel")
const expressAsyncHandler = require("express-async-handler")
//Afficher toustes les categories 
exports.getAllCategories = async (req, res) => { 
    try {
        const categories = await categorieModel.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(400)
        console.error(error)
    }
}

//Ajouter une categorie 
exports.postCategorie = async (req, res) => {
    try {
        const{ nom } = 
            req.body
        if ( !nom ) {
            res.status(400).json("Vide")
        }
        
        await categorieModel.create({
            nomcategorie:nom,
        })
        res.status(201).json("Categorie creer")
    } catch (error) {
        res.status(400)
        console.log(error)        
    }
}

// Supprimer une categorie : 
exports.deleteCategorie = expressAsyncHandler( async (req , res ) => {
    try {
        const id = req.params.id 
     
        await categorieModel.findByIdAndDelete(id) 
    } catch (error) {
        res.status(400)
        throw new Error(error) 
    }
})


