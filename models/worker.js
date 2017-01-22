var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workerSchema = new mongoose.Schema({
	name: {type: String},
	descr: {type: String},
	email: {type: String},
	password: {type: String},
	repeatPass: {type: String},
	adress: {type: String, default: 'Warszawa'},
	opinions: [{
		author: {},
		text: {type: String},
		rate: {type: Number},
		created_at: {type: Date, default: Date.now}
	}],
	average: {type: Number},
	type: {type: String, default: 'worker'},
	admin: {type: Boolean, default: false},
	created_at: {type: Date, default: Date.now}
})

mongoose.model('Worker', workerSchema);