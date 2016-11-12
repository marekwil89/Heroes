var express = require('express');
var router = express.Router();

passport.use('register', new LocalStrategy(
	function(username, password, done) {
		User.findOne({ 'username' :  username }, function(err, user, req) {
			if (user) {
				console.log('This username is already taken')
				return done(null, false, {message: 'This username is already taken'});
			} 
			var newUser = new User();

			newUser.username = username;
			newUser.password = valid.createHash(password);

			newUser.save(function(err) {
				if (err){
					console.log(err); 
					return done(err);
				}
				console.log(newUser.username + ' Registration succesful');    
				return done(null, newUser);
			});
		});
	})
);

routes.post('/register',
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