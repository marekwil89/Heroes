var mongoose = require('mongoose');   
var Worker = mongoose.model('Worker');
var User = mongoose.model('User');
var bCrypt = require('../bCrypt.js');
var async = require('async');

module.exports = function(passport, LocalStrategy){

	passport.use('loginUser', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(email, password, done) { 

			User.findOne({ 'email' :  email }, 
				function(err, user, req) {
					if (err){
						return done(err);
					}
					if (!user){
						return done(null, false);                 
					}

					if (!bCrypt.isValidPassword(user, password)){
						return done(null, false);
					}

					return done(null, user);
				}
			);
		}
	));

	passport.use('registerUser', new LocalStrategy({
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
				var newUser = new User({
					email: email,
					password : bCrypt.createHash(password)
				});

				console.log(newUser)

				newUser.save(function(err) {
					if (err){
						console.log('Error in Saving user: '+ err);  
						throw err;  
					}
					console.log(newUser.email + ' Registration succesful');    
					return done(null, newUser);
				});
		    });

		})
	);
};
