var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
	name: String,
	members: Array,
  idChallenge: String,
  challengeName: String,
  selected: Boolean,
});

module.exports = mongoose.model('Team', TeamSchema);
