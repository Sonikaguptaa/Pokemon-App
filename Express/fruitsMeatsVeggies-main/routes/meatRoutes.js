const express= require('express')

const router= express.Router()

const meatController= require('../controller/meatController')

router.get('/', meatController.index)

router.get('/:id', meatController.show)

module.exports=router

