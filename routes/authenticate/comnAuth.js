var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose'); 
var Worker = mongoose.model('Worker');
var User = mongoose.model('User');

//Authenticate routes

router.get('/isAlreadyLoged', function(req, res){
	console.log('already loged : ' + req.user)
	return res.send(req.user)
})

router.get('/logout', function(req, res){
  req.logOut();
  res.redirect('/');
});

//response 

router.get('/success', function(req, res){
	console.log('success')
	res.send({state: 'success', user: req.user ? req.user : null, message: "Success"});
});

router.get('/registerFail', function(req, res){
	res.send([{msg: 'This email is already exist'}])
});

router.get('/loginFail', function(req, res){
	res.send([{msg: 'Bad login or password'}])
});	

passport.serializeUser(function(worker, done) {
	console.log('serializing user:', worker.email);
	done(null, worker._id);
});

passport.deserializeUser(function(id, done) {
	Worker.findById(id, function(err, worker) {
		if(worker){
			console.log('deserializing user:',worker.email);
			done(err, worker);				
		}
		else{
			User.findById(id, function(err, user){
				console.log('deserializing user:',user.email);
				done(err, user);					
			})
		}

	});
});

module.exports = router;