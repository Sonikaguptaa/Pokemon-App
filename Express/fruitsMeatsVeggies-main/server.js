const express =require('express')

const app = express()
const port= 8080;
// importing our routes
const fruitRoutes= require('./routes/fruitRoutes');
const meatRoutes= require('./routes/meatRoutes')
const veggieRoutes= require('./routes/veggieRoutes')

// set up view engine///////////
const jsxEngine = require('jsx-view-engine')

// configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// create the engine and accepts files ending in jsx
app.engine('jsx', jsxEngine())
//



// connecting our fruit routes to our express app
app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
app.use('/veggies',veggieRoutes)

// root route
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log('listening on port: ' + port)
})

