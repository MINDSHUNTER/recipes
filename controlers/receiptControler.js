const receiptModel = require('../models/receiptModel')
const authorsModel = require('../models/authorModel')


exports.postReceipt = async (req, res) => {
    try {
        const authors = authorsModel.findOne({ _id: req.params.idAuthor })
        if (authors) {
            const newReceipt = new receiptModel(req.body) // creer sur postman pour tester 
            newReceipt.validateSync()
            await newReceipt.save()
            await authorsModel.updateOne({ _id: req.params.idAuthor }, { $push: { receipts: newReceipt._id } })
            res.json("Votre recette a été créé")
        } else {
            res.json('Aucune recette trouvée')
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    }

}
exports.getReceipt = async (req, res) => {
    try {

        const receipts = await receiptModel.find()

        res.json(receipts)
    } catch (error) {
        res.json(error)
    }
}
exports.getOneReceipt = async (req, res) => {
    try {

        const receipts = await receiptModel.findOne({ _id: req.params.id })

        res.json(receipts)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteReceipt = async (req, res) => {
    try {
        const authors = authorsModel.findOne({ _id: req.params.idAuthor })
        if (authors) {
            await authorsModel.updateOne({ _id: req.params.idAuthor }, { $pull: { receipts: receipts._id } })
            const receiptDeleted = await receiptModel.deleteOne({ _id: req.params.id })
            res.json('recette supprimée')
        } else {
            res.json('Aucune recette trouvée')
        }
    } catch (error) {
        res.json(error.message)
    }

}
exports.updateReceipt = async (req, res) => {
    try {
        const receiptUpdated = await receiptModel.updateOne({ _id: req.params.id }, req.body)
        res.json(receiptUpdated)
    } catch (error) {
        res.json(error.message)
    }

}
