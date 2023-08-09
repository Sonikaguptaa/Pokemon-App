const meats= require('../models/meats')

function index(req, res){
    res.render('meats/Index',{meats})
}

function show(req, res){
    console.log(req)
    res.render('meats/Show',{meat:meats[req.params.id]})
    // meats[req.params.id]
}

// can add filter

module.exports={
    index,
    show
}
