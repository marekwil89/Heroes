var mongoose = require('mongoose');   
var Worker = mongoose.model('Worker');
var User = mongoose.model('User');
var bCrypt = require('../bCrypt.js');
var async = require('async');

module.exports = function(passport, LocalStrategy){

	passport.use('loginWorker', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(email, password, done) { 

			Worker.findOne({ 'email' :  email }, 
				function(err, worker, req) {
					if (err){
						return done(err);
					}
					if (!worker){
						return done(null, false);                 
					}

					if (!bCrypt.isValidPassword(worker, password)){
						return done(null, false);
					}

					return done(null, worker);
				}
			);
		}
	));

	passport.use('registerWorker', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback : true
		},
		function(req ,email, password, done) {
		async.parallel([
			function(next) {
				Worker.findOne({ 'email' :  email }, function(err, worker) {
					if (worker) {
						return done(null, false);
					}
					next()
				})
		    },
		    function(next) {

				User.findOne({ 'email' :  email }, function(err, user) {

					if (user) {
						return done(null, false);
					}
					next();
				})
		    }], function() {
				var newWorker = new Worker({
					name: req.body.name,
					descr: req.body.descr,
					email: email,
					password : bCrypt.createHash(password)
				});

				console.log(newWorker)

				newWorker.save(function(err) {
					if (err){
						console.log('Error in Saving user: '+ err);  
						throw err;  
					}
					console.log(newWorker.email + ' Registration succesful');    
					return done(null, newWorker);
				});
		    });

		})
	);
};
