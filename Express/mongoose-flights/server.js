const express = require("express");

require("dotenv").config();

const mongoConfig = require("./config");

mongoConfig();

const app = express();

const PORT = 8081;

const flightsRoutes = require("./routes/flightsRoutes");

//jsx engine setup
const jsxEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// load the method override function
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.use("/flights", flightsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Mongoose Flights app");
});
// app.get("/Flight", async (req, res) => {
//   let flightData;
//   try {
//     flightData = await Flight.find();
//     console.log("got db ", flightData);
//   } catch (err) {
//     console.log(err.message);
//   }
//   req.render("Index", { flight: flightData });
// });

app.get("/flights", async (req, res) => {
  res.render("New");
});

app.listen(PORT, () => {
  console.log(
    `App listening at http://localhost:${PORT} ${process.env.MONGO_URL}`
  );
});
