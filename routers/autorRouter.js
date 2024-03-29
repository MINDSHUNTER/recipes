const authorsRouter = require('express').Router()
const authorsControler = require('../controlers/authorControler')

authorsRouter.get('/authors', authorsControler.getAuthors)
authorsRouter.get('/authors/:id', authorsControler.getOneAuthors)

authorsRouter.post('/authors', authorsControler.postAuthors)
authorsRouter.delete('/authors/:id', authorsControler.deleteAuthors)


module.exports = authorsRouter