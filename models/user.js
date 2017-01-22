var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	email: String,
	password: String,
	repeatPass: String,
	admin: {type: Boolean, default: false},
	type: {type: String, default: 'user'},
	created_at: {type: Date, default: Date.now}
})

mongoose.model('User', userSchema);