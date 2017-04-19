var express = require('express'),
    path = require('path'),
    apiRouter = require('./routes/api'),
    mongoose = require('mongoose'),
    bluebird = require('bluebird')

var app = express();

app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for logging all the requests:
function logger (req, res, next) {
    console.log(req.method, req.originalUrl);
    next(); 
}
app.use(logger)

// Setup mongoose
mongoose.Promise = bluebird
mongoose.set('debug', true)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))
mongoose.connect(process.env.DB_URI)

// Have a landing page explainging how it works
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Use the router for any api endpoint
app.use('/api', apiRouter)

// 404: Not found
app.use(function(req, res, next){
    res.status(404).json({ERROR: 'Page not found.'})
});

app.listen(app.get('port'))
console.log('Express server listening on port ' + app.get('port'))
