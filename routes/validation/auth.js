var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');   
var Worker = mongoose.model('Worker');

module.exports = {

	login: function(req, res, next){
		var email = req.body.email
		var password = req.body.password

		req.checkBody('email', 'email is required').notEmpty();
		req.checkBody('password', 'password is required').notEmpty();

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}
		next()	
	},

	isAlreadyName: function(req, res, next){
		if(req.user){
			if(req.user._id == req.body._id){
				return next()
			}
		}

		Worker.findOne({ 'name' :  req.body.name }, function(err, worker) {
			var errors = [];
			if(worker){
				errors[0] = {
					msg: 'This Hero name is already exist*'
				};
				return res.send(errors)					
			}	
			next()
		})		
	},

	registerUser: function(req, res, next){
		var email = req.body.email
		var password = req.body.password
		var repeatPass = req.body.repeatPass

		req.checkBody('email', 'email is required').notEmpty();
		req.checkBody('email', 'email invalid format').isEmail();
		req.checkBody('email', 'email required 6 to 20 characters').len(6, 20);

		req.checkBody('password', 'password is required').notEmpty();
		req.checkBody('password', 'password required 6 to 20 characters').len(6, 20);

		req.checkBody('password','Passwords do not match.').equals(repeatPass);

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}
		next()	
	},
	registerWorker: function(req, res, next){
		var name = req.body.name
		var descr = req.body.descr
		var email = req.body.email
		var password = req.body.password
		var repeatPass = req.body.repeatPass

		req.checkBody('name', 'name is required').notEmpty();
		req.checkBody('name', 'name required 6 to 20 characters').len(6, 20);

		req.checkBody('descr', 'description is required').notEmpty();
		req.checkBody('descr', 'description required 10-800 characters').len(10, 800)

		req.checkBody('email', 'email is required').notEmpty();
		req.checkBody('email', 'invalid email format').isEmail();
		req.checkBody('email', 'email required 6 to 20 characters').len(6, 20);

		req.checkBody('password', 'password is required').notEmpty();
		req.checkBody('password', 'password required 6 to 20 characters').len(6, 20);
		req.checkBody('password', 'Passwords do not match.').equals(repeatPass);

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}
		next()	
	},
	isAuth: function(req, res, next){
		if(!req.isAuthenticated()){
			var errors = [];
			errors[0] = {
				msg: 'You must log in'
			};
			return res.send(errors)
		}
		next()
	},
	isUser: function(req, res, next){
		if(req.user.type != 'user'){
			var errors = [];
			errors[0] = {
				msg: 'You must be log as user'
			};
			return res.send(errors)
		}
		next()
	},
	isWorker: function(req, res, next){
		if(req.user.type != 'worker'){
			var errors = [];
			errors[0] = {
				msg: 'You must be log as Worker'
			}
			return res.send(errors)
		}
		next()
	}
}