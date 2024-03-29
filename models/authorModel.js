const mongoose = require('mongoose')

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'le nom est requis ']
    },
    receipts: {
        type:[
            {
            type: mongoose.Schema.ObjectId,
            ref: 'receipts'
        }
        ]
    }
})
const authorsModel = mongoose.model('authors', authorsSchema)
module.exports = authorsModel