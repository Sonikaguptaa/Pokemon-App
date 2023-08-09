// bringing in magic-8 data
const magicEight = require("../models/magicEight");

// the callback function from index route
function index(req, res) {
  res.send(magicEight);
}

// show route
function show(req, res) {
  let randN = Math.floor(Math.random() * magicEight.length);
  let answer = magicEight[randN];
  console.log(randN, magicEight[randN]);
  console.log(req.params.question);
  res.send(
    `<h1>${req.params.question} : ${answer} </h1>` || "<h1>Not Found</h1>"
  );
}

module.exports = {
  index,
  show,
};
