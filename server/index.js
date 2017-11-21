var express = require('express');
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database.js');
var path = require('path');
var http = require('http');
var port = 8000;
/*
 *  Database configure
 */
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
   useMongoClient: true
}, (err) => {
   console.log('connected to database');
});


/*
*  App configure
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views engine', 'ejs')

app.use(cookieParser());
app.use(session({
  secret: 'shopping',
  resave: false,
  saveUninitialized: true
}))


app.listen(port, () => {
    console.log("listening on port " + port);
});

require('./routes/productRoutes.js')(app);
require('./routes/cartRoutes.js')(app);

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

const server = http.createServer(app);