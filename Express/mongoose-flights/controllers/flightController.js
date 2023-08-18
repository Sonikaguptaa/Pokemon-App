let flights = require("../models/Flight");

const Flight = require("../models/Flight");

//Get flights Index

module.exports.index = async (req, res) => {
  let flights;
  try {
    flights = await Flight.find().sort({ departs: 1 });
  } catch (err) {
    console.log("No Flights Found", err);
  }
  console.log(flights);
  res.render("Index", { flights });
};

//show
module.exports.show = async (req, res) => {
  let flight;
  try {
    flight = await Flight.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
  if (flight) {
    res.render("Show", { flight });
  } else {
    res.redirect("/flights");
  }
};

module.exports.new = (req, res) => {
  const newFlight = new Flight();
  const dt = newFlight.departs;

  let dateTime = `${dt.getFullYear()}-${dt
    .getMonth()
    .toString()
    .padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")}T${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  // Format the date for the value attribute of the input

  const departsDate = dt.toISOString().slice(0, 19);

  res.render("New", { dateTime });
};

//edit

module.exports.edit = async (req, res) => {
  let flight;
  try {
    flight = await Flight.findById(req.params.id);
    console.log(flight);
    res.render("edit", { flight });
  } catch (err) {
    console.log("Failed to find Flight document with id " + req.params.id, err);
    res.redirect(`/flights/${req.params.id}`);
  }
  res.render("edit", { flight });
};

module.exports.create = async (req, res) => {
  try {
    let flight = await Flight.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/flights");
};

module.exports.destroy = async (req, res) => {
  console.log("DELETE /flights/:id");

  try {
    await Flight.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err.message);
  }

  res.redirect("/flights");
};

module.exports.update = async (req, res) => {
  try {
    let flights = await Flight.findById(req.params.id);
    flights.destination.push(req.body);
    await flights.save();
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/flights/${req.params.id}`);
  }
};
