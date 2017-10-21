const express = require('express');
const routs = require('./routs/index');

let app = express();

// --------- Middlewares ------------
app.use('/', express.static(__dirname + '/public'));   //<-- static files


// --------- Setting up the template engine ------------
app.set('view engine', 'ejs');

// ---------- Routes ------------
app.get('/', routs.home);

// ---------- Not Found ------------
app.use(routs.notFound);

// ---------- Setting up the port ------------
app.listen(3000)