var express = require('express'),
    path = require('path'),
    apiRouter = require('./routes/api'),
    mongoose = require('mongoose')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for logging all the requests:
function logger (req, res, next) {
    console.log(req.method, req.originalUrl);
    next(); 
}

// development only
if ('development' == app.get('env')) {
  app.use(logger);
  //mongoose.set('debug', true);
  //mongoose.connect('mongodb://55.55.55.5/mongo');
}

app.get('/', function (req, res) {
  res.send('You\'re home. Take a look inside /api route')
});

app.use('/api', apiRouter);

// 404: Not found
app.use(function(req, res, next){
    res.json(404, {ERROR: 'Page not found.'});
});




app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
