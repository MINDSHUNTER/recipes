const receiptRouter = require('express').Router()
const receiptControler = require('../controlers/receiptControler')

//POUR CREER
receiptRouter.post("/receipt", receiptControler.postReceipt)

//POUR CREER ET INSERER DANS TABLEAU AUTRE CREATION
receiptRouter.post("/authors/:idAuthor/receipt", receiptControler.postReceipt)

//POUR RECUPERER ID
receiptRouter.get('/receipt', receiptControler.getReceipt)

//POUR RECUPERER UN SEUL ID
receiptRouter.get('/receipt/:id',receiptControler.getOneReceipt)

//POUR RECUPERER UN SEUL ID DANS TABLEAU AUTRE CREATION???
receiptRouter.get("/authors/:idAuthor/receipt/:id", receiptControler.getOneReceipt)
// POUR SUPPRIMER 
receiptRouter.delete('/receipt/:id', receiptControler.deleteReceipt)
receiptRouter.delete("/authors/:idAuthor/receipt", receiptControler.postReceipt)
// POUR  MODIFIER 
receiptRouter.put('/receipt/:id', receiptControler.updateReceipt)

module.exports = receiptRouter