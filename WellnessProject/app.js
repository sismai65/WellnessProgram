var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var cors = require('cors');
var session = require('express-session');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WellnessProgramDatabase')
.then(() => console.log('Connection Successful'))
.catch((err) => console.error(err));

var auth = require('./routes/user');
var challenge = require('./routes/challenge');
var team = require('./routes/team');
var mail = require('./routes/mail');
var app = express();


//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(flash());

// Routes
app.use('/auth', auth);
app.use('/challenge', challenge);
app.use('/team', team);
app.use('/mail', mail);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

