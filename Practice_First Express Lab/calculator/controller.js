// the callback function from index route
function index(req, res) {
  res.send("<h1>Calculator</h1>");
}

// show route
function show(req, res) {
  console.log(Number(req.params.bill) * (Number(req.params.tipPer) / 100));
  res.send(
    `<h1>Tip: ${
      Number(req.params.bill) * (Number(req.params.tipPer) / 100)
    }</h1>`
  );
}

module.exports = {
  index,
  show,
};
