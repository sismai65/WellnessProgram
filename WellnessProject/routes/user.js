var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('../models/User');
var Team = require('../models/Team');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var session = require('express-session');
var cors = require('cors');

// GET all users
router.get('/', function(req,res,next){
	User.find(function(err, users){
		if (err) {return next(err)};
		res.json(users);
	});
});

// get user by id
router.get('/:id', function(req, res, next){
  User.findById(req.params.id, function(err, user){
    if(err) return next(err);
    res.json(user);
    console.log("id", req.params.id);
  });
});

// Update user's data
router.post('/user/:id', function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
    console.log("post:", post);
  });
});

//Update user team
/*router.put('/users/:id', function(req, res, next){
  User.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    console.log("req.body", req.params.id);
    console.log("req.body", req.body);
    if(err) return next(err);
    res.json(post);
     console.log("post:", post);
  });
});*/

// create new user
router.post('/signup', function(req, res, next){
	//console.log("hello");
	User.create(req.body, function(err, post){
		if (err) {
			console.log(err)
			return next(err);
		};
		res.json(post);
	});
});


// Authentication Web
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Web authentication
router.post('/signin',
  passport.authenticate('local'),
  function(req, res) {
    console.log("req.user:", req.user._id);
    res.redirect('/auth/'+req.user._id);
  }

);

//Mobile Authentication
router.use(cors());
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log("req.user:", req.user._id);
    res.redirect('/auth/'+req.user._id);
  }
);

//Mobile log out
router.get('/user/logout', function(req, res) {
  req.logout();
  res.redirect('/auth');
});





module.exports = router;

/*router.post('/signup', function(req, res, next){
  var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(req.body.password, salt);
	req.body.password = hash;
	console.log("hashed password:",req.body.password);
	User.create(req.body, function(err, post){
		if (err){
			console.log("FAILED");
			return next(err);
		}
    res.json(post);
  })
}); *//*router.post('/signup', function(req, res, next){
  var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(req.body.password, salt);
	req.body.password = hash;
	console.log("hashed password:",req.body.password);
	User.create(req.body, function(err, post){
		if (err){
			console.log("FAILED");
			return next(err);
		}
    res.json(post);
  })
}); */






