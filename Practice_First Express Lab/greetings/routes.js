const express = require("express");

// bring in our controller logic
const greetController = require("../greetings/controller");

const router = express.Router();

router.get("/:first/:last", greetController.show);

// index route  // localhost:8080/fruits/
router.get("/", greetController.index);

module.exports = router;
