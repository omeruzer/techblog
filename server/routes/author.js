const express = require('express');
const router = express.Router()

//controller
const AuthorController = require('../controller/authorController')

// add
router.post('/add',AuthorController.add)

// all
router.get('/all',AuthorController.all)

// get
router.get('/:id',AuthorController.get)

// put 
router.put('/:id',AuthorController.update)

// delete 
router.delete('/:id',AuthorController.deleted)

module.exports = router