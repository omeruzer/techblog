const express = require('express');
const router = express.Router()

//controller
const CategoryController = require('../controller/CategoryController')

// add
router.post('/add',CategoryController.add)

// all
router.get('/all',CategoryController.all)

// get
router.get('/:id',CategoryController.get)

// put 
router.put('/:id',CategoryController.update)

// delete 
router.delete('/:id',CategoryController.deleted)

module.exports = router