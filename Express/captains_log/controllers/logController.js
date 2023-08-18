const Log = require("../models/Log");

//get index

module.exports.index = async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("Index", { logs });
  } catch (err) {
    console.log("Mongo error: ", err);
  }
};

//new

module.exports.new = (req, res) => {
  // const newLog = new Log();

  res.render("New");
};

//delete
module.exports.destroy = async (req, res) => {
  console.log("DELETE/logs/:id");
  try {
    await Log.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err.message);
  }
  //res.send("received");
  res.redirect("/logs");
};

//update
// module.exports.update = async (req, res) => {
//   try {
//     // res.render("logs/:id");   redirects
//   } catch (error) {
//     console.log("Mongo error ", error);
//   }
// };

//create
module.exports.create = async (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on";
  try {
    await Log.create(req.body);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect("/logs");
};

//edit
module.exports.edit = async (req, res) => {
  let log;
  try {
    log = await Log.findById(req.params.id);
    console.log(log);
    res.render("edit", { log });
  } catch (err) {
    console.log(err.message);
    res.send("NotFound edit page");

    // res.redirect(`/los/${req.params.id}`);
  }
  // res.render("edit", { log });
};

//show
module.exports.show = async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);
    res.render("Show", { log });
  } catch (err) {
    console.log(err.message);
    res.send("not found");
  }
};

//update

module.exports.update = async (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on";
  try {
    await Log.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.redirect(`/logs/${req.params.id}`);
  } catch (err) {
    console.log(err.message);
  }
};

//show

// module.exports.show = async (req, res) => {
//   let log;
//   try {
//     log = await Log.findById(req.params.id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (log) {
//     res.render("show", { log });
//   } else {
//     res.redirect("/logs");
//   }
// };
