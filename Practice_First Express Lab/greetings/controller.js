// the callback function from index route
function index(req, res) {
  res.send("<h1>Greeting</h1>");
}

// show route
function show(req, res) {
  console.log(req.params);
  res.send(`<h1>Hello ${req.params.first} ${req.params.last}</h1>`);
}

module.exports = {
  index,
  show,
};
