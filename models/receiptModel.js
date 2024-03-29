const mongoose = require('mongoose')
const receiptSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "le nom de la recette est requis"]
    },
    ingredients: {
        type: [],
        required: [true, "les ingredients sont requis"]
    },
    cookingTime: {
        type: Number,
        required: [true, "le temps de cuisson est requis"]
    },
    level: {
        type: String,
        required: [true, "le niveau de difficulté  est requis"]

    },
    
})
const receiptModel = mongoose.model('receipts', receiptSchema)
module.exports = receiptModel