var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

passport.use('register', new LocalStrategy(
	function(email, password, done) {
		User.findOne({ 'email' :  email }, function(err, user, req) {
			console.log('//////////////////')
			console.log('register')
		});
	})
);

router.post('/register',
	passport.authenticate('register', {
		successRedirect: '/',
		failureRedirect: '/'
	})
)

//LOGOUT

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;