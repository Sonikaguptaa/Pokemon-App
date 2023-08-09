const express = require("express");

// bring in our controller logic

// const greetController= require('../controller/fruitController')
const magicController = require("./controller");

const router = express.Router();

// index route  // localhost:8080/fruits/
router.get("/", magicController.index);

// example of a "show" route/ returns 1 item
router.get("/:question", magicController.show);

module.exports = router;
