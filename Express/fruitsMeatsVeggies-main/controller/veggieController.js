const veggies= require('../models/veggies')

function index(req, res){
    res.render('veggies/Index', {veggies})
}

function show(req, res){
    res.render('veggies/Show', {veggie:veggies[req.params.id]})
    // veggies[req.params.id]
}

// can add filter

module.exports={
    index, 
    show
}