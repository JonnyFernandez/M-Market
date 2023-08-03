const {Router} = require('express')
const postCategory = require('../handlers/categoryHandler')

const category = Router()
category.post('/', postCategory)







module.exports = category