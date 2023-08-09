const express= require('express')

const router= express.Router()

const veggieController= require('../controller/veggieController')

router.get('/', veggieController.index)

router.get('/:id', veggieController.show)

module.exports=router