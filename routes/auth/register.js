var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');
var valid = require('../validation.js');

passport.use('register', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback : true
	},
	function(req ,email, password, done) {
		User.findOne({ 'email' :  email }, function(err, user) {
			if (user) {
				console.log('This mail is already taken')
				return done(null, false);
			} 

			var newUser = new User({
				name: req.body.name,
				lastName: req.body.lastName,
				email: email,
				password : valid.createHash(password),
				role: req.body.role,
			});

			console.log(newUser)
			return done(null, false);
			// newUser.save(function(err) {
			// 	if (err){
			// 		console.log('Error in Saving user: '+ err);  
			// 		throw err;  
			// 	}
			// 	console.log(newUser.username + ' Registration succesful');    
			// 	return done(null, newUser);
			// });
		});
	})
);

router.post('/register',
	passport.authenticate('register', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/signupFail'
	})
)

router.get('/success', function(req, res){
	console.log('success')
	res.send({state: 'success', user: req.user ? req.user : null, message: "Success"});
});

router.get('/signupFail', function(req, res){
	console.log('error')
	res.send({state: 'failure', user: null, errors: "This user is already exist"});
});


//LOGOUT

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;