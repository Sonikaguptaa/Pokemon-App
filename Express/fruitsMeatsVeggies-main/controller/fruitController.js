// bringing in fruits data
const fruits= require('../models/fruits')

// the callback function from index route
function index(req, res){
    res.render('fruits/Index', { fruits })
}

// show route
function show(req, res){
    res.render('fruits/Show',{ fruit: fruits[req.params.id] })
}

// can add filter

module.exports={
    index,
    show
}