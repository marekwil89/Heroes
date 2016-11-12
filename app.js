var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var mongoose = require('mongoose'); 

// mongoose.connect('mongodb://localhost/blog');             
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


app.listen(7000, function(){
  console.log('7000');
});
