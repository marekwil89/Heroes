var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: String,
	lastName: String,
	email: String,
	password: String,
	repeatPass: String,
	admin: {type: Boolean, default: false},
	role: String,
	created_at: {type: Date, default: Date.now}
})

mongoose.model('User', userSchema);