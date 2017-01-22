var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var valid = require('../../validation/auth.js')
var passConfig = require('./userConfig.js')

passConfig(passport, LocalStrategy);

router.post('/registerUser', valid.registerUser,
	passport.authenticate('registerUser', {
		successRedirect: '/comnAuth/success',
		failureRedirect: '/comnAuth/registerFail'
	})
)

router.post('/loginUser', valid.login,
	passport.authenticate('loginUser', {
		successRedirect: '/comnAuth/success',
		failureRedirect: '/comnAuth/loginFail'
	})
)

module.exports = router;