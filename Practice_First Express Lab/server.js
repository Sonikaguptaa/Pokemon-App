const express = require("express");

const app = express();

// importing our routes
// const calcRoutes= require('./routes.js/calcRoutes');
// const greetRoutes= require('./routes.js/greetRoutes')
const magicRoutes = require("./magic/routes");
const calcRoutes = require("./calculator/routes");
const greetRoutes = require("./greetings/routes");
const port = 8080;

// connecting our  routes to our express app
// app.use('/fruits', calcRoutes)
// app.use('/meats', greetRoutes)
app.use("/magic", magicRoutes);
app.use("/calculator", calcRoutes);
app.use("/greeting", greetRoutes);
// root route
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
