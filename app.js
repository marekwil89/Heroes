var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var mongoose = require('mongoose');
var passport = require('passport');
var expressValidator = require('express-validator');


mongoose.connect('mongodb://localhost/heroes');             

require('./models/worker');
require('./models/user');

//authenticate

var worker = require('./routes/authenticate/worker/worker.js');
var user = require('./routes/authenticate/user/user.js');
var comnAuth = require('./routes/authenticate/comnAuth.js');

//workers list

var workersList = require('./routes/workers/list.js')
var workersLatest = require('./routes/workers/latest.js')
var workersBest = require('./routes/workers/best.js')
var workersDetail = require('./routes/workers/detail.js')
var workersProfile = require('./routes/workers/profile.js')



var app = express();

app.use(logger('dev'));
app.use(session({
    secret: 'keyboard cat',
    name: 'itsname',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.')
		var root    = namespace.shift()
		var formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param : formParam,
			msg   : msg,
			value : value
		};
	}
}));

app.use('/worker', worker);
app.use('/user', user);
app.use('/comnAuth', comnAuth);

app.use('/workers-list', workersList);
app.use('/workers-latest', workersLatest);
app.use('/workers-best', workersBest);
app.use('/workers-detail', workersDetail);
app.use('/workers-profile', workersProfile);
// app.use('/login', login);


app.listen(7006, function(){
  console.log('7006');
});
