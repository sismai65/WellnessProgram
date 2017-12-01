var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Team = require('../models/Team');
var User = require('../models/User');


// get all teams
router.get('/', function(req, res, next) {
  Team.find(function(err, teams){
  	if(err) return next(err);
  	res.json(teams);
  });
});


// get team by id
router.get('/:id', function(req, res, next){
	Team.findById(req.params.id, function(err, team){
		if(err) return next(err);
		res.json(team);
	});
});

// create team
router.post('/', function(req, res, next){
	Team.create(req.body, function(err, post){
		if (err) {return next(err)};
		res.json(post);
	});
});

//update team
router.put('/:id', function(req, res, next){
	Team.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if (err) {return next(next)};
		console.log("req.body:", req.body);
		res.json(post);
	});
});


//delete team
router.delete('/:id', function(req, res, next){
	Team.findByIdAndRemove(req.params.id, req.body, function(err, post){
		if (err) {return next(err)};
		res.json(post);
	});
});



//Edit members of the team
router.put('/:id/members', function(req, res, next){

  Team.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    if (err) {return next(next)};
    /*req.body['members'] = "TOTO";
    post['members'] = req.body['members'];*/
    console.log("req.body:", req.body);
    console.log("post:",post);
    res.json(post);
  });
});


module.exports = router;



