const express = require('express')

// bring in our controller logic
const fruitController= require('../controller/fruitController')



const router = express.Router()

// index route  // localhost:8080/fruits/
router.get("/", fruitController.index )

// example of a "show" route/ returns 1 item
router.get("/:id", fruitController.show)

module.exports= router;