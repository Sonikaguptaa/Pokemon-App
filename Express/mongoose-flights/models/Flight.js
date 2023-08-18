const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Parents
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["american", "southwest", "united"],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    default: () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    },
  },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
  },
});

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
  },
  arrival: {
    type: Date,
    required: true,
  },
});

//  destination: [destinationSchema],

const Flight = mongoose.model("flights", flightSchema);
module.exports = Flight;
