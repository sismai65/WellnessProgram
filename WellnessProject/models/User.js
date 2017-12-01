var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	birthday: String,
	entity: String,
	droit: String,
  steps: String,
  idTeam: String,
  teamName: String,
  challengeName: String,
	selected: Boolean,

});

UserSchema.methods.validPassword = function( pwd ) {

  return ( this.password === pwd );
};

module.exports = mongoose.model('User', UserSchema);

