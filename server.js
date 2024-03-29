const express = require('express')
const mongoose = require('mongoose')
const receiptRouter = require('./router/receiptRouter')
const authorsRouter = require('./router/authorRouter')
const app = express()
app.use(express.json()) //permet a express d'utiliser le fichier de routes
app.use(receiptRouter)
app.use(authorsRouter)
app.listen(3001, (err) => {

    if (err) {
        console.log(err)
    }
    else {
        console.log("Connexion serveur réussie")
    }
})
mongoose.connect("mongodb://localhost:27017/receipts")

