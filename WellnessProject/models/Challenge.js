var mongoose = require('mongoose');

var ChallengeSchema =  new mongoose.Schema({
	name: String,
	description: String,
	startDate: Date,
	endDate: Date,
  teams: Array,
});


module.exports = mongoose.model('Challenge', ChallengeSchema);
