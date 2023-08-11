const express = require("express");

const pokemon = require("./models/pokemon");

const app = express();

const PORT = 3000;

const jsxEngine = require("jsx-view-engine");

app.set("view engine", "jsx");

app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
  // console.log(pokemon)
  res.send("Welcome to the Pokemon App");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", { pokemon: pokemon[req.params.id] });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
