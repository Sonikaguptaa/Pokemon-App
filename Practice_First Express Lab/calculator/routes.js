const express = require("express");

// bring in our controller logic
const calcController = require("./controller");

const router = express.Router();

router.get("/:bill/:tipPer", calcController.show);

// index route  // localhost:8080/fruits/
router.get("/", calcController.index);

// example of a "show" route/ returns 1 item
router.get("/:question", calcController.show);

module.exports = router;
