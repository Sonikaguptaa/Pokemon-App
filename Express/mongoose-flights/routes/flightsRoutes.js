const express = require("express");
const router = express.Router();

const flightController = require("../controllers/flightController");
// index route
router.get("/", flightController.index);

//new route
router.get("/new", flightController.new);

//for delete
router.delete("/:id", flightController.destroy);
//update route
router.put("/:id", flightController.update);
// create route
router.post("/", flightController.create);

//edit route
router.get("/:id/edit", flightController.edit);
//show detail route
router.get("/:id", flightController.show);

module.exports = router;
