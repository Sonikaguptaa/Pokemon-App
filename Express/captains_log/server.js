const express = require("express");

require("dotenv").config();

const mongoConfig = require("./config");

mongoConfig();

const app = express();

const PORT = 3002;

const jsxEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

const logRoutes = require("./routes/logRoutes");
app.use("/logs", logRoutes);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Captain Log world!");
  // res.redirect("/logs");
});

app.listen(PORT, () => {
  console.log(
    `App listening at http://localhost:${PORT} ${process.env.MONGO_URL}`
  );
});
