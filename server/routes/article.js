const express = require('express');
const router = express.Router()

//controller
const ArticleController = require('../controller/ArticleController')

// add
router.post('/add',ArticleController.add)

// all
router.get('/all',ArticleController.all)

// get
router.get('/:id',ArticleController.get)

// put 
router.put('/:id',ArticleController.update)

// delete 
router.delete('/:id',ArticleController.deleted)

module.exports = router