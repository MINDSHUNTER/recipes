const authorsModel = require('../models/authorModel')

exports.getAuthors = async (req, res) => {
    try {
        const authors = await authorsModel.find()
        res.json(authors)
    } catch (error) {
        res.json(error.message)
    }
}
exports.getOneAuthors = async (req, res) => {
    try {
        const authors = await authorsModel.findOne({ _id: req.params.id })
        res.json(authors)
    } catch (error) {
        res.json(error.message)
    }
}

exports.postAuthors = async (req, res) => {
    try {
        const authors = new authorsModel(req.body)
        authors.validateSync()
        await authors.save()
        res.json('L/author a bien été créé')
    } catch (error) {
        res.json(error.message)
    }
}
exports.deleteAuthors = async (req, res) => {
    try{
    const authors = await authorsModel.deleteOne({ _id: req.params.id })
    res.json("Auteur supprimé")
} catch(error) {
    res.json(error.message)
}
}